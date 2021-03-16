# grid 布局

grid 是一种网格布局，之所以被称为网格布局，在我看来它就是一张网，类似于一个 excel 表格，可以做出各式各样的网页布局。相比 Flexbox 布局，网格布局更胜一筹，它是「二维」的，也就是说它不仅可以对行（row）进行控制，同时又能对列（column）进行控制。不过网格布局与 Flexbox 布局思想有着很多相似之处，都具有「弹性」。

FlexBox 布局也可以做到 n 行 n 列的布局，为什么还会出现 grid 布局？这个问题我想大多数同学都会有疑惑。我们举一个例子来解除这种疑惑。

![](https://s3.ax1x.com/2021/03/17/66Spff.png)

上图中的布局使用的是 FlexBox 做的 2 行 2 列布局，主轴对齐方式为 space-around。如果想让第 2 行元素的对齐方式设置为 flex-start，咋么做？FlexBox 布局根本做不到，它只能同时控制所有的行，而不能针对某一行单独控制。这就是为什么会出现 grid 布局的原因之一。

学习网格布局，我通常会把它与 excel 进行比较，因为他们具有很多相似之处。下面就是一个 6行5列的 Excel 表格：

![](https://s3.ax1x.com/2021/03/17/66SV7n.png)

在学习 grid 布局时需要先弄懂一些基本的概念（一图胜千言）：

![](https://s3.ax1x.com/2021/03/17/66SP1S.png)

## 基本概念

通过一个 demo 来说明 grid 布局的基本概念，demo 主要代码如下，在这里可以找到[前端小课的所有代码](https://github.com/lefex/FE)。

```css
<style>
    .main {
        display: grid;
    }
    div div {
        background-color: red;
        text-align: center;
        line-height: 40px;
    }
</style>
```

```html
<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
    </div>
</body>
```

Firefox 浏览器中调试 grid 布局非常方便，在 Firefox 浏览器预览上面的代码，效果如下所示，为 7 行 1 列的表格 ，每个 cell 的宽度为容器的宽度，高度为 40px 。它与不使用 grid 布局的效果一样，因为它默认是 1 列：

![](https://s3.ax1x.com/2021/03/17/66Sekq.jpg)

### grid container（grid 容器）：

使用 grid 布局需要通过 display 指定一个容器，这一点和 FlexBox 布局很相似，只是使用的属性值不同。grid 布局使用 grid 作为 display 属性的值，上面代码最外层 div 就是 grid 容器：

```css
.main {
    display: grid;
}
```

### grid item（grid 项）：

grid 容器中的「直接子元素」都是 grid item，上图中的 1 到 7 都是容器的 item。这里需要提醒一下，grid item 和 单元格 cell 不是同一概念，一个 grid item 可能会由多个 cell 构成。下图中 item1 由 2 个 cell 构成。

![](https://s3.ax1x.com/2021/03/17/66SCp8.png)

### grid track（grid 轨道）：

track 指的是行或者列。

![](https://s3.ax1x.com/2021/03/17/66Si6g.png)

### 单元格 cell：

行和列的交叉区域就是 cell。

![](https://s3.ax1x.com/2021/03/17/66SFXQ.png)

### 网格线 line：

类似于 Excel 会存在划分网格的线，n 行有 n+1 根水平线，m 列有 m+1 根垂直线。网格可以设置名称，默认值是以数字表示。

![](https://s3.ax1x.com/2021/03/17/66SE0s.png)

### grid area（grid 区域）

一个 grid 区域可以放多个 item。

![](https://s3.ax1x.com/2021/03/17/66SAmj.png)

## 容器属性

- grid-template-columns：表示轨道**列**的宽度

试一试在下面的`grid-template-columns`输入框中输入下面这些值看看页面的具体表现：

```js
// 设置固定的尺寸
60px 120px
// 设置百分比
40% 60%
// 按比例
1fr 2fr
// 第一列宽度固定，第二列宽度自动
100px auto
minmax(100px, 1fr) 1fr
repeat(2, 1fr)
repeat(2, max-content)
```

- grid-template-rows：表示轨道**行**的高度

试一试在下面的`grid-template-rpws`输入框中输入下面这些值看看页面的具体表现：

```js
60px 120px
1fr 2fr
100px auto
```

- grid-gap：表示行之间或列之间的间隙

试一试在下面的`grid-gap`输入框中输入下面这些值看看页面的具体表现：

```js
10px
10px 20px
```

<GridCloumnRow></GridCloumnRow>

## grid-area

grid 布局的区域 grid-area 是一个非常强大的功能，可以按照网格线划分成不同的区域，做出各种各样的布局样式。关于 grid-area 的概念可以参考我写的文章[买一块地盖一处院子](https://mp.weixin.qq.com/s/ZziZ9jDKGPORnV8Yv5r_lQ)。

<GridArea></GridArea>

## 对齐方式

- justify-items（容器属性）: 定义 grid-item 在 grid-area（布局区域）水平方向的（左右）对齐方式，可设置的值：

```js
start
center
end
stretch
```

- justify-content: 

```js
start
end
center
space-around
space-between
space-evenly
```

- justify-self：表示 item 在布局区域水平方向的对齐方式

```js
start
center
end
stretch
```

<GridAlign></GridAlign>

## 参考

- [布局翘楚 - Grid 布局概述](https://mp.weixin.qq.com/s/SJ7k23nIgMOcR2fDjOHhGg)
- [买一块地盖一处院子 grid area](https://mp.weixin.qq.com/s/ZziZ9jDKGPORnV8Yv5r_lQ)
- [grid布局对齐属性](https://mp.weixin.qq.com/s/9_zPYmfYzhIu-vgnfDGk4g)