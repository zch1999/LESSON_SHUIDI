var isValid = function(s) {
    if (!s || s.length < 1) return true;
    var n = s.length;
    var sum = 0;
    //sum 栈的意思push pop 只在数组的尾部插入或删除数据 栈 FILO
    for (var i = 0; i < n; i++) { //时间复杂度O(n)
        var c = s[i];
        if (c == '(') {
            sum++;
        } else {
            if (sum == 0) { //第一个就是错误的
                return false
            }
            sum--;
        }
    }
    return sum > 0 ? false : true
};

console.log(isValid('()()'))