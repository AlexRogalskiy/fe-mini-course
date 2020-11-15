# 如何 hook console.log

这个需求是我在做代码执行器时遇到的问题，在代码执行器中需要把 `console.log` 输出到一个自定义的视图上。做这个需求需要解决两个问题：

1、能够接收到 console.log 要输出的内容，也就是获取 console.log(args) 的参数 args；
2、不影响原有 console.log 的正常功能；

console 是一个全局对象，它包含了很多方法，比如：

```js
console.log();
console.error();
```

其实 console.log 就是一个函数，它的用法如下：

```js
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

既然是个函数，直接重写这个函数即可。

```js
const reDefineConsoleLog = function (args) {
    const orgLog = console.log;
    const calls = [];
    console.log = (...args) => {
        let logs = [];
        for(let i = 0; i < args.length; i++) {
            let aLog = args[i];
            let logStr = JSON.stringify(aLog);
            if (!logStr) {
                if (typeof aLog === 'function') {
                    // function can not parse to json
                    logStr = aLog.constructor;
                }
            }
            logs.push(logStr);
        }
        let retLog = logs.join(' , ');
        orgLog(retLog);
        // 还原
        console.log = orgLog;
    };
};
```

