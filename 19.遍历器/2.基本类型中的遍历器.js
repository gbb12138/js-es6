// 遍历器就是一个具有指针的对象，对象内部有一个next(),每调用一次next，对象指针就往后移动，同时返回当前指针指向的一个对象{value:...,done: false}
// 遍历器对象的目的是统一一种方法遍历js中的集合类型：Array,Set,Map,String,通过for of可以遍历具有遍历器对象的数据类型
//可遍历的默认遍历器是Symbol.iterator属性中，也就是说只要数据有Symbol.iterator属性，这个数据就是可遍历的，可以通过for of进行遍历
let obj = {
    name: 'aaa',
    age: 1,
    say () {}
};

// 默认状态下，报错，obj是不可遍历的
/*
for(let value of obj) { 
    console.log(value);
}
*/

//给对象添加Symbol.iterator属性
obj[Symbol.iterator] = function () {
    let keys = [...Object.keys(this)];  // this === obj
    let index = 0;
    // 返回一个遍历器对象
    return {
        next () {
            return {
                value: keys[index++] || undefined,
                done: index > keys.length
            }
        }
    }
}
// obj可遍历，可以通过for of遍历
for(let key of obj) {
    console.log(key, obj[key]);
}