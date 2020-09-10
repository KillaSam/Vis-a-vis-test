const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        loader: 'babel-loader',
        exclude: [
            /node_modules/
          ]
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
      },
      {
          test: /\.svg$/,
          include: path.resolve(__dirname, 'src/styles/img'),
          use: [{
            loader: 'file-loader',
            options: {
                name: '/styles/img/[name].[ext]'
            }
          }]

      }
    ]
  },
  devServer: {
      overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
        template: __dirname + "/src/public/index.html",
    }),
    new CopyPlugin({
        patterns:[
            {
                from: 'src/styles/img',
                to: 'styles/img'
            }
        ]
    })
  ]
};