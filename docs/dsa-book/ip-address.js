const isIPv4 = ipStr => {
    const nodes = ipStr.split('.');
    // 必须是 4 个数字
    if (nodes.length !== 4) {
        return false;
    }
    for(let i = 0; i < nodes.length; i++) {
        // 判断第一个字符是否以 0 开始
        if (nodes[i].charCodeAt(0) === '0') {
            return false;
        }
        console.log(+nodes[i]);
        // 判断是否在 0-255 的范围内
        if (+nodes[i] < 0 || +nodes[i] > 255) {
            return false
        }
    }
    return true;
}

console.log(isIPv4("1e1.4.5.6"));
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
        if (nodes[i].length > 4) {
            return false;
        }
        for(let j = 0; j < nodes[i].length; j++) {
            let value = nodes[i][j].toUpperCase().charCodeAt();
            if ((value < 48 || value > 57) && (value < 65 || value > 70)) {
                return false;
            }
        }
    }
    return true;
}