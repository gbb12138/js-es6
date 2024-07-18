function Person(name, age, list = []) {
    this.name = name;
    this.age = age;
    this.list = list;
    this.add = function (value) {
        this.list.push(value);
    };
}
let p = new Person('a', 1);
let q = new Person('b', 2);
console.log(p, q);
