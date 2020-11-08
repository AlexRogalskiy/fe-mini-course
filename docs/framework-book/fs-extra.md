## fs-extra Node文件操作

fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods. It also uses graceful-fs to prevent EMFILE errors. It should be a drop in replacement for fs.

Star 数 7.1k

[到 GitHub 中瞅瞅](https://github.com/jprichardson/node-fs-extra)

## 推荐理由

在各种前端开工具链当中，大多都会操作文件。node 本身提供了 fs 模块，但用起来多有不便，前端最不缺的是工具库，只要你能想到就能找到对应的库。

在 vue-next 项目中，我发现作者使用的是 fs-extra，这个库用起来比较方便，大多数 api 都提供了多种实现方式，比如同步异步、Promise、async、await。不过需要使用 node 的版本为 10.12.0 版本或以上。

我们一起体验下复制文件的 api ：

```js
// 引入模块
const fs = require('fs-extra')

// 使用 promise 的方式，异步调用
fs.copy('/myfile', '/mynewfile')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))
```

```js
// 引入模块
const fs = require('fs-extra')

// 使用 Async/Await 异步调用:
async function copyFiles () {
  try {
    await fs.copy('/myfile', '/mynewfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}
```

```js
// 引入模块
const fs = require('fs-extra')

// 同步调用:
try {
  fs.copySync('/myfile', '/mynewfile')
  console.log('success!')
} catch (err) {
  console.error(err)
}
```

```js
// 引入模块
const fs = require('fs-extra')

// 使用 callback 的方式，异步调用
fs.copy('/myfile', '/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
})
```