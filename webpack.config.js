const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

let config = {
  mode: "development",
  entry: {
    app: path.join(__dirname, './index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Custom template', template: './index.html' })
  ]
}

const isDev = process.env.NODE_ENV === 'development'
if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    hot: true,
    contentBase: path.join(__dirname, './'),
  }

  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
