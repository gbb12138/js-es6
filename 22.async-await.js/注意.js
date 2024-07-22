async function foo () {
    let res = await getData();
    console.log('1111', res);
    //return res;
}

function getData () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(22222);
            resolve(222222)
        }, 1000);
    })
}

foo().then(res => {
    console.log(res,'***')
}).catch(err => {
    console.log(err, '----')
})