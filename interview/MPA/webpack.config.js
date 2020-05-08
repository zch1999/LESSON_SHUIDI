const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    promotion: './src/promotion/index.js',
    pay: './src/pay/index.js'
  },  // 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  //缩小包体积
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2, //最小引入次数
          minSize: 0 // 
        }
      }
    }
  },
  plugins: [
    // new 一次
    // index.html
    new HtmlWebpackPlugin({
      template: './src/pay/index.html',
      filename: 'pay.html',
      chunks: ['commons','pay']  // 当前 html 引入的 js 文件 有哪些
    }),
    new HtmlWebpackPlugin({
      filename: 'promotion.html',
      template: './src/promotion/index.html',
      chunks: ['commons','promotion']
    })
  ]
}