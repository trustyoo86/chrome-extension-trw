'use strict';

const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const rootPath = resolve(__dirname, '..');
const srcPath = resolve(rootPath, 'src');
const distPath = resolve(rootPath, 'dist');

module.exports = {
  entry: {
    'popup': join(srcPath, 'popup.tsx'),
    'background': join(srcPath, 'background.ts'),
    'content': join(srcPath, 'content.ts'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'components': resolve(srcPath, 'components'),
      'containers': resolve(srcPath, 'containers'),
      'stores': resolve(srcPath, 'stores'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: join(distPath, 'popup.html'),
      template: join(srcPath, 'popup.html'),
      inject: false,
      files: {
        js: ['popup.js'],
      },
    }),
    new CopyPlugin([
      {
        from: join(srcPath, 'manifest.json'), 
        to: join(distPath, 'manifest.json'),
      },
    ]),
  ],  
};