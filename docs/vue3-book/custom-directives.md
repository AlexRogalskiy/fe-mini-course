# 自定义指令 - 对DOM狠狠下手吧

在项目中你应该用过 v-model 和 v-show 吧！用 v-model 的时候可以把数据与DOM元素进行双向绑定，用 v-show 很轻松地显示隐藏一个元素。但你有没有想过自己实现一个自定义的指令呢，并在模板中直接使用。

vue 本身提供了这个机制，可允许使用者自定义指令。

我们来设计一个指令用来显示价格


- [v-clipboard 自定义指令](https://github.com/euvl/v-clipboard)