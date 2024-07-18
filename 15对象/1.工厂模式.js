// 工厂模式
function foo (name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    obj.say = function () {
        console.log(`say.....`);
    }
    return obj;
}

let p = foo('baobao', 1);
p.say();
console.log(p);

let q = foo('haha', 2);
q.say();
console.log(q);
