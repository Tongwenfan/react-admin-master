const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  DefinePlugin
} = require('webpack');
const {
  merge
} = require('webpack-merge');
const {
  getThemeVariables
} = require('antd/dist/theme');
const common = require('./webpack.base');
const paths = require('./paths')

// 引入环境变量
const envConfig = require('../env/env_dev')

// const webpackDevClientEntry = require.resolve(
//   'react-dev-utils/webpackHotDevClient'
// )
// const reactRefreshOverlayEntry = require.resolve(
//   'react-dev-utils/refreshOverlayInterop'
// )


const devConfig = {
  mode: 'development',
  devServer: {
    port: 3005,
    contentBase: '../dist',
    open: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [{
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
              modifyVars: getThemeVariables({
                // dark: true, // 开启暗黑模式
                // compact: true, // 开启紧凑模式
              }),
              javascriptEnabled: true,
            },
          }
        }]
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [paths.src], // 指定检查的目录
        options: {
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }
    ]
  },
  target: 'web',
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      'process.env': JSON.stringify(envConfig)
    })
  ],
  devtool: 'inline-source-map',
  // devtool: 'eval-cheap-module-source-map',
}

module.exports = merge(common, devConfig);

// {
//   overlay: {
//     entry: webpackDevClientEntry,
//         // The expected exports are slightly different from what the overlay exports,
//         // so an interop is included here to enable feedback on module-level errors.
//     module: reactRefreshOverlayEntry,
//     sockIntegration: false,
//   }
// }
