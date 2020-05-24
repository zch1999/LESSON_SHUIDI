/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590230217993_6364';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      // host: 'mysql.com',
      host: 'localhost', // 数据库地址,本机
      // port
      port: '3306', // 端口
      // username
      // user: 'test_user',
      user: 'root', // 我们使用最高管理员权限的root
      // password
      password: '12345678', // 数据库密码
      // database
      database: 'react_blog', // 数据库名字
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: {
　　　enable: false
　　},
    domainWhiteList: [ '*' ]
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  return {
    ...config,
    ...userConfig,
  };
};
