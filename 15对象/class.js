class Person{
    gender = 'man'; // 实例属性
    static show = '123'; // 静态属性
    constructor(name, age) {
        this.name = name; // 给实例属性赋值
        this.age = age;
    }
    static say() { //静态方法
        console.log(this.show);
    }
    sayHello () {
        console.log('hello...', this.name);
    }
}

let person = new Person('aa', 45);
person.sayHello();
Person.say()
console.log(person.gender);
console.log(new Person().gender)
