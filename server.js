/*eslint-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.config');

var server = process.argv[2]?process.argv[2]:'localhost';
var port = process.argv[3]?process.argv[3]:3000;

config.entry=['webpack-dev-server/client?http://'+server+':3000','./src/js/index.js'];

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  //hot: true,
  inLine: true,
  historyApiFallback: true,
  contentBase:'./static',
  stats: {
    colors: true
  }
}).listen(port, server, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ',server,':',port);
});
