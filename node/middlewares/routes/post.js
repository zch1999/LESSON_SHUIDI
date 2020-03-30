const Router = require('koa-router')
const auth = require('../middlewares/auth.js')
const router = new Router({
    prefix: '/post'
})




router.get('/', async (ctx) => {
    ctx.body = '文章列表'
})

router.post('/',auth, async (ctx) => {
    ctx.body = '保存成功'
})

module.exports = router
