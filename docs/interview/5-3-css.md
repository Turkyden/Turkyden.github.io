---
id: 5-3-css
title: 五年高考三年模拟（CSS）
---

## 2.1. 标准 CSS 的盒子模型与低版本 IE 的盒子模型

1. 有两种盒子模型：IE 盒模型（border-box）、W3C 标准盒模型（content-box）

2. 盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个

IE 盒模型和 W3C 标准盒模型的区别：

1. W3C 标准盒模型：属性 width，height 只包含内容 content，不包含 border 和 padding

2. IE 盒模型：属性 width，height 包含 content、border 和 padding，指的是 content + padding + border。

## 2.2. CSS 选择符有哪些

1. id 选择器（#myid）
2. 类选择器（.myclassname）
3. 标签选择器（div,h1,p）
4. 后代选择器（h1 p）
5. 相邻后代选择器（子）选择器（ul>li）
6. 兄弟选择器（li~a）
7. 相邻兄弟选择器（li+a）
8. 属性选择器（a[rel="external"]）
9. 伪类选择器（a:hover,li:nth-child）
10. 伪元素选择器（::before、::after）
11. 通配符选择器

## 2.3. ::before 和:after 双冒号和单冒号区别与作用

单冒号（:）用于 CSS3 伪类，双冒号（::）用于 CSS3 伪元素。（伪元素由双冒号和伪元素名称组成）

双冒号是在当前规范中引入的，用于区分伪类和伪元素。

不过浏览器需要同时支持旧的已经存在的伪元素写法，比如 :first-line、:first-letter、:before、:after 等，而新的在 CSS3 中引入的伪元素则不允许再支持旧的单冒号的写法。想让插入的内容出现在其它内容前，使用::before，否者，使用::after；在代码顺序上，::after 生成的内容也比::before 生成的内容靠后。如果按堆栈视角，::after 生成的内容会在::before 生成的内容之上。

在 css3 中使用单冒号来表示伪类，用双冒号来表示伪元素。但是为了兼容已有的伪元素的写法，在一些浏览器中也可以使用单冒号来表示伪元素。

伪类一般匹配的是元素的一些特殊状态，如 hover、link 等，而伪元素一般匹配的特殊的位置，比如 after、before 等。

## 2.4. 伪类与伪元素的区别

css 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句话中的第一个字母，或者是列表中的第一个元素。

伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover 来描述这个元素的状态。伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。

比如说，我们可以通过 ::before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。有时你会发现伪元素使用了两个冒号（::）而不是一个冒号（:）。这是 CSS3 的一部分，并尝试区分伪类和伪元素。大多数浏览器都支持这两个值。按照规则应该使用（::）而不是（:），从而区分伪类和伪元素。但是，由于在旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都支持使用这两种方式表示伪元素。

## 2.5. CSS 中哪些属性可以继承

每个 CSS 属性定义的概述都指出了这个属性是**默认继承**的，还是默认不继承的。这决定了当你没有为元素的属性指定值时该如何计算值。

当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值。只有文档根元素取该属性的概述中给定的初始值（这里的意思应该是在该属性本身的定义中的默认值）。

当元素的一个非继承属性（在 Mozillacode 里有时称之为 resetproperty）没有指定值时，则取属性的初始值 initialvalue（该值在该属性的概述里被指定）。

## 2.6. CSS 优先级算法如何计算

待更新

## 2.7. 关于伪类 LVHA 的解释

a 标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪
类:link、:visited、:hover、:active；
当链接未访问过时：

1. 当鼠标滑过 a 链接时，满足:link 和:hover 两种状态，要改变 a 标签的颜色，就必须将:hover 伪类在:link 伪类后面声明；

2. 当鼠标点击激活 a 链接时，同时满足:link、:hover、:active 三种状态，要显示 a 标签激活时的样式（:active）

必须将 :active 声明放到 :link 和:hover 之后。因此得出 LVHA 这个顺序。当链接访问过时，情况基本同上，只不过需要将 :link 换成 :visited。这个顺序能不能变？可以，但也只有 :link 和 :visited 可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，也就不存在覆盖的问题。

## 2.8. CSS3 新增伪类有那些

