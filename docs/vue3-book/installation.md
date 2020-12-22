# 安装

初次使用 Vue 的时候，无论是新项目还还是老项目，首先需要安装。安装 Vue 和安装其它 npm 包一样。下面我列举 4 种方式来安装 Vue。

## 直接使用 CDN 地址

这种方式直接在 HTML 文件中嵌入一个 script 标签，src 为 vue 包的地址。这个包如果在生产环境一定要指定一个特定的版本，避免出现一些意想不到的问题。这种方式在真实的项目开发中很少用到，写 demo 比较方便。

```html
<script src="https://unpkg.com/vue@next"></script>
```

## npm

注意，包名为 `vue@next`，主要 Vue2 还在维护当中，这种方式可以配合主流的打包工具使用，比如 webpack、roollup。

```shell
npm install vue@next
```

## Vue-CLI

Vue 官方提供的一个脚手架 CLI 工具，通过命令行的方式来创建一个 Vue 项目。[直接看文档](https://cli.vuejs.org/)

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

在创建好的 wechat 项目中执行，这样就可以使用 vue3 了。

```shell
vue upgrade --next
```

## Vite

这是一种新的方式，它跑起来更快，尤其对于大型项目来说，它的编译速度更快。在开发模式下，它使用原生的 ES Moudle，在生产环境使用 Rollup 进行打包。

`<project-name>` 为创建项目的名称。

```shell
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```

下面用 vite 创建的一个 Vue 项目：

```shell
├── index.html # html 模板
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
└── src # 源码
    ├── App.vue # 首次加载的组件
    ├── assets # 资源，比如图片
    │   └── logo.png
    ├── components # 组件
    │   └── Home.vue
    ├── index.css # 样式 css
    └── main.js # 入口
```

当在浏览器打开 index.html 时执行过程如下：

1、index.html 加载 main.js 文件并执行

这里需要注意 script 标签的 type="module"，这种就是原生 ES Module 的导入方式。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>和素燕一起学 Vue3，关注公众号素燕</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

2、main.js 文件中的代码执行

```js
// 引用 vue 中的 createApp 函数
import { createApp } from 'vue'
// 引用 App 这个组件
import App from './App.vue'
// 引入 css 文件，如果不引用，样式将不会被加载
import './index.css'
// 关键点是 createApp 这个函数，它接收 2 个参数，一个是根组件，一个是根组件对应的属性
// 调用 mount 把 App 组件挂载到选择器 #app 对应的 DOM 上
createApp(App).mount('#app')
```

3、App.vue 引用 App 组件

下面是一个单文件组件（SFC）的基本写法，template 声明模板，script 声明 js 代码，style 声明 css 样式。可以看到 App 组件中又引用了 Home组件，对于引用的组件需要使用 components 属性来声明。

```js
<template>
  <Home/>
</template>

<script>
// 引用 Home 组件
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
```

4、Home.vue，Home 组件内容如下，也是一个单文件组件。

```js
<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: '和素燕一起学习 Vue'
    }
  }
}
</script>
```

## 最后

本节内容介绍了 Vue 的安装方法，以及使用 vite 创建单页应用后，页面整个执行流程。

本节内容掌握 Vue 的安装和整个项目的执行顺序即可，关于组件、App的使用，后面会详细介绍。

如果在学习的过程中遇到问题，可加我微信 wsy9871 沟通。

## 参考

- [官方安装教程](https://v3.vuejs.org/guide/installation.html)
- [单文件组件 SFC](https://v3.vuejs.org/guide/single-file-component.html)