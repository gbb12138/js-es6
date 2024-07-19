
function resolvePromise(res, resolve) {
    if (res instanceof Promise) {
        //then注册的回调函数，返回的是Promise实例，需要等这个返回实例的状态改变后，才能触发thenPromise的resolve，并把返回实例的结果给thenPromise
        res.then(value => {
            resolve(value);
        })
    } else {
        // then注册的回调函数，返回的不是Promise实例，立即执行thenPromise的resolve，并把返回的值，传给thenPromise的value中
        resolve(res);
    }
}

class Promise {
    constructor(fn) {
        this.status = 'pending';
        this.value = null;
        this.reason = null;
        this.successCallback = [];
        this.errorCallback = [];
        fn(this.resolve);
    }


    //resolve传入了fn中，fn执行时，直接通过resolve();为了保存this指向Promise实例，这里使用尖头函数
    resolve = value => {
        // console.log('resolve...', value);
        this.status = 'resolved';
        this.value = value;
        this.successCallback.forEach((callback, index) => {
            if (callback instanceof Function) {
                callback(value);
            }
            // todo: 如果then传入的不是方法1
        })
        this.successCallback = [];
    }


    // then需要返回一个新的Promise实例，可以链式的调用
    then(success) {
        // fn是异步操作，resolve还没有执行
        if (this.status === 'pending') {
            //todo:需要等this（当前实例resolve后，返回thenPromise
            return new Promise((resolve) => {
                // resolve没有执行，注册回调函数，等promise实例resolve时就会执行回调函数
                // 这this指向promise
                this.successCallback.push(() => {
                    // 当回调函数执行时，就是resolve()时，已经有value值了
                    let res = success(this.value);
                    // promise回调函数执行时，promise的状态已经改变，这时再去改变thenPromise的状态
                    resolvePromise(res, resolve);
                    // if (res instanceof Promise) {
                    //     //then注册的回调函数，返回的是Promise实例，需要等这个返回实例的状态改变后，才能触发thenPromise的resolve，并把返回实例的结果给thenPromise
                    //     res.then(value => {
                    //         resolve(value);
                    //     })
                    // } else {
                    //     // then注册的回调函数，返回的不是Promise实例，立即执行thenPromise的resolve，并把返回的值，传给thenPromise的value中
                    //     resolve(res);
                    // }
                });
            });
        } else {
            // fn是同步函数，已经执行了resolve,this.value有值，直接执行注册的回调函数
            let res = success(this.value);
            // promise的状态已经变成resolved，回调函数也已经执行完成，回调函数的执行结果也已经得到，这时可以直接返回thenPromise
            return new Promise(function (resolve) {
                // 但res的值依然可能是Promise实例
                resolvePromise(res, resolve);
            });
        }

    }
}

let promise = new Promise(function (resolve) {
    console.log('new ...');
    setTimeout(() => {
        resolve(100);
    }, 1000);
});
promise.then(value => {
    console.log('then1....', value);
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(200);
        }, 1000);
    })
}).then(res => {
    console.log('then2...', res);
})

setTimeout(() => {
    console.log(promise);
}, 2000)
