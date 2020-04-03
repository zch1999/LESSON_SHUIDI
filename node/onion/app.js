const app = {
    middlewares: []
}

app.use = function(fn){
    if(typeof fn !== 'function'){
        throw new Error('中间件一定要是函数')
    }
    app.middlewares.push (fn)
}

//合并，中间件最后合并成一个大函数
app.compose = function() {
    function dispatch(index){
        if(index === app.middlewares.length){
            return 
        }
        const fn = app.middlewares[index]
        // console.log(fn)
        fn(function next(){
            dispatch(index+1)
        })
    }
    dispatch(0)
//     for(let i=0; i<this.middlewares.length; i++){
//         this.middlewares[i]();
//     }
}

module.exports = app