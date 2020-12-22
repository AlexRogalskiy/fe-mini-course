# 创建一个 app

在使用 Vue 框架时，你首次要接触的是创建一个 app，它相当于 Vue 的一个运行环境，后面所有的业务逻辑和数据都会在这个运行环境中执行。Vue 本身是一个 JS 对象，通过 script 标签直接引入 Vue 库：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue3编程思想、源码解读</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
```

打开浏览器控制台，输入 Vue，回车，你会看到 Vue 对象中所有的方法：

![Vue 对象](https://s3.ax1x.com/2020/12/09/rPaBr9.jpg)

当加载下面这个 js 文件后，会在 window 上增加一个 Vue 属性。

```html
<script src="https://unpkg.com/vue@next"></script>
```

其实我们可以模仿一下 Vue 的实现，在 window 上添加一个 SuYanVue 属性：

如果你读不懂下面的代码，可以看我写的 [让 JavaScript 文件代码相互独立](https://mp.weixin.qq.com/s/v3sRBOvXG5wu-4btURYnhA)

```js
window.SuYanVue = (function(exports) {
    // exports 参数值为一个空对象
    // 给 exports 添加一个方法 createApp
    exports.createApp = function() {
        console.log('create a suyan app');
    }
    // 把最终结果返回
    return exports;
}({}));
```

我来看 Vue 的 createApp 方法，它的作用是创建一个 app，有两个参数：

- 1、根组件
- 2、根组件的属性值

关于组件，本书的组件部分会详细讲解。

创建一个根组件 HomeCard，它内部又使用了一个组件 SuYan，使用的自定义组件需要在 components 这个属性中声明。

创建一个子组件，组件其实就是一个「定制化」的 JS 对象，需要提供 Vue 组件预先需要的方法属性：

```js
const SuYan = {
    template: '<div>我是素燕</div>'
};
```

创建根组件，homeTemplate 是一个 Vue 模板字符串，它的语法规则我们会在模板小节中详细讲解：

```js
const homeTemplate = `
    <h1>{{ title }}</h1>
    <span>{{ des }}</span>
    <p>{{ age }} </p>
    <SuYan></SuYan>`;

const HomeCard = Vue.defineComponent({
    name: 'home-card',
    /**
     * 组件对应的 HTML 模板，可以使一个静态字符串
     */
    template: homeTemplate,
    /**
     * 自定义组件需要声明
    */
    components: {
        SuYan
    },
    /**
     * data 为数据源，用来定义与模板绑定的属性
    */
    data() {
        return {
            des: '帮助 10W 人入门并进阶前端'
        }
    },
    /**
     * 定义属性，父组件传递过来的
    */
    props: {
        title: String,
        age: {
            // 定义类型
            type: Number,
            // 默认值
            default: 0,
            // 是否必须
            required: true,
            // 校验数据是否合法
            validator: value => {
                return value > 0;
            }
        }
    }
});
```
创建 app 实例，并挂载到元素上。

```js
const app = Vue.createApp(HomeCard, {
    title: '和素燕一起学习 Vue',
    age: 20
});
// 把 app 这个节点挂载到选择器 #suyan-app 对应的元素上。
app.mount('#suyan-app')
```

`#suyan-app` 是在 HTML 中已经定义好的一个节点，可以把 Vue 创建的 app 挂载到这个节点上，这样就会把使用 Vue 创建的内容渲染到页面上。

```html
<body>
    <div id="suyan-app"></div>
</body>
```

我们来深入分析下 app 这个实例，打印一下 app，结果如下：

![](https://s3.ax1x.com/2020/12/10/rPfuGQ.jpg)

从图中可以看到，app 这个实例有很多方法和属性，其中以 _ 开头的属性是 Vue 内部使用的。

## app 实例中的方法

1、component

你可以在 Vue 中全局注册组件，以在其它组件中直接使用，无需通过 import 导入。通过源码发现，app 有一个执行环境 _context，所有注册的组件最终会被添加到 _context.compontent 这个对象中。

例如：给 app 添加一个组件，组件名为 suyan-card：

```js
app.component('suyan-card', {
    template: '<h1>{{ title }}</h1>',
    data() {
        return {
            title: '《前端小课》作者：素燕'
        };
    }
});
```
实现类似这样。

```js
context.components[name] = component;
```

2、config

通常在一个 html 文件中只会创建一个 app，可以通过 config 来对 app 进行全局控制，比如添加全局数据，这样每个组件可以像使用自己的属性一样使用。也可以监听异常，用来做异常上报。

```js
app.config.errorHandle = (err, vm, info) => {
    // 可以在这里监控 app 发生的异常
    // 常用来添加监控，错误上报
}

// author 在所有的组件中可以当自己的属性使用
app.config.globalProperties.author = {
    name: '素燕',
    from: '《读懂Vue3编程思想》'
}

// 开启性能监测
app.config.performance = true;
```

3、directive

Vue 自身提供了一些指令，我们也可以自定义一些指令，通过 directive 函数可以注册自定义指令，这样在模板中就能够使用这些自定义指令了。

```js
app.directive('v-suyan', {
  mounted() {
      //
  },
});
```

4、mixin

这个可以添加一段通用的代码到组件中。下面的代码将在所有的组件中添加 created 生命周期函数。

```js
app.mixin({
    created() {
        console.log('log in app mixin');
    }
});
```

5、mount

把 app 中的根组件挂载到提供的 DOM 元素上，这样使用 Vue 创建的组件才会被渲染。

```js
app.mount('#suyan-app')
```
或者：

```js
app.mount(document.getElementById('suyan-app'));
```


6、provide

这个主要用来解决组件嵌套时数据传递的问题，在组件中特别实用。provide 用来提供数据，与之对应的 inject 用来获取数据。我们后面会单独有一小节来讲这个内容。

```js
const suyanTpl = `<h1>{{ bookName }}</h1>`;

const SuYan = {
    inject: ['bookName'],
    template: suyanTpl
}

const rootTpl = `
    <SuYan></SuYan>`;

const Root = {
    template: rootTpl,
    components: {
        SuYan
    }
};

const app = Vue.createApp(Root);
app.provide('bookName', '《读懂Vue3编程思想》');
```


7、unmount

与 mount 函数作用相反，从 DOM 元素中把 app 实例删除。

8、use

Vue 本身支持自定义插件，可以通过 use 函数来注册一个插件，比如我们常用的 Vue-Router。

```js
app.use(VueRouter);
```

有一个问题需要大家思考下，app 调用 mount 函数后，app 的实例最终去哪了？

其实你看源码可以发现，最终 DOM 元素添加了一个 `__vue_app__` 属性。也就是说当你调用 mount 函数时需要提供一个选择器或者一个 DOM 对象，Vue 内部会在 DOM 元素中添加一个属性   `__vue_app__`  来保存 app 的执行环境。

![](https://s3.ax1x.com/2020/12/11/rk8ern.jpg)