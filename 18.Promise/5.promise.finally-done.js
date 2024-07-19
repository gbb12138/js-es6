let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('success!!!');
    }, 2000)
});

// finally接受一个callback，返回一个promise对象，在finally注册的回调函数会等到调用的promise实例状态改变后才去执行回调函数，也就是说，在finally内部，会先执行一次promise.then,拿到promise的resolve和reject的值，然后执行回调函数，执行完成，返回一个新的通过Promise实例。
promise.finally(function (res) {
    console.log('finally:::', res, promise);
}).then(value => {
    console.log('***', value);
});


promise.done(function (value) {
    console.log('done resolve:::', value)
}, function (err) {
    console.log('done reject:::', err);
});
