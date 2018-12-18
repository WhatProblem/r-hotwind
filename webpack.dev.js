const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    contentBase: './dist',
    publicPath: '/',
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
    // hotOnly: true
  }
});