// match
{
    //  string.match(reg || 字符串), 匹配不到返回null

    let str = 'cat fat';
    console.log('match直接匹配字符串：', str.match('fat')); //[ 'fat', index: 4, input: 'cat fat', groups: undefined ]

    {
        //  正则表达式非全局匹配，返回值与exec相同
        let str = 'cat fat bat';
        let matches = str.match(/(.)at/);
        // 与正则表达式reg.exec(str);返回值相同，匹配到的字符串，捕获组匹配的字符串？，匹配到字符串的开始索引原字符串
        console.log('match正则非全局匹配: ', matches); //[ 'cat', 'c', index: 0, input: 'cat fat bat', groups: undefined ]
    };

    {
        //  正则表达式是全局匹配g，直接返回匹配到的字符串数组
        let str = 'cat fat ba1t';
        let matches = str.match(/(.)at/g);
        console.log('match正则全局匹配g: ', matches); // [ 'cat', 'fat' ]
    }

};


// search
{
    //  string.search(reg || string); 返回第一次匹配到的位置索引，没有则返回 -1 
    let str = 'cat fat bat';
    console.log('search字符串:', str.search('cat'));  // 0
    console.log('search正则非全局:', str.search(/(.)at/));  // 0
    console.log('search正则全局g:', str.search(/(.)at/g));  // 0

};

// replace
{
    let str = '11cat fat bat22';

    //   replace(str1,str2) 用str2替换匹配到的第一个str1
    let s1 = str.replace('at', 'ond');
    console.log('replace第一个参数是字符串，第二个参数也是字符串：', s1); //11cond fat bat22

    // replace(reg,str2) 用str2替换用reg匹配到的所有子字符串
    let s2 = str.replace(/(.at)/, 'ond');
    console.log('replace第一个参数是reg,非全局匹配;第二个参数是字符串：', s2); //11cond fat bat22

    let s3 = str.replace(/(.at)/g, 'ond');
    console.log('replace第一个参数是reg,全局匹配;第二个参数是字符串：', s3); //11ond ond ond22

    //  replace(reg,str2),当reg中有捕获组时，str2中可以通过 $n (n:1-9)获取第n个捕获组匹配的子字符串
    let s4 = str.replace(/(.at)/g, '哈哈$1');
    console.log('replace第一个参数是reg,全局匹配;第二个参数是字符串：', s4); //11ond ond ond22


    {
        //todo   replace(reg, function(每次匹配到的子字符串substr，子字符串的开始索引i，原字符串str) {
        //todo        return res;  // return 的值就是substr要替换的值
        //todo   })
        let str = "<p>段落标签 <span></span></p>";
        let s = str.replace(/[<>]/g, function (match, index, str) {
            console.log("   第二个参数是函数，函数参数：", match, index, str);
            switch (match) {
                case '<':
                    return "&lt";
                    break;
                case '>':
                    return "&gt";
                    break;
                default:
                    return match;
            };
        })
        console.log("replace:", s); // &ltp&gt段落标签 &ltspan&gt&lt/span&gt&lt/p&gt
    }
};

// split
{
    //    str.split(str,length);
    let str = 'red,yellow,blue';
    let a = str.split(',');
    console.log("split: ", a);
    //   指定第二个参数是2，也就是生成的数组大小
    console.log("split: ", str.split(',', 2));
}
