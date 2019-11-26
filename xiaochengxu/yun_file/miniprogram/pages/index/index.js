const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({
  navigateTo(event){

  },
  getUserInfo:function(result){
    // console.log(result);
    // 反馈的信息有限，云里会给openid
    wx.cloud.callFunction({
      name:'getOpenId',
      complete:res=>{
        console.log(res);
        // ?怎么存储
        userInfo
          .where({
            _openid:res.result.openId
          })
          .count()
          .then(res=>{
            console.log(res);
            if(res.total == 0){
              userInfo.add({
                data:result.detail.userInfo
              })
              .then(res=>{
      
                wx.navigateTo({
                  url:'../add/add',
                })
              })
              .catch(err=>{
                console.error(err);
              })
            }else{
              wx.navigateTo({
                url:'../add/add',
              })
            }
          })
          
      }
    })
  }
})