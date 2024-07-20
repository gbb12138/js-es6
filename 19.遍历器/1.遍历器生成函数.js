/*
遍历器对象：
iterator: {
    index: 0，
    next () {
        ...
        return {
            value: any ,
            done: boolean
        }
    }
}
*/
let obj = {
    name: 'aa',
    age: 1,
    say() { }
}
function maker(obj) {
    // 返回一个遍历器
    let keys = [...Object.keys(obj)];
    let index = 0;
    return {
        next () {
            return index < keys.length ? 
            {value: keys[index++], done: false} :
            {value: undefined, done: true}
        }
    }
}

let iterator = maker(obj);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
