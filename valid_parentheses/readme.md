## 2020春招名企前端工程师考点解析

# 有效括号 ()
    使用栈，左边括号入栈，右边括号出栈，最后判断栈是否为空
    当遇到右边括号时，栈中没有元素，看可以提前判断
- 优化
    一次for循环，时间复杂度O(n) 空间复杂度stack
    - 定义一个变量sum 遇到左括号时：sum++,遇到右括号时：sum--,最后判断sum是否为0，为0即为true

# 最长有效括号匹配长度
- 动态规划思想
    - 暴力法
        使用嵌套循环 每位符号(外层循环) 它的最大有效括号(内层循环)  tmpMax
        时间复杂度O(n^2)
    - tmpMax 来计算，左右括号，下标之间做减法
        一次遍历 i 下标
        -1 放入栈
        前面没有栈顶元素后要入栈当前元素下标
    - 优化，空间复杂度优化 stack O(n) -> O(1)
        left 记录'('     right 记录')'
        1. left = right  max = 2*left
        2. left < right ()) 有效 前后反转遍历，可以解决left!=right的情况


