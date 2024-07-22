// 封装返回Promise对象的异步操作函数
var fs = require('fs');
var path = require('path');
// 将读取文件函数封装为返回Promise对象
function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) {
                // 读取发生错误，触发reject，并将整个函数返回，不再往下执行
                return reject(error);
            }
            resolve(data);// 读取成功，将读取文件的data返回，触发resolve
        })
    })
};
//生成器函数
function* gen() {
    let text = yield readFile(path.join(__dirname, '1.txt')); //异步操作1: 读取text文件
    let js = yield readFile(path.join(__dirname, '2.js')); // 异步操作2，读取js文件
    console.log(text.toString());// 将文件内容打印
    console.log(js.toString());
    return [text.toString(), js.toString()];
}


{
    console.log('=======1=========')
    // 手动执行生成器函数生成的遍历器对象
    let g = gen();
    // 调用next，执行到第一个yield后的表达式，暂停
    console.log(g.next().value.then(fileData => {
        // 读取文件完成后，触发promise的resolve，返回的promise给value。 g.next().value === promise
        console.log(fileData, '1.txt');
        g.next(fileData).value.then(data => {
            console.log(data, '2.js');
            let doneNext = g.next(data);
            console.log('通过手动调用next，遍历器结束了：', doneNext)
        })
    }));
}

{
    console.log('========基于手动方式，实现自执行==========')
    // 定义一个自动执行遍历器对象的函数
    function run(gen) {
        // 返回一个promise对象，用于获取遍历器done时，读取的结果
        return new Promise(function (resolve, reject) {
            let g = gen();
            //封装next方法，重复执行g.next(data).value.then(data => {    ...    })
            function next(data) {
                let result = g.next(data);
                if (result.done) { // 遍历器结束，返回此时的value，就是gen()的return值
                    resolve(result.value);
                } else { //重复执行next(data)
                    result.value.then(data => {
                        next(data);
                    })
                }
            }

            next();
        })
    }

    run(gen).then(res => {
        console.log('通过自执行函数返回的异步操作数据', res);
    })

}