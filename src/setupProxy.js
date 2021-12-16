const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8888', //后台服务器地址
      // target: 'http://114.116.245.223:9001', //后台服务器地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}
