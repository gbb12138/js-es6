function* gen() {
    //todo:在yield中可以访问到 g ，因为yeild是在调用g.next()时才执行的，所以执行时g已经创建了，也可以访问到
    let result = yield setTimeout(() => {
        // 需要将异步操作写在yield表达式中
        g.next('success...'); // 当异步结束后，再重新开始执行
    }, 150);
    // 将异步操作之后的需要用到异步返回结果的操作写在yield语句结束后，这时已经可以通过g.next(value),将异步结果拿到，并将yield返回值赋值给变量result保存
    console.log('异步操作中返回的结果：', result);
}

let g = gen();
console.log(g.next()); // 开始执行第一个yield后的表达式，执行完后暂停