#  Number 类型

Number 是数值的引用类型。

## toString

可把数字转换成字符串，通过第二个参数可以控制转换的进制。

```js
let num = 10;
// 10
console.log(num.toString());
// 1010，转换成二进制
console.log(num.toString(2));
// 12，转换成 8 进制
console.log(num.toString(8));
// 10，转换成 10 进制
console.log(num.toString(10));
// a，转换成 16 进制
console.log(num.toString(16));
```

## toFixed 保留几位小数

```js
let num = 19;
// 19.00，保留 2 位小数
console.log(num.toFixed(2));
num = 19.4511;
// 19.5，保留 1 位小数，四舍五入
console.log(num.toFixed(1));
```

## isInteger 是否为整数

```js
// false
console.log(Number.isInteger(1.01));
// true
console.log(Number.isInteger(1));
```