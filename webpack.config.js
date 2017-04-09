var path = require('path');

module.exports = {
  entry: './src/material.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'greeting-app')
  }
};
