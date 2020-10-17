# CSS 常见布局实践（一）
这是一份我总结的 CSS 布局技巧，工作中处理页面布局会用到。

## 水平垂直居中

让蓝色的方块在水平和垂直方向居中：

```html
<div class="center-wrap">
    <div class="logo"></div>
</div>
```

```css
.center-wrap {
    position: relative;
    background-color: #1f2022;
    height: 200px;
}
```

蓝色的方框水平与垂直方向上都垂直居中。

<LayoutCenter></LayoutCenter>

#### 方式一、绝对定位（absolute），蓝色方块宽高已知：

```css
.logo {
    position: absolute;
    width: 160px;
    height: 100px;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -80px;
    background-color #5b83fd;
}
```

#### 方式二、绝对定位（absolute），蓝色方块宽高已知/未知均可：

```css
.logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #5b83fd;
}
```

#### 方式三、flexbox（蓝色方块宽高无所谓，注意IE浏览器）：

```css
.center-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

从上面的可以衍生出水平居中的方案。

## 水平居中

让蓝色的方块在水平方向居中：

```html
<div class="center-wrap">
    <div class="logo"></div>
</div>
```

<HorizontalLayoutCenter></HorizontalLayoutCenter>

#### 方式一、display: block + margin: 0 auto

适用于 display 为 block 的元素。如果元素脱离文档流，该方式将失效。

```css
.logo {
    width: 160px;
    height: 100px;
    margin: 0 auto;
    background-color: #5b83fd;
}
```

#### 方式二、flexbox 布局，设置容器属性就行（注意IE浏览器）

```css
.center-wrap {
    display: flex;
    justify-content: center;
    background-color: #282c34;
    height: 140px;
}
```



#### 方式三、使用 transform，对宽高无要求

对于脱离文档流的元素可通过下面这种方式实现。

```css
.logo {
    position: absolute;
    padding: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #5b83fd;
}
```

#### 方式四、inline-block + text-align

display 需要设置为 inline-block，在父元素中设置 text-algin 让子元素进行对齐。

```css
.content-wrap {
    position: relative;
    background-color: #282c34;
    height: 140px;
    text-align: center;
}
.logo {
    display: inline-block;
    background-color: #5b83fd;
    padding: 10px;
}
```

## 两列（左边宽度固定、右边自适应）

这种效果在实际开发中经常用到，一定要牢固掌握。

```html
<div class="content-wrap">
    <div class="left"></div>
    <div class="right"></div>
</div>
```



<TwoColumnLayout></TwoColumnLayout>

#### 方式一：左浮动定宽、右 margin-left

左边元素设置了宽度和 float-left，右边元素设置 margin-left 恰好是左边元素的宽度。

```css
.content-wrap {
    background-color: #282c34;
    height: 100px;
}

.left, .right {
    height: 100%;
}

.left {
    float: left;
    width: 140px;
    background-color: #5b83fd;
}

.right {
    margin-left: 140px;
    background-color: #F7B500;
}
```



#### 方式二：左浮动定宽、右 overflow

```css
.content-wrap {
    background-color: #282c34;
    height: 100px;
}

.left, .right {
    height: 100%;
}

.left {
    float: left;
    width: 140px;
    background-color: #5b83fd;
}

.right {
    overflow: hidden;
    background-color: #FA6400;
}
```

#### 方式三：flexbox

```css
.content-wrap {
    display: flex;
    height: 100px;
    background-color: #282c34;
}
.left {
    height: 100%;
    width: 140px;
    background-color: #5b83fd;
}
.right {
    height: 100%;
    flex: 1;
    background-color: #6DD400;
}
```

## 三列布局

```html
<div class="content-wrap">
    <div class="left">Left</div>
    <div class="mid">Mid</div>
    <div class="right">Right</div>
</div>
```



<ThreeColumnLayout></ThreeColumnLayout>

#### 方式一：左右两列宽度固定，右边自适应

这种可以借助于两列布局的思想，使用 float、overflow 和 flexbox 的方式均可实现。

- overflow

```css{12}
.left {
    float: left;
    width: 140px;
    background-color: #5b83fd;
}
.mid {
    float: left;
    width: 100px;
    background-color: #FA6400;
}
.right {
    overflow: hidden;
    background-color: #F7B500;
}
```

- float

```css
.left {
    float: left;
    width: 140px;
    background-color: #5b83fd;
}
.mid {
    float: left;
    width: 100px;
    background-color: #FA6400;
}
.right {
    margin-left: 240px;
    background-color: #F7B500;
}
```



#### 方式二、两边固定，中间自适应

注意 mid 是在最上面。

```html
<div class="content-wrap">
    <div class="mid-wrap">
        <div class="mid2">Mid</div>
    </div>
    <div class="left2">Left</div>
    <div class="right2">Right</div>
</div>
```



```css
.left, .right, .mid-wrap {
    height: 80%;
    float: left;
}

.left {
    width: 140px;
    background-color: #FA6400;
    margin-left: -100%;
}
.mid-wrap {
    height: 100%;
    width: 100%;
    background-color: #5b83fd;
}
.mid {
    background-color: #6DD400;
    margin-left: 140px;
    margin-right: 80px;
    height: 80%;
}
.right {
    width: 80px;
    background-color: #F7B500;
    margin-left:  -80px;
}
```



## 导航栏

导航栏一直「悬停」在最顶端。但凡是要悬停可视区域某一位置都可以使用 fixed 来实现。

```css
.nav-bar {
    position: fixed;
    background-color: #333;
    left: 0;
    top: 0;
    right: 0;
    height: 64px;
}
```