[参考地址](https://www.cnblogs.com/SKLthegoodman/p/css3.html)

## 2.9.如何居中 div

对于宽高固定的元素

1. 我们可以利用 margin:0auto 来实现元素的水平居中。

2. 利用绝对定位，设置四个方向的值都为 0，并将 margin 设置为 auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。

3. 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。

4. 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 translate 来调整元素的中心点到页面的中心。

5. 使用 flex 布局，通过 align-items:center 和 justify-content:center 设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。

## 2.10. display 有哪些值并说明他们的作用

block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。

none 元素不显示，并从文档流中移除。

inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。

inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。

list-item 像块类型元素一样显示，并添加样式列表标记。

table 此元素会作为块级表格来显示。

inherit 规定应该从父元素继承 display 属性的值。

## 2.11. position 的值 relative 和 absolute 定位原点

absolute 生成绝对定位的元素，相对于值不为 static 的第一个父元素的 paddingbox 进行定位，也可以理解为离自己这一级元素最近的一级 position 设置为 absolute 或者 relative 的父元素的 paddingbox 的左上角为原点的。

fixed（老 IE 不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。

relative 生成相对定位的元素，相对于其元素本身所在正常位置进行定位。

static 默认值。没有定位，元素出现在正常的流中（忽略 top,bottom,left,right,z-index 声明）。

inherit 规定从父元素继承 position 属性的值。

absolute 定位的元素，是相对于它的第一个 position 值不为 static 的祖先元素的 paddingbox
来进行定位的。

## 2.12 CSS3 有哪些新特性

- 圆角 （border-radius:8px）
- 多列布局 （multi-columnlayout）
- 阴影和反射 （Shadow\Reflect）
- 文字特效 （text-shadow）
- 文字渲染 （Text-decoration）
- 线性渐变 （gradient）
- 形变 （transform）（缩放，定位，倾斜，动画，多背景）

## 2.13 CSS3 的 Flexbox 弹性布局

- flex-direction 属性决定主轴的方向（即项目的排列方向）。
- flex-wrap 属性定义，如果一条轴线排不下，如何换行。
- flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 rownowrap。
- justify-content 属性定义了项目在主轴上的对齐方式。
- align-items 属性定义项目在交叉轴上如何对齐。
- align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

## 2.14 用纯 CSS 创建一个三角形

采用的是相邻边框连接处的均分原理。

```css
#demo {
  width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-top: 50px solid blue;
	border-right: 50px solid transparent;
}
```

## 2.15 一个满屏品字布局如何设计

可以使用 Flex 布局轻松解决。

## 2.16 CSS 多列等高如何实现

可以使用 Flex 布局轻松解决。

## 2.17 经常遇到的浏览器的兼容性与解决办法

- 浏览器默认 padding 和 marging 不同，使用 normallize 解决

## 2.18 li 与 li 之间有看不见的空白间隔

原因：浏览器的默认行为是把inline元素间的空白字符（空格换行tab）渲染成一个空格，也就是我们上面的代码 `<li>` 换行后会产生换行字符，而它会变成一个空格，当然空格就占用一个字符的宽度。

解决方案：既然是因为 `<li>` 换行导致的，那就可以将 `<li>` 代码全部写在一排

## 2.19 为什么要初始化 CSS

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。

## 2.20 什么是包含块，对于包含块的理解

包含块（containingblock）就是元素用来计算和定位的一个框。

## 2.21 visibility 属性中 collapse 值

1. 对于一般的元素，它的表现跟 visibility：hidden;是一样的。元素是不可见的，但此时
仍占用页面空间。
2. 但例外的是，如果这个元素是 table 相关的元素，例如 table 行，tablegroup，table 列，
tablecolumngroup，它的表现却跟 display:none 一样，也就是说，它们占用的空间也会释放。
在不同浏览器下的区别：

在谷歌浏览器里，使用 collapse 值和使用 hidden 值没有什么区别。

在火狐浏览器、Opera 和 IE11 里，使用 collapse 值的效果就如它的字面意思：table 的行会消失，它的下面一行会补充它的位置。

## 2.22 width:auto 和 width:100% 区别

- width:100% 会使元素 box 的宽度等于父元素的 contentbox 的宽度。
- width:auto 会使元素撑满整个父元素，margin、border、padding、content 区域会自动分配水平空间。

## 2.23 绝对定位元素与非绝对定位元素的百分比计算

绝对定位元素的宽高百分比是相对于临近的 position 不为static 的祖先元素的 paddingbox 来计算的。

非绝对定位元素的宽高百分比则是相对于父元素的 contentbox 来计算的。

## 2.24 图片 base64 编码的优点和缺点

base64 编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候，可以用该字符串来代替图片的 url 属性。

使用 base64 的优点是：减少一个图片的 HTTP 请求。

使用 base64 的缺点是：代码体积变大，无缓存。

