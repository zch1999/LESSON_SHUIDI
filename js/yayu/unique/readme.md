- js 的那些数据类型
    数值型 Number 1
    字符串类型 '1'
    布尔值 true
    undefined 未定义
    null 空类型 赋值了，但是值为空
    上面的都是原子类型 简单数据类型
    Object 其他的都是对象 复杂数据类型
        数组 可以被迭代的对象 iterable
        函数 可以被运行的对象 function()
        JSON 对象字面量 {}可以被key:value 的对象

- 变量名name 值value
    let func; //内存中申请分配 地址
    undefined ？ 类型还未定义
    js 是弱类型语言 有别于Java c++等静态类型语言
    js 的变量类型是由值来决定的

- type null 'object'?
    因为在 JS 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。
- 怎么样区别 [] 和 {} 的typeof?
    []代表"",{}代表空代码块 

