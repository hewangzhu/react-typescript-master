// // typescript+react
// // 强类型 编译过程就把代码检查了
// // webpack .ts文件 .tsx文件 => loader 变成 原生的 .js文件  web执行

// var path = require('path');
// var webpack = require('webpack');
// var basePath = __dirname;
// var HtmlWebpackPlugin = require('html-webpack-plugin')


// module.exports = {
//     // koa 上下文环境
//     context: path.join(basePath, 'src'),
//     resolve: {
//         extensions: ['.js', '.ts', '.tsx']
//     },
//     entry: {
//         // 两个css入口， webpack 一切皆打包
//         // css 作为入口文件之一 独立文件 便于文件分离
//         app: './index.ts',
//         appStyles: './css/site.css',
//         vendorStyles: [
//             '../node_modules/bootstrap/dist/css/bootstrap.css'
//         ]
//     },
//     output: {
//         // dist 目标输入出文件夹
//         path: path.join(basePath, 'dist'),
//         filename: '[name].js'
//     },
//     module: {
//         rules: [
//             {
//                 // .ts .tsx 匹配    ？正则 存在有无都可以
//                 test: /\.tsx?$/,
//                 excludes: /node_modules/,
//                 // npm 包 loader .ts -> typescript -> .js
//                 // .tsconfig.js
//                 loader: 'awesome-typescript-loader',
//                 options: {
//                     useBabel: true
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     // 行内样式嵌入JS
//                     { loader: 'style-loader'},
//                     { loader: 'css-loader'}
//                 ]
//             }
//         ]
//     },
//     devtool: 'inline-source-map',
//     devServer: {
//         port: 8080,
//         noInfo: true
//     },
//     plugins: [
//         // #app spa
//         // html + react root 组件
//         new  HtmlWebpackPlugin({
//             filename: 'index.html',  //生成的index.html 在 ./dist/下
//             template: 'index.html',   //模板在 ./src/下
//             hash: true
//             // 浏览器缓存 index.html
//             // 生成的.js?1232323 静态文件更新
//         })
//     ]
// }
// typescript+react
// 强类型 编译阶段就把代码给检查了
// webpack .ts .tsx -> loader  .js web执行

var path = require('path');
var webpack = require('webpack');
var basePath = __dirname;
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // koa 上下文环境
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']    
    },
    entry: {
        app: './index.tsx',
        // 公用库单独打包，便于性能优化
        // 业务会经常变 vendor 不变
        vendor: [
            "react",
            "react-dom",
            "react-router"
        ],
        // 两个css入口, webpack 一切皆打包 
        // css作为入口文件之一 独立打包, 便于文件分离
        appStyles: './css/site.css',
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
            '../node_modules/toastr/build/toastr.css'
        ]
    },
    output: {
        // dist 目标输入出文件夹
        path: path.join(basePath, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // .ts .tsx 匹配 ?正则
                test: /\.tsx?$/,
                exclude: /node_modules/,
                // npm 包 loader .ts-> typescript -> .js
                // .tsconfig.js
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    // 行内样式潜入js
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        noInfo: true
    },
    plugins: [
        // #app  spa
        // html ＋ react root 组件
        new HtmlWebpackPlugin({
            filename: 'index.html',
             //生成的 ./dist/
            template: 'index.html', 
            //模板 ./src/
            hash: true  //版本号
            // 浏览器缓存  index.html
            // 生成的.js?1232323 静态文件更新
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor',
            chunks: ['vendor']
        })
    ]
}