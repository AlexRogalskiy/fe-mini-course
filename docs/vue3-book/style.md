# 样式 - css 使用

在未使用 Vue 框架时，可以通过 class 和 style 来给 HTML 元素添加 css，如果想动态修改 css 可直接操作 DOM 元素的属性。在前端小课 [使用CSS的三种方式](https://mp.weixin.qq.com/s/pHy30He9hS2C4UPDGxYqlg) 中我们讲了 css 的引入方式。

如果想动态修改 css 样式，多多少少有一些不便，vue 解决了这个问题。

## class

在 Vue 模板中可以直接添加 class 属性，而且支持多种方式，比如对象、数组、JS表达式，这些说白了就是为了能够更灵活修改 class。

如果，class 如果在后面的代码中不会涉及到修改，直接使用静态的 class 就行：

```html
<div class="title">《前端小课》</div>
```
如果，某些 css 会根据不同的业务发生变化，这时就需要进行动态绑定 class，vue 中提供了多种方法：

1、模板中写对象

这种语法规则类似在 js 中定义一个对象，如果 isDark 为真，将给 h1 元素绑定 dark-text，否则绑定 light-text。

```html
<h1 class="title" :class="{'dark-text': isDark, 'light-text': !isDark}">{{title}}</h1>
```

需要定义 css `dark-text` 和 `light-text`，只有这样才能够把样式渲染到 HTML 元素上。

```css
.dark-text {
    color: #fff;
}
.light-text {
    color: #000;
}
```

在 js 中定义属性 isDark，这样可以修改 isDark 的值，样式便可以动态修改。

```js
data() {
    return {
        isDark: false,
        title: '前端小课'
    }
}
```

2、js 中写对象

你可以把动态 class 的逻辑直接写到 JS 代码中，这种写法可以减轻模板中定义太多的业务逻辑。

```html
<h1 class="title" :class="textMode">{{title}}</h1>
```

```css
.dark-text {
    color: #fff;
}
.light-text {
    color: #000;
}
```

```js
data() {
    return {
        colorMode: {
            dark: false
        },
        textMode: {
            'dark-text': false,
            'light-text': true
        },
        title: '前端小课'
    },
    methods: {
        changeMode() {
            const isDark = this.colorMode.dark;
            this.textMode['dark-text'] = isDark;
            this.textMode['light-text'] = !isDark;
        }
    }
},
```

3、使用数组

以上两种方式可以通过数组设置多个 class，语法和 js 中的数组定义一致。

```html
<div :class="[contentObj, {stress: isStress}]">本文来自公众号素燕</div>
```

```css
.content {
    color: #000;
    font-size: 17px;
    margin: 10px;
}
.stress {
    color: red;
}
```

```js
data() {
    return {
        isStress: true,
        contentObj: {
            content: true
        }
    }
}
```

4、使用三元表达式

```html
<div :class="[isStress ? stress : '']">本文来自公众号素燕</div>
```

```css
.stress {
    color: red;
}
```

```js
data() {
    return {
        isStress: true
    }
}
```

## style

vue 也可以通过 style 给 HTML 元素设置属性。用法和 class 用法一致。如果希望通过 style 的方式给 HTML 元素设置 css，可以通过 `:style` 来动态给 HTML 动态绑定 css。

1、在模板中使用对象

模板中定的对象，给元素设置了字体颜色和字体大小，通过属性值 activeColor 和 fontSize 动态修改元素的字体颜色和大小。

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data() {
  return {
    activeColor: 'blue',
    fontSize: 20
  }
}
```

2、在 js 中定义对象

把设置样式的对象直接定义到 js 中而非模板中。

```html
<div :style="contentStyle"></div>
```

```js
data() {
  return {
    contentStyle: {
        color: 'blue',
        fontSize: 20
    }
  }
}
```

3、使用数组

把设置样式的对象直接定义到 js 中而非模板中。

```html
<div :style="[contentStyle, {fontSize: fs + 'px'}]"></div>
```

```js
data() {
  return {
      fs: 20,
      contentStyle: {
        color: 'blue'
      }
  }
}
```

## scoped 和 /deep/

在 vue 中使用组件时，最怕 css 之间纠缠不清，相互冲突。在单文件组件中，vue-loader 中提供了关键字 scoped 专门用来防止组件之间 css 产生干扰。其本质是利用了 css 的权重。在 [聚齐了这3张宝图，搞懂CSS权重](https://mp.weixin.qq.com/s/wQOEMwQVdDYXpqSN7SuLcA) 这节内容中详细学习了 css 的权重。举例：

组件层级：

```shell
├── App
    ├── Home
        └── Des
```

组件 App：

```html
<template>
  <!-- 可以给 Home 组件中添加 class （root 和 root-app） ，与组件的根 class 不冲突-->
  <Home class="root"/>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<!-- 在样式中使用了 scoped，该组件中定义的 class 不会影响父组件定义的 class -->
<style scoped>
.root {
  margin: 20px;
}
/* 由于在子组件 Home 中也定义了 home-wrap 这个 class，将会被父组件定义的同名 class 覆盖，不过只能覆子组件的根组件样式 */
.home-wrap {
  background-color: #22aa22;
}
/* 虽然子组件 Home 也定义了该 class，但由于不是根节点的 class，将不会被覆盖*/
.des {
  background-color: #ccc;
}
</style>
```

定义组件 Home：

```html
<template>
  <div class="home-wrap">
    <h1 class="title">前端小课</h1>
    <div class="des">
      <p class="text">帮助10W人入门并进阶前端</p>
      <Des></Des>
    </div>
  </div>
</template>

<script>
import Des from './Des.vue';

export default {
  name: 'Home',
  components: {
    Des
  }
}
</script>

<style scoped>
.home-wrap {
  background-color: #eee;
  min-height: 200px;
  padding: 10px;
}
/* 父组件只能覆盖根节点的 class，如果想覆盖非根节点的 class 需要添加 /deep/ */
/deep/ .content {
  font-size: 20px;
}
</style>

<!-- 未使用 scoped 定义的 css 可以单独 -->
<style>
.title {
  font-size: 20px;
}
</style>
```

定义组件 Des：

```html
<template>
    <div class="des-wrap">
        <p class="content">掌握 Vue 的核心编程思想。</p>
    </div>
</template>
  
<script>
  export default {
  name: 'Des'
}
</script>

<style scoped>
.des-wrap {
  background-color: #333;
  padding: 10px;
  border-radius: 6px;
}
.content {
  font-size: 20px;
  color: #fff;
}
</style>
```

这背后的原理，其实利用了属性选择器，我们看上面代码下被转换后的 HTML：

```html
<div class="home-wrap root" data-v-5b987f2c="" data-v-7ac74a55="">
    <h1 class="title" data-v-5b987f2c="">前端小课</h1>
    <div class="des" data-v-5b987f2c="">
        <p class="text" data-v-5b987f2c="">帮助10W人入门并进阶前端</p>
        <div class="des-wrap" data-v-711c43d5="" data-v-5b987f2c="">
            <p class="content" data-v-711c43d5="">掌握 Vue 的核心编程思想。</p>
        </div>
    </div>
</div>
```

```css
/* 自动添加属性 */
.home-wrap[data-v-7ac74a55] {
    background-color: rgb(34, 170, 34);
}
.root[data-v-7ac74a55] {
    margin: 20px;
}
/* 未使用 scroped */
.title {
    font-size: 20px;
}
.des-wrap[data-v-711c43d5] {
    background-color: rgb(51, 51, 51);
    padding: 10px;
    border-radius: 6px;
}
[data-v-5b987f2c] .content {
    font-size: 30px;
}
.content[data-v-711c43d5] {
    font-size: 20px;
    color: rgb(255, 255, 255);
}
```

从转换结果中可以看到，vue-loader 会给 CSS 选择器添加了属性，使其变为了属性选择器，只有包含某个属性的元素才会被选中。这种方案其实给我们提供了一种解决 css 冲突的方案。

## 参考

- [vue-loader scroped](https://vue-loader.vuejs.org/guide/scoped-css.html)