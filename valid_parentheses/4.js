var longestValidParentheses = function(s) {
    //时间复杂度O(n)
    var max = 0;
    if (s.length == 0 || s.length == 1) return max;
    var stack = [-1];
    for (var i = 0; i < s.length; i++) { //下标法，一次遍历，时间复杂度O(n)
        if (s[i] == '(') {
            stack.push(i);
        } else if (s[i] == ')') {
            stack.pop();
            if (stack.length < 1) {
                stack.push(i); //入栈当前元素下标
            } else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }
    return max;
}

console.log(longestValidParentheses(')(((((()())()()))()(()))('))