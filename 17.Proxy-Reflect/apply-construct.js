function Person (name, age) {
    this.name = name;
    this.age = age;
    return `${this.name}的age：${this.age} `;
}
let target = Person;

let proxy = new Proxy(Person, {
    // 函数调用时触发，target原函数，ctx通过apply，call执行时绑定的this值，运行原函数时，ctx=undefined，传入原函数的参数数组
    apply (target, ctx, args) {
        console.log(this === proxy);
        console.log(`触发apply:${target}, ${ctx}, ${args}`);
        return Reflect.apply(target, ctx, args);
    },
    // new 时触发, target：Person，args，new时传入构造函数的参数数组，newTarget：proxy实例
    construct: function(target, args, newTarget) {
        console.log(`触发construct:${target}, ${args}, ${newTarget}`);
        return Reflect.construct(target, args); // 返回Person的实例
    }
});

let obj = {};
let r = proxy('bb', 1);
let res = proxy.apply(obj, ['aa', 10]);
console.log(r, res, obj);
console.log('=============');

let o = new proxy('cc', 2);
console.log(o);