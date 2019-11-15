// -web服务器

var mysql = require('mysql');
const http = require('http');//node内置模块
const fs = require('fs');
var connection = mysql.createConnection({
    host:'192.168.31.128',
    user:'root',
    password:'1234567890',
    database:'batschool'  
  })
  connection.connect();
const server = http.createServer((req,res)=>{
    //www.baidu.com -> req 网友
    // res html http协议完成
    // res.end('hello world');
    if(req.url=='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/students'){
        connection.query('select * from students',function(error,results,fields){
            if(error){
                console.log(error);
                return;
            }
            console.log(results);
            const data = results;
            res.writeHead(200,{'Content-Type':'text/json;charset=UTF8'});
            res.end(JSON.stringify(data));
        })
    }
});

server.listen(1314);