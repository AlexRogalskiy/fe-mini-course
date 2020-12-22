const book = {
    name: 'JavaScript',
    author: 'suyan',
    des: '公众号：素燕',
    age: 10
};

const handler = {
    get: function(target, prop, receiver) {
        if(prop === 'author') {
            return target.author + '(素燕)';
        }
        return Reflect.get(...arguments);
    },
    set: function(target, prop, value) {
        if(prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(book, handler);

console.log(proxy.name);
console.log(proxy.author);
console.log(proxy.des);
// proxy.age = '100';
proxy.age = 100;
console.log(proxy.age);


const books = [
    {
        id: '666',
        name: '《读懂 Vue3 编程思想》',
        author: 'suyan'
    },
    {
        id: '888',
        name: '《前端小课》',
        author: '素燕'
    },
    {
        id: '111',
        name: '《前端小课手机版》',
        author: '公众号：素燕'
    }
]

const proxyBooks = new Proxy(books, {
    get: function(obj, prop) {
        console.log(prop);
        // 默认实现方式
        if (prop in obj) {
            return obj[prop];
        }
        for (let book of obj) {
            if (book.id === prop) {
                return book;
            }
        }
        return undefined;
    }
});

// 可通过数组下标来获取数据
console.log(proxyBooks[0]);
// 可通过 id 来获取数据
console.log(proxyBooks['888']);