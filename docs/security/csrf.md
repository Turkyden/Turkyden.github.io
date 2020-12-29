---
id: csrf
title: CSRF
---

> 跨站请求伪造 (Cross-Site Request Forgery，简称：CSRF)，也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（[XSS](./xss)）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。

简单点说，CSRF 就是利用用户的登录态发起恶意请求。

## 如何攻击

假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口。

```html
<img src="http://www.domain.com/xxx?comment='attack'" />
```

如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口

```html
<form action="http://www.domain.com/xxx" id="myForm" method="post">
  <input name="comment" value="attack" type="hidden" />
</form>
```

## 如何防御

防范 CSRF 可以遵循以下原则：

1. Get 请求不对数据进行修改，这需要服务端的 WebAPI 遵循 [RESTful](../restful-api) 规范;
2. 不让第三方网站访问到用户 [Cookie](../browser/cookie)
3. 阻止第三方网站跨域请求接口
4. 请求时附带验证信息，比如[验证码](./security-code)或者 [Token](./token)

主要手段有以下三种：

一）SameSite

可以对 Cookie 设置 `SameSite` 属性。该属性设置后 Cookie 将无法随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。

二）验证 Referer

对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。

三）Token

服务器下发一个随机 Token，每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。

## Refer

[[1] MDN Set-Cookie/SameSite](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite)