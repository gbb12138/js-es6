console.log(0.1 + 0.2);  // 0.30000000000000004

function addFloat(n1, n2) {
    let sum = n1 + n2;
    return parseFloat(sum.toFixed(20));
}

console.log(addFloat(0.1, 0.2));
console.log(addFloat(32.11, 0.002));
console.log(addFloat(0.0000000000001, 0.0000000000002));