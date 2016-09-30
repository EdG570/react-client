var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/index.js',
        'webpack/hot/dev-server'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        hot: true
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        htmlWebpackPluginConfig
    ]
};