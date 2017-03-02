var path = require('path');
var webpack = require('webpack');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function (env) {
    return{
        entry:path.resolve(__dirname,'src/main.js'),
        output:{
            path:path.resolve(__dirname,'dist'),
            filename:'[name].js'
        },
        devtool:'cheap-eval-source-map',
        module:{
            rules:[
                {
                    test:/\.jsx?$/,
                    loader:'babel-loader',
                    exclude:/node_modules/
                },
                {
                    test:/\.css$/,
                    use:ExtractTextWebpackPlugin.extract({
                        fallback:"style-loader",
                        use:"css-loader",
                        publicPath:'/dist'
                    })
                },

            ]
        }
    }
}