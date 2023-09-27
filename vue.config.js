// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        ws: false, // 如果要代理 websockets
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}