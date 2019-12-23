'use strict';

const { join, resolve } = require('path');

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
  plugins: [],  
};