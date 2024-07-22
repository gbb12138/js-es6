// 定义三个异步操作的函数，模拟异步获取数据
function f1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('f1....');
        }, 1000)
    })
}
function f2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('f2....');
        }, 1000)
    })
}
function f3() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('f3....');
        }, 1000)
    })
}

{
    //继发执行，每一个await后的异步执行完，才执行下一个异步操作
    // 通过这样的方法执行，需要等到f1的异步操作执行完后，才去执行f2，f2异步操作完成，执行f3，总共需要3秒
    async function getData() {
        let data1 = await f1(); // 延迟1秒，resolve
        let data2 = await f2(); // 延迟1秒，resolve
        let data3 = await f3(); // 延迟1秒，resolve
        // 3秒后返回[]
        return [data1, data2, data3];
    }

    getData().then(res => {
        console.log('继发执行getData', res);
    })
}

{
    //并发执行 
    // 异步操作同时触发，相互的数据没有依赖
     async function getData() {
        // 通过Promise.all([])
        return Promise.all([f1(), f2(), f3()]);
    }

    getData().then(res => {
        console.log('并发执行getData::', res);
    })
}