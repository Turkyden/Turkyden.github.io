---
title: 如何自定义/设计一个 React Hook
date: "2020-08-24T22:12:03.284Z"
description: "React Hooks 特性的推出将 React 代码极简理念进行到底"
---

> React Hooks 是 v16.8 版本以后才退出的新特性，他可以让你尽情使用 state 状态和其他 React 特性，而无需写一个 class。

为什么要用 React Hooks，在 2018 年的分享上已经指出，可以查看 [YouTube &rarr;](https://www.youtube.com/watch?v=dpw9EHDh2bM&t=1s)

首先，它不是一个破坏性的的改动，完全能兼容之前的 class 写法。

## 使用规则

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。

## Hook API

- useState 状态维护
- useEffect 执行副作用
- useContext 上下文
- useReducer 本地复杂 state

## Case

以下是一个发起请求，紧接着将数据渲染至页面的场景：

```tsx
import { useState, useEffect } from 'react';

function Section(props: SectionProps) {
  const [ datas, setDatas ] = useState([]);

  const handleQuery = async function() {
    const params = { type: 'hrm-base' };
    const { status, datas } = await Utils.query(params);
    if(status === 0) {
      setDatas(datas);
    }
    props.onMouted(status);
  };

  useEffect(() => {
    handleQuery()
  }, [])

  return (
    // ...
    <div>{datas}</div>
    // ...
  )
}
```

我们可以把发起请求这一逻辑封装成一个自定义 **Hook**，比如叫做 `useSectionDatas`:

```ts
import { useState, useEffect } from 'react';
import Utils from '../utils';

export function useSectionDatas(
  type: string, 
  callback: (status: number) => void
) {
  const [ datas, setDatas ] = useState([]);

  const handleQuery = async function() {
    const { status, datas } = await Utils.query({ type });
    if(status === 0) {
      setDatas(datas);
    }
    callback(status);
  };

  useEffect(() => {
    handleQuery()
  }, [])

  return datas;
}
```

在业务组件中我们就可以通过这样使用自定义 **Hook**：

```tsx
import { useState, useEffect } from 'react';
import { useSectionDatas } from '../hooks';

function Section(props: SectionProps) {

  const datas = useSectionDatas('hrm-base', props.onMouted);

  return (
    // ...
    <div>{datas}</div>
    // ...
  )
}
```

干净整洁，这时候入参只需传入少量的依赖参数 `hrm-base` 和 回调函数 `onMouted` 即可。

## 注意事项

- ~~在 `if` `switch` `loop` 等逻辑里使用 Hook~~
- ~~在 `Class` 组件中使用 Hook~~
- ~~在非函数式组件(普通 JavaScript 函数)中使用 Hook~~
