# 初次见面

朋友，你来了！

我是本书的作者素燕，目前就职于百度，做过 iOS，目前正在做前端。写这本书的初衷是想从 Vue3 的基础出发，并不断深入，最终掌握 Vue 的核心编程思想。我始终相信一句话“做难事，必有所成”，用 Vue 非常简单，可能几个小时就能够学会，但是 Vue 的编程思想你是否也掌握了，如果让你自己设计一个 Vue 框架，你是否有思路？

前期使用 Vue 的过程中，我也是停留在会用的阶段，后来踩了不少坑，明明可以很容易实现的功能，却走了不少弯路。后来，我下定决心，要搞懂 Vue 的编程思想，花了几个月的时间，算是把 Vue 的玩法搞懂了。写此书是希望能够实现我的一个梦想 —— 帮助 10W 人入门并进阶前端。

本书绝不是官方文档的 copy，而是官方文档的升华，把官方文档那些啰嗦的地方删掉，弥补一些核心的知识，加入一些编程思想。你可以没有Vue编程经验，也能够读懂本书，本书的核心思想是帮你入门并掌握 Vue 的编程思想。

如果觉得本书不错，可以分享给你身边的朋友。如果想在手机端阅读，可以关注我的公众号。

<GongZhongHao></GongZhongHao>

[Vue3官方文档](https://v3.vuejs.org/guide/introduction.html)

yarn --ignore-scripts
添加 sourcemap 进行调试，不是单文件
"dev": "node scripts/dev.js --sourcemap",
yarn dev 编译

runtime 运行时，程序运行相关
compiler 编译相关
reactivity 响应式

打包格式 cjs，umd，esm

cmd+p打开某个文件

实例的真正创建者，renderer 渲染器
渲染函数：把虚拟 DOM 变成真正的 DOM
patch 把虚拟dom转换为真实 dom 的实际操作者
其实是根组件提供的 render 函数，如果没有就需要编译器来编译生成

createRenderer 创建自定义渲染器
