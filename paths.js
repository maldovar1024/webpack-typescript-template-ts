const path = require('path');

const publicPath = path.resolve(__dirname, 'public');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  publicPath,
  srcPath,
  distPath,
};
