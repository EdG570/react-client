var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlTemplate = require('html-webpack-template');

module.exports = {
    entry: [
        './src/index.js',
        'webpack/hot/dev-server'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: 'dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Todo App',
            inject: false,
            template: HtmlTemplate,
            appMountId: 'app',
            mobile: true,
            minify: {
                collapseWhitespace: true
            }
        })
    ],
    postcss: function () {
        return [autoprefixer];
    }
};