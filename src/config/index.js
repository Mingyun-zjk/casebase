module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: { // 代理配置信息
            '/taskinfo': {
                target: 'http://192.168.31.110:9997', // API服务所在IP及端口号
                changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
                pathRewrite: {
                    '^/taskinfo': '' // 重写路径
                }
            },

            host: 'localhost', // can be overwritten by process.env.HOST
            port: 9997, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
            autoOpenBrowser: true,
            errorOverlay: true,
            notifyOnErrors: true,
            poll: false,
        },
    }
}