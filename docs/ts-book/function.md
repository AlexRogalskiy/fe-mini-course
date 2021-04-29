# 函数的使用

'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)

```ts
function (this: any, text: string) {
    console.log(this);
};
```
经过 TypeScript 编译器编译后，参数将忽略 this

```js
function (text) {
    console.log(this);
};
```