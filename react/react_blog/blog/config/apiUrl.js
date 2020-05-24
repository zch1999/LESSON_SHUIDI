let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleById: ipUrl + 'getArticleById/',// 详情页接口
  getArticleList: ipUrl + 'getArticleList', //首页接口
  getTypeInfo: ipUrl + 'getTypeInfo', //获取文章类别接口
  getListById: ipUrl + 'getListById/', //根据类别获取文章
}

export default servicePath