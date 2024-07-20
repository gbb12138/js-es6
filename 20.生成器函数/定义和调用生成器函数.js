//Generator
//通过function* 定义生成器函数
//函数内部通过yeild改变执行状态
function* gen() {
    let x = 1;
    let y = yeild (x + 10);
    console.log('y::', y);
    yeild y + 10;
    return 100;
}

// 调用gen()返回一个遍历器对象
// 每次调用next(),函数内部开始执行
let g = gen();
console.log('生成的遍历器对象:', g);
console.log('第一次调用next：', g.next());
console.log('第二次调用next：', g.next());
console.log('第三次调用next：', g.next());
console.log('第四次调用next：',·‌g.next());