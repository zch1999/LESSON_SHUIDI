const express = require('express');
//模板引擎
const ejs = require('ejs');
const app = express();
var MongoClient = require('mongodb').MongoClient;
//mongodb 连接时通过mogodb:// 协议来连接 27071端口
//mysql端口 3306
var url = 'mongodb://192.168.31.128:27017/runoob';
var dbbase;
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        throw err;
    }
    console.log('数据库已创建');
    dbbase = db.db("runoob");
})
app.get('/',(req,res)=>{
    dbbase.collection("zch_site")
        .find({"name":"潘志伟"})
        .toArray(function(err,result){
            if(err)
                throw err;
            console.log(result);
            // db.close();
            ejs.renderFile("views/index.html",{
                title:'hello',
                items:result
            },function(err,data){
                res.end(data);
            })
        })
    
})
app.listen(3000);