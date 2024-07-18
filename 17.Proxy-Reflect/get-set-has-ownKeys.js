// 代理：操作对象前，触发操作对象的handle函数
let target = {
    name:'王小包',
    age:1,
    _name:'',
    _age:'',
    say () {
        console.log(`我是${this.name}`);
    },
    get height () {
        return this.age + 10;
    },
    set height (value) {
       this.age = value - 10;
    }
};
let receiver = {
    height: 100
}
// 通过Proxy构造函数生成一个代理对象，接受两个参数，目标对象，定义拦截函数的对象集合
let proxy = new Proxy(target,{
    // get，读取代理对象属性时触发, 目标对象，属性名，receiver有get,set时绑定this的值
    get (target,property,receiver) {
        console.log('触发get...');
        return target[property];
    },
    //给属性赋值时触发
    set (target, property,value,receiver) {
        console.log('触发set..');
        target[property] = value;
    },
    // in 运算符时触发
    has (target, property) {
        console.log('触发has...');
        return property in target;
    },
    // Object.keys(proxy)时触发,过滤以_
    ownKeys (target) {
        console.log('触发ownKeys...');
        // return frray.from(Object.keys(target)
        //     .filter(item => item.indexOf('_') !== 0));
        return Reflect.ownKeys(target)
            .filter(item => item.indexOf('_') !== 0);
    } 
});

// get
console.log('proxy name:', proxy.name);
// set
proxy.age = 0;
console.log(proxy);
// in
console.log('name' in proxy);
//Object.keys()
let keys = Object.keys(proxy);
console.log(keys);








