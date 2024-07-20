// yield* 表示后面的表达式是一个生成器函数

function* gen() {
    yield 1;
    yield* foo(); // yield* 会遍历 *foo()的遍历器对象， yield 2; yield 3;
    yield 4;
}

function* foo() {
    yield 2;
    yield 3;
}

let g = gen();
// for (let value of g) {
//     console.log('遍历gen的实例：', value);
// }

// ...可以结构遍历器对象
console.log(...g); // 1 2 3 4