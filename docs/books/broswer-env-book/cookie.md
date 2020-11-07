# Cookie

在学习 cookie 之前需要明白我们为啥要用 cookie，不用 cookie 行不行？

试想一下这种情形，用户登录一个购物网站进行购物时，当登录后即可获得个人的购物车信息，即使过了几天后，用户不登录仍然能够获取到购物车的信息，为啥？

这背后其实用的是 Cookie 机制。

## 什么是 Cookie

cookie 其实是 HTTP cookie，它是客户端缓存会话（session）的一种机制，比如我们打开一个网页的时候，浏览器就与服务端建立了一次会话，在这次会话当中，浏览器会向服务端访问数据，有些数据对于用户来说是私有的，比如购物车信息；有些是与用户本身无关的，比如购物网站的商品列表。

对于私有的数据，用户必须进行登录才能够访问，当用户输入账号和密码后，服务端验证成功后会给客户端下发一个 Token（可看做是一个临时密码），当用户想访问私有数据的时候只需要带上这个 token 就行，不需要每次都需要输入密码。

那么问题来了，在请求服务端数据的时候，难道在每个请求参数里都要加一个 token 吗？如果用户关闭网页后 token 就被释放了，那如何才能够保证 token 的不丢失呢？

答案是通过 cookie 机制，浏览器提供了 cookie 的缓存机制，能够持久保存一些数据，即使用户关闭浏览器，再打开浏览器时 cookie 仍然保留着。

## Cookie 究竟长什么样

打开网页 https://github.com/lefex/FE ，进入调试模式可以看到所有的 cookie：

[![BVVFaR.jpg](https://s1.ax1x.com/2020/10/24/BVVFaR.jpg)](https://imgchr.com/i/BVVFaR)

可以看到 cookie 被保存到了一张类似 excel 的表格中，由下面这些字段组成：

- `name`：名字必须是唯一的，用来标识一个 cookie，必须经过 URL-encoded；
- `value`：cookie 的值，cookie 保存的具体内容，必须经过 URL-encoded；
- `domain`：cookie 要生效的域名，可控制哪些网络请求要携带 cookie，比如 `.github.com` 下的 cookie 将同时适用于它的子域名 `lefex.github.com`；
- `path`：控制 cookie 在那个 path 下生效，比如设置 path 为 `/user/suyan`，那么该 cookie 只能在包含 path 为 `/user/suyan` 请求中生效，如：`https://lefex.github.com/user/suyan`；
- `expires`：控制 cookie 的过期时间，比如你所登录的网站过一段时间后，发现还需要你进行登录操作，这是因为 cookie 过期了；
- `http-only`：该 cookie 不能通过脚本进行访问，比如在浏览器里通过 document.cookie 无法获取到 cookie；
- `secure`：标记是否只有 https 的请求才能够使用 cookie；
- `same-site`：主要用来解决 CSRF 攻击问题，防止攻击者偷走你的 cookie，可以设置 Strict、Lax 和 None 这三个值；

## 通过 JavaScript 操作 Cookie

在浏览器中，并没有提供丰富的 api 来操作 cookie，但 cookie 个格式是一个字符串，基本格式如下，不同值直接使用 `;` 分割：

```js
Set-Cookie: <cookie-name1>=<cookie-value1>; Domain=<domain-value>;
Path='/' Secure; HttpOnly; SameSite=Lax; Expires=2021-10-24T05:27:23.000Z; 
<cookie-name2>=<cookie-value2>; Domain=<domain-value>; Path='/' Secure; 
HttpOnly; SameSite=Lax; Expires=2021-10-24T05:27:23.000Z;
```

获取所有的 cookie：

```js
document.cookie
```

设置 cookie：

```js
let cookieText = '';

let token = encodeURIComponent('token');
let cookie1 = `${token}=qianduanxiaoke; 
domain=localhost; path=/; sameSite=Lax;`
cookieText += cookie1;
// 对老的 cookie 无影响，除非有同名的 cookie，会覆盖
document.cookie = cookieText;
```

在实际项目中，我们一般直接使用第三方库来操作 cookie，基本原理非常简单，就是对 cookie 字符串进行操作。

## 限制

需要注意一点，不是说一个域名下想保存多少 cookie 就保存多少，而且 cookie 的大小也有限制。不同浏览器对应的限制可能并不相同。在使用 cookie 的时候，你心中应该有杆秤，不能随随便便往 cookie 里保存数据，一定要留意。下面是几条基本的限制，不同的浏览器限制不同：

- 每个 cookie 最多 4096 bytes；
- 每个域名最多保存 20 个 cookies；
- 每个域名 cookie 的总大小最多 81920 bytes；

## 错误的做法

- 避免用 cookie 当 storage

cookie 虽然能够持久缓存一些数据，但是切记不能用来做业务相关的数据存储，这样会导致网络请求时会携带没必要的 cookie 信息。而且，不同的浏览器会对 cookie 的个数和大小有限制；



## 参考

[Cross-Site Request Forgery is dead!](https://scotthelme.co.uk/csrf-is-dead/)

[Using the Same-Site Cookie Attribute to Prevent CSRF Attacks](https://www.netsparker.com/blog/web-security/same-site-cookie-attribute-prevent-cross-site-request-forgery/)

[js-cookie](https://github.com/js-cookie/js-cookie)

[被乱用的 Cookie](https://mp.weixin.qq.com/s/iDOoeBA48gnoJUhkCHosqA)

<GongZhongHao></GongZhongHao>