function Person() {};
    Person.prototype.say = function () {
        return 'hello';
    } 
    let p = new Person();
    let q = new Person();
    console.log(p.__proto__, q);
