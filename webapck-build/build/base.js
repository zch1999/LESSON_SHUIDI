const { findSync } = require('../lib');
const Config = require('webpack-chain'); // 配置
const config = new Config(); // 配置实例
const path = require('path');
const resolve = src => {
  return path.join(process.cwd(), src)
}
const files = findSync('config');
console.log(files, '+++++++++++++++');

module.exports = () => {
  // console.log('在这里做基本配置吧');
  const map = new Map()
  files.map(file => {
    // console.log(file)
    const name = file.split('/').pop();
    console.log(name,'++=')
    return map.set(name, require(file)(config, resolve))
  })

  // console.log(map,'map++++++')
  map.forEach(v => v())

  // webpack  modules 

  
  return config;
}