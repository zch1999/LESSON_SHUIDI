'use strict'

const Controller = require('egg').Controller

class MainController extends Controller{

  async index(){
    this.ctx.body = "hi,egg"
  }

  async checkLogin(){
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    //从数据库查询用户名和密码
    const sql = " SELECT userName FROM admin_user WHERE userName = '"+userName+"' AND password = '"+password+"'"
    const res = await this.app.mysql.query(sql)
    if(res.length>0){
        //登录成功,进行session缓存
        let openId=new Date().getTime()
        this.ctx.session.openId={'openId':openId }
        this.ctx.body={data:'登录成功','openId':openId}

    }else{
        this.ctx.body={data:'登录失败'}
    } 
  }

  async getTypeInfo(){
    const resType = await this.app.mysql.select('type')
    this.ctx.body = {data: resType}
  }
}

module.exports = MainController