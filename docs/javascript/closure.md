---
id: closure
title: 闭包
---

闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

```js
function A() {
  let a = 1
  function B() {
    console.log(a)
  }
  return B
}
```

你是否会疑惑，为什么函数 A 已经弹出调用栈了，为什么函数 B 还能引用到函数 A 中的变量。因为函数 A 中的变量这时候是存储在堆上的。现在的 JS 引擎可以通过逃逸分析辨别出哪些变量需要存储在堆上，哪些需要存储在栈上。

:::note 真题

如何在循环中使用闭包解决以下使用 `var` 定义的功能，并依次打印出数字？

:::

```js
for(var i=1; i<=5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000);
}
```

首先因为 `setTimeout` 是个异步函数，所有会先等待循环全部执行完毕，这时候 `i` 就是 6 ，因此控制台里会依次输出 5 次 6。

解决办法主要有以下三种：

一）使用闭包

```js {2,6}
for(var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

二）使用 `setTimeout` 的第三个参数

```js {4}
for(var i=1; i<=5; i++) {
  setTimeout(function timer(j) {
    console.log(j);
  }, i*1000, i);
}
```

三）使用 `let` 定义 `i`

```js {1}
for(let i=1; i<=5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000);
}
```

因为对于 `let` 来说，他会创建一个块级作用域，相当于：

```js {3,4,5,6,7,8}
{
  let i = 0
  {
    let ii = i
    setTimeout(function timer() {
      console.log(ii);
    }, i*1000);
  }
  i++
  {
    let ii = i
    setTimeout(function timer() {
      console.log(ii);
    }, i*1000);
  }
  i++
  {
    let ii = i
    setTimeout(function timer() {
      console.log(ii);
    }, i*1000);
  }
  ...
}
```
