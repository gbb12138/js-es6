// URLSearchParams: 查询，设置url搜索参数
let qs = '?qs=javascript&num=10';
let params = new URLSearchParams(qs);
console.log(params, typeof params); // 返回的是一个对象，具有get，set，delete方法（感觉像是一个map类型）
console.log(params.get('num')); // 获取参数值get
params.set('name', 'wps'); //添加，修改
params.set('qs', 'success');
console.log(params);
params.delete('num'); // 删除
console.log(params.get('num')); // 返回null
console.log(params.toString()); //q=javascript&name=wps&qs=success

// 可遍历
for (let item of params) {
    console.log(item); //['qs', 'success'], ['name', 'wps']
}

