var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/test/sub_index.js', //入口
    output: {
        path: './bin', //输出
        filename: 'sub_index.bundle.js'
            //filename: "[name]-[hash].js"
    },
    //加载样式
    // module: {
    //     loaders: [{
    //         test: /\.css$/,
    //         loaders: ['style', 'css'],
    //         include: './src/test'
    //     }]
    // },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
}