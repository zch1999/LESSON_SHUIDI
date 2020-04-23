module.exports = (config, resolve) => {
    return () => {
        config.plugin('html')
            .use(HtmlWebpackPlugin, [{
                template: 'public/index.html'
            }])
    }
}