let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
  checkLogin: ipUrl + 'checkLogin',// 检查用户名，密码
  getTypeInfo: ipUrl + 'getTypeInfo' //获取文章类别信息
}

export default servicePath