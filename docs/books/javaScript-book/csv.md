# 前端如何导出 Excel（CSV）文件

有时候需要把一些数据导出到一个 Excel 文件中，并下载。遇到这个问题，其实能够直接导出一个 CSV（Comma-Separated Values） 文件即可。CSV 是一种以纯文本方式存储的表格文件，每个单元格数据以逗号分割，每行通过换行符分割，类似这种形式：

```shell
name,age,from\n
suyan,20,beijing\n
lefex,30,baotou\n
```

所以，如果把一些数据导出到文件只要转换成这种数据格式即可。

```json
{
    header: ["name", "age", "from"],
    data: [
        {
            name: "suyan",
            age: "23",
            from: 'beijing'
        },
        {
            name: "lefex",
            age: "30",
            from: 'baotou'
        }
    ]
}
```

把这个对象转换成 CSV 字符串，代码如下：

```js
function exportToCSVFile(obj) {
    let header = obj.header.join(',') + '\n';
    let datas = obj.data.map(ele => {
        return `${ele.name},${ele.age},${ele.from}\n`;
    });
    let dataStrs = [header, ...datas].join('');
}
```

把字符串导出文件，可以使用 Blob 对象，通过 Blob 对象生成一个 URL，然后创建一个 a 标签，达到下载文件的目的。代码中的 `\uFEFF` 是一个文件头，表示文件的编码，不加这个头，通过某些软件打开时可能会发生乱码。 

```js
 // 创建一个 Blob 对象
const blob = new Blob(['\uFEFF' + dataStrs], {
   type: 'text/plain;charset=utf-8',
 });
```

创建一个 a 标签，每行代码我都详细写了注释：

```js
// 创建一个 a 标签
const link = document.createElement("a");
// 一个 URL，可以是任意协议的，不只是 HTTP 协议
// 这里创建了一个 Blob URL
// blob:http://localhost:1234/9b3be48e-9948-496d-8a2b-18d437eb46e0
link.href = URL.createObjectURL(blob);
console.log(link.href);
​
// 此属性表示用户下载文件而不是进行导航到 URL，这里指的为文件名
link.download = "suyan.csv";
link.click();
// 需要释放 URL
URL.revokeObjectURL(link.href);
```

完整代码如下：

```js
function exportToCSVFile(obj) {
    let header = obj.header.join(',') + '\n';
    let datas = obj.data.map(ele => {
        return `${ele.name},${ele.age},${ele.from}\n`;
    });
    let dataStrs = [header, ...datas].join('');
    // 创建一个 Blob 对象
    const blob = new Blob(['\uFEFF' + dataStrs], {
        type: 'text/plain;charset=utf-8',
    });
    // 创建一个 a 标签
    const link = document.createElement("a");
    // 一个 URL，可以是任意协议的，不只是 HTTP 协议
    // 这里创建了一个 Blob URL
    // blob:http://localhost:1234/9b3be48e-9948-496d-8a2b-18d437eb46e0
    link.href = URL.createObjectURL(blob);
    console.log(link.href);

    // 此属性表示用户下载文件而不是进行导航到 URL，这里指的为文件名
    link.download = "suyan.csv";
    link.click();
    // 需要释放 URL
    URL.revokeObjectURL(link.href);
}
```
