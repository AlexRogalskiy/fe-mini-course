# interface 给对象上个紧箍咒

interface，也叫接口，可定义对象类型，控制对象的属性及方法。举例：

## 定义一个类，控制构造函数的参数

定义一个 SuYanOption 用来创建 SuYan 类，在构造函数中可以约定参数必须包含一个名字 name，描述信息 des 可有可无。

```ts
interface SuYanOption {
    name: string;
    // 可选类型，该字段可以为空
    des?: string;
}

class SuYan {
    option: SuYanOption;
    constructor(option: SuYanOption) {
        this.option = option;
    }
}
```
在创建 SuYan 实例的时候，VSCode 会自动提示，option 中定义的参数。

```ts
// 由于 des 为可选的，故可以不传
let suyan = new SuYan({
    name: '素燕'
});

let suyan2 = new SuYan({
    name: '素燕',
    des: '毒舌程序员，帮阻10W人入门并进阶前端'
});
```

## 用继承实现一个复杂对象的定义

```ts
// 定义所在源码的位置
interface SYSourceLocation {
    line: number
}

// 通过枚举定义节点的类型
enum SYNodeType {
    TEXT = 'text',
    IMG = 'img'
}

interface SYNodeExt {
    name: string
}

// 定义一个节点，必须包含 type 和 loc
interface SYNode {
    // type 必须为 SYNodeType 型
    type: SYNodeType
    // loc 必须为 SYSourceLocation 型
    loc: SYSourceLocation
}

// 定义一个 SYTextNode 继承自 SYNode 和 SYNodeExt
interface SYTextNode extends SYNode, SYNodeExt {
    // 重新定义 SYNode 中的 type 类型，必须为 SYNodeType.TEXT
    type: SYNodeType.TEXT
    // 新增一个新的属性 content
    content: string
}
```

创建一个 textNode，必须符合下面的规范才算合法：

```ts
function createTextNode() {
    let node: SYTextNode = {
        content: '我是素燕',
        loc: {
            line: 1
        },
        type: SYNodeType.TEXT
    }
    return node;
}
```


## 定义函数

在 interface 中也可以定义函数：

```ts
// 定义函数
interface ParserOptions {
    /**
     * 是否为原生节点
     */
    isNativeTag?: (tag: string) => boolean
}

function parse(option: ParserOptions) {
    // 定义的 option 需要提供一个函数 isNativeTag
    if (option.isNativeTag) {
        const isNative = option.isNativeTag('div');
        if (isNative) {
            console.log('This is a native element');
        }
    }
}
```

```ts
const isNaTag = tag => tag === 'div';

parse({
    isNativeTag: isNaTag
});
```

## 把两个 interface 合并成一个

```ts
interface SyBg {
    width: number;
    height: number;
}

interface SyColor {
    color: string;
}

type SyBgColor = SyBg & SyColor;
```

```ts
const bgColor: SyBgColor = {
    width: 100,
    height: 20,
    color: '#eee'
}
```

## 参考

- [官方文档](https://www.typescriptlang.org/docs/handbook/2/objects.html)