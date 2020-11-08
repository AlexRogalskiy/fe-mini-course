(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{523:function(s,t,n){"use strict";n.r(t);var a=n(48),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"sessionstorage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[s._v("#")]),s._v(" SessionStorage")]),s._v(" "),n("p",[s._v("有些场景下，开发者需要保存一些数据，但是只在客户端使用，并不想把这些数据交给服务端，也不想把这些数据进行缓存到磁盘。但在浏览器打开后，只要浏览器不关闭，数据一直能够保留，即使刷新页面。")]),s._v(" "),n("p",[s._v("我来描述一个实际工作中用到的例子：")]),s._v(" "),n("p",[s._v("有一天我遇到一个情况，PM 要求当用户点击下载按钮下载文件时，如果用户未登录引导用户去登录，当登录成功后需要弹出下载文件的弹窗。但是我们有个策略，用户登录成功后需要刷新当前页面来获取文件的一些状态，以保证文件的状态正确，比如该用户有没有购买过。那问题来了，网页一旦刷新，保存到内存的数据将会被释放，并不能区分用户是点击下载按钮时触发的登录逻辑，还是点击登录按钮触发的登录。")]),s._v(" "),n("p",[s._v("遇到这种情况，如果能够在网页刷新后保存一个点击下载按钮的标记，在网页加载完成后通过这个标记来决定是否要弹出下载弹窗。")]),s._v(" "),n("p",[s._v("解决这个问题，最好的策略是使用 "),n("code",[s._v("SessionStorage")]),s._v("，而不是 "),n("code",[s._v("LocalStorage")]),s._v(" 它的存储策略是：")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("sessionSotrage")]),s._v(" "),n("p",[s._v("数据会一直保存，直到浏览器关闭后数据将被清除，可以看做是在浏览器的生命周期内的一个缓存策略。")])]),s._v(" "),n("h2",{attrs:{id:"用-javascript-操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用-javascript-操作"}},[s._v("#")]),s._v(" 用 JavaScript 操作")]),s._v(" "),n("p",[n("code",[s._v("sessionStorage")]),s._v(" 是 "),n("code",[s._v("Storage")]),s._v(" 实例，每个 Storage 会有下面这些方法：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("length "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 总共保存了多少个数据；")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 清空")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 key 来获取值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过下标获取 name")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 name 删除一条数据")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新增一条数据")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("具体操作：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 增加一条数据")]),s._v("\nsessionStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'公众号素燕'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsessionStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'logo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端小课， 帮助 10W 人入门并进阶前端'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取一条数据，key 为 name")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sessionStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取第一条数据的 key")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sessionStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除一条数据，key 为 logo")]),s._v("\nsessionStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'logo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("总之，如果你想保存一条数据，不会因为页面的刷新而丢失，sessionStorage 是非常好的选择。")]),s._v(" "),n("GongZhongHao")],1)}),[],!1,null,null,null);t.default=e.exports}}]);