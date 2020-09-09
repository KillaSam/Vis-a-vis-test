const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './docs'),
    publicPath: '/docs'
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
        test: /\.(sass|scss)$/,
        use: [{
            loader: "style-loader" 
        }, {
            loader: "css-loader" 
        }, {
            loader: "sass-loader"
        }]
      },
      {
          test: /\.svg$/,
          include: path.resolve(__dirname, 'src/styles/img'),
          use: [{
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
          }]

      }
    ]
  },
  devServer: {
      overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + "/src/public/index.html",
        inject: 'body'
    }),
    new CopyPlugin({
        patterns:[
            {
                from: 'src/styles/img',
                to: 'img'
            }
        ]
    })
  ]
};