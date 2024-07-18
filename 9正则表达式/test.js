
// reg.test(str);如果匹配上字符串，返回true；如果没有匹配上字符串，返回false

let str = 'cat fat bat';
let reg = /(.)at/ig;
console.log(reg.test(str)); // true ， 匹配到cat ， fat   ， bat

console.log(reg.test('aaaa'));  // false, 没有匹配到任何子字符串