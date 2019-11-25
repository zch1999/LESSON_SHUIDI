- NOSQL
 mysql 关系型数据库
 database->table->fields
 NOSQL 不需要写sql
 JSON object{} .save()
 find()
 碎片化的 结构性并不是很良好的数据存储
 Mongodb 云开发数据库就是线上版本


 -     MYSQL            MONGODB
    关系数据库       NOSQL Facebook 文档型
    show database；  show dbs；
              use db
    tables           collection
    SQL              js语法的面向对象api


- 连接monogdb
    url mongodb://协议
- db.createCollection('site',function(err,res){
    //err出错
    //异步的，耗时的
    js里执行的代码不会阻塞，
    db.close();
})创建一个集合
    代码顺序
    1. createCollection
    2. db.close()在外面
    执行顺序
    1. creat->去到mongodb->create->回调
    2. 接着往后执行


- 数据库， 后端开发框架
    express 
    node,后端就是app
    app.get('/',(req,res)=>res.send('hello world'))
    app.listening(3000,...)