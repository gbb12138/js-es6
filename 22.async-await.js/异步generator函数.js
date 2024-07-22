// 定义异步生成器函数
// 
async function* asyncGenerator() {
    console.log('start...');
    // yield getData();

    let result = await getData();
    console.log('getData resolve 后才会往下执行');
    yield 'result-' + result;  //yield表达式的值获取到，ag.next() resolved，回调函数执行，传入参数{value: yield后表达式的值, done: boolean }
    console.log('done...');
}

// 模拟异步获取数据
function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(1111);
        }, 1000)
    })
}

//实例化一个异步遍历器对象，每次调用next(),返回的是一个promise对象
let ag = asyncGenerator();
//调用next()，返回一个promise对象，直到yield后的表达式获取到，promise resolve
ag.next().then(res => {
    console.log('====', res);
    ag.next().then(res => {
        console.log('-----', res);
    })
})

