//Generator
//通过function* 定义生成器函数
//函数内部通过yield改变执行状态
function* gen() {  // g是一个遍历器对象，指向开始
    let x = 1;
    let y;
    yield y = x + 10;  // 第一个next(), 开始执行，直到遇到yield，执行到yield后面的表达式，暂停，并将表达式的值作为next返回的对象的value值
    console.log('y::', y);
    yield y + 10;  // 第二个next()，从上次 yield 执行完的后面开始执行，到第二个yield后面的表达式，暂停
    return 100; // 第三个next()，从上一个yield后开始执行，直到return，将return的值作为value的值，done为true，如果没有return，则返回value：undefined，done：true
}

// 调用gen()返回一个遍历器对象
// 每次调用next(),函数内部开始执行
let g = gen(); //g是一个遍历器对象
console.log('生成的遍历器对象:', g);
console.log('第一次调用next：', g.next());
console.log('第二次调用next：', g.next());
console.log('第三次调用next：', g.next());
console.log('第四次调用next：', g.next());

console.log('=======================');
let g2 = gen();
for (let value of g2) { // value就是每一个 yield 后面的表达式的值
    console.log('通过for of 遍历：', value); //11  y::11   21
}
console.log('=======================');
let obj = {
    name: 'aaa',
    age: 1
};
obj[Symbol.iterator] = gen;  // Symbol.iterator是一个遍历器生成函数，所以可以把gen赋值给Symbol.iterator属性，使对象变成可遍历的对象，通过for of 遍历的是每一个next返回的value值
for (let value of obj) {  // 相当于是遍历g2
    console.log(value);
}
