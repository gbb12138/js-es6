//    includes(是否包含的字符串，开始搜索的位置索引？) 检查是否包含某个字符串
{
    let str = '123abcd hello bb 345';
    // 默认从头到尾
    console.log('string.includes: ', str.includes('hello')); // true
    console.log('string.includes: ', str.includes('hello', 9));  // false

};


{
    //    string.padStart(直到填充到的目标长度，要填充的字符串？)，用某个字符串在string前面填充n次
    let str = 'foo';
    console.log('padStart:', str.padStart(6)); //默认填充空格
    console.log('padStart:', str.padStart(6, '0'));
    console.log('padStart:', str.padStart(6, 'hello'));  // helfoo

    //  padEnd： 与 padStart用法相同，区别是在字符串尾部填充字符
};

{
    //   字符串迭代,字符串的原型上有Symbol.iterator属性，表示字符串是可以迭代的
    let str = '12';
    let stringIterator = str[Symbol.iterator]();
    // 可以通过调用next()执行迭代器
    console.log('string iterator: ', stringIterator.next());  // { value: '1', done: false }
    console.log('string iterator: ', stringIterator.next());  // { value: '2', done: false }
    console.log('string iterator: ', stringIterator.next());  // { value: undefined, done:true }
    //    可迭代对象可以被for of 遍历
    for (const value of str) {
        console.log('for of String:', value);
    }
    //   可以通过结构符结构迭代对象
    let [s1, s2] = [...str]; // 结构str，同时赋值给s1，s2变量
    console.log('s1:', s1, ';s2:', s2);
};

{
    //   大小写转换方法：
    let str = 'abcDEFG';
    console.log('转换成小写：', str.toLowerCase());
    console.log('转换成大写：', str.toUpperCase());
};

