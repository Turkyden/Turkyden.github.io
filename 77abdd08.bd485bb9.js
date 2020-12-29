(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),o=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=o(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=o(r),O=n,m=b["".concat(s,".").concat(O)]||b[O]||u[O]||a;return r?c.a.createElement(m,l(l({ref:t},i),{},{components:r})):c.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=O;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return o}));var n=r(2),c=r(6),a=(r(0),r(134)),s={id:"xss",title:"XSS"},l={unversionedId:"security/xss",id:"security/xss",isDocsHomePage:!1,title:"XSS",description:"\u8de8\u7f51\u7ad9\u811a\u672c\uff08Cross-site scripting\uff0c\u7b80\u79f0\uff1aXSS\uff09\u662f\u4e00\u79cd\u7f51\u7ad9\u5e94\u7528\u7a0b\u5e8f\u7684\u5b89\u5168\u6f0f\u6d1e\u653b\u51fb\uff0c\u662f\u4ee3\u7801\u6ce8\u5165\u7684\u4e00\u79cd\u3002\u5b83\u5141\u8bb8\u6076\u610f\u4f7f\u7528\u8005\u5c06\u7a0b\u5f0f\u7801\u6ce8\u5165\u5230\u7f51\u9875\u4e0a\uff0c\u5176\u4ed6\u4f7f\u7528\u8005\u5728\u89c2\u770b\u7f51\u9875\u65f6\u5c31\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u8fd9\u7c7b\u653b\u51fb\u901a\u5e38\u5305\u542b\u4e86 HTML \u4ee5\u53ca\u4f7f\u7528\u8005\u7aef\u811a\u672c\u8bed\u8a00\u3002",source:"@site/docs/security/xss.md",slug:"/security/xss",permalink:"/docs/security/xss",editUrl:"https://github.com/Turkyden/edit/master/docs/security/xss.md",version:"current",sidebar:"someSidebar",previous:{title:"\u7f13\u5b58\u7b56\u7565",permalink:"/docs/performance/cache-policy"},next:{title:"CSRF",permalink:"/docs/security/csrf"}},p=[{value:"\u5982\u4f55\u653b\u51fb",id:"\u5982\u4f55\u653b\u51fb",children:[]},{value:"\u5982\u4f55\u9632\u5fa1",id:"\u5982\u4f55\u9632\u5fa1",children:[]},{value:"CSP",id:"csp",children:[]},{value:"Refers",id:"refers",children:[]}],i={rightToc:p};function o(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8de8\u7f51\u7ad9\u811a\u672c\uff08Cross-site scripting\uff0c\u7b80\u79f0\uff1a",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"}),"XSS"),"\uff09\u662f\u4e00\u79cd\u7f51\u7ad9\u5e94\u7528\u7a0b\u5e8f\u7684\u5b89\u5168\u6f0f\u6d1e\u653b\u51fb\uff0c\u662f\u4ee3\u7801\u6ce8\u5165\u7684\u4e00\u79cd\u3002\u5b83\u5141\u8bb8\u6076\u610f\u4f7f\u7528\u8005\u5c06\u7a0b\u5f0f\u7801\u6ce8\u5165\u5230\u7f51\u9875\u4e0a\uff0c\u5176\u4ed6\u4f7f\u7528\u8005\u5728\u89c2\u770b\u7f51\u9875\u65f6\u5c31\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u8fd9\u7c7b\u653b\u51fb\u901a\u5e38\u5305\u542b\u4e86 HTML \u4ee5\u53ca\u4f7f\u7528\u8005\u7aef\u811a\u672c\u8bed\u8a00\u3002")),Object(a.b)("p",null,"XSS \u4e00\u822c\u5206\u4e3a\u4e09\u79cd\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u53cd\u5c04\u578b"),"\uff1a\u5f53\u7528\u6237\u70b9\u51fb\u4e00\u4e2a\u6076\u610f\u94fe\u63a5\uff0c\u6216\u8005\u8fdb\u5165\u4e00\u4e2a\u6076\u610f\u7f51\u7ad9\u65f6\uff0c\u6ce8\u5165\u811a\u672c\u4fb5\u5165\u88ab\u653b\u51fb\u8005\u7684\u7f51\u7ad9\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u5b58\u50a8\u578b"),"\uff1a\u6ce8\u5165\u578b\u811a\u672c\u6c38\u4e45\u5b58\u50a8\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a\u3002\u5f53\u6d4f\u89c8\u5668\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u811a\u672c\u4ece\u670d\u52a1\u5668\u4e0a\u4f20\u56de\u5e76\u6267\u884c\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DOM-based"),"\uff1a\u9875\u9762 DOM \u7ed3\u6784\u6216\u8005\u73af\u5883\u88ab\u6076\u610f\u4fee\u6539\uff0c\u5165\u4fb5\u811a\u672c\u88ab\u5305\u542b\u8fdb\u9875\u9762\u5e76\u610f\u5916\u6267\u884c\u3002")),Object(a.b)("h2",{id:"\u5982\u4f55\u653b\u51fb"},"\u5982\u4f55\u653b\u51fb"),Object(a.b)("p",null,"XSS \u901a\u8fc7\u4fee\u6539 HTML \u8282\u70b9\u6216\u8005\u6267\u884c JS \u4ee3\u7801\u6765\u653b\u51fb\u7f51\u7ad9\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\u901a\u8fc7 URL \u83b7\u53d6\u67d0\u4e9b\u53c2\u6570\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- http://www.domain.com?name=<script>alert('xss')<\/script> --\x3e\n<div>{{name}}</div>\n")),Object(a.b)("p",null,"\u4e0a\u8ff0 URL \u8f93\u5165\u53ef\u80fd\u4f1a\u5c06 HTML \u6539\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"<div><script>alert('xss')<\/script></div>"),"\uff0c\u8fd9\u6837\u9875\u9762\u4e2d\u5c31\u51ed\u7a7a\u591a\u4e86\u4e00\u6bb5\u53ef\u6267\u884c\u811a\u672c\u3002\u8fd9\u79cd\u653b\u51fb\u7c7b\u578b\u662f",Object(a.b)("strong",{parentName:"p"},"\u53cd\u5c04\u578b"),"\u653b\u51fb\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u662f ",Object(a.b)("strong",{parentName:"p"},"DOM-based")," \u653b\u51fb\u3002"),Object(a.b)("p",null,"\u4e5f\u6709\u53e6\u4e00\u79cd\u573a\u666f\uff0c\u6bd4\u5982\u5199\u4e86\u4e00\u7bc7\u5305\u542b\u653b\u51fb\u4ee3\u7801 ",Object(a.b)("inlineCode",{parentName:"p"},"<script>alert('xss')<\/script>")," \u7684\u6587\u7ae0\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- Lorem ipsum dolor sit amet, <script>alert('xss')<\/script> consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. --\x3e\n<textarea>{{text}}</textarea>\n")),Object(a.b)("p",null,"\u90a3\u4e48\u53ef\u80fd\u6d4f\u89c8\u6587\u7ae0\u7684\u7528\u6237\u90fd\u4f1a\u88ab\u653b\u51fb\u5230\uff0c\u8fd9\u79cd\u653b\u51fb\u7c7b\u578b\u662f",Object(a.b)("strong",{parentName:"p"},"\u5b58\u50a8\u578b"),"\u653b\u51fb\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u662f ",Object(a.b)("strong",{parentName:"p"},"DOM-based")," \u653b\u51fb\uff0c\u5e76\u4e14\u8fd9\u79cd\u653b\u51fb\u6253\u51fb\u9762\u66f4\u5e7f\u3002"),Object(a.b)("h2",{id:"\u5982\u4f55\u9632\u5fa1"},"\u5982\u4f55\u9632\u5fa1"),Object(a.b)("p",null,"\u6700\u666e\u904d\u7684\u505a\u6cd5\u662f\u8f6c\u4e49\u8f93\u5165\u8f93\u51fa\u7684\u5185\u5bb9\uff0c\u5bf9\u4e8e\u5f15\u53f7\uff0c\u5c16\u62ec\u53f7\uff0c\u659c\u6760\u8fdb\u884c\u8f6c\u4e49\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const escape = (str) => {\n  str = str.replace(/&/g, '&amp;')\n  str = str.replace(/</g, '&lt;')\n  str = str.replace(/>/g, '&gt;')\n  str = str.replace(/\"/g, '&quto;')\n  str = str.replace(/'/g, '&#39;')\n  str = str.replace(/`/g, '&#96;')\n  str = str.replace(/\\//g, '&#x2F;')\n  return str\n}\n")),Object(a.b)("p",null,"\u901a\u8fc7\u8f6c\u4e49\u53ef\u4ee5\u5c06\u653b\u51fb\u4ee3\u7801 ",Object(a.b)("inlineCode",{parentName:"p"},"<script>alert('xss')<\/script>")," \u53d8\u6210\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;\nescape('<script>alert(1)<\/script>')\n")),Object(a.b)("p",null,"\u5bf9\u4e8e\u663e\u793a\u5bcc\u6587\u672c\u6765\u8bf4\uff0c\u4e0d\u80fd\u901a\u8fc7\u4e0a\u9762\u7684\u529e\u6cd5\u6765\u8f6c\u4e49\u6240\u6709\u5b57\u7b26\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f1a\u628a\u9700\u8981\u7684\u683c\u5f0f\u4e5f\u8fc7\u6ee4\u6389\u3002\u8fd9\u79cd\u60c5\u51b5\u901a\u5e38\u91c7\u7528\u767d\u540d\u5355\u8fc7\u6ee4\u7684\u529e\u6cd5\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u901a\u8fc7",Object(a.b)("strong",{parentName:"p"},"\u9ed1\u540d\u5355"),"\u8fc7\u6ee4\uff0c\u4f46\u662f\u8003\u8651\u5230\u9700\u8981\u8fc7\u6ee4\u7684\u6807\u7b7e\u548c\u6807\u7b7e\u5c5e\u6027\u5b9e\u5728\u592a\u591a\uff0c\u66f4\u52a0\u63a8\u8350\u4f7f\u7528",Object(a.b)("strong",{parentName:"p"},"\u767d\u540d\u5355"),"\u7684\u65b9\u5f0f\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import xss from \'xss\'\n\nconst html = xss(\'<h1 id="title">XSS Demo</h1><script>alert("xss");<\/script>\')\n// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;\nconsole.log(html)\n')),Object(a.b)("p",null,"\u4ee5\u4e0a\u793a\u4f8b\u4f7f\u7528\u4e86\u7b2c\u4e09\u65b9\u5e93 ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/leizongmin/js-xss"}),"js-xss")," \u6765\u5b9e\u73b0\u3002\u53ef\u4ee5\u770b\u5230\u5728\u8f93\u51fa\u4e2d\u4fdd\u7559\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"h1")," \u6807\u7b7e\u4e14\u8fc7\u6ee4\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"script")," \u6807\u7b7e"),Object(a.b)("h2",{id:"csp"},"CSP"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5185\u5bb9\u5b89\u5168\u7b56\u7565 (",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/CSP"}),"CSP"),") \u662f\u4e00\u4e2a\u989d\u5916\u7684\u5b89\u5168\u5c42\uff0c\u7528\u4e8e\u68c0\u6d4b\u5e76\u524a\u5f31\u67d0\u4e9b\u7279\u5b9a\u7c7b\u578b\u7684\u653b\u51fb\uff0c\u5305\u62ec\u8de8\u7ad9\u811a\u672c (",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"}),"XSS"),") \u548c\u6570\u636e\u6ce8\u5165\u653b\u51fb\u7b49\u3002\u65e0\u8bba\u662f\u6570\u636e\u76d7\u53d6\u3001\u7f51\u7ad9\u5185\u5bb9\u6c61\u67d3\u8fd8\u662f\u6563\u53d1\u6076\u610f\u8f6f\u4ef6\uff0c\u8fd9\u4e9b\u653b\u51fb\u90fd\u662f\u4e3b\u8981\u7684\u624b\u6bb5\u3002")),Object(a.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 CSP \u6765\u5c3d\u91cf\u51cf\u5c11 XSS \u653b\u51fb\u3002CSP \u672c\u8d28\u4e0a\u4e5f\u662f\u5efa\u7acb\u767d\u540d\u5355\uff0c\u89c4\u5b9a\u4e86\u6d4f\u89c8\u5668\u53ea\u80fd\u591f\u6267\u884c\u7279\u5b9a\u6765\u6e90\u7684\u8d44\u6e90\u6216\u8005\u4ee3\u7801\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7 HTTP Response Headers \u4e2d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Security-Policy")," \u6765\u5f00\u542f CSP\u3002"),Object(a.b)("p",null,"\u4e00\uff09\u53ea\u5141\u8bb8\u52a0\u8f7d\u672c\u7ad9\u8d44\u6e90"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-txt"}),"Content-Security-Policy: default-src \u2018self\u2019\n")),Object(a.b)("p",null,"\u4e8c\uff09\u53ea\u5141\u8bb8\u52a0\u8f7d HTTPS \u534f\u8bae\u56fe\u7247"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-txt"}),"Content-Security-Policy: img-src https://*\n")),Object(a.b)("p",null,"\u4e09\uff09\u5141\u8bb8\u52a0\u8f7d\u4efb\u4f55\u6765\u6e90\u6846\u67b6"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-txt"}),"Content-Security-Policy: child-src 'none'\n")),Object(a.b)("p",null,"\u66f4\u591a\u5c5e\u6027\u53ef\u4ee5\u53ef\u4ee5\u67e5\u9605 ","\u2192"," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://content-security-policy.com/"}),"https://content-security-policy.com/")),Object(a.b)("h2",{id:"refers"},"Refers"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.wikiwand.com/zh-hans/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5"}),"[1] www.wikiwand.com")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/leizongmin/js-xss"}),"[2] js-xss leizongmin")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://yuchengkai.cn/docs/frontend/safety.html"}),"[3] yuchengkai xss safety")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://content-security-policy.com/"}),"[4] content-security-policy.com")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Cross-site_scripting"}),"[5] MDN Cross-site_scripting")))}o.isMDXComponent=!0}}]);