const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
     app: './src/index.js',
  }, 
  plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Production'
     })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]  
  }
};
