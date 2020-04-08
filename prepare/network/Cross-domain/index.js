const http = require('http')
const url = require('url');
const path = require('path');  
const fs = require('fs');

http.createServer((req,res)=>{
    let {pathname} = url.parse(req.url)
    let method = req.method
    if(req.headers.origin){ // 如果跨域了 才走跨域逻辑
      // TODO CORS处理 
    }
    // 接口逻辑处理
    if (pathname == '/user') {
    }
  }).listen('3000')