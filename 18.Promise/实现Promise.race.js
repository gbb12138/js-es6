Promise.race = function(promiseList) {
    return new Promise(function(resolve, reject) {
        promiseList.forEach(promise => {
            promise.then(value => {
                resolve(value);
            }).catch(err => {
                reject(err);
            });
        })
    })
};
let p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('p1');
    }, 1000)
});
let p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('p2');
    }, 2000)
});
let p3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject('p3');
    }, 1000)
});

Promise.race([p3, p2]).then(res => {
    console.log(res, 'resolve...');
}).catch(err => {
    console.log(err, 'reject...');
})