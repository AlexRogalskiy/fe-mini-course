let s = Symbol();
let suyan = Symbol('suyan');

console.log(suyan);

console.log(s);

let person = {};
let name = Symbol('name');
person[name] = 'suyan';
// 通过 symbol 获取对象的值
console.log(person[name]);