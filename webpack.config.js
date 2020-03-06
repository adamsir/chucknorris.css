const webpack = require('webpack');
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: process.env.NODE_ENV,
  entry: {
    js: './src/index.js',
    css: './src/lib/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          MiniCssExtractPlugin.loader
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new StylelintPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
};

module.exports = config;
