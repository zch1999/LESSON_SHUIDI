//es6 支持的
//手写findIndex()
function isBigEngough(element) {
    console.log(element);
    return element >= 15;
}
console.log([12, 5, 8, 130, 44].findIndex(isBigEngough));