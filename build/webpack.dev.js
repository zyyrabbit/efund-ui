'use strict';
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  devConfig
 } = require('./config');

module.exports = merge(
  commonConfig,
  {
    entry:  devConfig.ENTRY,
    mode: 'development',
    target: 'web', // 设置.browserslistrc 必须设置target, 否则浏览器端热更新会失效
    output: {
      path: devConfig.OUT_PATH,
      filename: 'static/js/[name].[contenthash:8].js',
      publicPath: '',
      chunkFilename: 'static/js/[id].[chunkhash:8].js'
    },
    devtool: 'eval-source-map', // 首次构建比较慢，二次构建比较快，源码映射source
    devServer: {
      contentBase: devConfig.OUT_PATH,
      // noInfo: true,
      compress: true,
      port: 3000,
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'dx-ui',
        template: devConfig.TEMPLATE,
        chunks: ['main'],
        inlineSource: 'runtime~.+\\.js'
      })
    ]
  }
)