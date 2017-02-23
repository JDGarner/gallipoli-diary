var path = require('path');
var webpack = require('webpack');
var postcss = require('./postcss.config.js');

var config = {
  devtool: 'source-map',
  entry: [
    './src/main.js',
    './src/google-analytics.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
      },
      {
        test: /\.(png|jpg)$/,
        include: path.join(__dirname, 'src'),
        loader: 'file-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.join(__dirname, 'src'),
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BABEL_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
};
module.exports = config;
