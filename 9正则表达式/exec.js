
// 定义一个正则表达式：/模式/标记


let s = '123mom and dad and baby23';
let r = /mom and (dad and (baby)?)?/ig;
// reg.exec(str);返回一个数组arr
// arr[0] 匹配到的字符串
// 数组的其他值是其他捕获组匹配到的子字符串。捕获组就是（）中的内容，(baby)?，(dad and (baby)?)?，两个捕获组
// 该数组包含index属性：匹配到的字符串在原字符串中的起始索引
// 该数组包含input属性：原字符串
let match = r.exec(s);
console.log("匹配到一个字符串：", match, match.length);


// 如果没有匹配上任何字符串，返回null;
let s2 = 'abcd';
let r2 = /\d{3}/ig;
let match2 = r2.exec(s2);
console.log("没有匹配到字符串： ", match2);

// 有多个子字符串匹配，但没有设置全局匹配标记g时，每次调用都返回匹配到的第一个子字符串；
let str = 'cat fat bat';
let reg = /(.)at/i; // .表示除换行外的任意字符
console.log("有多个子字符串匹配，但没有设置全局匹配标记g：", reg.exec(str));
console.log("有多个子字符串匹配，但没有设置全局匹配标记g", reg.exec(str));

// 有多个子字符串匹配，并且设置全局匹配标记g，第一次调用返回匹配到的第一个子字符串，
// 第二次调用，从第一次调用匹配到的字符串的下一个位置开始检测，如果后面又匹配到，返回匹配到的第二个子字符串， 直到没有匹配到任何字符串，返回null
let str2 = 'cat fat bat';
let reg2 = /(.)at/ig;
// [ 'cat', 'c', index: 0, input: 'cat fat bat', groups: undefined ]
console.log("有多个子字符串匹配，并且设置全局匹配标记g：", reg2.exec(str2));
console.log("有多个子字符串匹配，并且设置全局匹配标记g", reg2.exec(str2)); // fat
console.log("有多个子字符串匹配，并且设置全局匹配标记g", reg2.exec(str2)); // bat
console.log("有多个子字符串匹配，并且设置全局匹配标记g", reg2.exec(str2)); // null







