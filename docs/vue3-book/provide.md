# provide - 组件嵌套之间传值

在实际业务开发中，经常遇到嵌套组件之间传值的问题，最可怕的是把根组件的数据传递到最底层的组件，难道需要层层传递吗？我来举个例子：

组件层级如下：

```shell
├── Root
    ├── SuYan
        └── Lefex
```

如果想把 Root 组件的数据传递到 Lefex，我们通常的做法是先把属性传给 Suyan，然后再传给组件 Lefex。哪有没有办法直接把 Root 中的属性传递给 Lefex 呢？不经过 Suyan 这个组件。

为解决这个问题，provide 特性就出现了，它必须配合 inject 使用。provide 是数据提供方（生产者），inject 是数据接收者（消费者）。我们直接看例子：

1、定义组件 Lefex

在这个组件中，通过 inject 来获取根组件 Root 提供的属性 title 和 ageShow，可直接拿来使用，如同组件内部定义的属性一样。

```js
const lefexTpl = `
    <h1>{{ title }}</h1>
    <p>{{ ageShow.value }}</p>`;

const Lefex = {
    template: lefexTpl,
    inject: ['title', 'ageShow']
}
```

2、定义组件 SuYan

该组件使用了组件 Lefex。

```js
const SuYan = {
    template: '<Lefex></Lefex>',
    components: {
        Lefex
    }
}
```

3、定义根组件

在该组件中，通过 provide 函数提供了两个属性：

- title：这个属性变化时，使用方 Lefex 并不能响应；
- ageShow：这个属性变化时，使用方 Lefex 能够及时响应。在 mounted 函数中，1秒后修改属性 age 的值，组件 Lefex 也会及时更新；

```js
const Root = {
    template: '<SuYan></SuYan>',
    components: {
        SuYan
    },
    data() {
        return {
            age: 20
        }
    },
    provide() {
        return {
            title: '和素燕一起学习 Vue 的编程思想',
            // 可支持响应式
            ageShow: Vue.computed(() => `他今年${this.age}岁了！`)
        }
    },
    mounted() {
        setTimeout(() => {
            this.age = 26;
        }, 1000);
    }
};
```

4、创建一个 app

```js
const app = Vue.createApp(Root);
app.mount('#suyan-app');
```

总之，通过 provide 和 inject 可以实现跨组件数据传递。那这个特性在 Vue 是如何实现的呢？

## 参考

- [官方 Provide / inject](https://v3.vuejs.org/guide/component-provide-inject.html)