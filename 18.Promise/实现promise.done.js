// 可以接受，onResolved，onRejected两个回调函数，执行一次then()，保证回调函数执行完成后，catch获取以前可能抛出的错误。
// 因为done没有返回promise实例，done后不能再使用then，catch方法，所以done一定要放在链式调用的最后面
Promise.prototype.done = function (onResolved, onRejected) {
    this.then(onResolved, onRejected).catch(err => {
        console.log('********', err);
    })
};

//这里全局的try{}catch(){}不能捕获promie链式调用中抛出的错误，因为promise链式调用中是异步操作，不在一个执行环境中
try { // 捕获不到try中产生的错误
    var promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('success...');
        }, 1000);
    }).then(value => {
        console.log(value);
        throw 'then抛出的错误';
    }).catch(err => {
        // catch可以捕获then中抛出的错误
         console.log('在catch中捕获的错误：', err);
        throw 'catch抛出的错误';
        //如果在catch中抛出错误
    }).done();
} catch (e) {
    console.log('在全局捕获错误:', e);
}
