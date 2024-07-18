{
    // reverse, 反转数组，改变原数组
    let arr = [2, 3, 1, 6, 9, 5, 7, 3];
    console.log('reverse:', arr.reverse(), arr);
}
{
    // sort, 默认升序排列，改变原数组

    let arr = [2, 3, 1, 6, 9, 5, 7, 3];
    console.log('默认sort:', arr.sort(), arr);

    let res = arr.sort(function (prev, next) {
        if (prev > next) {
            return -1; // 不更换位置
        } else if (prev < next) {
            return 1; // prev，next交换位置
        } else {
            return 0; // 不做操作
        }
    });

    console.log('sort 传入函数参数:', res); //  [9, 7, 6, 5,3, 3, 2, 1]

    //简写
    {
        let arr = [2, 3, 1, 6, 9, 5, 7, 3];
        console.log('sort 传入函数参数2:', arr.sort(function (prev, next) {
            // 假设现在的数组是[1,2]; 降序排列需要交换位置，返回>0, 2-1
            // 假设现在数组是[2,1];  降序，不需要交换位置，返回<0, 1-2
            return next - prev;
        }));
    }
}