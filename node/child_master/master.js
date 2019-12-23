//主进程
const cp = require('child_process');//创建子进程
const child_process = cp.fork(__dirname  + '/child.js');

child_process.send('hah');//任务交付给它
child_process.on('message',(str)=>{
    console.log('parents' + str);
})