const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { distPath } = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distPath,
    hot: true,
  },
  output: {
    publicPath: '/',
  },
  stats: {
    assets: false,
  },
});
