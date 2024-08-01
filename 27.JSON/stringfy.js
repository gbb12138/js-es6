let obj = {
    name: 'a',
    age: 1,
    like: [1, 2, 3, 4],
    say: function () { }
};

// 第二个参数可以是一个数组，表示要处理的属性名的集合
console.log(JSON.stringify(obj, ['name', 'like']));
// 第二个参数也可以是一个函数，函数接受key，value参数，会从最外层遍历对象，如果属性值不是基本类型，会继续遍历属性，知道属性值是基本类型
let res = JSON.stringify(obj, function (key, value) {
    console.log(key, value, '**');
    return value;//return的值就是替换的value值
});
console.log(res, typeof res);