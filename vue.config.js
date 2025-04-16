const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  pwa: {
    name: 'Test',
    iconPaths: {
      favicon32: '/favicon/favicon.ico',
      favicon16: '/favicon/favicon.ico',
      appleTouchIcon: '/favicon/favicon.ico',
      maskIcon: '/favicon/favicon.ico',
      msTileImage: '/favicon/favicon.ico'
    }
  }
})

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
}