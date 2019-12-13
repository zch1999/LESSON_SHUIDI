// 单点入口
const Koa = require('koa');
const config = require('./config/default.js');
const postRouter = require('./routers/posts.js');
const signinRouter = require('./routers/signin.js');
const path = require('path');
const app = new Koa();
const ejs = require('ejs');
const views = require('koa-views');
app.use(
    views(
        path.join(__dirname,'./views'),{
    extension:'ejs'//扩展名
}
));
// ?use 应答模式 中间件是处理用户请求的核心
// 启用路由中间件
app.use(postRouter.routes());
app.use(signinRouter.routes());
console.log(`listening on port ${config.port}`);
app.listen(config.port);