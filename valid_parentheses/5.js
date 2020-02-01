var longestValidParentheses = function(s) {
    if (!s || s.length == 1) return 0;
    var left = right = max = 0; //用两个变量模拟栈的意义  left ->'('    right->')'
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left++;
        } else if (s[i] == ')') {
            right++;
        }
        if (left == right) {
            max = Math.max(max, 2 * right);
        } else if (right > left) {
            left = right = 0; //重新开始
        }
    }
    left = right = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        if (left == right) {
            max = Math.max(max, 2 * left)
        } else if (left > right) {
            left = right = 0; //重新开始
        }
    }
    return max;
}

console.log(longestValidParentheses('((())(())'))
console.log(longestValidParentheses(')(((((()())()()))()(()))('))