// every，some， filter， forEach， map 都接受两个参数（function(item, index, arr),this?）

let arr = [
    {
        name: 'a',
        age: 5,
    },
    {
        name: 'b',
        age: 20
    }
];

// 遍历数组，没有返回值 undefined
{
    let res = arr.forEach(function (item, index, arr) {
        item.age++; // 可修改数组项的值
    })
    console.log('forEach:', res, arr); //undefined [{ name:'a', age:6 },{ name: 'b', age: 21 }]
}
{
    // 只要函数有返回true的，返回结果就是true
    let res = arr.some(function (item, index, arr) {
        item.age++; // 可以修改数组项
        return item.age > 10;
    })
    console.log('some:', res, arr); //true [ { name: 'a', age: 7 }, { name: 'b', age: 22 } ]
}
{
    // 所有返回true，返回结果才是true，否则false
    let res = arr.every(function (item, index, arr) {
        item.age++; // 可以修改数组项
        return item.age > 10;
    })
    // 这里第二项没有执行函数中的代码，因为第一项已经返回false，决定了最终的值，后续就不再遍历了
    console.log('every:', res, arr); //false [ { name: 'a', age: 8 }, { name: 'b', age: 22 } ]
}
{
    //返回结果为true的数组项组成的新数组
    let res = arr.filter(function (item, index, arr) {
        item.age++; // 可以修改数组项
        return item.age > 10;
    })
    console.log('filter:', res, arr);//[ { name: 'b', age: 23 } ] [ { name: 'a', age: 9 }, { name: 'b', age: 23 } ]
}
{
    //返回函数返回结果组成的新数组
    let res = arr.map(function (item, index, arr) {
        item.age++; // 可以修改数组项
        return item.age + '哈哈';
    })
    console.log('map:', res, arr);//[ '10哈哈', '24哈哈' ] [ { name: 'a', age: 10 }, { name: 'b', age: 24 } ]
}
{
    let obj = {
        name: 'ccc',
        age: 100
    }
    let obj2 = {
        name: 'ddd',
        age: 200
    }

    function foo(item, index, arr) {
        item.age++;
        return item.age + this.age;
    }

    //   将obj作为函数中的this
    let res = arr.map(foo, obj);
    console.log('传入第二个参数this', res, arr);//[ 111,125] [{ name:'a',age:11},{name:'b',age: 25}]
    //  将obj2作为函数中的this
    let res2 = arr.map(foo, obj2);
    console.log('传入第二个参数this', res2, arr); //[ 212, 226 ] [ { name: 'a', age: 12 }, { name: 'b', age: 26 }]
}

