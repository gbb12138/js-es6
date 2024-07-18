{
    // 1
    let arr = [1, 2];
    console.log('字面量：', arr);
}
{
    // 2
    let arr = new Array(1, 2);
    console.log('new Array:', arr);
}
// 3 Array.from(类数组：可迭代的对象；有length属性 且 有索引的对象)；
{
    {
        // 字符串(可迭代)
        let arr = Array.from('abcd');
        console.log('Array.from----- 字符串：', arr);
    };
    {
        //    Map , Set

    };
    {
        // 数组浅拷贝
        let person = {
            name: '王小包',
            age: 1
        }
        let arr = [
            person, 1, 'a', true
        ];
        let arr2 = Array.from(arr);
        console.log('   浅拷贝的新数组：', arr2);
        person.age = 2;
        console.log('   修改age后，原数组', arr, "浅拷贝的新数组:", arr2); // 都改变了
    };
    {
        //    自定义的迭代器

    }
    {
        // arguments
        function getArguments() {
            return Array.from(arguments);
        }
        console.log('   arguments:', getArguments(1, 'a', {}, true));
    };
    {
        // 索引必须从 0 开始
        let obj = {
            0: 1,
            1: 'a',
            2: {},
            3: true,
            length: 4
        }
        console.log('   带有索引和length属性的对象', Array.from(obj))
    }


}
{
    // 4 Array.of(...item); 将一组参数组合成数组
    let arr = Array.of(1, 'a', true, {});
    console.log('Array of: ', arr);
}