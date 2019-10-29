- 页面先写结构
    类名语义化 .key> .sound 一个盒子
    结构从外到内
    良好的结构是页面的基础
- 写结构时不用考虑样式
- 样式
    - 块级元素 block 
        行内元素？
    - 弹性布局
        display: flex;
        所有子元素的块级能力被干掉
        min-height：100vh; 100的相对高度
        justify-content: center;水平居中
        align-items：center；垂直居中
    - html 默认的字体的大小是16px
        rem 和 vh 一样都是相对单位
        rem 是相对于html的字体大小
        0.4rem = 16px * 0.4 =6.389px
        手机端px 不准确 rem适配所有手机
    - 盒子模型
        margin + boder + padding +