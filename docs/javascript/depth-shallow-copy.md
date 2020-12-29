---
id: depth-shallow-copy
title: 深浅拷贝
---

> 什么是深拷贝？什么是浅拷贝？

```js
let dog = {
  name: '宝山'
}
let dog2 = dog
dog.name = '兜兜'
console.log(dog2.name) // 兜兜
```

从上述例子中我们可以发现，如果给一个变量赋值一个对象，那么两者的值会是同一个引用，其中一方改变，另一方也会相应改变。

通常在开发中我们不希望出现这样的问题，我们可以使用浅拷贝来解决这个问题。

## 浅拷贝

首先可以通过 `Object.assign` 来解决这个问题。

```js
let dog = {
  name: '宝山'
}
let dog2 = Object.assign({}, dog)
dog.name = '兜兜'
console.log(dog2.name) // 宝山
```

当然我们也可以通过 ES6 语法中的展开运算符 `...` 来解决。

```js
let dog = {
  name: '宝山'
}
let dog2 = {...dog}
dog.name = '兜兜'
console.log(dog2.name) // 宝山
```

通常浅拷贝就能解决大部分问题，但是当我们遇到如下情况就需要使用到深拷贝。

```js
let dog = {
  name: '宝山',
  owner: {
    sex: '男'
  }
}
let dog2 = {...dog}
dog.owner.sex = '女'
console.log(dog2.owner.sex) // 女
```

浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到刚开始的话题了，两者享有相同的引用。要解决这个问题，我们需要引入深拷贝。

## 深拷贝

这个问题通常可以通过 `JSON.parse(JSON.stringify(object))` 来解决。

```js
let dog = {
  name: '宝山',
  owner: {
    sex: '男'
  }
}
let dog2 = JSON.parse(JSON.stringify(dog))
dog.owner.sex = '女'
console.log(dog2.owner.sex) // 男
```

但是该方法有以下几个局限性：

1. 会忽略 `undefined`
2. 会忽略 `symbol`
3. 不能序列化函数
4. 不能解决循环引用的对象

```js
let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
```

如果你有这么一个循环引用对象，你会发现你不能通过该方法深拷贝，控制台里会发现以下报错：

:::warning 错误

VM21072:13 Uncaught TypeError: Converting circular structure to JSON
--> starting at object with constructor 'Object'
--- property 'c' closes the circle

:::

除此之外，在遇到 `function`、 `undefined` 或者 `Symbol` 的时候，该对象也不能正常的序列化。

```js
let a = {
  age: undefined,
  sex: Symbol('male'),
  jobs: function() {},
  name: '宝山'
}
let b = JSON.parse(JSON.stringify(a))
console.log(b) // {name: "宝山"}
```

你会发现在上述情况中，该方法会忽略掉 `function`、`undefined` 和 `Symbol`。

但是在通常情况下，复杂数据都是可以序列化的，所以这个函数可以解决大部分问题，并且该函数是内置函数中处理深拷贝性能最快的。

### MessageChannel

如果你所需拷贝的对象含有内置类型并且**不包含函数**，可以使用 `MessageChannel`。

```js
async function structuralClone(obj) {
  return new Promise(resolve => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = ev => resolve(ev.data);
    port1.postMessage(obj);
  });
}

let dog = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
}
dog.c = dog.b

// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
(async () => {
  const dog2 = await structuralClone(dog)
})()
```

### Lodash

当然如果你的数据中含有以上三种情况下，可以使用 [lodash](https://lodash.com/docs#cloneDeep) （第三方库）的深拷贝函数。

```js
const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
