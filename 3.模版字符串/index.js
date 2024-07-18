let a = 100;
let b = 100;
let s = `我是模版字符串，<div></div>，我可以包含html字符串，并且可以显示换行
并且可以拼接变量,a = ${a}, b = ${b},从最近的作用域寻找变量，
变量之间可以进行计算a + b = ${a + b}
`
console.log(s)