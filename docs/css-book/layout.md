# CSS 常见布局实践
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

### 方式一、绝对定位（absolute），蓝色方块宽高已知：

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

### 方式二、绝对定位（absolute），蓝色方块宽高已知/未知均可：

```css
.logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #5b83fd;
}
```

### 方式三、flexbox（蓝色方块宽高无所谓，注意IE浏览器）：

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

<HorizontalLayoutCenter></HorizontalLayoutCenter>

### 方式一、流式布局中，宽高固定

```css
.logo {
    width: 160px;
    height: 100px;
    margin: 0 auto;
    background-color: #5b83fd;
}
```

### 方式二、flexbox 布局，设置容器属性就行（注意IE浏览器）

```css
.center-wrap {
    display: flex;
    justify-content: center;
    background-color: #282c34;
    height: 140px;
}
```



### 方式三、使用 transform，对宽高无要求

```css
.logo {
    position: absolute;
    padding: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #5b83fd;
}
```

### 方式四、inline-block

```css
.content-inline-wrap {
    position: relative;
    background-color: #282c34;
    height: 140px;
    text-align: center;
}
.inline-item {
    display: inline-block;
    background-color: #5b83fd;
    padding: 10px;
}
```

