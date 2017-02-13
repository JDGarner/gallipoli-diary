var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'source-map',
  entry: [
    './src/main.js'
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
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
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
