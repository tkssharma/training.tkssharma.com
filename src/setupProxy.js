const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/graphql',
    proxy({
      target: process.env.API_SERVER,
      changeOrigin: true,
    }),
  );
};
