let obj = {
    name: 'a',
    age: 1,
    like: [1, 2, 3, 4],
    say: function () { }
};
let str = JSON.stringify(obj);
// 第二个参数传入函数，函数接受key，value参数，遍历每一项
let res = JSON.parse(str, function (key, value) {
    console.log(key, value, '**');
    return value;//return的值就是解析成的value值
});