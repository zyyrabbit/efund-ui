const {
  componentConfig,
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
    entry: componentConfig.ENTRY,
    output: {
      path: componentConfig.OUT_PATH,
      filename: '[name].js',
      chunkFilename: '[id].js',
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
