
/**
 * 
 * @param {*} strList 第一个参数是模版传入的原字符串被表达式分割后的字符串数组
 * @param  {...any} valueList 其他参数是各个表达式的值组成的数组
 * 原本的参数是（strlist，a, b, a+b）;这里将每个表达式的结果对应的参数，放到一个叫做valueList的数组中
 *  ...是解构符
 * @returns 返回替换表达式后的字符串
 */
function template(strList, ...valueList) {
    console.log('第一个参数是模版传入的原字符串被表达式分割后的字符串数组', strList);
    console.log(valueList, '其他参数是各个表达式的值组成的数组');

    // 返回页面显示的字符串，strList 的长度必定 = valueList的长度 + 1
    let res = strList[0]; // 先拼上第一个表达式之前的字符串
    valueList.map((value, key) => {
        // 依次拼上每个表达式的值，以及表达式后面的字符串
        res += valueList[key] + strList[key + 1];
    })
    return res;
}

let a = 10;
let b = 20;
console.log(template`我是一个标签函数，用来计算${a} + ${b} = ${a + b}的值`);
