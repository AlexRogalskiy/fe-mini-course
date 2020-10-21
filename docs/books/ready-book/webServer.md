# 1.5 用 webServer 预览网页

在前端开发当中，接触的 webServer 比较多。这节内容也是为了给后续内容奠定一个基础。如果暂时看不懂，可以先跟着这个教程做一遍。

当我们在浏览器中浏览一个网页时，其实是浏览器通过 HTTP 协议向一个 webserver 请求内容，浏览器接收到 HTML 后进行渲染，最终呈现给用户文字、图片等内容。今天我们的目的是借助 webpack 来做一个 webserver，只不过是跑在我们电脑上的。

在搭建 webserver 之前，需要大家了解什么是 Node。

很早以前，JavaScript 代码只能在浏览器里执行，后来因为 Node 的出现，使得 JavaScript 可以跑在我们的电脑上，不依托与浏览器环境。你可以把 Node 看做是电脑上的一个软件，当然它也能跑到 Linux 这样的系统中。下面我们在电脑上安装 Node。

直接到 [官网](https://nodejs.org/en/) 下载安装包即可，这里不再赘述。

当安装完成后，可以在我们电脑的终端（或者叫 shell）输入：

```shell
node --version
v12.13.0
```

如果能正常输出 node 的版本号，说明 node 安装成功了。说起 node，不得不提 npm（node package manager），它是用来管理第三方 JavaScript 代码的，可以把它看做是一个第三方 JavaScript 资源库，如果你需要这些资源的时候直接下载即可。还不懂，可以把它看做是一个百度网盘，用来存放各种资源，当别人需要资源的时候直接下载即可。

搭建 webserver 就依赖于 npm 提供的第三方库 webpack。我在[前端小课 GitHub](https://github.com/lefex/FE/tree/master/webserver) 上提供了一个 webserver，你可以直接下载。

下载完后，目录类似这样：

```shell
➜  FE git:(master) pwd
/Users/suyanwang/Desktop/fe/FE
➜  FE git:(master) ls
animation    demo         vue3         webserver
➜  FE git:(master)
```

然后执行命令：

```js
cd webserver
npm install
npm run start
```

执行完成后，终端显示类似于这样：

```shell
➜  webserver git:(master) ✗ npm run start

> webserver@1.0.0 start /Users/suyanwang/Desktop/fe/FE/webserver
> webpack-dev-server --open

ℹ ｢wds｣: Project is running at http://localhost:2081/
ℹ ｢wds｣: webpack output is served from /
```

然后在浏览器访问 [http://localhost:2081/](http://localhost:2081/)，即可得到下面的效果：

![浏览器效果图](https://s1.ax1x.com/2020/10/14/0IqsDf.jpg)

当我们想要创建 HTML 文件时，可以直接在 dist 目录下创建，比如我创建了一个 first.html，

这可以通过 [http://localhost:2081/first.html](http://localhost:2081/first.html) 来访问这个页面的内容，目录结构如下：

```js
├── README.md
├── app.js
├── dist
├──── first.html
├──── index.css
└──── index.html
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── webpack.config.js
```



本节内容你需要能够把 webserver 跑起来，页面可以正常访问，并且学会终端使用，了解什么是 node 和 npm。大家加油！

<GongZhongHao></GongZhongHao>