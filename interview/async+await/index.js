
let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve(123)
    },5000);
})
let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(123)
    },5000)
})

async function b() {
    // await 后接promise 可保证顺序
    // let c = await p;
    // console.log(c)
    // let d = await p2;
    // console.log(d)
    Promise.resolve(p).then((res) => {
        console.log(res)
        new Promise((resolve) =>{
            setTimeout(() => {
                resolve(1)
            },5000)}
        ).then((resolve) => {
            console.log(resolve)
        })
    })
    // Promise.resolve(p).then((res) => {
    //     console.log(res)
    //     Promise.resolve(p2).then((resolve) => {
    //         console.log(resolve)
    //     })
    // })
}
b()