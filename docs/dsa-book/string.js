// 字符串反转

/**
 * wang
 * gnaw
*/

const reverseStr = str => {
    let ret = '';
    for(let i = str.length - 1; i >= 0; i--) {
        let c = str[i];
        ret += c;
    }
    return ret;
};

console.log(reverseStr('wang'));

// 数组逆序数，要求说出来思路，并且白板编程