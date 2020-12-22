# 组件 - 积木中的一小块

当使用 Vue.createApp 时需要传一个参数「根组件」，那我们今天就聊一聊什么是组件。

组件的本质是什么？

组件其实是一个「特制」的 JS 对象，内部定义了一些数据和方法。它是一个功能的集合体，是普通 HTML 标签的功能扩充。

组件出现的背景，为啥要有组件？

- 复用，同一功能，可能很多页面会用到；
- 解耦，页面代码比较多的时候，把每一部分拆分成独立的模块有助于代码维护；

定义一个简单的组件，它可以只有一个模板属性 template：

```js
const SuYanCard = {
    template: '<h1>读懂Vue编程思想</h1>',
};
```

## 组件注册

1、全局注册：

组件在使用时需要注册，注册的本质是把组件这个对象保存到 app 实例中，为以后使用。把 SuYanCard 注册到 vue 中，使用这种方式注册的组件，所有地方都能使用。`suyan-card` 为组件的名字，在使用的时候需要使用这个名字。

```js
const app = Vue.createApp();
app.component('suyan-card', SuYanCard);
```

一旦注册了组件，即可在 Vue 的模板中使用组件，就像使用 HTML 标签一样。

```html
<template>
    <suyan-card></suyan-card>
</template>
```

2、局部注册

有些组件并不需要在全局注册，比如那些只有在特定场景才会用到的组件，这时我们可以使用局部注册组件。比如在某个组件中使用其它组件。

```js
const SuYanCard = {
    template: '<h1>{{ title }}</h1><div></div>',
    data() {
        return {
            title: '《前端小课》作者：素燕'
        };
    }
};
```

在 Book 组件中用到了 SuYanCard 组件，需要通过 `components` 对象来声明使用的组件。

```js
const Book = {
    template: '<h2>《前端小课》</h2><suyan-card></suyan-card>',
    components: {
        'suyan-card': SuYanCard
    }
}
```

## 组件数据

组件其实是一个独立的块，比如一个页面中会有 Heder、Nav、Content、Footer，这不同的部分都可以看成是一个组件，每个组件都可以自己独立运行，有自己的数据、模板、事件、方法等。那我们一起看看一个组件都会包含哪些内容。

- 1、模板

模板是组件的内容载体，通过一个 HTML 字符串描述页面的结构，这种 HTML 包含了 Vue 特定的模板语法。有 3 种方式来告诉 Vue 组件的模板内容：

a、字符串

通过 template 属性告诉 Vue 模板是什么。

```js
const SuYan = {
    template: '<div>我是素燕</div>'
};
```

b、选择器

允许传一个选择器名字，其实 Vue 内容通过 elm.innerHTML 来获取 DOM 元素的模板字符串。

```js
const SuYan = {
    template: '#suyan-app'
};
```

c、渲染函数

通过 h 函数直接创建虚拟节点，使用这种方式，Vue底层就无需把模板进行编译。h函数其实是 createVNode 的工具函数，为了更简化、快速地创建一个虚拟节点。

```js
const SuYan = {
    render() {
        const h = Vue.h;
        return h('div', [
            h('h1', this.name),
            h('span', this.welcomeText),
            h('p', this.ageShow),
            // 直接渲染一个自定义组件
            h(SuYan)
        ]);
    }
};
```

- 2、属性

属性的作用是能够把父组件数据传给子组件，供子组件直接使用父组件的数据。组件 Suyan 中定义了 3 个属性 title、blog 和 age。

```js
const Suyan = {
    props: {
        title: String,
        blog: Object,
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
}
```

- 3、计算属性

计算属性也可以当做属性使用，可直接与模板进行绑定，只不过它是一个函数，当与计算属性函数关联的属性（在 data 和 props 声明的属性）发生变化的时候，计算属性也将发生变化。

```js
const Suyan = {
    /**
     * { [key: string]: Function | { get: Function, set: Function } }
     * 计算属性，可使用 data 和 props 定义的属性，会缓存，避免使用箭头函数
    */
    computed: {
        welcomeText() {
            return `关注公众号${this.name}, ${this.des}`;
        },
        ageShow() {
            return `他今年 ${this.age} 岁`;
        }
    }
}
```

- 4、监听属性变化

通过 watch 机制可以监听某个属性发生变化。

```js
const Suyan = {
    /**
     * { [key: string]: string | Function | Object | Array }
     * 监听某个属性的变
     */
    watch: {
        age(val, oldVal) {

        },
        // 可以直接写一个方法名
        // age: 'ageChange',
        address(val, oldVal) {

        }
    },
}
```

- 5、定义方法

这个如同在 JS 对象中定义方法一致。

```js
const Suyan = {
    /**
     * { [key: string]: Function }
     * 定义方法，这些方法会被绑定到组件实例中，避免使用箭头函数
     */
    methods: {
        gotoHisSite() {
            location.href = this.blog;
        },
        ageChange() {

        }
    }
}
```

- 6、生命周期函数

组件通过一个 JS 对象表示，Vue 最终会把组件渲染到页面上，而整个过程，可以通过生命周期函数来监听。

```js
const Suyan = {
    /**
     * lifecycle 组件的生命周期
     */
    beforeCreate() {
        // 实例被创建时，这时数据响应还没有准备好
        console.log('beforeCreate');
    },
    crated() {
        // 实例被创建，数据响应建立、计算属性、方法、监听都已准备好，但是没有绑定到 DOM 上
        console.log('created');
    },
    beforeMount() {
        // mount 开始时，也就是即将添加到 DOM 上
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
        this.$nextTick(function () {
            // 能够保证所有的子组件已经 mounted
            setTimeout(() => {
                this.name = '公众号：素燕，前端小课作者'
            }, 1000);
        })
    },
    beforeUpdate() {
        console.log('beforeUpdate');
        // 数据更新时，此时新的 DOM 变化还没更新
    },
    updated() {
        console.log('updated');
        // 数据更新后，DOM 进行了重新渲染和 patched
        this.$nextTick(function () {
            // 能够保证所有的子组件已经 updated
        });
    },
    activated() {
        console.log('activated');
        // keep-live 组件处于激活状态
    },
    deactivated() {
        console.log('deactivated');
         // keep-live 组件处于非激活状态
    },
    beforeUnmount() {
        console.log('beforeUnmount');
        // 组件 unmount 之前
    },
    unmounted() {
        console.log('unmounted');
        // 组件 unmounted
    }
}
```

- 7、定义组件内部使用的数据

data 中定义的数据最终会与模板进行绑定，当这些数据发生变化时会触发页面的更新。

```js
const Suyan = {
    data() {
        return {
            des: '帮助 10W 人入门并进阶前端',
            name: '素燕',
            address: {
                city: 'BeiJing',
                des: '昌平区'
            }
        }
    }
}
```

## 总结

总的来说组件本质上是一个 js 对象，在这个对象中约定了一些特定的规则，比如定义属性 props、data，绑定生命周期函数，声明方法等。

![](https://s3.ax1x.com/2020/12/14/rmTEgs.jpg)