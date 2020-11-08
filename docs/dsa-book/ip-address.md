# 头条 · 判断 IP 地址

## 题目分析

这道题有个坑点，题目中判断一个字符串是否为 IP 地址，但是并没有说明是 IPv4 还是 IPv6，如果你在写算法的时候只考虑了 IPv4，但忽略了 IPv6，这时候面试官可能会继续让你写出 IPv6 求解过程。

在写算法之前，需要明白 IPv4 和 IPv6 的概念，如果面试官并没有告诉你这两者的定义，也许在考你计算机的基础知识，关于 IP 地址的定义。我们看一下 LeetCode 上关于 IPv4 和 IPv6 的定义。

:::tip
- IPv4

IPv4地址由十进制数和点来表示，每个地址包含 4 个十进制数，其范围为 0 - 255， 用(".")分割。比如，172.16.254.1；

同时，IPv4 地址内的数不会以 0 开头。比如，地址 172.16.254.01 是不合法的。

- IPv6

IPv6 地址由 8 组 16 进制的数字来表示，每组表示 16 比特。这些组数字通过 (":")分割。比如,  2001:0db8:85a3:0000:0000:8a2e:0370:7334 是一个有效的地址。而且，我们可以加入一些以 0 开头的数字，字母可以使用大写，也可以是小写。所以， 2001:db8:85a3:0:0:8A2E:0370:7334 也是一个有效的 IPv6 address地址 (即，忽略 0 开头，忽略大小写)。

然而，我们不能因为某个组的值为 0，而使用一个空的组，以至于出现 `::` 的情况。 比如， 2001:0db8:85a3::8A2E:0370:7334 是无效的 IPv6 地址。

来源：力扣（LeetCode）[链接](https://leetcode-cn.com/problems/validate-ip-address)
:::

## 代码实现

判断是否为 IPv4 地址，用 JS 解这个问题时容易犯错，把字符串直接转成成数字，然后判断是否在 0 到 255 之间，但是：

`parseInt('1e1', 10)`，并不是你期望的结果。解题思路：

- 被拆分的长度必须为 4；
- 每个节点的值只能是整数且在 0-255 之间；

```js
const isIPv4 = ipStr => {
    const nodes = ipStr.split('.');
    // 必须是 4 个数字
    if (nodes.length !== 4) {
        return false;
    }
    for(let i = 0; i < nodes.length; i++) {
        // 转换成整数再转换成字符串看是否相等
        // 可过滤掉 1e1, 00 这种情况
        if (nodes[i] !== parseInt(nodes[i], 10).toString()) {
            return false;
        }
        // 判断是否在 0-255 的范围内
        if (+nodes[i] < 0 || +nodes[i] > 255) {
            return false
        }
    }
    return true;
}
```

判断是否为 IPv6 地址：

- 被拆分的长度必须为 4=8；
- 每个节点的长度要小于 4，且大于 0；
- 每个字符要由0-9、a-f、A-F 组成

```js
const isIPv6 = ipStr => {
    const nodes = ipStr.split(':');
    // 必须是 8 个节点
    if (nodes.length !== 8) {
        return false;
    }
    for(let i = 0; i < nodes.length; i++) {
        // 长度不能大于 4，也不能是空
        if (nodes[i].length > 4 || nodes[i].length === 0) {
            return false;
        }
        // 遍历字符串中的字符
        for (const c of nodes[i]) {
            // 字符对应的数字编码
            let value = c.charCodeAt(0);
            // 97-102 a-f
            // 65-70 A-F
            // 48-57 0-9
            if (isNaN(value) || !(
                value > 96 && value < 103 || 
                value > 64 && value < 71 || 
                value > 47 && value < 58)
            ) {
                return false;
            }
        }
    }
    return true;
}
```
