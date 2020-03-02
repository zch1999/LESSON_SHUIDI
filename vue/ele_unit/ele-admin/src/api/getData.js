// api定义集合文件
export const login = async (data)=>{
    return new Promise((resolve,reject)=>{
        fetch('http://127.0.0.1:3000/api/admin/login',{
            methods:'POST',
            body: JSON.stringify(data)
        }).then(data =>{
            resolve(data)
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}