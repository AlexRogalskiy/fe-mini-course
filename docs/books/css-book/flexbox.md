# Flex 布局

Flex 布局的出现具有划时代意义，它颠覆了以往 CSS 布局的「难」。Flex 布局最大的特点是「父子齐上阵」，可以通过父元素来控制子元素该如何显示，子元素也能通过自身的属性来控制自己的位置。

如果某个元素想采用 Flex 布局，需要通过 `display: flex` 来指定，一旦指定这个 CSS 属性，它将变成 Flex 容器（flex container），它的「直接子元素」即可通过 flex 布局属性来控制其显示位置，这些「直接子元素」被称为 flex-item。

Flex 布局可以通过「容器属性」和「子元素属性」来控制子元素的布局。

## 基本概念

![](https://s1.ax1x.com/2020/10/17/0L6xzV.md.png)

不同的 flex-direction 属性值将影响「主轴」的方向，纵轴是与主轴垂直的轴。

- flex-start：主轴的起点；

- flex-end：主轴的结束点；

- cross-start：纵轴的起点；

- cross-end：纵轴的结束点；

## Flex-container 容器属性

使用 `display: flex` 的元素被称为 flex 容器，容器本身有一些属性可以控制直接子元素的布局。

::: tip 1、flex-direction 

控制布局方向，从哪里开始，沿着哪个方向，最终到哪里

row | row-reverse | column | column-reverse

:::

<FlexBoxDirection></FlexBoxDirection>



::: tip 2、justify-content

控制子元素在主轴对齐方向

flex-start | flex-end | center | space-between | space-around | space-evenly

:::

 justify-content 控制元素在「主轴」上的对齐方式。如果 flex-direction 为 row 时主轴是水平方向，为 column 时主轴是竖直方向。

<FlexBoxJustifyContent></FlexBoxJustifyContent>



::: tip 3、align-items

控制子元素在纵轴对齐方向

stretch | flex-start | flex-end | center | baseline

:::

纵轴是与主轴垂直的轴线。

<FlexBoxAlignItems></FlexBoxAlignItems>



::: tip 4、flex-wrap

控制子元素一行不够容纳所有元素时是否要换行

nowrap | wrap | wrap-reverse

:::

需要设置 `flex-shrink` 为 0，否则当容器不够容纳所有元素时将会被缩小。

<FlexBoxFlexWrap></FlexBoxFlexWrap>



::: tip 5、align-content

控制子元素对行时对齐方式

flex-start | flex-end | center | stretch | space-between | space-around | space-evenly

:::

必须有多行时该属性才能生效。



<FlexBoxAlignContent></FlexBoxAlignContent>



::: tip 6、flex-flow

它是 flex-direction 和 flex-wrap 的缩写

flex-direction || flex-wrap

:::

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```



::: danger 一起玩一把 Flex 布局

把所有的属性结合起来我们一起体验一下

:::

<FlexBoxContainer></FlexBoxContainer>

## Flex-item 项目属性

::: tip flex-grow

flex-item 未占满容器时，剩余空间如何分配。

:::

```css{3}
.flex-item {
    /* 分别设置 0，1，0.2，三个元素的值分别为 0、1、2 */
    flex-grow: 0;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    padding: 10px;
}
```



<FlexBoxFlexGrow></FlexBoxFlexGrow>



::: tip flex-shrink

当容器空间不足时，flex-item 该如何进行缩放

:::

```css{3}
.flex-item {
    flex-grow: 0;
    flex-shrink: 0;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    padding: 10px;
}
```



<FlexBoxFlexShrink></FlexBoxFlexShrink>



::: tip flex-basis

flex-item 的初始值。

:::



::: tip algin-self

可修改单个 flex-item 在纵轴上的对齐方式。

:::



::: tip order

修改 flex-item 的位置；

:::

默认值为 0，可以改变 item 在 FlexBox 容器中的位置，它的值可以是负数也可以是正数。



## 更多资料

- [图解 FlexBox 布局（上）](https://mp.weixin.qq.com/s/T-Z_8he9UxBBfL8Jb3zwtA)
- [图解 FlexBox 布局（下）](https://mp.weixin.qq.com/s/uct9apWqgznde1m2IMVgwA)
- [深入理解 FlexBox 布局的弹性](https://mp.weixin.qq.com/s/XG5QeIUF-qkBAqd_jlUV9g)