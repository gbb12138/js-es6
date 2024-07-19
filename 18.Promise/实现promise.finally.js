Promise.prototype.finally = function (callback) {
    return this.then((value) => {
        Promise.resolve(callback()).then(() => value);
    }, (err) => {
        Promise.reject(callback()).catch(() => err);
    })
}