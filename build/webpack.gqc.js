const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const common = require('./webpack.common')

// 引入环境变量
const envConfig = require('../env/env_gqc')

const prodConfig = {
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(envConfig)
    })
  ]
};
module.exports = merge(base, common, prodConfig);
