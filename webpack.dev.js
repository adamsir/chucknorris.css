const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
  mode: 'development'
};

module.exports = merge(common, config);
