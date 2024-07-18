let num = 0;
let num2 = 0;

//    其中out，inner是标签语句，相当于给外层循环起了一个out的名字，内层循环起了一个叫inner的名字，标签语句用于嵌套循环

out: for (let i = 0; i < 10; i++) {
    inner: for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
            break out;  //  指定break out循环，即跳出out循环，
        }
        num++;
    }
}

console.log(num, '通过break跳转出最外层循环');   // 55


out: for (let i = 0; i < 10; i++) {
    inner: for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
            //  指定continue out循环，即跳出out的本次循环，进入到out的下次循环
            // 内层循环少执行了5次
            continue out;
        }
        num2++;
    }
}

console.log(num2, '通过break跳转出最外层循环');   // 95 ，