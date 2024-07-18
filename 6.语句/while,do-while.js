let i = 0
// 先执行do{}里面的内容，执行后再去while中对比是否符合条件
do {
    i += 2
    console.log(i);  // 2 4 6
} while (i < 5);
console.log(i);  // 6

console.log('================');

let j = 0;
// 先对比条件，符合才执行
while (j < 5) {
    j += 2
    console.log(j);
}
console.log(j)