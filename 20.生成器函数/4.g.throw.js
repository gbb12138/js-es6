//todo： g = gen(); g是gen()的实例，gen()中this指向生成的遍历器对象，所以不能通过 new 生成实例，
// g可以通过g.
function* gen() {
    try {
        let x = 100;
        let y = yield x + 1;
    } catch (err) {
        console.log('在生成器函数中捕获的错误:', err); // 捕获到错误时，会自动执行一次 next
    }
    yield 1 + 1;
    yield 2 + 2;
}

let g = gen();
console.log(g.next());
console.log(g.throw('遍历器对象抛出错误')); // 只有通过g.throw的错误才能在生成器内部捕获
console.log(g.next());


console.log(g instanceof gen); // true
console.log(g.__proto__ === gen.prototype); // true

