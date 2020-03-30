let isLogged = false
module.exports = auth = (ctx,next) => {
    if(!isLogged){
        ctx.redirect('/login')
    }else{
        next()
    }
}