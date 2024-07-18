
function A() {
    a = 1
    console.log('函数A内部访问没有关键字定义的变量a', a)
}

function B() {
    console.log('函数B内部访问没有关键字定义的变量a', a)
}

A()
B()
console.log(window.a)