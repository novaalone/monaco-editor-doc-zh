module.exports = {
  title: 'Monaco-Editor',
  description: 'Monaco-Editor API中文文档',
  head: [
    ['link', { rel: 'icon', href: '/monaco-editor-doc-zh/public/logo.png' }]
  ],
  base: '/monaco-editor-doc-zh/',
  themeConfig: {
    nav: [
    {
      text: '指南',
      link: '/guide/introduce'
    },
    {
      text: '速查手册',
      link: '/handbook/editor'
    },
    {
      text: '官网地址',
      link: 'https://microsoft.github.io/monaco-editor/'
    },
    {
      text: 'API全览',
      link: 'https://microsoft.github.io/monaco-editor/api/index.html'
    }
  ],
  sidebar: {
          '/guide/': [
            {
              title: '指南',
              collapsable: false,
              children: [
                'introduce',
                'start',
                'create',
                'functions',
                'language',
                'continue'
              ]
            },
          ],
          '/handbook/': [
            {
              title: '速查手册',
              collapsable: false,
              children: [
                'editor'
              ]
            }
          ]
        }
  }
}