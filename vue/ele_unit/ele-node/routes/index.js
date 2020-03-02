const admin = require('./admin')

module.exports = app =>{
    // 启用中间件
    // 根路由
    app.use('/',(req,res)=>{
        res.send('hello')
    })
    app.use('/admin',admin)
}