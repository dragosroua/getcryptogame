const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue$: path.resolve('./node_modules/vue/dist/vue.esm-bundler.js'),
      },
    },
    plugins: [new NodePolyfillPlugin()],
  },
  chainWebpack: (config) => {
    /*
     Disable (or customize) prefetch, see:
     https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch
  */
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  /*devServer: {
    proxy: 'http://46.166.140.172',
  },*/
}
