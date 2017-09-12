function Stack() {
    this.arr = [];
    this.pos = 0;
};

var proto = Stack.prototype;

proto.push = function (v) {
    this.arr[this.pos++] = v;
};

proto.top = function () {
    return this.arr[pos];
};

proto.pop = function () {
    return;
};

proto.isEmpty = function () {
    return;
};

proto.isFull = function () {
    return;
};

proto.getSize = function () {

};

module.exports = Stack;
