const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //html文件打包，压缩
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //删除原来的打包文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './example/src/index.js'),
    output: {
        path: path.join(__dirname, 'example/dist'),
        filename: './js/bundle.[hash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                use: [
                    // {loader: "style-loader"},        //在页面内嵌入css
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            publicPath: '../'
                        }
                    }, //单独抽离css
                    { loader: 'css-loader' },
                    {
                        //自动添加前缀
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: 'sass-loader' // 将 Sass 编译成 CSS
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                  },
                  {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                  },
                  {
                    loader: "less-loader" // 将 Sass 编译成 CSS
                  }
                ]
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: './src/img/favicon.ico', //图标
            template: './src/index.html', //指定要打包的html
            filename: 'index.html', //指定输出路径和文件名
            template: path.join(__dirname, './example/src/index.html'),
            filename: './index.html',
            minify: {
                //压缩
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true, //删除空白符与换行符
                removeAttributeQuotes: true //去除属性引用
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        port: 3001
    }
}
