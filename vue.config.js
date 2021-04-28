module.exports = {
  css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        }
      }
  },
  devServer: {
    proxy: {
        '/socket.io': {
          target: 'http://localhost:2333',
          ws: true,
          changeOrigin: true
        },
        'sockjs-node': {
          target: 'http://localhost:2333',
          ws: false,
          changeOrigin: true
        }
    }
  }
}
