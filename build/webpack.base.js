const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
const { resolve } =  require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: paths.src + '/index.js',
  output: {
    path: paths.build,
    filename: 'static/js/[name].js',
    assetModuleFilename: 'static/assets/[name].[ext]'
    // public: ''
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|ico|png|jpeg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: '@svgr/webpack',
            // options: {
            //   native: true
            // }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.jsx'],
    alias: {
      '@': paths.src
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: resolve(__dirname, '../public/icon.ico'),
      publicPath: '/'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, '../public/static'),
          to: resolve(__dirname, '../dist/static'),
        }
      ]
    })
  ]
}
