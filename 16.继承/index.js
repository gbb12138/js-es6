class SuperFun {
    height = 100; //实例的属性, class中this默认指向实例对象
    static className = 'aaaa'; // 定义静态属性，即SuperFn.className, 子类会继承父类的静态方法和静态属性
    static classFn () { //静态方法
        console.log('classFn..',this);
    }
    constructor (name, list = []) {
        this.name = name;
        this.list = list;
    }
    add (value) {
        this.list.push(value);
    }
};

class SubFun extends SuperFun {
    constructor ({name, age, list}) {
        // 子类必须调用父类的构造函数，super，因为通过class继承时，是先创建父类的实例，然后在父类的实例上添加子类的其他属性
        super(name, list);
        this.age = age;
    }
    sum () {
        return this.list.reduce(function(sum, value, index, arr){
            return sum + value;
        },0);
    }
}

let sup = new SuperFun('a');
let sub = new SubFun({
    name: 'b',
    age: 10,
    list: [1, 2]
});


// 类本身指向constructor
let name = SuperFun.name;
console.log(name, typeof name, SuperFun === SuperFun.prototype.constructor);
console.log(SuperFun.prototype, SuperFun.prototype.add);

// SubFun是子类的构造函数，子类构造函数的原型 = 父类的构造函数，SubFun通过__proto__可以访问到父类构造函数
console.log(SubFun.__proto__ === SuperFun);
console.log("++====", SubFun.prototype.__proto__ === SuperFun.prototype);
console.log(sup.height,SuperFun.className,SubFun.className, '*****');
console.log(SuperFun.classFn(), '------');
// console.log(sup,sub);
// sup.add(10);
// sub.add(20);
// console.log(sup, sub);
// console.log(sub.sum(), sup.sum);
