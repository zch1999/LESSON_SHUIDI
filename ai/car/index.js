//filesystem 内置模块
const fs=require('fs');
const AipImageClassifyClient =require("baidu-aip-sdk").imageClassify;
const image = fs.readFileSync("carrr.jpg").toString("base64");
// console.log(image);
const client =new AipImageClassifyClient('17711754','7cUtigGts9vgFxe0ZOm41zWL','PeV0y4mDQMhTc6GbrnW3v0BA9lndb0hy');
client
    .carDetect(image)
    .then(function(result){
        console.log(result)
    })
// AipImageClassifyClient
//回调函数
// 文件在哪儿？ 磁盘
// js 在哪里运行？ 内存 I/O操作
// fs.readFile('./texyt.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// });
// console.log('hello node');