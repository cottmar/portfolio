'use strict';

const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-exclude-empty-assets-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new miniCssPlugin({
      filename: 'styles.[hash].css',
    }),
    new HTMLWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          miniCssPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});