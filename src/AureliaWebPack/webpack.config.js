/*eslint-disable no-var*/

var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devServer: {
    host: 'localhost',
    port: 3000
  },
  entry: {
    main: [
      './app/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'wwwroot'),
    filename: 'bundle.js'
  },
  plugins: [
    new AureliaWebpackPlugin({
        src: path.resolve('./app')
    }),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but expose it to every module
    })
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(png|gif|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
};
