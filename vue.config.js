module.exports = {
    configureWebpack: {
        resolve: {
            // 给路径起别名。@表示src
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}