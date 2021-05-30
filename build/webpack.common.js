'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const cssLoader = require('./css-loader.config');
const {
  commonConfig
 } = require('./config');

module.exports = {
  context: commonConfig.CONTEXT,
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.jsx', '.js', '.json'],
    alias: commonConfig.ALIAS,
    modules: [
      'node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 2000,
            name: path.posix.join('static/assets/font', '[name].[hash:8].[ext]')
          }
        }]
      },
      {
        test: /\.(svg|gif|png|jpe?g)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096,
            name: path.posix.join('static/assets/img', '[name].[hash:8].[ext]')
          }
        }]
      },
      {
        test: /\.css$/,
        use: cssLoader.css
      },
      {
        test: /\.scss$/,
        use: cssLoader.scss
      }
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new VueLoaderPlugin(),
   // new ProgressBarPlugin()
  ]
}
