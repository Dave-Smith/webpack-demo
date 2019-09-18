var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        },
        {
            test: /\.css$/,
            loaders: [MiniCssExtractPlugin.loader, 'css-loader'] // loaders are processed right to left
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html' //relative to root of the output path
        }),
        new MiniCssExtractPlugin({filename: 'style.css'})
    ]
}
