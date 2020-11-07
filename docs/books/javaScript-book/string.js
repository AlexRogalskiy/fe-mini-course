const name = 'suyan素燕';
console.log(name.length);

for(let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
    // 字符编码对应的值
    console.log(name.charCodeAt(i));
}

const numStr = '1e1';
console.log(numStr.valueOf());
console.log(numStr.toLocaleString());
console.log(numStr.toString());

// 每个字符占 16 位，只能表示 65536 个字符

// a
// 根据值返回对应的字符
console.log(String.fromCharCode(0x61));
console.log(String.fromCharCode(97));
// 这个是个 😁
console.log(String.fromCharCode(55357, 56833));

let message = "ab😁de";
console.log(message.length); // 6
for(let i = 0; i < message.length; i++) {
    // � 无法正常工作 ，😁其实占了两个字符
    console.log(message.charAt(i));
    // 字符编码对应的值
    console.log(message.charCodeAt(i));
}

{
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
}

{
    let name = 'Learn FE with SuYan';
    let ret;
    ret = name.toLowerCase();
    // learn fe with suyan
    console.log(ret);
    
    ret = name.toUpperCase();
    // LEARN FE WITH SUYAN
    console.log(ret);
    
}

{
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
}

{
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
}

{
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
}

{
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
}

{
    let name = 'Learn FE with SuYan';
    let ret;
    ret = name.indexOf('a');
    // ret = 2，a 出现在第 2 个位置
    console.log(ret);
    
    ret = name.indexOf('a', 3);
    // ret = 17，a 出现在第 17 个位置，第 2 个参数表示从那个位置开始起查询
    console.log(ret);
}

{
    let name = 'Learn FE with SuYan';
    let ret;
    ret = name.lastIndexOf('a');
    // ret = 17，a 出现在第 17 个位置
    console.log(ret);
    
    ret = name.lastIndexOf('a', 16);
    // ret = 2，a 出现在第 2 个位置，第 2 个参数表示从那个位置开始起查询
    console.log(ret);
}

{
    let name = 'Learn FE with SuYan';
    let fIndex = name.indexOf('a');
    let lIndex = name.lastIndexOf('a');
    if (fIndex === lIndex && (fIndex !== -1)) {
        console.log('字符串中只有一个 a');
    }
    else {
        console.log('字符串中有多个 a');
    }
}

{
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
}

{
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
}

{
    let name = 'suyan';
    // suyansuyansuyan
    let ret = name.repeat(3);
    console.log(ret);
}

{
    let name = '99';
    // padStart、padEnd 第一个参数表示期望字符串的最终长度
    let ret = name.padStart(name.length + 1, '￥');
    // ￥99，在 name 前插入一个 ￥
    console.log(ret);

    ret = name.padEnd(name.length + 6, '.');
    // 99......，在 name 后插入 6 个 .
    console.log(ret);
}

{
    for (const c of 'suyan') {
        console.log(c);
    }
}