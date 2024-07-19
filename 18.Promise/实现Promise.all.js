Promise.all = function (promiseList) {
    let res = [];
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promiseList.length; i++) {
            let promise = promiseList[i];
            promise.then(value => {
                res[i] = value;
                if (res.length === promiseList.length) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err);
                // 只要其中一个rejected，将该结果和状态返回
                // 这里循环已经结束，promise列表时并行执行的，且不知道哪个promise的状态会先改变
            })
        }
    })
};

let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('p1');
    }, 1000)
});
let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('p2');
    }, 2000)
});
let p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject('p3');
    }, 1000)
});

Promise.all([p3, p2]).then(res => {
    console.log(res, 'resolve++++');
}).catch(err => {
    console.log(err, 'reject----');
})