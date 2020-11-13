const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { publicPath, srcPath, distPath } = require('./paths');

module.exports = {
  entry: path.resolve(srcPath, 'index.ts'),
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new ESLintPlugin({
      context: srcPath,
      extensions: 'ts',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(publicPath, 'index.html'),
      favicon: path.resolve(publicPath, 'favicon.ico'),
    }),
    new MiniCssExtractPlugin()
  ],
  stats: {
    assetsSort: '!size',
    builtAt: false,
    children: false,
    entrypoints: false,
    hash: false,
    modules: false,
    timings: false,
    version: false,
  },
};
