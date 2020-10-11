const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '前端小课',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/fe-mini-course/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1f2022' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  markdown: {
    lineNumbers: true
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      {
        text: '给读者一封信',
        link: '/letter/',
      },
      {
        text: '前端学习路线',
        link: '/lerarnRouter/',
      },
      {
        text: '免费订阅',
        link: '/subcribe/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/lefex/FE'
      }
    ],
    sidebar: {
      '/ready-book/': [
        {
          title: '第 1 阶段《开发前准备》',
          collapsable: false,
          children: [
            '',
            '1-VSCode',
            '2-broswer',
            '3-broswer-debug',
            '4-GitHub',
            '5-git',
            '6-webServer'
          ]
        }
      ],
      '/html-book/': [
        {
          title: '第 2 阶段《HTML踏入前端大门》',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ],
      '/css-book/': [
        {
          title: '第 3 阶段《CSS网页的化妆品》',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}