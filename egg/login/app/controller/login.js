const Controller = require('egg').Controller;
class LoginController extends Controller{
    async register(){
        //异步 存一条数据
        const {ctx} = this;
        const {username,email,password} = ctx.request.body;
        //service层负责数据存储业务
        // ctx.body='hi,egg';
        await ctx.service.user.register({username,email,password})
    }
    async loginIn(){
        const {ctx} = this;
        //用户名 密码 ctx req res
        // console.log(ctx.request.body);
        const {email,password} = ctx.request.body
        console.log(email,password);
        ctx.body = '登陆成功';
    }
}

module.exports=LoginController;