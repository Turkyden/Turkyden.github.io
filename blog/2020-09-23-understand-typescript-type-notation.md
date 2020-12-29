---
slug: understand-typescript-type-notation
title: 理解 Typescript 的类型注解
author: Turkyden
author_title: A Coder & Designer
author_url: https://github.com/Turkyden
author_image_url: https://avatars2.githubusercontent.com/u/24560160?s=460&u=a615f51b53cd57ce0cc8e8c0234c2f1618eec99b&v=4
tags: [Typescript, Javascript, Development]
---

Welcome to this blog. This blog is created with [**Docusaurus 2 alpha**](https://v2.docusaurus.io/).

<!--truncate-->

This is a test post.

A whole bunch of other information.

```ts
interface Array<T> {
  concat(...items: Array<T[] | T>): T[];
  reduce<U>(
    callback: (state: U, element: T, index: number, array: T[]) => U,
    firstState?: U
  ): U;
  // ···
}
```

## Trying out the code examples
