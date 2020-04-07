let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve(123)
    },5000)
})
let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(123)
    },4000)
})

function* test(){
    console.log('start')  // 分块 console.log() 和 yield foo()是一块
    let a = yield p;
    console.log('a', a)
    let b = yield p2;
    console.log('b', b)
    console.log('end')
}

function asyncTogenerate(gen) {
    let g = gen()
    function step(value){
        let info = g.next(value);
        if(info.done){
            return
        }else{
            Promise.resolve(info.value).then((res) => {
                step(res)
            })
        }
    }
    step()
}

asyncTogenerate(test)