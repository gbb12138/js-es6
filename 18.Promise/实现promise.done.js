Promise.prototype.done = function(onResolved, onRejected) {
    return this.then(onResolved, onRejected).catch(err => {
        throw err;
    })
}