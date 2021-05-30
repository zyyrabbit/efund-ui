const {
  buildConfig,
  externals
 } = require('./config')
 const { merge } = require('webpack-merge');
 const commonConfig = require('./webpack.common');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 module.exports = merge(
  commonConfig,
  {
    mode: 'production',
    externals,
    entry: {
      index: buildConfig.ENTRY,
    },
    output: {
      path: buildConfig.OUT_PATH,
      filename: 'dx-ui.common.js',
      chunkFilename: '[id].js',
      libraryExport: 'default',
     // library: 'EFUND', // commonjs2打包方式，默认为无效状态
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css', 
        chunkFilename: '[id].css'
      })
    ]
  }
 )
