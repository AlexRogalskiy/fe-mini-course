# 模板 - 内容的承载体


Vue 在渲染组件的时候，需要使用者提供一个渲染模板或者渲染函数。渲染模板就是一个HTML字符串，中间加入了一些Vue特制的语法规则，这样能够让 Vue 把数据和模板进行了绑定，当数据发生变化时会让页面能够及时刷新。这节内容，我们学习一下 Vue 的模板及其本质。

## 数据绑定

通过双大括号把属性与模板进行绑定，当属性变化时页面也会实时更新。双大括号中可以是：

- data 或 props 中声明的属性；
- 计算属性；
- JS 表达式；

```html
<!-- title 可以是一个计算属性 -->
<div>{{ title }}</div>

<!-- 可接收 JS 表达式 -->
<div>{{ age + 1 }}</div>
<div>{{ age > 18 ? '大朋友' : '小朋友' }}</div>
```

经过编译后的渲染函数（render）：

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(_Fragment, null, [
    _createVNode("div", null, _toDisplayString(_ctx.title), 1 /* TEXT */),
    _createCommentVNode(" 可接收 JS 表达式 "),
    _createVNode("div", null, _toDisplayString(_ctx.age + 1), 1 /* TEXT */),
    _createVNode("div", null, _toDisplayString(_ctx.age > 18 ? '大朋友' : '小朋友'), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}
```

## 指令 v-if

v-if 指令如同编程语言中的 if 条件语句，使用方法可以参考编程语言中的 if 语句，根据不同的条件来渲染不同的模板。v-if 内容部分只要是一个表达式即可，可以使用 v-else-if 和 v-else。

```html
<!-- v-if 条件渲染 -->
<h1 v-if="age < 18">我是小朋友</h1>
<h1 v-else-if="age > 18 && age < 60">我是中年人</h1>
<h1 v-else>我是老年人</h1>
```

经过编译后的渲染函数（render）：

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.age < 18)
    ? (_openBlock(), _createBlock("h1", { key: 0 }, "我是小朋友"))
    : (_ctx.age > 18 && _ctx.age < 60)
      ? (_openBlock(), _createBlock("h1", { key: 1 }, "我是中年人"))
      : (_openBlock(), _createBlock("h1", { key: 2 }, "我是老年人"))
}
```

## v-for 指令

如同编程语言中的 for 循环，用来循环创建一个模板，遍历对象可以是数组或者对象。

```html
<!-- for 指令，循环创建 -->
<p v-for="name in welcomes">{{ name }}</p>
<!-- in 和 of 等价 -->
<p v-for="name of welcomes">{{ name }}</p>
<p v-for="(name, index) in welcomes">{{ name }}</p>
<p v-for="(name, index) in welcomes" :key="name.id">{{ name }}</p>
<!-- 遍历对象 -->
<p v-for="(value, name) in myObject">{{ name }}: {{ value }}</p>
```

经过编译后的渲染函数（render）：

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(_Fragment, null, [
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.welcomes, (name) => {
      return (_openBlock(), _createBlock("p", null, _toDisplayString(name), 1 /* TEXT */))
    }), 256 /* UNKEYED_FRAGMENT */)),
    
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.myObject, (value, name) => {
      return (_openBlock(), _createBlock("p", null, _toDisplayString(name) + ": " + _toDisplayString(value), 1 /* TEXT */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ], 64 /* STABLE_FRAGMENT */))
}
```

## class 绑定

可以给 HTML 元素绑定一个 class，也可以根据数据内容动态绑定一个 class。

```html
<!-- class -->
<!-- 动态绑定 class，当 isActive 为真时才会使用选择器 active -->
<div :class="{ active: isActive }">class1</div>
<!-- 可以绑定多个 -->
<div :class="{ active: isActive, selected: isSelect}">class2</div>
<!-- 可直接通过一个对象来告诉 vue 该用哪个属性，也就是把模板里的对象换个地方写-->
<div :class="clsObj">class3</div>
<!-- 可使用多个对象，类似于数组 -->
<div :class="[clsObj, clsObj2]">class4</div>
<!-- 直接使用三元表达式 -->
<div :class="[isActive ? activeClass : '']">class5</div>
<!-- 还可以这样用 -->
<div :class="[{ active: isActive }, errorClass]">class6</div>
<!-- class 和  :class 可同时存在 -->
<div class="one-line" :class="{ active: isActive }">class7</div>
```

经过编译后的渲染函数（render），通过渲染函数，你可以看到给元素设置 css 的本质：

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(_Fragment, null, [
    _createVNode("div", {
      class: { active: _ctx.isActive }
    }, "class1", 2 /* CLASS */),

    _createVNode("div", {
      class: { active: _ctx.isActive, selected: _ctx.isSelect}
    }, "class2", 2 /* CLASS */),

    _createVNode("div", { class: _ctx.clsObj }, "class3", 2 /* CLASS */),

    _createVNode("div", {
      class: [_ctx.clsObj, _ctx.clsObj2]
    }, "class4", 2 /* CLASS */),

    _createVNode("div", {
      class: [_ctx.isActive ? _ctx.activeClass : '']
    }, "class5", 2 /* CLASS */),

    _createVNode("div", {
      class: [{ active: _ctx.isActive }, _ctx.errorClass]
    }, "class6", 2 /* CLASS */),

    _createVNode("div", {
      class: ["one-line", { active: _ctx.isActive }]
    }, "class7", 2 /* CLASS */)
  ], 64 /* STABLE_FRAGMENT */))
}
```

