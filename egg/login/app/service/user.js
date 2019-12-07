const Service = require('egg').Service;
const crypto = require('crypto');
class UserService extends Service{
    async register(user){
        const {ctx} = this;
        //密码不能存明文的 单向加密
        user.password = crypto.createHmac('sha256','cxk1222cn').update(user.password).digest('hex');
        ctx.body={
            user,
            msg:'注册成功',
            user_id:10001
        }
        console.log(user);
    }
}
module.exports = UserService;