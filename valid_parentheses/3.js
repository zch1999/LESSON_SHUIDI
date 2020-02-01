/**
 * leetcode 32
 * @author zch
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var max = 0;
    if (s.length == 0 || s.length == 1) return max;
    var stack = []; //使用栈实现匹配  空间复杂度O(n)
    //嵌套循环
    //每位括号它的有效匹配长度
    for (var i = 0; i < s.length; i++) {
        var tmpMax = 0; //当前位符号的匹配长度
        for (var j = i; j < s.length; j++) {
            if (s[j] == '(') {
                stack.push('('); //入栈
                tmpMax++;
            } else if (s[j] == ')') {
                if (stack.length < 1) {
                    //栈空，有效匹配结束
                    max = max < tmpMax ? tmpMax : max;
                    break;
                } else {
                    stack.pop(); //出栈
                    tmpMax++;
                }
            }
        }
        if (stack.length == 0) { //都匹配
            max = max < tmpMax ? tmpMax : max;
        }
        stack = [];
    }
    return max;
};

console.log(longestValidParentheses(')(((((()())()()))()(()))('))

// ")(((((()())()()))()(()))("