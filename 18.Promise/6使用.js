let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve时依次执行所有的成功回调
        resolve('success...');
    }, 1000)
});


//可通过then，注册多个成功（失败）回调

promise.then(value => {
    // console.log('then1..', value);
    setTimeout(() => {
        console.log('++++', value);
    }, 100);
});

promise.then(value => {
    console.log('then2...', value);
})

promise.then(2);