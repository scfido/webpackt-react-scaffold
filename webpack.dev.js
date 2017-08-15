

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: [
            "react-hot-loader/patch",
             'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
             'webpack/hot/only-dev-server',
            path.resolve(__dirname, "apps/index.js"),
        ],
        
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: `/dist/`
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css")

        //使用WebpackDevServer时生成文件存于内存中，我们需要吧index.html写入硬盘，因此需要此插件。
        //现在我用webpack-hot-middleware代替WebpackDevServer，不再需要index.html写入硬盘了，所以不需要此插件了。
        //new HtmlWebpackHarddiskPlugin(),
    ],
}
