// todo:value的值是yield后面表达式的值，不是yield的返回值（默认是undefined）,通过next的参数给上次yield的返回值赋值 
function* gen() {
    let x = 1;
    let y = yield x + 1;
    let z = yield y + 10;
    return z;
    yield 2;   // return 后面的语句都不执行
    console.log('return后面的语句', z);
}

let g = gen();
console.log(g.next()); // 执行到 x + 1 = 2, 将 2复制给value，执行暂停，{value: 2, done: false}
// 从 y = （yield语句返回值）开始执行，默认yield是没有返回值的，返回undefined，知道运行到 yield y+10；将y+10 = undefined + 10 = NaN 赋值给value
console.log(g.next());
console.log(g.next()); // 从z = undefined 遇到return，返回{value: undefined(return的值), done: true}
console.log(g.next()); // 返回{value: undefined, done: true}

console.log('===================');
let g2 = gen();
console.log(g2.next()); // {value: 2, done: false}
console.log(g2.next(100)); // next的参数表示上一个yield的返回值，所以 y = 100， yield y+ 10 = 110, {value: 110, done: false}
console.log(g2.next(1000)) //z = 1000; return 1000; {value: 1000, done: true}
