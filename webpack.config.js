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
                {
                    test:/\.(woff|svg|eot|ttf)(\?.*)?$/,
                    loader:'url-loader?limit=50000'
                },
                {
                    test:/\.(png|jpg|gif)$/,
                    loader:'url-loader?limit=819200'
                }

            ]
        },
        plugins:[
            new ExtractTextWebpackPlugin({
                filename:"bundle.css"
            }),
            new htmlWebpackPlugin({
                filename:"index.html",
                template:path.resolve(__dirname,'src/index.html')
            })
        ]
    }
}