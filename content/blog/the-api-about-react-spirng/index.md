---
title: 一些 React Spring 弹性动画库的 API
date: "2015-05-06T23:46:37.121Z"
keyword: #css#design
---

> React Spring 是一个基于物理概念中“弹性”的动画库，它应该能够满足大多数与 UI 相关的动画需求。它为您提供了足够灵活的工具，可以方便地将您的创意想法转换为优雅的补间动画。

## React Spring

我们在使用 CSS 编写补间动画时，通常过渡效果非常生硬，

![物理力学中的弹性概念](https://i.imgur.com/7CCH51r.gif)

## API

React Spring 库的 API 设计非常棒，我们可以从中学习如何封装 React 组件的动效逻辑，设计出优雅简洁的 API。

### Spring 单体

这个 API 是整个库最基础的使用方式，一般适用于单体动画。

```tsx
import {Spring} from 'react-spring/renderprops'
```

不仅适用于 CSS:

```tsx
<Spring
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props => <div style={props}>hello</div>}
</Spring>
```

在 SVG 中使用同样效果很棒：

```tsx
<Spring
  from={{ x: 100 }}
  to={{ x: 0 }}>
  {props => (
    <svg strokeDashoffset={props.x}>
      <path d="..." />
    </svg>
  )}
</Spring>
```

在文本插值中渲染：

```tsx
<Spring
  from={{ number: 0 }}
  to={{ number: 1 }}>
  {props => <div>{props.number}</div>}
</Spring>
```

### Trail 轨迹

Trail 使元素列表的第一项具有动画效果，其余的元素形成一个自然的 Trail 轨迹并跟随它们之前的兄弟相邻元素。

```tsx
import {Trail} from 'react-spring/renderprops'
```

```tsx
<Trail 
  items={items} 
  keys={item => item.key} 
  from={{transform: 'translate3d(0,-40px,0)'}} 
  to={{transform: 'translate3d(0,0px,0)'}}>
  {item => props => <span style={props}>{item.text}</span>}
</Trail>
```

### Transition 过渡

Transition 有点类似于 Vue 或者 react-transition 中的概念，为动画转场设置补间效果。

```tsx
import {Transition} from 'react-spring/renderprops'
```

```tsx
<Transition
  items={toggle}
  from={{ position: 'absolute', opacity: 0 }}
  enter={{ opacity: 1 }}
  leave={{ opacity: 0 }}>
  {toggle =>
    toggle
      ? props => <div style={props}>😄</div>
      : props => <div style={props}>🤪</div>
  }
</Transition>
```

### Keyframes 关键帧

关键帧允许你链接，组成和编排动画。

```tsx
import {Keyframes} from 'react-spring/renderprops'
```

声明一个关键帧组件：

```tsx
// You can create keyframes for springs and trails
const Container = Keyframes.Spring({
  // Single props
  show: {opacity: 1},
  // Chained animations (arrays)
  showAndHide: [{opacity: 1}, {opacity: 0}],
  // Functions with side-effects with access to component props
  wiggle: async (next, cancel, ownProps) => {
    await next({x: 100, config: config.wobbly})
    await delay(1000)
    await next({x: 0, config: config.gentle})
  }
})
```

使用组件：

```tsx
<Container state="showAndHide">
  {styles => <div style={styles}>Hello</div>}
</Container>
```

无限循环一个关键帧组件：

```tsx
// Will fade children in and out in a loop
const Script = Keyframes.Spring(async next =>
  while (true)
    await next({ opacity: 1, from: { opacity: 0 }, reset: true })
)
```

### Parallax 视差

视差效果一般用于着陆页，随着屏幕滚动，各个图层之间产生差速效果。

```tsx
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
```

```tsx
<Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
  <ParallaxLayer offset={0} speed={0.5}>
    <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
  </ParallaxLayer>
</Parallax>
```
