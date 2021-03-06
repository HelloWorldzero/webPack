// 一个常见的`webpack`配置文件
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    // devtool: 'none',
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        // historyApiFallback: true, //不跳转
        // inline: true,
        // hot: true,
        host:'localhost',
        port:'8001',
        open:true,
    },
    // module: {
    //     rules: [{
    //         test: /(\.jsx|\.js)$/,
    //         use: {
    //             loader: "babel-loader"
    //         },
    //         exclude: /node_modules/
    //     }, {
    //         test: /\.css$/,
    //         use: ExtractTextPlugin.extract({
    //             fallback: "style-loader",
    //             use: [{
    //                 loader: "css-loader",
    //                 options: {
    //                     modules: true,
    //                     localIdentName: '[name]__[local]--[hash:base64:5]'
    //                 }
    //             }, {
    //                 loader: "postcss-loader"
    //             }],
    //         })
    //     }
    //     ]
    // },
    // // },
    // plugins: [
    //     new webpack.BannerPlugin('版权所有，翻版必究'),
    //     new HtmlWebpackPlugin({
    //         template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
    //     }),
    //     new webpack.optimize.OccurrenceOrderPlugin(),
    //     new webpack.optimize.UglifyJsPlugin(),
    //     new ExtractTextPlugin("style.css")
    // ]
};
