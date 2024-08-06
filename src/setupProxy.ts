export const { createProxyMiddleware } = require('http-proxy-middleware');

// @ts-ignore
module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://94.241.169.101',
      changeOrigin: true,
    })
  );
};