(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{410:function(s,e,a){"use strict";a.r(e);var t=a(42),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第6课-·-搞一个万能的-webserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第6课-·-搞一个万能的-webserver"}},[s._v("#")]),s._v(" 第6课 · 搞一个万能的 webServer")]),s._v(" "),a("p",[s._v("在前端开发当中，接触的 webServer 比较多。这节内容也是为了给后续内容奠定一个基础。如果暂时看不懂，可以先跟着这个教程做一遍。")]),s._v(" "),a("p",[s._v("当我们在浏览器中浏览一个网页时，其实是浏览器通过 HTTP 协议向一个 webserver 请求内容，浏览器接收到 HTML 后进行渲染，最终呈现给用户文字、图片等内容。今天我们的目的是借助 webpack 来做一个 webserver，只不过是跑在我们电脑上的。")]),s._v(" "),a("p",[s._v("在搭建 webserver 之前，需要大家了解什么是 Node。")]),s._v(" "),a("p",[s._v("很早以前，JavaScript 代码只能在浏览器里执行，后来因为 Node 的出现，使得 JavaScript 可以跑在我们的电脑上，不依托与浏览器环境。你可以把 Node 看做是电脑上的一个软件，当然它也能跑到 Linux 这样的系统中。下面我们在电脑上安装 Node。")]),s._v(" "),a("p",[s._v("直接到 "),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v(" 下载安装包即可，这里不再赘述。")]),s._v(" "),a("p",[s._v("当安装完成后，可以在我们电脑的终端（或者叫 shell）输入：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("node --version\nv12.13.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果能正常输出 node 的版本号，说明 node 安装成功了。说起 node，不得不提 npm（node package manager），它是用来管理第三方 JavaScript 代码的，可以把它看做是一个第三方 JavaScript 资源库，如果你需要这些资源的时候直接下载即可。还不懂，可以把它看做是一个百度网盘，用来存放各种资源，当别人需要资源的时候直接下载即可。")]),s._v(" "),a("p",[s._v("搭建 webserver 就依赖于 npm 提供的第三方库 webpack。我在"),a("a",{attrs:{href:"https://github.com/lefex/FE/tree/master/webserver",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端下课 GitHub"),a("OutboundLink")],1),s._v(" 上提供了一个 webserver，你可以直接下载。")]),s._v(" "),a("p",[s._v("下载完后，目录类似这样：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜  FE git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/Users/suyanwang/Desktop/fe/FE\n➜  FE git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nanimation    demo         vue3         webserver\n➜  FE git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后执行命令：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cd webserver\nnpm install\nnpm run start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行完成后，终端显示类似于这样：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜  webserver git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" webserver@1.0.0 start /Users/suyanwang/Desktop/fe/FE/webserver\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" webpack-dev-server --open\n\nℹ ｢wds｣: Project is running at http://localhost:2081/\nℹ ｢wds｣: webpack output is served from /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("然后在浏览器访问 "),a("a",{attrs:{href:"http://localhost:2081/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:2081/"),a("OutboundLink")],1),s._v("，即可得到下面的效果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/10/14/0IqsDf.jpg",alt:"浏览器效果图"}})]),s._v(" "),a("p",[s._v("当我们想要创建 HTML 文件时，可以直接在 dist 目录下创建，比如我创建了一个 first.html，")]),s._v(" "),a("p",[s._v("这可以通过 "),a("a",{attrs:{href:"http://localhost:2081/first.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:2081/first.html"),a("OutboundLink")],1),s._v(" 来访问这个页面的内容，目录结构如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n├── app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n├── dist\n├──── first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n├──── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css\n└──── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n├── node_modules\n├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n└── webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("本节内容你需要能够把 webserver 跑起来，页面可以正常访问，并且学会终端使用，了解什么是 node 和 npm。大家加油！")]),s._v(" "),a("GongZhongHao")],1)}),[],!1,null,null,null);e.default=n.exports}}]);