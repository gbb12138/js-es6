// 默认情况下，对象没有Symbol.iterator属性，不能通过for of遍历

let obj = {
    name: 'a',
    age: 1
};
// 默认情况可以通过for in 遍历对象的key, 但for of报错
for (let key in obj) {
    console.log('通过for in...', key); // name, age
}
//可以通过Object.values(obj), Object.entries(obj)获取一个遍历器对象的值
for (let value of Object.entries(obj)) {
    console.log('通过Object.entries', value);   // ['name', 'a'], ['age', 1]
}

// 通过生成器函数，使一个对象变成可遍历的
function* objectEntries(obj) {
    let keys = Reflect.ownKeys(obj);
    for (let key of keys) {
        yield [key, obj[key]];
    }
}
for (let value of objectEntries(obj)) {     // ['name', 'a'], ['age', 1]
    console.log('通过生成器函数：', value);
}

