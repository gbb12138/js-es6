//promise实例的状态，依赖另一个promise实例的状态
// 异步操作1需要等到异步操作2的结果出来后，才相应改变状态

let globalPromise = null;
//finally
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        globalPromise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                reject('reject!!!');
            }, 2000)
        });
        // resolve的返回值是一个Promise实例
        resolve(globalPromise);
    }, 100);
});

// promise会等待globalPromise执行结果，then方法变成了针对globalPromise
// 相当于是globalPromise.then
promise.then(res => {
    console.log(res);
    res.then((value) => {
        console.log('111', value);
    }).catch(err => {
        console.log('1111', err);
    })
}).catch(err => {
    // globalPromise触发的是reject，所以会传入到catch
    console.log(err);
})

setTimeout(() => {
    console.log(globalPromise === promise);
}, 3000)