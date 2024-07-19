// Promise异步操作，替代回调函数
// 接受一个函数参数，该函数有两个参数，resolve和reject
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('传入resolve的参数');
    }, 1500);
    console.log('***');
});

// 传入promise的resolve值不是Promise类型
// 如果then内部没有return Promise实例，隐式处理成，then返回一个promise.resolve(100 || undefined)
let thenRes = promise.then(res => {
    console.log(res);
    return 100;
   // 这里相当于执行了---------> return Promise.resolve(100);
});

thenRes.then((value) => {
    console.log('then返回普通类型数据时会触发resolve吗？', value);
    console.log('then的返回值:', thenRes);
},  err => {
    console.log('then返回普通类型时会触发reject吗？', err);
})
console.log('then的返回值:', thenRes);
// then返回的是新创建的Promise对象
console.log(thenRes === promise);  // false