let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('success!!!');
    }, 1500);
});


// 如果then返回的是一个Promise对象，那么then就直接返回这个promise对象
let thenRes = promise.then(res => {
    console.log('接收到的resolve数据：', res);
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject('then返回的promise对象，触发的reject');
        }, 1000);
    })
});

thenRes.then().catch(err => {
    console.log('接收到的then返回的promise结果：', err);
    console.log(thenRes);
});
console.log(thenRes);

