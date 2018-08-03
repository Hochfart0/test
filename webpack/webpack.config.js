const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require("webpack");
const entry = require("./webpack_config/entry_webpack.js");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: entry,
    mode:'development',
    entry: {
        'index1':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8080/'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {importLoaders: 1}
                    },'postcss-loader']
                })
            },{
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        outputPath: 'img/'
                    }
                }]
            },{
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","sass-loader"],
                    fallback: "style-loader"
                })
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["env"]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttrbuteQuotes:true
            },
            hash:true,
            filename:'a.html',
            chunks:['index1']
        }),
        new ExtractTextPlugin("css/style.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin('嘉哥出品，必属精品!'),
        new webpack.ProgressPlugin({
            $: "jquery"
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        compress:true,
        open:true
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 500,
        ignored:/node_modules/
    }
}