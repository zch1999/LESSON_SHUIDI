- 事件监听
  执行逻辑 chrome.exe 进程
  js 是chrome里语言编辑器来执行的
  html + css DOM树 数据结构
  js 执行 脚本
  事件 异步
  - 注册一个事件？ micro event 回调函数
  - 事件发生时怎么注册？
  js 单线程语言 onload后
  轮询注册事件的地方

订阅 发布者模式

- listen 加订阅者
    saleOffice.clientList.push(fn);
    形成订阅关系
- saleOffice 发布者
    trigger 有事通知
    把所有的订阅者都通知一遍
- apply 函数除运行外，指定其this
    指向 arguments

- document.body.addEventListener('click',fn);
    发布者 document.body  订阅者 fn
    document.body.events = []
    click
    trigger
     event.each(fn)