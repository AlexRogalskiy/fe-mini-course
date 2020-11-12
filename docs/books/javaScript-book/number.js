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

{
    console.log(+'s'); // Nan
    console.log(+'1e1'); // 10
    console.log(+'100'); // 100

    console.log(parseInt('s')); // Nan
    console.log(parseInt('1e1', 10)); // 1
    console.log(parseInt('100')); // 100
    console.log(parseInt('6s1')); // 6
    console.log(+('6s1')); // NaN
    console.log(+('6e1')); // 60

    console.log(+'1e1'); // 10 = 1
    console.log(+'1e2'); // 100 = 1 * 10*10
    console.log(+'2e2'); // 100 = 2 * 10*10
    console.log('-------');

    function syParseInt(str) {
        if (str !== Number(str).toString()) {
            return NaN;
        }
        return +str;
    }
    console.log(syParseInt('s')); // NaN
    console.log(syParseInt('1e1', 10)); // NaN
    console.log(syParseInt('100')); // 100
    console.log(syParseInt('6s1')); // NaN
}