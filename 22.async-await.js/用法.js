var fs = require('fs');
var path = require('path');
// 将读取文件函数封装为返回Promise对象
function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        //__dirname表示当前执行的文件所在的文件夹的位置
        fs.readFile(path.join(__dirname, fileName), function (error, data) {
            if (error) {
                // 读取发生错误，触发reject，并将整个函数返回，不再往下执行
                return reject(error);
            }
            resolve(data);// 读取成功，将读取文件的data返回，触发resolve
        })
    })
};


// 调用async返回一个Promise对象，执行完所有的函数体语句，或者遇到return，promise才会变成resolve，才会去执行注册的回调函数
// 遇到await函数体执行暂停，去执await后的表达式，直到表达式执行完成，才会接着往下执行函数体
// await后面默认是一个promie对象，如果不是，通过Promise.resolve(...)包装
// 如果有一个await后面的语句是reject, 那么这个返回的promise对象就变成renject状态,所以await最好放在try catch中
async function getData() {
    try {
        var data = await readFile('1.txt');
    } catch (err) {
        console.log(err);
    }

    return data.toString();
}

// 向async返回的promise对象注册回调函数
getData().then(res => {
    console.log('async返回值:', res);
}).catch(err => {
    console.log('async catch', err);
})
