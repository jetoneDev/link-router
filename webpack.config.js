var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: "source-map",
    entry: './app.js',
    entry:{
        app:'./app.js',
    },
    output: {
        filename: 'bundle.js',
        // filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {

                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react', 'stage-0'],
                    }
                }
            },
        ]
    },
    devServer: {
        port: "9019",
        host: "0.0.0.0",
        contentBase: "./dist",
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
}