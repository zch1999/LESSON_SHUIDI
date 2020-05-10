// 轻量级的web 开发框架, js node 50%
// JavaScript
const Koa = require('koa'); // 引入KOA
const app = new Koa();  // Web Server
const fs = require('fs');
// 启动一个服务 函数封装一个服务
// const func = ctx =>{
//     console.log('func');
//     ctx.response.body = 'func';
// }
const main =async ctx =>{
    // ctx 上下文环境
    // 
    // console.log(ctx.request,'--------');
    // ctx.response.body = "Hello CCTV"
    // req response
    // 设置响应的类型
    // 响应头
    // 分层, 网站, 大一点的网站, 返回一个HTML文件(MVC View)
    // 设置响应的内容
    // 协议 操作系统(内存node 文件系统 D:) 网络 数据库

    // const html = fs.readFileSync('./template.html','utf-8');    // 同步的
    // console.log(html);
    // ctx.response.body =html;
    
    ctx.response.type = 'html';
    let a =''
    let p =  new Promise(resolve => {
                 fs.readFile('./index.html','utf-8',function(err,data){
                // 'utf-8' 设置编码格式 把 buffer 元素转换为字符串
                // 存在异步问题,导致无法显示
                    if(err){
                        console.log(err);
                        return;
                    }
                    // console.log(data,'----------');
                    // 如果没有设置编码格式, 则需要加上toString()方法
                    // console.log(data.toString(),'----------');
                    resolve(data);
                });
            })
    await p.then(data => {
        a = data
    })
    ctx.response.body = `${a}`
    // ctx.response.body = fs.readFileSync('./index.html')

    // ctx.response.type = 'html';
    // const fn = () =>{
    //     return new Promise(resolve => {
    //          fs.readFile('./index.html','utf-8',function(err,data){
    //         // 'utf-8' 设置编码格式 把 buffer 元素转换为字符串
    //         // 存在异步问题,导致无法显示
    //             if(err){
    //                 console.log(err);
    //                 return;
    //             }
    //             // console.log(data,'----------');
    //             // 如果没有设置编码格式, 则需要加上toString()方法
    //             // console.log(data.toString(),'----------');
    //             resolve(data);
    //         });
            
    //     })
    // }
    // let a = ''
    // async function fn1(){
    //     await fn().then(value => {
    //         a = value
    //     })
    // }
    // await fn1()
    // ctx.response.body = `${a}`
    // ctx.response.body = `
    // <html>
    //     <head></head>
    //     <body>
    //         <h1>Hello CCTV</h1>
    //     </body>
    // </html>
    // `
}
// app.use(func);
app.use(main);  // 启用了一个服务 给访问者用 Visitors 使用
app.listen(3000);