// const proxy = require('http-proxy-middleware'); //需要安装中间件  
// module.exports = function(app) {
//   app.use(
//     proxy("/api", {
//       target: 'https://xxx.com',
//       changeOrigin: true
//     })
//   );
//   app.use(
//     proxy("/v2", {
//       target: "https://xxx2.com",
//       changeOrigin: true
//     })
//   );
// };

//组件： /api/xx ... | /v2/...

//verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    // target: 'http://192.168.3.18:8765',
    target: 'http://newoa.91118.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/api'
    }
  }));

//   app.use('/api2', createProxyMiddleware({
//     target: 'http://xxx.com',
//     changeOrigin: true,
//     pathRewrite: { //路径替换
//       '^/api2': '/api', // axios 访问/api2 == target + /api
//     }
//   }));

};