# material design 来自google的UI设计
安卓 (material design)

特别？
从css风格 -> 组件化 -> react入门
radial-gradient 渐变
- material design 的灵魂，在于对交互的创新
    波浪感，进度条的进度感
    移动端细节 currsor:pointer 用的是非button 逐渐user-select:none
    stylus 嵌入式 ::after  :active::after

1. background-image
    背景图片 url 引入的方式 在移动时代 渐变也可以生成
    既生成了背景，同时又没有图片
    10% 白  1%的透明度

- 我们要做一堆组件
    为开发准备好基础组件 小程序里用过组件
    要用到的按钮 这里都会有 warning？
    提供 通用的 变通的 各种常见要求(70%业务开发) 这就叫组件
    css有些变化(状态，primary circle block) 如何变化封装进去
    与html 区别
    1. 把它的样式封装进去
        button？ 样式是样式
        组件(组合html，css，js)成为一个组件


- ReactDOM React
    基本语:
    组件式强大的，定义了一个button的组件
    type 文字 block  有通用性的组件
    1. ReactDOM.render(<div><button></button></div>,document.getElementById('root))
    JSX语法
    才可以在root 里面显示组件 组件要编译
    2. function Button(props){ //定义组件 
        return(
            <div></div>
        )
    }