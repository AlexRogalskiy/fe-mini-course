# refs - 访问DOM或组件实例

在 Vue 中如果想获取到 DOM 元素或组件实例，杂么办？

在传统的方法中，我们通常会通过 DOM Api 来获取 DOM 元素，如果想访问组件实例该如何做呢？

Vue 提供了一个属性 ref（reference 缩写，中文引用） 来访问组件实例和 DOM 元素。其实 ref 的本质就是通过定义的名字找到对应的组件或 DOM 元素，而 DOM 元素在 Vue 渲染后会保存到虚拟节点中。

下面通过一个例子来说明 ref 的使用。

1、定义组件 VueBook

```js
const VueBook = {
    template: '<h1>{{bookName}}</h1>',
    props: ['bookName']
}
```

2、定义组件 SuYan

```js
const SuYan = {
    template: '<h3 ref="syh3">{{ des }}</h3>',
    components: {
        VueBook
    },
    data() {
        return {
            des: '和素燕一起学习 Vue'
        }
    }
}
```

3、定义组件 Root

在 Root 组件中使用了子组件 VueBook 和 SuYan，并定义了 ref。

```js
const Root = {
    template: '<VueBook :bookName="name" ref="vuebook"></VueBook>' +
    '<SuYan ref="suyan"></SuYan>' + 
    '<input ref="syinput"/>' +
    '<div ref="sydiv">Vue的概念太多了</div>',
    components: {
        SuYan,
        VueBook
    },
    data() {
        return {
            name: '《读懂Vue3编程思想》'
        }
    }
};
```

通过 ref 绑定的值 vuebook 可以获取到 VueBook 这个组件实例。
```html
<VueBook :bookName="name" ref="vuebook"></VueBook>
```

通过 ref 绑定的值 suyan 可以获取到 SuYan 这个组件实例。
```html
<SuYan ref="suyan"></SuYan>
```

通过 ref 绑定的值 syinput 可以获取到 input 这个标签的 DOM 元素。
```html
<input ref="syinput"/>
```
通过 ref 绑定的值 sydiv 可以获取到 div 这个标签的 DOM元素。
```html
<div ref="sydiv">Vue的概念太多了</div>
```

在 Vue 组件中有一个属性 $refs，通过它可以获取到组件实例或 DOM 元素。在 Vue 组件中，还有很多 Api。我们看下 Vue 源码关于这些属性的定义：

```js
const publicPropertiesMap = extend(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => ( shallowReadonly(i.props) ),
    $attrs: i => ( shallowReadonly(i.attrs) ),
    $slots: i => ( shallowReadonly(i.slots) ),
    $refs: i => ( shallowReadonly(i.refs) ),
    $parent: i => i.parent && i.parent.proxy,
    $root: i => i.root && i.root.proxy
});
```

在 Root 组件的 mounted 方法中执行下面的代码：

```js
// 获取组件 Suyan 的 data 属性中的 des 值
this.$refs.suyan.$data.des;
this.$refs.suyan.$el;
this.$refs.suyan.$parent;
this.$refs.suyan.$root;
// 获取组件内部的 DOM 元素，并修改其内容。
this.$refs.suyan.$refs.syh3.innerText = '关注素燕公众号，与素燕做朋友';

// 获取组件 VueBook 实例
this.$refs.vuebook.$props;

// 获取 ref 为 syinput 的 DOM 元素，并设置输入的值为 1358907
this.$refs.syinput.value = "1358907"

// 获取 ref 为 sydiv 的 DOM 元素
this.$refs.sydiv;
// 获取 ref 为 sydiv 的 DOM 元素，并修改其内容
this.$refs.sydiv.innerText = '但是也要系统学一遍';
// 获取 ref 为 sydiv 的 DOM 元素，并修改其字体颜色
this.$refs.sydiv.style.color = 'red';
// 获取 ref 为 sydiv 的 DOM 元素，并修改其 padding 值
this.$refs.sydiv.style.paddingTop = '20px';
```

4、创建 app

```js
const app = Vue.createApp(Root);
app.mount('#suyan-app');
```

## 参考

- [官方 ref](https://v3.vuejs.org/api/special-attributes.html#ref)