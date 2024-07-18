// 格式： switch(表达式) {  case 条件: ... break; default: ...  }
//    只要表达式和条件相等 === ，就执行该条件对应的语句，条件也可以是一个表达式


switch ("hello world") {
    case 'hello ' + 'world':  // 表达式 hello world === 'hello ' + 'world', 执行该语句
        console.log(111);
        break;
    case "aaa":
        console.log(2222);
        break;
    default:
        console.log('default'); //如果前面的条件都不匹配，就执行default
}

let a = 20;
switch (true) {
    case a < 0:
        console.log(a + '<0');
        break;
    case a > 0 && a < 10:
        console.log(`0<=${a}<10`);
        break;
    case a > 10:  // 20 > 10 === true, 执行后面的语句
        console.log(`${a}>10`);
        break;
    default:
        console.log('default');
}