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
  module: {
    rules: [
      // 定义编译 jsx 文件使用的loader(babel-loader)
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
      // 定义 js 文件使用的 loader
      {
        test: /\.js$/,
        use: 'babel-loader',
        // 排除 node_modules 目录
        exclude: [
          path.join(__dirname, './node_modules')
        ]
      }
    ]
  }, 
  resolve: {
    extensions: ['.js', '.jsx']
  }, 
  devServer : {
    host: '0.0.0.0',
    port: '8888',
    hot: true,
    contentBase: path.join(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Custom template', template: './index.html' }), 
    new webpack.HotModuleReplacementPlugin()
  ]
}



module.exports = config
