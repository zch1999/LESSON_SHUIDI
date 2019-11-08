const TULING = require('tuling');
const aiTuling = new TULING({
    key:'6f6782ca88c0488a996fd43f72692fe3'

});
//立即执行函数
(async()=>{  //async 函数修饰符
    //机器人
    // console.log('aaa')
    const result = await aiTuling.send({
        userid:1,
        info:'上海天气怎么样？',
        loc:'南昌市'
    });
    console.log(result);
})()
// func();