const webpack = require('webpack');
const Path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?hash=sha512&digest=hex&name=[hash].[ext]',
      //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //   ]
      // },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file',
        exclude: Path.join(__dirname, '../../node_modules')
      }
    ]
  }
};