const mongoose = require('mongoose'), //数据库驱动
    Schema = mongoose.Schema;
const articleSchema = new Schema({
    title: String,
    date: Date,
    content: String
});
const linkSchema = new Schema({
    name: String,
    href: String,
    newPage: Boolean
})
const userShema = new Schema({
        name: String,
        password: String,
        email: String,
        emailCode: String,
        createdTime: Number,
        articles: [articleSchema],
        links: [linkSchema]
    })
    //对数据库物理，对象抽线 ORM
    //操作数据库更容易
const User = mongoose.model('User', userShema);
mongoose.connect('mongodb://192.168.31.128:27017/test'); //连接数据库 最耗性能 IO开销
let db = mongoose.connection;
db.on('error', function() {
    console.log('数据库连接失败');
});
db.once('open', function() {
    console.log('db open');
})

// new User({
//     name: 'zhong',
//     password: '3155',
//     email: '1901394767@qq.com',
//     email: '1234',
//     createdTime: Date.now(),
//     articles: []
// }).save(function(err) {
//     console.log(err);
// });

User.find({ name: 'zhong' }, function(err, doc) {
    if (err) {
        console.log(err);
    }
    console.log(doc);
});

// User.findOne({ name: 'zhong' }, function(err, doc) {
//     if (doc) {
//         const article = {
//             title: '你不知道的Javascript',
//             date: new Date(),
//             content: ''
//         };
//         doc.articles.push(article);
//         doc.save(function(err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log('ok');
//         })
//     }
// })

// User.findOne({ name: 'zhong' }, function(err, doc) {
//     if (err) {
//         return console.log(err);
//     } else if (doc) {
//         const link = {
//                 name: '百度',
//                 href: 'www.baidu.com',
//                 newPage: true
//             }
//         doc.links.push(link);
//         doc.save(function(err) {
//             if (err)
//                 return console.log(err);
//             console.log('ok', doc);
//         })
//     }
// })