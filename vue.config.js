const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
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
