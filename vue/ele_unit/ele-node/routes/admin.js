const router = ()=>{
    router.post('/login', (req,res)=>{
        res.send({
            status: 1,
            message: '登录成功'
        })
    })
}

module.exports = router