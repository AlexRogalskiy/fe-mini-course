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

// console.log(isIPv4("1e1.4.5.6"));
/**
> +'e'
NaN
> +'1e1'
10
> +'1s1'
NaN
> parseInt('1e1', 10)
1
> Number('1e1')
10
 */

const isIPv6 = ipStr => {
    const nodes = ipStr.split(':');
    // 必须是 8 个节点
    if (nodes.length !== 8) {
        return false;
    }
    for(let i = 0; i < nodes.length; i++) {
        console.log('-------');
        console.log(nodes[i]);
        // 长度不能大于 4，也不能是空
        if (nodes[i].length > 4 || nodes[i].length === 0) {
            return false;
        }
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
            lastValue = value;
            console.log(c, '=', value);
        }
    }
    return true;
}

console.log(isIPv6("0db8:0:85a3:0000:0:8A2E:0370:733a"));