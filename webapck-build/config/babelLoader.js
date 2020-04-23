module.exports = (config, resolve) => {
    const baseRule = config.module.rule('js').test(/.js|.ts$/);
    const babelPath = resolve('babel.js');
    const babelConf = require(babelPath);
    // console.log(babelConf,'--------')
    const version = require(resolve('node_modules/@babel/core/package.json')).version
    console.log(version, 'version')
    return () => {
        baseRule
          .use('babel')
          .loader(require.resolve('babel-loader'))
          .options(babelConf({
              version
          }))
    }
}