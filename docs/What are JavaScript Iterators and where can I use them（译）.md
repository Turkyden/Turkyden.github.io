---
title: What are JavaScript Iterators and where can I use them?
type: question
tags: javascript,array,object,iterator
authors: chalarangelo
cover: blog_images/javascript-iterators.jpg
excerpt: Learn how the new JavaScript ES6 Iterators work and how you can use them to level up your programming projects by understanding these short code examples.
---

JavaScript 迭代器在 ES6 中提出，可以使用循环序列的值，通常用于集合的排序。默认情况下，一个迭代器必须继承一个 `next()` 函数，并且返回一个由 `{ value, done }` 构成的对象，其中 `value` 是迭代序列中的下一个值，`done` 是一个布尔值，他决定了序列是否已经迭代完成。

一个非常简单的用法在实际项目的应用中如下：

```js
class LinkedList {
  constructor(data) {
    this.data = data;
  }

  firstItem() {
    return this.data.find(i => i.head);
  }

  findById(id) {
    return this.data.find(i => i.id === id);
  }

  [Symbol.iterator]() {
    let item = {next: this.firstItem().id};
    return {
      next: () => {
        item = this.findById(item.next);
        if(item) {
          return {value: item.value, done: false};
        }
        return {value: undefined, done: true};
      }
    };
  }
}

const myList = new LinkedList([
  {id: 'a10', value: 'First', next: 'a13', head: true },
  {id: 'a11', value: 'Last', next: null, head: false },
  {id: 'a12', value: 'Third', next: 'a11', head: false },
  {id: 'a13', value: 'Second', next: 'a12', head: false }
]);

for(let item of myList) {
  console.log(item);    // 'First', 'Second', 'Third', 'Last'
}
```

在上面的例子中，我们实现了一个 `LinkedList` 数据结构，它的内部使用一个 `data` 数组且每一项有 `value`，以及一些用于确定每一项在序列中位置的属性。通常情况下从类中构造出来的对象是不可迭代的，因此我们使用 `Symbol.interator` 定义一个迭代器和并对它设值，使得返回的序列是基于类内部实现的顺序，同时返回的所有项只带有他们的 `value`。

On a related note, iterators are just functions, meaning they can be called like any other function (e.g. to delegate the iteration to an existing iterator), while also not being restricted to the `Symbol.iterator` name, allowing us to define multiple iterators for the same object. Here's an example of these concepts at play:

与此相关，迭代器仅仅是函数，这意味着能像其他函数一样被调用（例如：指派迭代给一个已经存在的迭代器）因此不必严格使用 `Symbol.iterator` 这个名字，它允许我们为同一个对象定义多个迭代器，以下是一个关于这一概念的示例：

```js
class SpecialList {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }

  values() {
    return this.data
      .filter(i => i.complete)
      .map(i => i.value)
      [Symbol.iterator]();
  }
}

const myList = new SpecialList([
  {complete: true, value: 'Lorem ipsum'},
  {complete: true, value: 'dolor sit amet'},
  {complete: false},
  {complete: true, value: 'adipiscing elit'}
]);

for(let item of myList) {
  console.log(item);  // 传递给上面的 SpecialList 构造函数的确切数据
}

for(let item of myList.values()) {
  console.log(item);  // 'Lorem ipsum', 'dolor sit amet', 'adipiscing elit'
}
```

在这个例子中，我们在 `data` 对象中使用原生的数组迭代器让 `SpecialList` 可迭代，返回 `data` 数组中确切的数据。同时，我们还定义了一个 `values` 方法，它就是迭代器本身，在 `data` 数组上使用了 `Array.prototype.filter()` 和 `Array.prototype.map()`，然后然回一个 `Symbol.iterator` 作为结果，只允许迭代序列中存在非空对象，并且只返回每个对象的 `value`。

**Image credit:** [Daniele Levis Pelusi](https://unsplash.com/@yogidan2012?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
