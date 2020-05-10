const fs = require('fs')

new Promise(resolve => {
  fs.readFile('./index.html','utf-8',function(err,data){
      // 'utf-8' 设置编码格式 把 buffer 元素转换为字符串
      // 存在异步问题,导致无法显示
      if(err){
          console.log(err);
          return;
      }
          console.log(data,'----------');
          // 如果没有设置编码格式, 则需要加上toString()方法
          // console.log(data.toString(),'----------');
          resolve(data);
      });
      
}).then(data =>{
  console.log(data,'23');
});