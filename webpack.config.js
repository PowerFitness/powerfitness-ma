const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: [ '@babel/env' ] }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: { extensions: [ '*', '.js', '.jsx' ] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        publicPath: 'http://localhost:3000/',
        hotOnly: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3001',
        },
    },
    plugins: [
        new CopyPlugin([
            { from: 'src/index.html' },
            { from: 'src/Toolkit.css' },
            { from: 'src/static', to: 'static' },
        ]
        ),
        new webpack.HotModuleReplacementPlugin()
    ]
};
