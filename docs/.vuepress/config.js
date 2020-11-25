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
            'ready-book/VSCode',
            'ready-book/broswer',
            'ready-book/GitHub',
            'ready-book/git',
            'ready-book/webServer'
          ]
        },
        {
          title: '第 2 章 CSS 样式与布局',
          collapsable: true,
          children: [
            'css-book/flexbox',
            'css-book/layout',
            'css-book/scrollbar'
          ]
        },
        {
          title: '第 3 章 用好 HTML',
          collapsable: true,
          children: [
            'html-book/introduction'
          ]
        },
        {
          title: '第 4 章 JavaScript编程',
          collapsable: true,
          children: [
            'javaScript-book/introduction',
            'javaScript-book/number',
            'javaScript-book/string',
            'javaScript-book/hookConsoleLog',
            'javaScript-book/csv'
          ]
        },
        {
          title: '第 5 章 DOM 艺术',
          collapsable: true,
          children: [
            'dom-book/introduction'
          ]
        },
        {
          title: '第 6 章 浏览器环境',
          collapsable: true,
          children: [
            'broswer-env-book/introduction',
            'broswer-env-book/cookie',
            'broswer-env-book/session_storage',
            'broswer-env-book/local_storage'
          ]
        },
        {
          title: '第 7 章 浏览器工作原理',
          collapsable: true,
          children: [
            'broswer-work-book/introduction'
          ]
        },
        {
          title: '第 8 章 网络编程',
          collapsable: true,
          children: [
            'network-book/introduction'
          ]
        },
        {
          title: '第 9 章 前端框架Vue',
          collapsable: true,
          children: [
            'vue-book/introduction'
          ]
        },
        {
          title: '第 10 章 前端构建',
          collapsable: true,
          children: [
            'package-book/introduction'
          ]
        },
        {
          title: '第 11 章 Node.js',
          collapsable: true,
          children: [
            'nodejs-book/introduction'
          ]
        },
        {
          title: '第 12 章 编译原理',
          collapsable: true,
          children: [
            'compiler-book/introduction'
          ]
        },
        {
          title: '第 13 章 前端动画',
          collapsable: true,
          children: [
            'animation-book/introduction'
          ]
        },
        {
          title: '第 14 章 上线相关',
          collapsable: true,
          children: [
            'online-book/introduction'
          ]
        },
        {
          title: '第 15 章 typeScript',
          collapsable: true,
          children: [
            'ts-book/introduction'
          ]
        },
      ],
      '/resource-book/': [
        {
          title: '前端学习资源汇总',
          collapsable: false,
          children: [
            'tools',
            'learn'
          ]
        }
      ],
      '/dsa-book/': [
        {
          title: '《大厂算法》',
          collapsable: false,
          children: [
            'ip-address'
          ]
        }
      ],
      '/framework-book/': [
        {
          title: '《前端开源库》',
          collapsable: false,
          children: [
            'jest',
            'clipboard',
            'date',
            'html2canvas',
            'fs-extra',
            'howler',
            'codeMirror',
            'md5',
            'qrcode'
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
      '/vue3-book/': [
        {
          title: '《Vue3中文手册》',
          collapsable: false,
          children: [
            'installation',
            'vue-instance',
            'template',
            'vif',
            'v-for',
            'lifecycle',
            'data',
            'class',
            'style',
            'component',
            'computed',
            'watcher',
            'refs',
            'solt',
            'event',
            'animation',
            'async_component',
            'input'
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
