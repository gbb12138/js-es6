
// arr.indexOf(item), 从头开始查找，匹配的 === item , 没有返回-1，有返回第一次找到的索引
{

    let arr = [2, 6, 9, 1, 5, 9];
    console.log('indexOf:', arr.indexOf(9)); // 2
    console.log('indexOf:', arr.indexOf(3)); // -1
    //  arr.lastIndexOf 从尾开始查找
}

//    find(function(item, index, arr)), 返回函数return true的数组项
//    findIndex(function(item, index, arr)) 返回函数return true的数组项的索引
{
    let arr = [{
        name: 'a',
        age: 20
    }, {
        name: 'b',
        age: 5
    }];

    let res = arr.find(function (item, index, arr) {
        return item.age > 10;
    })

    let index = arr.findIndex(function (item, index, arr) {
        return index > 0;
    })

    console.log('find:', res, index);
}