var path = require('path');

module.exports = {
    entry: './src/material.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'greeting-app')
    }
};

module.loaders = [
{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
        presets: ['env']
    }
}
];