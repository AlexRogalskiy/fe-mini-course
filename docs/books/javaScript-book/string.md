# JavaScript 中的字符串

在 JavaScript 中，字符串是 String，它又多个字符组合而成。表示方法如下：

```js
// 使用单引号表示
let name = 'suyan';

// 多行可换货
let welcome = `Learn FE
with suyan`;

// 双引号表示
let fe = "前端小课";
```

## 拼接

多个字符串进行拼接，形成一个字符串。

```js
let name = 'suyan';
let ret;
ret = 'Learn FE with' + ' ' + name;
// Learn FE with suyan
console.log(ret);

ret = `Learn FE with ${name}`;
// Learn FE with suyan
console.log(ret);

ret = 'Learn FE with '.concat(name);
// Learn FE with suyan
console.log(ret);
```

## 截取 slice

从一个字符串中获取一个子字符串。

```js
let name = '0123456789';
let ret;

ret = name.slice(4);
// 从第 4 位开始直到结束（456789）
console.log(ret);

ret = name.slice(1, 3);
// 第 1 位到第 3 位，不包含第 3 位（12）
console.log(ret);

ret = name.slice(-3);
// 最后 3 位（789）
console.log(ret);
```

## 子字符串 substring

求子字符串，与 slice 类似，但会把负数看做是 0 来处理。

```js
let name = '0123456789';
let ret;

ret = name.substring(4);
// 从第 4 位开始直到结束（456789）
console.log(ret);

ret = name.substring(1, 3);
// 第 1 位到第 3 位，不包含第 3 位（12）
console.log(ret);

ret = name.substring(-3);
// 会将所有的负数转换为 0（0123456789）
console.log(ret);
```

## 子字符串 substr

第 2 个参数表示取字符串的长度，与 slice 和 substring 都不一样。

```js
let name = '0123456789';
let ret;

ret = name.substr(4);
// 从第 4 位开始直到结束（456789）
console.log(ret);

ret = name.substr(1, 3);
// 第 1 位开始，取 3 位（123）
console.log(ret);

ret = name.substr(4, 20);
// 第 1 位开始，取 20 位，超出了字符串的长度（456789）
console.log(ret);

ret = name.substr(-3);
// 将第 1 位负数看做字符串的长度减去负数，第 2 为负数看做是 0
// 相当于 name.substr(7); 10-3=7
console.log(ret);
```

## indexOf

查找某个字符串在另一个字符串中出现的位置，从第一个字符开始起查询。如果找不到则返回 -1。

```js
let name = 'Learn FE with SuYan';
let ret;
ret = name.indexOf('a');
// ret = 2，a 出现在第 2 个位置
console.log(ret);

ret = name.indexOf('a', 3);
// ret = 17，a 出现在第 17 个位置，第 2 个参数表示从那个位置开始起查询
console.log(ret);
```

## lastIndexOf

查找某个字符串在另一个字符串中出现的位置，从最后一个字符开始起查询。如果找不到则返回 -1。

```js
let name = 'Learn FE with SuYan';
let ret;
ret = name.lastIndexOf('a');
// ret = 17，a 出现在第 17 个位置
console.log(ret);

ret = name.lastIndexOf('a', 16);
// ret = 2，a 出现在第 2 个位置，第 2 个参数表示从那个位置开始起查询
console.log(ret);
```

## 同一个字符只出现一次

```js
let name = 'Learn FE with SuYan';
let fIndex = name.indexOf('a');
let lIndex = name.lastIndexOf('a');
if (fIndex === lIndex && (fIndex !== -1)) {
    console.log('字符串中只有一个 a');
}
else {
    console.log('字符串中有多个 a');
}
```

## startsWith，endsWith

判断字符串是否以某些字符开始或结尾，是否包含某些字符串。

```js
let name = 'Learn FE with SuYan';
let ret;
ret = name.startsWith('Le');
// ret = true，以 Le 开头
console.log(ret);
ret = name.startsWith('Le', 1);
// ret = false，从第 1 个位置开始查询
console.log(ret);

ret = name.endsWith('Yan');
// ret = true，以 Yan 结尾
console.log(ret);
ret = name.endsWith('Yan', name.length - 1);
// ret = false，从倒数第 1 个位置开始查询
console.log(ret);

ret = name.includes('FE');
// ret = true，包含 FE
console.log(ret);
```

## 大小写 toLowerCase、toUpperCase

大小写转换。

```js
let name = 'Learn FE with SuYan';
let ret;
ret = name.toLowerCase();
// learn fe with suyan
console.log(ret);

ret = name.toUpperCase();
// LEARN FE WITH SUYAN
console.log(ret);
```

## 删除空格 trim

删除字符串中的空格。

```js
let name = "   suyan  ";
let ret;
ret = name.trim();
// --suyan-- 删除左右两边的空格
console.log('--' + ret + '--');
// --suyan  -- 删除左边的空格
ret = name.trimLeft();
console.log('--' + ret + '--');
// --   suyan-- 删除右边的空格
ret = name.trimRight();
console.log('--' + ret + '--');
```

## repeat

```js
let name = 'suyan';
// suyansuyansuyan
let ret = name.repeat(3);
console.log(ret);
```

## padStart、padEnd

padStart、padEnd 第一个参数表示期望字符串的最终长度，最后一个字符串表示要插入的字符串。

```js
let name = '99';
let ret = name.padStart(name.length + 1, '￥');
// ￥99，在 name 前插入一个 ￥
console.log(ret);

ret = name.padEnd(name.length + 6, '.');
// 99......，在 name 后插入 6 个 .
console.log(ret);
```

## 遍历字符

遍历字符串中的所有字符。

```js
for (const c of 'suyan') {
    console.log(c);
}
s
u
y
a
n
```

## 比较 localeCompare

比较字符串在字母表中的顺序，适合做按字母排序的需求，比如联系人列表。

```js
let name = 'baby';
let ret;
ret = name.localeCompare('animal');
// ret = 1，animal 在 baby 的前面
console.log(ret);

ret = name.localeCompare('baby');
// ret = 0
console.log(ret);

ret = name.localeCompare('cat');
// ret = -1，cat 在 baby 的后面
console.log(ret);
```