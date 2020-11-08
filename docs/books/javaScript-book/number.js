{
    let num = 10;
    // 10
    console.log(num.toString());
    // 1010
    console.log(num.toString(2));
    // 12
    console.log(num.toString(8));
    // 10
    console.log(num.toString(10));
    // a
    console.log(num.toString(16));
}

{
    let num = 19;
    // 19.00，保留 2 位小数
    console.log(num.toFixed(2));
    num = 19.4511;
    // 19.5，保留 1 位小数，四舍五入
    console.log(num.toFixed(1));
    // false
    console.log(Number.isInteger(1.01));
    // true
    console.log(Number.isInteger(1));
}