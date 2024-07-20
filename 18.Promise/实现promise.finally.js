// promise.finally(callback);callback拿不到前面链式返回的值，也不能返回值

Promise.prototype.finally = function (callback) {
    console.log(this.then, Promise.resolve);
    return this.then((value) => {
        return Promise.resolve(callback()).then(() => value);
    }, (err) => {
        return Promise.resolve(callback()).then(() => { throw err });
    })
};

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve('success');
        reject('fail...');
    }, 1000)
}).then(value => {
    return 100;
}).finally(function () {
    // callback没有返回参数
    console.log('finally...');
    //return 30; // 返回值也不能传入下面链式调用的参数中
}).then(value => {
    // 拿到finally前面的链式调用的返回值
    // value：100 ！！！！！
    console.log('finally后面then', value);
}).catch(err => {
    console.log('finally后面catch', err);
})