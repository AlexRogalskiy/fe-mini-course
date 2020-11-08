## jest 测试框架

👩🏻‍💻 Developer Ready: A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.

🏃🏽 Instant Feedback: Fast, interactive watch mode only runs test files related to changed files.

📸 Snapshot Testing: Capture snapshots of large objects to simplify testing and to analyze how they change over time.

Star 数 32.5k 

[到 GitHub 中瞅瞅](https://github.com/facebook/jest)


## 推荐理由

平时写业务的时候很少接触到自动化测试，但是像 vue、react 这样的代码库，完全由世界上不同的人维护着，如何能够保证别人提交的代码不影响已有的功能呢？

这不得不借助自动化测试。

jest 是一个令人愉快的 JavaScript 测试框架，专注于简洁明快。像 Babel、 TypeScript、 Node、 React、 Angular、 Vue 这样的知名框架都在使用它。

假如有下面的代码要测试：

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

可以使用 jest 进行这样测试：

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

在 package.json 文件中写入：

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

运行测试：

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
