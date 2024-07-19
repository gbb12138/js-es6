{
    let i = 1;
   let timer = setInterval(() => {
        console.log(`${i}秒`);
        i++;
        if(i > 4){
            clearInterval(timer);
            timer = null;
        }
    }, 1000);
}


let promise1 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve('promise1 resolved...');
    }, 2000);
});
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('promise2 resolved');
    }, 3000);
});
let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject('promise3 rejected');
    }, 1000);
});
let promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('promise2 resolved');
    }, 4000);
});

let allRes = Promise.all([promise1, promise2, promise3]);
let allRes2 = Promise.all([promise1, promise2, promise4]);
// 1秒输出 reject，
// 只要有一个reject，promise.all就立马返回reject
allRes.then((value) => {
    console.log('Promise.all触发resolve');
}).catch(err => {
    console.log('Promise.all触发reject');
})
// 4秒触发reesolve
// 全部resolve，promise.all才返回resolve
allRes2.then((value) => {
    console.log('2Promise.all触发resolve');
}).catch(err => {
    console.log('2Promise.all触发reject');
})
// 是要有一个状态改变，promise.race就改变，最先改变的返回值，就传入race的回调
// 2秒触发resolve
Promise.race([promise1, promise2]).then(value => {
     console.log('Promise.race触发resolve');
}).catch(err => {
     console.log('Promise.race触发reject');
});

// 1秒reject
Promise.race([promise1, promise3]).then(value => {
     console.log('Promise.race触发resolve');
}).catch(err => {
     console.log('Promise.race触发reject');
});