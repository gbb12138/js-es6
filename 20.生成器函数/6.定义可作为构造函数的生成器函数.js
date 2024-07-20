//因为gen()内部的this指向生成的遍历器对象，所以不能通过new gen()生成一个自定义的对象

function* gen() {
    this.name = 'a';
    yield this.age = 1; // value: 1(=后面的值): 赋值表达式 ===  =后面的值
    yield this.say = function () { } // value: function(){}
}

{
    let g = gen();
    console.log(...g);
}

{
    console.log('========1========')
    let obj = {};
    let newObj = gen.call(obj); //todo：通过 yield生成遍历器对象，yield外的this，通过call绑定obj
    console.log('newObj:', newObj, newObj instanceof gen); // true
    console.log(...newObj); // 1 [Function (anonymous)]
    console.log(obj);//{ name: 'a', age: 1, say: [Function (anonymous)] }
}
{
    console.log('========2========')
    // todo:将obj替换成gen.prototype
    let newObj = gen.call(gen.prototype);
    console.log(...newObj, newObj.__proto__); // todo:newObj通过__proto__获取gen.prototype上的值
}
{
    console.log('========最终方法========')
    // 将 * gen()包装在普通函数中，变成可以new的构造函数，返回一个 newObj 对象
    function Gen() {
        return gen.call(gen.prototype);
    }
    let newObj = new Gen();
    console.log(...newObj, newObj.__proto__);
}

