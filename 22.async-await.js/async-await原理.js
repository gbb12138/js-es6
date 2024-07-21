// 将生成器函数，和遍历器自执行函数封装在一个函数中

// 定义两个异步操作的函数，模拟异步获取数据
function f1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('f1....');
        }, 1000)
    })
}
function f2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('f2....');
        }, 1000)
    })
}

// 定义生成器函数
function* gen() {
    let data1 = yield f1();
    let data2 = yield f2();
    return [data1, data2];
}
//封装自执行函数
function Run(gen) {
    let g = gen();
    return new Promise(function (resolve, reject) {
        function next(data) {
            //result:{value: (第几次调用g.next(),就对应第几个1yield)yield后表示式的值, done: boolean}
            var result = g.next(data);

            if (result.done) { // 遍历完成，返回生成器return的数据
                resolve(result.value);
            } else {
                //重复执行g.next(data), g.next().value === yield后面返回的promise对象
                result.value.then(data => {
                    next(data); // 将每一步异步返回的数据赋值给生成器中上一个执行的yield
                }).catch(err => {
                    // yield后面的表达式返回的是reject，直接reject当前返回的promise对象，不再执行
                    reject(err);
                })
            }
        }
        next()
    })
}

Run(gen).then(res => {
    console.log('异步操作结果列表:', res)
}).catch(err => {
    console.log('异步操作结果错误', err);
})