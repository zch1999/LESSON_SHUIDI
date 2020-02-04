# 大文件上传
    考察es6，ajax上传，async await promise，后台文件存储，流操作等全面的全栈技能的同时，提升难度到大文件和断点续传，通过这个题，就可以较好的考察面试者全面解决问题的能力和技术细节
    
-   文件 上传 8M
    切片
    1. js 在es6 文件对象file node file stream 有所增强
    任何文件都是二进制， 分割blob
    start size offset
    http请求 n个切片并发上传 速度更快 改善了体验

- 前端的切片 让http并发带来上传大文件的快感
    1. file.slice 完成切片， blob类型文件切片， js 二进制类型的 blob协议 在文件上传到服务器之前可以预览

- 服务器端
    如何将这些切片，合并成一个，并且能显示原来的图片
    stream 流 