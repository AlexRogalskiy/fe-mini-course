## clipboard 复制网页内容

Copying text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load. But most of all, it shouldn't depend on Flash or any bloated framework.
That's why clipboard.js exists.

Star 数 29.2k

[到 GitHub 瞅瞅](https://github.com/zenorocha/clipboard.js)

## 推荐理由

在前端页面中，实现复制功能很常见，最常用的是在 H5 打开 App 进行导流时，把 app 需要用到的数据通过剪贴板进行传递。在 Android 和 iOS 中，一句话即可搞定。

那么在前端中有没有好的方法来实现复制功能呢？

`clipboard` 是一个 js 库，专门用来处理前端页面中的复制操作，它底层使用的是 document.execCommand 这个 API。我们一起看个例子。从输入框中复制内容，可以给目标元素添加一个 `data-clipboard-target` 属性来，它的值就是能匹配到另一个元素的选择器。input 标签有个 id 选择器 fool，`data-clipboard-target` 这个属性值为 #foo，这样当点击按钮的时候即可复制输入框的内容到剪贴板。

```html
<!-- Target -->
<input id="foo"
value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg">
</button>
```