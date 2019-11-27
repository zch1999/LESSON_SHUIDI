const http = require('http');
const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128');
let api_limit=10;
client.set("zch_key",10,function(err,obj){
    console.log(obj);
})
http.createServer((req,res)=>{
    if(/^\/api/.test(req.url)){
        //res 用户访问的响应 响应体
        //1xx请求进行中 2xx成功 3xx跳转 4xx用户端发生错误 5xx服务器错误
        // api_limit--;
        client.get("zch_key",function(err,count){
            res.writeHead(200,{
                'Content-Type':'text/json;charset=utf-8'
            })//状态码 StatusCode
            if(count>0)
            {
                client.decryby('zch_key',1);
                res.end(JSON.stringify({
                    name:'zch',
                    count:`宁拥有${count}次调用权限`
                }))
            }else{
                res.end(JSON.stringify({
                 msg:'已到达上限'
                }))
                }
        });
        }
})
.listen(7111)