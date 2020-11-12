<template>
    <CodeRun :code="isIPv4 ? ipv4Code : ipv6Code"></CodeRun>
</template>

<script>
import CodeRun from './CodeRun.vue';

const ipv4Code = `const isIPv4 = ipStr => {
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
// 测试用例
console.log(isIPv4('127.0.1.2'));
console.log(isIPv4('0.0.1.2'));
console.log(isIPv4('127.00.1.2'));
console.log(isIPv4('256.0.1.2'));
`;

const ipv6Code = `const isIPv6 = ipStr => {
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
}`;

export default {
    props: {
        isIPv4: Boolean
    },
    data() {
        return {
            ipv4Code: ipv4Code,
            ipv6Code: ipv6Code
        }
    }
}
</script>

<style lang="stylus" scoped>
  .tool-title-wrap
    background-color $navBgColor
    .title
      color #fff
      border-left 5px solid #fff
      padding 20px 10px
      font-weight 700
      font-size 24px
</style>