const Service = require('egg').Service;
const crypto = require('crypto');
const uuid = require('uuid');
class UserService extends Service{
    async register(user){
        const {ctx} = this;
        //密码不能存明文的 单向加密
        user.password = crypto.createHmac('sha256','cxk1222cn').update(user.password).digest('hex');
        // user.user_id = uuid.v4().replace(/-/g,'');
        console.log(user, '----------------------------');
        
        const userInfo = await this.ctx.model.User.create(user);
        ctx.body={
            // user_id:user.user_id,
            msg:'注册成功',
            userInfo
        }
        console.log(user);
    }
}
module.exports = UserService;