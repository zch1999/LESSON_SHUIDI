// // console.log(process.env.NODE_ENV)
// // 1. 开发的时， vue-cli , webpack 内存中编译
// // 2. 上线时， 压缩， 优化， 代码分离
// const path = require('path');
// const rimraf = require('rimraf');
// rimraf.sync('dist');// 编译前删除目录
// module.exports = {
//   entry: './src/main', //入口文件  index.css loader
//   mode: process.env.NODE_ENV, // development  product
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// }


const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist');
// 链式的webpack 配置
const Config = require('webpack-chain'); 
const config = new Config(); //实例化
const resolve = (src) => {
  return path.join(process.cwd(), src)
}
config 
  .entry('src/main.js')
    .add(resolve('src/main.js'))
    .end()
  .set('mode', process.env.NODE_ENV)
  .output
    .path(resolve('dist'))
    .filename('[name].bundle.js') // entry main.js  name main  bundle.js

config.module
    .rule('css')
    .test(/\.css$/)
    .use('css')
    .loader('css-loader')


module.exports = config.toConfig();

