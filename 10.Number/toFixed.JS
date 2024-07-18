let a = '123';
console.log("Number()转换数据类型：", Number(123)); // 123  通过Number可以把其他类型的值转换成数字类型


// number.toFixed(n);将数字保留n位小数；没有小数部分，补0；小数位多于n，四舍五入，返回的是字符串
// 0 <= n <= 100
let num = 12;
let num2 = 3.14159;
console.log(num.toFixed(2)); // 12.00
console.log(num2.toFixed(3), typeof num2.toFixed(3)); // 3.142 string


