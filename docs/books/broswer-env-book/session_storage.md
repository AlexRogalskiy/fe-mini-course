# SessionStorage

有些场景下，开发者需要保存一些数据，但是只是客户端使用，并不想把这些数据交给服务端，也不想把这些数据进行缓存到磁盘。

我来描述一个实际工作中用到的例子：

有一天我遇到一个情况，PM 要求当用户点击下载按钮下载文件时，如果用户未登录引导用户去登录，当登录成功后需要弹出下载文件的弹窗。但是我们有个策略，用户登录成功后需要刷新当前页面来获取文件的一些状态，以保证文件的状态正确，比如该用户有没有购买过。那问题来了，网页一旦刷新，保存到内存的数据将会被释放，并不能区分用户是点击下载按钮时触发的登录逻辑。

遇到这种情况，如果能够在网页刷新后保留一个点击下载按钮的标记，在网页加载完成后通过这个标记来决定是否要弹出下载弹窗。

解决这个问题，最好的策略是使用 `SessionStorage`，它的存储策略是：

::: tip sessionSotrage

数据会一直保存，知道浏览器关闭后数据将被清除，可以看做是在浏览器的生命周期内的一个缓存策略。

:::

## 用 JavaScript 操作

`sessionStorage` 是 `Storage` 实例，每个 Storage 会有下面这些方法：

```js
length // 总共保存了多少个数据；
clear() // 清空
getItem(name) // 通过 key 来获取值
key(index) // 通过下标获取 name
removeItem(name) // 通过 name 删除一条数据
setItem(name, value) // 新增一条数据
```

具体操作：

```js
// 增加一条数据
sessionStorage.setItem('name', '公众号素燕');
sessionStorage.setItem('logo', '前端小课， 帮助 10W 人入门并进阶前端');

// 获取一条数据，key 为 name
console.log(sessionStorage.getItem('name'));
// 获取第一条数据的 key
console.log(sessionStorage.key(0));
// 删除一条数据，key 为 logo
sessionStorage.removeItem('logo')
```



总之，如果你想保存一条数据，不会因为页面的刷新而丢失，sessionStorage 是非常好的选择。

<GongZhongHao></GongZhongHao>