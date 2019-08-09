module.exports = {
    title: 'demo-vuepress',
    description: '周周前端之路',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    base: '/',
    themeConfig: {
        sidebarDepth: 4,
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'home', link: '/' },
            {
                text: 'JS',
                items: [
                    { text: 'JS基础', link: '/js/basis/' },
                    { text: 'ES6', link: '/js/ES6/' },
                    { text: 'Vue', link: '/js/vue/' },
                    { text: '构建', link: '/js/build/' }
                ]
            },
            {
                text: '前端',
                items: [
                    { text: 'HTML', link: '/frontEnd/html/' },
                    { text: 'CSS', link: '/frontEnd/css/' },
                    { text: '浏览器', link: '/frontEnd/browser/' },
                    { text: '工具', link: '/frontEnd/interview/' },
                    { text: '移动端', link: '/frontEnd/mobile/' },
                    { text: '面试', link: '/frontEnd/interview/' }
                ]
            },
            {
                text: '协议', items: [
                    { text: 'HTTP', link: '/protocol/HTTP' },
                    { text: 'TCP/IP', link: '/protocol/TCP' },
                    { text: '其他', link: '/protocol/others' }
                ]
            },
            {
                text: '计算机基础', items: [
                    { text: '数据结构', link: '/basis/dataStructure' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/zhouzhou525' }
        ],
        sidebar: {
            '/js': [
                {
                    title: 'JS基础',
                    children: [
                        '/js/basic/js入门1',
                        '/js/basic/js入门2',
                    ]
                },
                {
                    title: 'ES6',
                    children: [
                        '/js/senior/js高级1',
                        '/js/senior/js高级2',
                    ]
                },
                {
                    title: 'Vue',
                    children: [
                        '/js/vue/vueRouter',
                        '/js/senior/js高级2',
                    ]
                },
                {
                    title: '构建',
                    children: [
                        '/js/senior/js高级1',
                        '/js/senior/js高级2',
                    ]
                }
            ]
        }
    }
}
