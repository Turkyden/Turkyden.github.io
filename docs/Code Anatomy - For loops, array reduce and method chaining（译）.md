---
title: Code Anatomy - For loops, array reduce and method chaining
type: story
tags: javascript,array,object,iterator
authors: chalarangelo
cover: blog_images/code-anatomy-optimizing-recursion.jpg
excerpt: There are many ways to iterate and transform array data in JavaScript. Learn how each one works and where you should use them.
---

**For loops** 循环

```js
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`;
    filePaths.push(filePath);
  }
}

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

- 任何 `for` 循环都可以使用 - [查看 JavaScript 循环的区别](/blog/s/javascript-for-in-for-of-foreach/)。
- 现在很少见，因为函数式编程更加流行。
- 对迭代进行控制，例如跳过某一项或者提前`返回`。
- 结果数组需要在循环外部被事先声明。
- 使用 `Array.prototype.push()` 或者展开表达式 (`...`) 用于添加元素。
- `O(N)` 复杂度，每一项只会被迭代一次。

**Array reduce** 数组归纳

```js
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim();
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
}, []);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

- 使用 `Array.prototype.reduce()` 将一个空数组作为初始值。
- 现在更加普遍，因为函数式编程更加流行。
- 对迭代的控制更少，不能跳过某一项或者提前返回。
- 如有必要，可以通过其他方法链接。
- 使用 `Array.prototype.push()` 或者展开表达式 (`...`) 用于添加元素。
- `O(N)` 复杂度，每一项只会被迭代一次。

**Method chaining** 链式方法

```js
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files
  .map(file => file.trim())
  .filter(Boolean)
  .map(fileName => `~/cool_app/${fileName}`);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

- 使用 `Array.prototype.map()` 和 `Array.prototype.filter()`.
- 现在更加普遍，因为函数式编程更加流行。
- 对迭代的控制更少，不能跳过某一项或者提前返回。
- 声明式，更容易阅读和重构，链可根据需要拓展。
- 不使用 `Array.prototype.push()` 或者展开 (`...`) 操作符.
- `O(cN)` 复杂度, `c` 为每一项的迭代, (`c`: 链的长度).

**Image credit:** [Windows](https://unsplash.com/@windows?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
