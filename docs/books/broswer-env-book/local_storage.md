# LocalStorage

前面我们学习了 cookie 和 sessionStorage，他们都具有存储功能，但各有各的用途。今天我们学习 LocalStorage，它才是真正的缓存机制，也就是我们通常说的磁盘缓存，他可以做到在这些场景下数据丢失：

- 刷新页面；
- 切换 tab；
- 关闭浏览器；

它和 sessionStorage 一样，都是 Storage 的实例。要访问同一 localStorage 的数据时，要保证协议、域名和端口都一致才能够访问。

它与 sessionStorage 使用一致：

```js
// 增加一条数据
localStorage.setItem('name', '公众号素燕');
localStorage.setItem('logo', '前端小课， 帮助 10W 人入门并进阶前端');

// 获取一条数据，key 为 name
console.log(localStorage.getItem('name'));
// 获取第一条数据的 key
console.log(localStorage.key(0));
// 删除一条数据，key 为 logo
localStorage.removeItem('logo')
```

保存在 localStorage 的数据不会自动清除，除非通过代码清除，或者清除浏览器的缓存。但是它又有限制，比如有些浏览器限制最大只能存储 5MB。

你可以在浏览器调试模式（Inspect）下打开的 Application -> Local Storage 中查看存储的内容，也可以修改。


## 监听事件

无论是 sessionStorage 还是 localStorage，当数据发生变化时都能够监听到，我们以 localStorage 为例来监听一下 Storage 的事件。

需要注意一点，这种事件监听在同一页面并不会监听到事件。比如：

#### A页面：

访问 [http://localhost:2081/cookie/cookie.html](http://localhost:2081/cookie/cookie.html) ，如果在这个页面接收监听到事件，必须在另一个同一地址的页面进行修改 storage 才能触发。在当前页面修改 localStorage 即使页面中加了监听事件，也不会接收到事件。

在 A 页面中添加监听事件：

```js
window.addEventListener('storage', event => {
    alert('change');
    console.log(event);
});
```



#### B页面：

访问  [http://localhost:2081/cookie/cookie.html](http://localhost:2081/cookie/cookie.html) ，如果对 localStorage 进行了修改，A页面将收到 storage 被修改的事件。

```js


localStorage.setItem('name', '公众号素燕');
localStorage.clear();
localStorage.removeItem('name');
```



同样，监听事件也适用于 sessionStorage。

<GongZhongHao></GongZhongHao>