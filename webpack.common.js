const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash:8].css'
})

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react']
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash:8].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              data: '@import "./style/_vars.scss";',
              includePaths: [
                path.join(__dirname, 'src')
              ]
            }
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    extractSass,
    new HtmlWebpackPlugin({
      title: 'EA_phonebook',
      template: 'src/template/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
}
