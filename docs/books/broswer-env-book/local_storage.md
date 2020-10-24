# LocalStorage

有一些场景需要缓存一些数据，在这些情况下数据都不会丢失：

- 刷新页面；
- 切换 tab；
- 关闭浏览器；

它就是 localStorage，它和 sessionStorage 一样，都是 Storage 的实例。要访问同一 localStorage 的数据时，要保证协议、域名和端口都一致才能够访问。

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



## 监听事件

无论是 sessionStorage 还是 localStorage，当数据发生变化时都能够监听到，我们一 localStorage 为例来监听一下 Storage 的事件。

需要注意一点，这种事件监听在同一页面并不会监听到事件。比如：

A页面：

访问 [http://localhost:2081/cookie/cookie.html](http://localhost:2081/cookie/cookie.html) ，如果在这个页面响应监听到事件，必须在另一个页面进行修改 storage 才能触发。在当前页面修改 localStorage 即使页面中加了监听事件：

```js
window.addEventListener('storage', event => {
    alert('change');
    console.log(event);
});
```



B页面：

访问  [http://localhost:2081/cookie/cookie.html](http://localhost:2081/cookie/cookie.html) ，如果对 localStorage 进行了修改，A页面将收到 storage 被修改的事件。

```js
localStorage.setItem('name', '公众号素燕');
localStorage.clear();
localStorage.removeItem('name');
```



同样，监听事件也适用于 sessionStorage。

<GongZhongHao></GongZhongHao>