try {
    setTimeout(() => {
        throw 'err...';
    }, 0);
} catch (e) {
    console.log(e, '捕获到')
}


function foo() {
    throw 'foo error';
}
try {
    foo();
} catch (e) {
    console.log(e, '捕获到')
}
