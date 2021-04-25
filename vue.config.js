/* eslint-disable */
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 区分打包环境与开发环境
    // process.env.NODE_ENV==='production'  // (打包环境)
    // process.env.NODE_ENV==='development' // (开发环境)
    // baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',

    // publicPath: process.env.NODE_ENV === 'production' ? "./" : '/',  //  用用程序默认部署位置，‘/’根目录，存放子目录ex：‘/web/’
    publicPath: "./", // 公共路径(必须有的)
    outputDir: 'dist', // 输出文件目录
    assetsDir: "static", //静态资源文件名称
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            '/': {
                target: 'http://localhost:9997/',
                ws: true,
                changeOrigin: true, //允许跨域
                // pathRewrite: {
                //   '^/api': '/api'
                // }
            }
        }
    },
};