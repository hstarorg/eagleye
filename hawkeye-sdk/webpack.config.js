const path = require('path');
const webpack = require('webpack');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hawkeye-sdk.js'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  module: {},
  devServer: {
    port: 4123,
    open: true,
    contentBase: 'examples'
  }
};
