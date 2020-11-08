## html2canvas 网页截图

The script allows you to take "screenshots" of webpages or parts of it, directly on the users browser. The screenshot is based on the DOM and as such may not be 100% accurate to the real representation as it does not make an actual screenshot, but builds the screenshot based on the information available on the page.

Star 数 21.4k。

[到 GitHub 中瞅瞅](https://github.com/niklasvh/html2canvas)

## 推荐理由

往往会遇到这样的需求，把这个网页截图分享一下，网页是动态变化的，分享的时候不能把要分享的图片写死。这时候咋么办？
那就直接使用 html2canvas 吧，这家伙好使。

它的核心原理是把 DOM 重新渲染成 canvas，最终生成图片，这个思路在小程序的截图分享中会被经常用到。它不能在 nodejs 中使用，因为它依赖于浏览器环境。

写个代码看下：

```js
const dom = document.querySelector("#capture");
html2canvas(dom).then(canvas => {
    document.body.appendChild(canvas)
});
```

```html
<div id="capture" 
     style="padding: 10px; background: #f5da55">
    <h4 style="color: #000; ">公众号素燕 FGD!</h4>
</div>
```