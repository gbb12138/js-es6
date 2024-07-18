
//  不修改原数组
// concat
{
    let arr = ['a', {}, true, [1, 2]];
    let arr1 = [false, false];
    console.log('concat: ', arr.concat(arr1)); //[ 'a', {}, true, [ 1, 2 ], false, false ]
}
// splice 拼接
//    arr.splice(开始删除的起始位置，要删除的个数，在该位置要添加数组项),原数组改变，返回删除的数组项
{
    let arr = [0, 1, 2, 3, 4, 5, 6];
    let res = arr.splice(1, 3, 'a', 'b', 'c'); // [ 1, 2, 3 ]
    console.log('splice:', res, arr); //[0, 'a', 'b', 'c',4, 5, 6]
}