## style 绑定

style 绑定和 class 绑定语法规则基本一样，它的作用是给元素通过 style 添加 css 样式。

```html
<!-- style -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">style1</div>
<!-- 直接使用对象 -->
<div :style="styleObject">style2</div>
<!-- 使用多个对象 -->
<div :style="[colorObj, edgeObj]">style3</div>
<!-- 支持多个值 -->
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">style4</div>
```

经过编译后的渲染函数（render）

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(_Fragment, null, [
    _createCommentVNode(" style "),
    _createVNode("div", {
      style: { color: _ctx.activeColor, fontSize: _ctx.fontSize + 'px' }
    }, "style1", 4 /* STYLE */),

    _createVNode("div", { style: _ctx.styleObject }, "style2", 4 /* STYLE */),

    _createVNode("div", {
      style: [_ctx.colorObj, _ctx.edgeObj]
    }, "style3", 4 /* STYLE */),

    _createVNode("div", { style: { display: ['-webkit-box', '-ms-flexbox', 'flex'] } }, "style4")
  ], 64 /* STABLE_FRAGMENT */))
}
```

## 事件

可通过 v-on 进行事件绑定，基本规则为 `v-on:eventName`，eventName 为 DOM 元素所支持的事件。v-on 可以简写换成 @

```html
<!-- 监听事件 -->
<button v-on:click="clickMe">von</button>
<!-- 简写 -->
<button @click="clickMe">von</button>
<!-- 支持动态属性名， eventName 可动态变化，它的值可以是 click、focus-->
<button v-on:[eventName]="eventChange">von</button>
<!-- 指令的特殊修饰符，表示指令以某种特定的方式触发 -->
<form v-on:submit.prevent="onSubmit">提交</form>
```
经过编译后的渲染函数（render）

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(_Fragment, null, [
    _createVNode("button", { onClick: _ctx.clickMe }, "von", 8 /* PROPS */, ["onClick"]),

    _createVNode("button", { onClick: _ctx.clickMe }, "von", 8 /* PROPS */, ["onClick"]),

    _createVNode("button", { [_toHandlerKey(_ctx.eventName)]: _ctx.eventChange }, "von", 16 /* FULL_PROPS */),

    _createVNode("form", {
      onSubmit: _withModifiers(_ctx.onSubmit, ["prevent"])
    }, "提交", 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
  ], 64 /* STABLE_FRAGMENT */))
}
```

## 绑定属性

无论是自定义组件还是 HTML标签都可以通过 v-bind 把 DOM元素的属性和数据属性进行绑定。

```html
<!-- 通过 v-bind 来绑定属性 -->
<a v-bind:href="url">点我</a>
<!-- 可简写 -->
<a :href="url">点我</a>
```
经过编译后的渲染函数（render）

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(_Fragment, null, [
    _createVNode("a", { href: _ctx.url }, "点我", 8 /* PROPS */, ["href"]),

    _createVNode("a", { href: _ctx.url }, "点我", 8 /* PROPS */, ["href"])
  ], 64 /* STABLE_FRAGMENT */))
}
```

## v-show 指令

控制元素的显示隐藏，其原理是通过控制 css 属性 display。它属于自定义指令的范畴，你可以使用 Vue 提供的机制进行自定义指令。

```html
<h1 v-show="isShow">Hello!</h1>
```

经过编译后的渲染函数（render），发现这个渲染函数与上面的都不一样，它使用了 `_withDirectives`，这个是与指令相关的函数。

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createBlock("h1", null, "Hello!", 512 /* NEED_PATCH */)), [
    [_vShow, _ctx.isShow]
  ])
}
```

## v-model 双向绑定

与 v-show 指令一样属于自定义指令的范畴，最常用的场景是使用表单的时候，把用户输入的内容和数据进行双向绑定。

```html
<input v-model="question" />
```

经过编译后的渲染函数（render）

```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createBlock("input", {
    "onUpdate:modelValue": $event => (_ctx.question = $event)
  }, null, 8 /* PROPS */, ["onUpdate:modelValue"])), [
    [_vModelText, _ctx.question]
  ])
}
```

## v-html 指令

直接渲染 HTML 字符串，HTML 不被看做是文本，它会当做 HTML 渲染到页面上。

```html
<div v-html="html">v-html</div>
```

经过编译后的渲染函数（render）
```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock("div", { innerHTML: _ctx.html }, null, 8 /* PROPS */, ["innerHTML"]))
}
```

## v-once 指令

只修改一次，即使数据以后更新了，页面也不会自动更新。

```html
<div v-once>{{ from }}</div>
```

经过编译后的渲染函数（render）
```js
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _cache[1] || (
    _setBlockTracking(-1),
    _cache[1] = _createVNode("div", null, _toDisplayString(_ctx.from), 1 /* TEXT */),
    _setBlockTracking(1),
    _cache[1]
  )
}
```

## 最后

本节内容我们重点学习了各个模板的语法规则，以及各个指令的作用。在介绍模板时，也给大家演示了最终生成的渲染函数，有助于大家理解模板的本质。

模板的本质其实就是渲染函数；
渲染函数的本质其实就是操作虚拟DOM；
虚拟DOM的本质其实就是操作真正的 DOM；
最终达到通过 JS 操作真正的 DOM，以让页面动态更新；

- [渲染函数](https://vue-next-template-explorer.netlify.app/)