// Set表示一组没有重复值的集合。类似数组，但成员是唯一的

let set = new Set();
set.add(1)
    .add(2)
    .add(2)
    .add(3);
console.log(set); //Set(3) { 1, 2, 3 }

