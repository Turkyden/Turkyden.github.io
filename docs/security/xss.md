---
id: xss
title: XSS
---

> 跨网站脚本（Cross-site scripting，简称：[XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。

XSS 一般分为三种：

- **反射型**：当用户点击一个恶意链接，或者进入一个恶意网站时，注入脚本侵入被攻击者的网站。
- **存储型**：注入型脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器上传回并执行。
- **DOM-based**：页面 DOM 结构或者环境被恶意修改，入侵脚本被包含进页面并意外执行。

## 如何攻击

XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。

例如通过 URL 获取某些参数：

```html
<!-- http://www.domain.com?name=<script>alert('xss')</script> -->
<div>{{name}}</div>
```

上述 URL 输入可能会将 HTML 改为 `<div><script>alert('xss')</script></div>`，这样页面中就凭空多了一段可执行脚本。这种攻击类型是**反射型**攻击，也可以说是 **DOM-based** 攻击。

也有另一种场景，比如写了一篇包含攻击代码 `<script>alert('xss')</script>` 的文章：

```html
<!-- Lorem ipsum dolor sit amet, <script>alert('xss')</script> consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. -->
<textarea>{{text}}</textarea>
```

那么可能浏览文章的用户都会被攻击到，这种攻击类型是**存储型**攻击，也可以说是 **DOM-based** 攻击，并且这种攻击打击面更广。

## 如何防御

最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义。

```js
const escape = (str) => {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}
```

通过转义可以将攻击代码 `<script>alert('xss')</script>` 变成：

```js
// -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;
escape('<script>alert(1)</script>')
```

对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过**黑名单**过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用**白名单**的方式。

```js
import xss from 'xss'

const html = xss('<h1 id="title">XSS Demo</h1><script>alert("xss");</script>')
// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;
console.log(html)
```

以上示例使用了第三方库 [js-xss](https://github.com/leizongmin/js-xss) 来实现。可以看到在输出中保留了 `h1` 标签且过滤了 `script` 标签

## CSP

> 内容安全策略 ([CSP](https://developer.mozilla.org/en-US/docs/Glossary/CSP)) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 ([XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。

我们可以通过 CSP 来尽量减少 XSS 攻击。CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的资源或者代码。一般情况下，可以通过 HTTP Response Headers 中的 `Content-Security-Policy` 来开启 CSP。

一）只允许加载本站资源

```txt
Content-Security-Policy: default-src ‘self’
```

二）只允许加载 HTTPS 协议图片

```txt
Content-Security-Policy: img-src https://*
```

三）允许加载任何来源框架

```txt
Content-Security-Policy: child-src 'none'
```

更多属性可以可以查阅 &rarr; [https://content-security-policy.com/](https://content-security-policy.com/)

## Refers

[[1] www.wikiwand.com](https://www.wikiwand.com/zh-hans/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5)

[[2] js-xss leizongmin](https://github.com/leizongmin/js-xss)

[[3] yuchengkai xss safety](https://yuchengkai.cn/docs/frontend/safety.html)

[[4] content-security-policy.com](https://content-security-policy.com/)

[[5] MDN Cross-site_scripting](https://developer.mozilla.org/zh-CN/docs/Glossary/Cross-site_scripting)