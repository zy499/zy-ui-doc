module.exports = {
    title: 'Sade Ui', // 设置网站标题
    description: 'ui 库', //描述
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
    ],
    dest: './dist', // 设置输出目录
    port: 8089, //端口
    themeConfig: { //主题配置
        sidebarDepth: 3,
        nav: [{
            text: '主页',
            link: '/'
        }, // 导航条
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        'button'
                    ]
                }
            ]
        }
    }
}