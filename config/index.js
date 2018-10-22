'use strict'
const path = require('path')
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // "/users":{
      //   target:"http://qt.dd0519.cn"
      // },
      // "/users/*": {
      //   target: "http://qt.dd0519.cn"
      // },
      "/users": {
        target: "http://127.0.0.1:3000"
      },
      "/users/*":{
        target:"http://127.0.0.1:3000"
      },
      "/logins": {
        target: "http://127.0.0.1:3000"
      },
      "/logins/*": {
        target: "http://127.0.0.1:3000"
      },
    },
    host: 'localhost',
    port: 7080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css','json'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
