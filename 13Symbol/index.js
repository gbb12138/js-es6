// 使用Symbol的目的：用字符串作为对象的键名，会覆盖，为了保证属性名的独一无二性，引入了Symbol类型
// Symbol表示独一无二的值。Symbol是基本类型，所以不能通过new关键字创建；不是对象，不能添加属性
// 创建Symbol类型的值：
//  1. Symbol('描述')

{
    let symbol1 = Symbol('desc');
    let symbol2 = Symbol('desc');
    console.log('通过Symbol()创建的值：', symbol1 === symbol2); // 描述相同的两个Symbol值也是不相同的
    let obj = {
        [symbol1]: {
            name: 'a',
            age: 1
        }
    };
    console.log('获取symbol类型的属性', obj[symbol1]);
}



//  2.通过Symbol.for(描述);
//  创建前会从全局注册表中找，有没有该描述的symbol值，如果没有，就创建，并添加到全局注册表中；如果有，则返回该symbol值
{
    let symbol1 = Symbol.for('desc'); // 没有查找到，创建Symbol('desc'),并全局注册
    let symbol2 = Symbol.for('desc'); // 找到 
    console.log('通过Symbol.for()创建的值', symbol1 === symbol2);
}
// 所以Symbol.for()：创建一个可重复使用Symbol值