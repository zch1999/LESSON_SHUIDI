const koa = require('koa');
const app =new koa()
const bodyparse = require('koa-bodyparser')
// 向用户相应一个hello，web服务
// const sayHello = async (ctx) =>{
//     ctx.body = 'hello'
// }
// const sayHelloCn = async (ctx) =>{
//     ctx.body = 'hellocn'
// }
// app.use(sayHelloCn)
// app.use(sayHello)

//logger 设计
const logger = (ctx,next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next()
}
app.use(logger)
app.use(bodyparse())
app.use(async (ctx) => {
    ctx.body = ctx.request.body
})

app.listen(3000,)