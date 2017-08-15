"use strict"

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

const node_modules_dir = path.resolve(__dirname, "node_modules");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [node_modules_dir],
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader'],
                exclude: [node_modules_dir],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["style-loader", "css-loader?modules"]
                })
            },
            {
                test: /\.less$/,
                use: ["css-hot-loader"].concat(
                    ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader?modules", "less-loader"]
                    })
                )
            },

        ]

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: function (module) {
                //打包引用的依赖库
                return module.context && module.context.indexOf(node_modules_dir) !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            //打包webpack运行时代码
            name: 'manifest'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html", //将会输出到dist目录中
            template: path.resolve(__dirname, 'apps/index.html'),
            alwaysWriteToDisk: true,    //HtmlWebpackHarddiskPlugin 插件的参数，true表示要写入输出文件到磁盘
            chunksSortMode: (chunk1, chunk2) => {
                let orders = ['manifest', 'vendors', 'app']
                let order1 = orders.indexOf(chunk1.names[0])
                let order2 = orders.indexOf(chunk2.names[0])
                return order1 > order2 ? 1 : order1 < order2 ? -1 : 0
            },
        }),
        new webpack.NamedModulesPlugin()
    ],
}
