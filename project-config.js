module.exports = {
  projectName: 'blog-example',
  topDomain: true,
  css: {
    rem: {
      remUnit: 20
    }    
  },
  dev: {
    // https://webpack.docschina.org/configuration/dev-server/#devserver-proxy
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '^/api': ''
        },
      }
    },
    mock:false,
    allowedHosts: ['.djtest.cn'],
  }
}
