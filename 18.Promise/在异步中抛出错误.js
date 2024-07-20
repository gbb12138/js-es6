try {
    // 在异步操作抛出的错误，不嫩通过全局try catcch捕获到，异步操作是不同的执行环境
    setTimeout(() => {
        throw 'err...';
    }, 0);
} catch (e) {
    console.log(e, '捕获到')
}


function foo() {
    throw 'foo error';
}
try {
    foo();
} catch (e) {
    console.log(e, '捕获到')
}
