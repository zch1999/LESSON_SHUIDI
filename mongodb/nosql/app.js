// mongodb 数据库驱动 mysql
var MongoClient = require('mongodb').MongoClient;
//mongodb 连接时通过mogodb:// 协议来连接 27071端口
//mysql端口 3306
var url = 'mongodb://192.168.31.128:27017/runoob';
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        throw err;
    }
    console.log('数据库已创建');
    var dbbase = db.db("runoob");
    //查询数据库是异步 回调方案
    // dbbase.createCollection('zch_site',function(err,res){
    //     //回调先处理错误
    //     if(err){
    //         throw err;
    //     }
    //     console.log('创建了集合');
    //     db.close();
    // })
    // 插入数据
    //JSON object
    // var myObj = {name:'潘志伟',
    // url:'www.runoob'
    // };
    // dbbase
    //     .collection("zch_site")
    //     .insertOne(myObj,function(err,res){
    //         if(err){
    //             throw err;
    //         }
    //         console.log('文档插入成功');
    //         db.close();
    //     })
    dbbase.collection("zch_site")
        .find({"name":"潘志伟"})
        .toArray(function(err,result){
            if(err)
                throw err;
            console.log(result);
            db.close();
        })
})