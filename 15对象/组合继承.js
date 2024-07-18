function SuperFun (name, list=[]) {
    this.name = name;
    this.list = list;
}
SuperFun.prototype.add = function (value) {
    this.list.push(value);
}

function SubFun ({name, age, list}) {
    SuperFun.call(this,name,list);
    this.age = age;
}
SubFun.prototype = new SuperFun();

let sup = new SuperFun('a');
let sub = new SubFun({
    name: 'b',
    age: 10,
    list: [1, 2]
})

console.log(sup, sub, sub.__proto__.__proto__);
sub.add(3);
console.log(sub);
