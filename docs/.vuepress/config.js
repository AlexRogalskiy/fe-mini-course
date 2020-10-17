const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '首页',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/',
  // base: '/fe-mini-course/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1f2022' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://s1.ax1x.com/2020/10/12/0WW0mV.png' }],
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?f01690767851d657d101174b47fb22f6";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
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
        text: '学习资源',
        link: '/resource-book/',
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
      '/books/': [
        {
          title: '第 1 章 开发前准备',
          collapsable: true,
          children: [
            '',
            'ready-book/1-VSCode',
            'ready-book/2-broswer',
            'ready-book/3-broswer-debug',
            'ready-book/4-GitHub',
            'ready-book/5-git',
            'ready-book/6-webServer'
          ]
        },
        {
          title: '第 2 章 死磕 CSS 布局',
          collapsable: true,
          children: [
            'css-book/flow',
            'css-book/position',
            'css-book/flexbox',
            'css-book/layout'
          ]
        },
        {
          title: '第 3 章 用好 HTML',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 4 章 JavaScript编程',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 5 章 DOM 艺术',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 6 章 浏览器环境',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 7 章 浏览器工作原理',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 8 章 网络编程',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 9 章 前端框架Vue',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 10 章 前端构建',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 11 章 Node.js',
          collapsable: true,
          children: [
            '/'
          ]
        },
        {
          title: '第 12 章 编译原理',
          collapsable: true,
          children: [
            '/'
          ]
        },
      ],
      '/resource-book/': [
        {
          title: '《前端学习资源汇总》',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ],
      '/dsa-book/': [
        {
          title: '《前端项目实战》',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ],
      '/framework-book/': [
        {
          title: '《前端开源库》',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ],
      '/interview-book/': [
        {
          title: '《前端面试指南》',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ],
      '/project-book/': [
        {
          title: '《前端项目实战》',
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
