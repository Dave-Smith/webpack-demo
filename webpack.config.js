var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		options: {
		    presets: ['@babel/preset-env']
		}
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html' //relative to root of the output path
        })
    ]
}
