var express = require('express');
var path = require('path');
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

if (isProduction) {
  app.use(express.static(__dirname + '/dist'));

  app.get('*', (req, res) => {
    const dist = path.join(__dirname, '/dist/index.html');
    res.sendFile(dist);
  });
} else {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackConfig = require('./webpack.config.js');

  var compiler = webpack(webpackConfig);

  app.use(express.static(__dirname + '/dist'));

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.listen(port, function(error) {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
