// node的进程全局对象
process.on('message',(str)=>{
    console.log('child' + str);
    //子进程 把活干完后 偷偷的跑去另外一个CPU 挂载一个进程 把多核能力运用起来
    process.send('hehe');
})