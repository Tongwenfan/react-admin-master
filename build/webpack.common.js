const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin  = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { ProgressPlugin } = require('webpack')

module.exports = {
  mode: 'production',
  // devtool: 'hidden-source-map',
  // devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
            // drop_console: true
          }
        }
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      // filename: 'static/css/[name].[contenthash].css',
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].css',
      ignoreOrder: true
    }),
  ]
}