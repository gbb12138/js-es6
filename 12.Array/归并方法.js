// reduce reduceRight
{
    let arr = [
        {
            name: 'a',
            age: 1
        },
        {
            name: 'b',
            age: 2
        },
        {
            name: 'b',
            age: 3
        }
    ];

    //  如果没有传入归并的初始值，则第一次归并时res是第一个值，item是第二个值，index是从2开始的
    let result = arr.reduce(function (res, item, index, arr) {
        console.log('111:', index);
        let sumAge = res.age ? res.age : res;
        return sumAge + item.age;
    });
    console.log('reduce:没有初始化结果', result);

    //   传入归并的初始值,index从0开始，sum上次归并的返回值
    let result2 = arr.reduce(function (sum, item, index, arr) {
        console.log('222', index);
        return sum += item.age;
    }, 0);
    console.log('reduce:有初始化结果', result2);
}