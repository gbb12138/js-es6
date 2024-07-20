// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve时依次执行所有的成功回调
//         resolve('success...');
//     }, 1000)
// });


// //可通过then，注册多个成功（失败）回调

// promise.then(value => {
//     // console.log('then1..', value);
//     setTimeout(() => {
//         console.log('++++', value);
//     }, 100);
// });

// promise.then(value => {
//     console.log('then2...', value);
// })

// promise.then(2);
// console.log('=========');

function foo () {
    setTimeout(() => {
        console.log('-------')
    }, 1000)
}
let testPromise = Promise.resolve(foo());
testPromise.then(value => {
    console.log('666:', value)
    // value();
}).catch(err => {
    console.log(err)
});