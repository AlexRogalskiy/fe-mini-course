# 安装

vue 也就是一个 npm 包，安装它如同安装其它 npm 包一样，主要有 3 中方式来安装 Vue

## 直接使用 CDN 地址

这种方式直接在 HTML 文件中嵌入一个 script 标签，src 为 vue 包的地址，这个包在线上一定要指定一个特定的版本，避免出现一些意想不到的问题。

```html
<script src="https://unpkg.com/vue@next"></script>
```

## npm

```shell
npm install vue@next
```

## Vue-CLI

它是 Vue 提供的一个脚手架 CLI 工具，通过命令行的方式来创建一个 Vue 项目。[直接看文档](https://cli.vuejs.org/)

```shell
yarn global add @vue/cli
# 或者
npm install -g @vue/cli
```

创建项目：

```shell
# wechat 是要创建的项目名称
vue create wechat
```

在创建好的 wechat 项目中执行，这样就可以使用 vue3 了

```shell
vue upgrade --next
```

## Vite

这个是一种新的方式，个人觉得更友好。

```shell
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```