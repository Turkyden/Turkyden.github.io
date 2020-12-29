(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{134:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return s}));var n=l(0),a=l.n(n);function b(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){b(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function O(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},i=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=O(e,["components","mdxType","originalType","parentName"]),i=u(l),j=n,s=i["".concat(c,".").concat(j)]||i[j]||o[j]||b;return l?a.a.createElement(s,r(r({ref:t},p),{},{components:l})):a.a.createElement(s,r({ref:t},p))}));function s(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=l.length,c=new Array(b);c[0]=j;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var p=2;p<b;p++)c[p]=l[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"},83:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return O})),l.d(t,"default",(function(){return u}));var n=l(2),a=l(6),b=(l(0),l(134)),c={slug:"react-virtual-dom-history",title:"\u4ece React \u5386\u53f2\u7684\u957f\u6cb3\u91cc\u804a\u865a\u62df DOM \u53ca\u5176\u4ef7\u503c",author:"\u6843\u7fc1",author_title:"\u524d\u7aef\u6843\u56ed",author_url:"https://github.com/Turkyden",author_image_url:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM4mFCV4uWh1meO1YY2iab8FUDcEoZWfRT3WOX18djUbszA/0",tags:["React","Javascript","History"]},r={permalink:"/blog/react-virtual-dom-history",editUrl:"https://github.com/Turkyden/edit/master/blog/blog/2020-09-28-react-virtual-dom-history.md",source:"@site/blog/2020-09-28-react-virtual-dom-history.md",description:"\u6700\u8fd1\uff0c\u5f88\u591a\u9762\u8bd5\u91cc\u90fd\u6709\u300c\u5982\u4f55\u7406\u89e3\u865a\u62df DOM\u300d\u8fd9\u4e2a\u9898\uff0c\u5927\u90e8\u5206\u4eba\u60f3\u5f53\u7136\u5c31\u4f1a\u8bf4\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u5176\u5b9e\u8fd9\u4e2a\u95ee\u9898\u5e94\u8be5\u6ca1\u6709\u60f3\u8c61\u4e2d\u90a3\u4e48\u597d\u7b54\u3002",date:"2020-09-28T00:00:00.000Z",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"Javascript",permalink:"/blog/tags/javascript"},{label:"History",permalink:"/blog/tags/history"}],title:"\u4ece React \u5386\u53f2\u7684\u957f\u6cb3\u91cc\u804a\u865a\u62df DOM \u53ca\u5176\u4ef7\u503c",readingTime:3.215,truncated:!0,prevItem:{title:"ECode \u65e0\u4fb5\u5165\u4e8c\u5f00\u5e73\u53f0",permalink:"/blog/ecode"},nextItem:{title:"Low Code Platform \u4f4e\u4ee3\u7801\u5f00\u53d1",permalink:"/blog/low-code-platform"}},O=[{value:"\u4ec0\u4e48\u662f\u865a\u62df DOM",id:"\u4ec0\u4e48\u662f\u865a\u62df-dom",children:[]},{value:"\u4e3a\u4ec0\u4e48\u8981\u6709\u865a\u62df DOM",id:"\u4e3a\u4ec0\u4e48\u8981\u6709\u865a\u62df-dom",children:[{value:"\u5b57\u7b26\u4e32\u62fc\u63a5\u65f6\u4ee3 - 2004",id:"\u5b57\u7b26\u4e32\u62fc\u63a5\u65f6\u4ee3---2004",children:[]},{value:"XHP \u65f6\u4ee3 - 2010",id:"xhp-\u65f6\u4ee3---2010",children:[]},{value:"JSX - 2013",id:"jsx---2013",children:[]},{value:"React",id:"react",children:[]},{value:"Diff",id:"diff",children:[]},{value:"Virtual DOM",id:"virtual-dom",children:[]},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[]}]},{value:"\u865a\u62df DOM \u7684\u4f5c\u7528",id:"\u865a\u62df-dom-\u7684\u4f5c\u7528",children:[]},{value:"\u865a\u62df DOM \u7684\u7f3a\u70b9",id:"\u865a\u62df-dom-\u7684\u7f3a\u70b9",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[]}],p={rightToc:O};function u(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u6700\u8fd1\uff0c\u5f88\u591a\u9762\u8bd5\u91cc\u90fd\u6709\u300c\u5982\u4f55\u7406\u89e3\u865a\u62df DOM\u300d\u8fd9\u4e2a\u9898\uff0c\u5927\u90e8\u5206\u4eba\u60f3\u5f53\u7136\u5c31\u4f1a\u8bf4\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u5176\u5b9e\u8fd9\u4e2a\u95ee\u9898\u5e94\u8be5\u6ca1\u6709\u60f3\u8c61\u4e2d\u90a3\u4e48\u597d\u7b54\u3002"),Object(b.b)("p",null,"\u56e0\u4e3a\u5f88\u591a\u4eba\u6ca1\u6709\u771f\u6b63\u7406\u89e3\u865a\u62df DOM \u5b83\u7684\u4ef7\u503c\u6240\u5728\uff0c\u6211\u8fd9\u7bc7\u4ece\u865a\u62df DOM \u7684\u8bde\u751f\u8fc7\u7a0b\u6765\u5f15\u51fa\u5b83\u7684\u4ef7\u503c\u4ee5\u53ca\u5386\u53f2\u5730\u4f4d\uff0c\u5e2e\u52a9\u4f60\u6df1\u5165\u7684\u7406\u89e3\u5b83\u3002"),Object(b.b)("h2",{id:"\u4ec0\u4e48\u662f\u865a\u62df-dom"},"\u4ec0\u4e48\u662f\u865a\u62df DOM"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u672c\u8d28\u4e0a\u662f JavaScript \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u662f\u66f4\u52a0\u8f7b\u91cf\u7ea7\u7684\u5bf9 DOM \u7684\u63cf\u8ff0\u3002")),Object(b.b)("p",null,"\u5bf9\uff0c\u5c31\u662f\u8fd9\u4e48\u7b80\u5355\uff01"),Object(b.b)("p",null,"\u5c31\u662f\u4e00\u4e2a\u590d\u6742\u4e00\u70b9\u7684\u5bf9\u8c61\u800c\u5df2\uff0c\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684\uff0c\u91cd\u70b9\u662f\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u4e2a\u4e1c\u897f\uff0c\u4ee5\u53ca\u6709\u4e86\u8fd9\u4e2a\u63cf\u8ff0\u6709\u4ec0\u4e48\u597d\u5904\u624d\u662f\u6211\u4eec\u4eca\u5929\u8981\u4ecb\u7ecd\u7684\u5185\u5bb9\u3002"),Object(b.b)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u6709\u865a\u62df-dom"},"\u4e3a\u4ec0\u4e48\u8981\u6709\u865a\u62df DOM"),Object(b.b)("p",null,"\u518d\u8c08\u4e3a\u4ec0\u4e48\u8981\u7528\u865a\u62df DOM \u4e4b\u524d\uff0c\u5148\u6765\u804a\u4e00\u804a React \u662f\u600e\u4e48\u8bde\u751f\u7684\uff0c\u6bd5\u7adf\u5728\u4e86\u89e3\u5386\u53f2\u80cc\u666f\uff0c\u518d\u53bb\u601d\u8003\u4ed6\u7684\u8bde\u751f\uff0c\u5c31\u77e5\u9053\u662f\u5fc5\u7136\u4f1a\u51fa\u73b0\u7684\u3002"),Object(b.b)("p",null,"\u518d\u67e5\u4e86\u5f88\u591a\u5173\u4e8e React \u7684\u5386\u53f2\u76f8\u5173\u7684\u6587\u7ae0\uff0c\u8fd9\u7bc7\u6587\u7ae0\u6211\u611f\u89c9\u6bd4\u8f83\u503c\u5f97\u4ee4\u6211\u4fe1\u670d\uff1aReact \u662f\u600e\u6837\u70bc\u6210\u7684\u3002"),Object(b.b)("p",null,"\u4f17\u6240\u5468\u77e5\uff0cFacebook \u662f PHP \u5927\u6237\uff0c\u6240\u4ee5 React \u6700\u5f00\u59cb\u7684\u7075\u611f\u5c31\u6765\u81f3\u4e8e PHP\u3002"),Object(b.b)("h3",{id:"\u5b57\u7b26\u4e32\u62fc\u63a5\u65f6\u4ee3---2004"},"\u5b57\u7b26\u4e32\u62fc\u63a5\u65f6\u4ee3 - 2004"),Object(b.b)("p",null,"\u5728 2004 \u5e74\u8fd9\u4e2a\u65f6\u5019\uff0c\u5927\u5bb6\u90fd\u8fd8\u5728\u7528 PHP \u7684\u5b57\u7b26\u4e32\u62fc\u63a5\u6765\u5f00\u53d1\u7f51\u7ad9\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$str = '<ul>';\nforeach ($talks as $talk) {\n  $str += '<li>' . $talk->name . '</li>';\n}\n$str += '</ul>';\n")),Object(b.b)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u4ee3\u7801\u5199\u51fa\u6765\u4e0d\u597d\u770b\u4e0d\u8bf4\uff0c\u8fd8\u5bb9\u6613\u9020\u6210 XSS \u7b49\u5b89\u5168\u95ee\u9898\u3002"),Object(b.b)("p",null,"\u5e94\u5bf9\u65b9\u6cd5\u662f\u5bf9\u7528\u6237\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u8fdb\u884c\u8f6c\u4e49\uff08Escape\uff09\u3002\u4f46\u662f\u5982\u679c\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u591a\u6b21\u8f6c\u4e49\uff0c\u90a3\u4e48\u53cd\u8f6c\u4e49\u7684\u6b21\u6570\u4e5f\u5fc5\u987b\u662f\u76f8\u540c\u7684\uff0c\u5426\u5219\u4f1a\u65e0\u6cd5\u5f97\u5230\u539f\u5185\u5bb9\u3002\u5982\u679c\u53c8\u4e0d\u5c0f\u5fc3\u628a HTML \u6807\u7b7e\uff08Markup\uff09\u7ed9\u8f6c\u4e49\u4e86\uff0c\u90a3\u4e48 HTML \u6807\u7b7e\u4f1a\u76f4\u63a5\u663e\u793a\u7ed9\u7528\u6237\uff0c\u4ece\u800c\u5bfc\u81f4\u5f88\u5dee\u7684\u7528\u6237\u4f53\u9a8c\u3002"),Object(b.b)("h3",{id:"xhp-\u65f6\u4ee3---2010"},"XHP \u65f6\u4ee3 - 2010"),Object(b.b)("p",null,"\u5230\u4e86 2010 \u5e74\uff0c\u4e3a\u4e86\u66f4\u52a0\u9ad8\u6548\u7684\u7f16\u7801\uff0c\u540c\u65f6\u4e5f\u907f\u514d\u8f6c\u4e49 HTML \u6807\u7b7e\u7684\u9519\u8bef\uff0cFacebook \u5f00\u53d1\u4e86 XHP \u3002XHP \u662f\u5bf9 PHP \u7684\u8bed\u6cd5\u62d3\u5c55\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u8005\u76f4\u63a5\u5728 PHP \u4e2d\u4f7f\u7528 HTML \u6807\u7b7e\uff0c\u800c\u4e0d\u518d\u4f7f\u7528\u5b57\u7b26\u4e32\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$content = <ul />;\nforeach ($talks as $talk) {\n  $content->appendChild(<li>{$talk->name}</li>);\n}\n")),Object(b.b)("p",null,"\u8fd9\u6837\u7684\u8bdd\uff0c\u6240\u6709\u7684 HTML \u6807\u7b7e\u90fd\u4f7f\u7528\u4e0d\u540c\u4e8e PHP \u7684\u8bed\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u6613\u7684\u5206\u8fa8\u54ea\u4e9b\u9700\u8981\u8f6c\u4e49\u54ea\u4e9b\u4e0d\u9700\u8981\u8f6c\u4e49\u3002"),Object(b.b)("p",null,"\u4e0d\u4e45\u7684\u540e\u6765\uff0cFacebook \u7684\u5de5\u7a0b\u5e08\u53c8\u53d1\u73b0\u4ed6\u4eec\u8fd8\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u800c\u4e14\u901a\u8fc7\u7ec4\u5408\u81ea\u5b9a\u4e49\u6807\u7b7e\u6709\u52a9\u4e8e\u6784\u5efa\u5927\u578b\u5e94\u7528\u3002"),Object(b.b)("h3",{id:"jsx---2013"},"JSX - 2013"),Object(b.b)("p",null,"\u5230\u4e86 2013 \u5e74\uff0c\u524d\u7aef\u5de5\u7a0b\u5e08 Jordan Walke \u5411\u4ed6\u7684\u7ecf\u7406\u63d0\u51fa\u4e86\u4e00\u4e2a\u5927\u80c6\u7684\u60f3\u6cd5\uff1a\u628a XHP \u7684\u62d3\u5c55\u529f\u80fd\u8fc1\u79fb\u5230 JS \u4e2d\u3002\u9996\u8981\u4efb\u52a1\u662f\u9700\u8981\u4e00\u4e2a\u62d3\u5c55\u6765\u8ba9 JS \u652f\u6301 XML \u8bed\u6cd5\uff0c\u8be5\u62d3\u5c55\u79f0\u4e3a JSX\u3002\u56e0\u4e3a\u5f53\u65f6\u7531\u4e8e Node.js \u5728 Facebook \u5df2\u7ecf\u6709\u5f88\u591a\u5b9e\u8df5\uff0c\u6240\u4ee5\u5f88\u5feb\u5c31\u5b9e\u73b0\u4e86 JSX\u3002"),Object(b.b)("p",null,"\u53ef\u4ee5\u731c\u60f3\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u8981\u8fc1\u79fb\u5230 js \u4e2d\uff0c\u6211\u731c\u60f3\u5e94\u8be5\u662f\u524d\u540e\u7aef\u5206\u79bb\u5bfc\u81f4\u7684\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const content = (\n  <TalkList>\n    { talks.map(talk => <Talk talk={talk} />)}\n  </TalkList>\n);\n")),Object(b.b)("h3",{id:"react"},"React"),Object(b.b)("p",null,"\u5728\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u6709\u53e6\u5916\u4e00\u4e2a\u5f88\u68d8\u624b\u7684\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u5728\u8fdb\u884c\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u9700\u8981\u53bb\u64cd\u4f5c DOM\uff0c\u4f20\u7edf DOM API \u7ec6\u8282\u592a\u591a\uff0c\u64cd\u4f5c\u590d\u6742\uff0c\u6240\u4ee5\u5c31\u5f88\u5bb9\u6613\u51fa\u73b0 Bug\uff0c\u800c\u4e14\u4ee3\u7801\u96be\u4ee5\u7ef4\u62a4\u3002"),Object(b.b)("p",null,"\u7136\u540e\u5c31\u60f3\u5230\u4e86 PHP \u65f6\u4ee3\u7684\u66f4\u65b0\u673a\u5236\uff0c\u6bcf\u5f53\u6709\u6570\u636e\u6539\u53d8\u65f6\uff0c\u53ea\u9700\u8981\u8df3\u5230\u4e00\u4e2a\u7531 PHP \u5168\u65b0\u6e32\u67d3\u7684\u65b0\u9875\u9762\u5373\u53ef\u3002"),Object(b.b)("p",null,"\u4ece\u5f00\u53d1\u8005\u7684\u89d2\u5ea6\u6765\u770b\u7684\u8bdd\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5f00\u53d1\u5e94\u7528\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u56e0\u4e3a\u5b83\u4e0d\u9700\u8981\u62c5\u5fc3\u53d8\u66f4\uff0c\u4e14\u754c\u9762\u4e0a\u7528\u6237\u6570\u636e\u6539\u53d8\u65f6\u6240\u6709\u5185\u5bb9\u90fd\u662f\u540c\u6b65\u7684\u3002"),Object(b.b)("p",null,"\u4e3a\u6b64 React \u63d0\u51fa\u4e86\u4e00\u4e2a\u65b0\u7684\u601d\u60f3\uff0c\u5373",Object(b.b)("strong",{parentName:"p"},"\u59cb\u7ec8\u6574\u4f53\u201c\u5237\u65b0\u201d\u9875\u9762")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u5f53\u53d1\u751f\u524d\u540e\u72b6\u6001\u53d8\u5316\u65f6\uff0cReact \u4f1a\u81ea\u52a8\u66f4\u65b0 UI"),"\uff0c\u8ba9\u6211\u4eec\u4ece\u590d\u6742\u7684 UI \u64cd\u4f5c\u4e2d\u89e3\u653e\u51fa\u6765\uff0c\u4f7f\u6211\u4eec\u53ea\u9700\u5173\u4e8e\u72b6\u6001\u4ee5\u53ca\u6700\u7ec8 UI \u957f\u4ec0\u4e48\u6837\u3002"),Object(b.b)("p",null,"\u4e0b\u9762\u770b\u770b\u5c40\u90e8\u5237\u65b0\u548c\u6574\u4f53\u5237\u65b0\u7684\u533a\u522b\u3002"),Object(b.b)("p",null,"\u5c40\u90e8\u5237\u65b0\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// \u4e0b\u9762\u662f\u4f2a\u4ee3\u7801\nvar ul = find(ul) // \u5148\u627e\u5230 ul\nul.append(`<li>${message3}</li>`) //\u7136\u540e\u518d\u5c06message3\u63d2\u5230\u6700\u540e\n\n// \u60f3\u60f3\u5982\u679c\u662f\u4e0d\u63d2\u5230\u6700\u540e\u4e00\u4e2a\uff0c\u800c\u662f\u63d2\u5230\u4e2d\u95f4\u7684\u7b2cn\u4e2a\nvar ul = find(ul) // \u5148\u627e\u5230 ul\nvar preli = find(li(n-1)) // \u518d\u627e\u5230 n-1 \u7684\u4e00\u4e2a li\npreli.next(`<li>${message3}</li>`) // \u518d\u63d2\u5165\u5230 n-1 \u4e2a\u7684\u540e\u9762\n")),Object(b.b)("p",null,"\u6574\u4f53\u5237\u65b0\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"UI = f(messages) // \u6574\u4f53\u5237\u65b0 3 \u6761\u6d88\u606f\uff0c\u53ea\u9700\u8981\u8c03\u7528 f \u51fd\u6570\n// \u8fd9\u4e2a\u662f\u5728\u521d\u59cb\u6e32\u67d3\u7684\u65f6\u5019\u5c31\u5b9a\u4e49\u597d\u7684\uff0c\u66f4\u65b0\u7684\u65f6\u5019\u4e0d\u7528\u53bb\u7ba1\nfunction f(messages) {\n  return(\n    <ul>\n      {messages.map(message => <li>{ message }</li>)}\n    </ul>\n  )\n}\n")),Object(b.b)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u6211",Object(b.b)("strong",{parentName:"p"},"\u53ea\u9700\u8981\u5173\u7cfb\u6211\u7684\u72b6\u6001\uff08\u6570\u636e\u662f\u4ec0\u4e48\uff09\uff0c\u4ee5\u53ca UI \u957f\u4ec0\u4e48\u6837\uff08\u5e03\u5c40\uff09\uff0c\u4e0d\u518d\u9700\u8981\u5173\u7cfb\u64cd\u4f5c\u7ec6\u8282\u3002")),Object(b.b)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u867d\u7136\u7b80\u5355\u7c97\u66b4\uff0c\u4f46\u662f\u5f88\u660e\u663e\u7684\u7f3a\u70b9\uff0c",Object(b.b)("strong",{parentName:"p"},"\u5c31\u662f\u5f88\u6162\u3002")),Object(b.b)("p",null,"\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\u8fd9\u6837\u65e0\u6cd5\u5305\u542b\u8282\u70b9\u7684\u72b6\u6001\u3002\u6bd4\u5982\u5b83\u4f1a\u5931\u53bb\u5f53\u524d\u805a\u7126\u7684\u5143\u7d20\u548c\u5149\u6807\uff0c\u4ee5\u53ca\u6587\u672c\u9009\u62e9\u548c\u9875\u9762\u6eda\u52a8\u4f4d\u7f6e\uff0c\u8fd9\u4e9b\u90fd\u662f\u9875\u9762\u7684\u5f53\u524d\u72b6\u6001\u3002"),Object(b.b)("h3",{id:"diff"},"Diff"),Object(b.b)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u9762\u8bf4\u7684\u95ee\u9898\uff0c\u5bf9\u4e8e\u6ca1\u6709\u6539\u53d8\u7684 DOM \u8282\u70b9\uff0c\u8ba9\u5b83\u4fdd\u6301\u539f\u6837\u4e0d\u52a8\uff0c\u4ec5\u4ec5\u521b\u5efa\u5e76\u66ff\u6362\u53d8\u66f4\u8fc7\u7684 DOM \u8282\u70b9\u3002\u8fd9\u79cd\u65b9\u5f0f\u5b9e\u73b0\u4e86 DOM \u8282\u70b9",Object(b.b)("strong",{parentName:"p"},"\u590d\u7528"),"\uff08Reuse\uff09\u3002"),Object(b.b)("p",null,"\u81f3\u6b64\uff0c\u53ea\u8981\u80fd\u591f\u8bc6\u522b\u51fa\u54ea\u4e9b\u8282\u70b9\u6539\u53d8\u4e86\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5bf9 DOM \u7684\u66f4\u65b0\u3002\u4e8e\u662f\u95ee\u9898\u5c31\u8f6c\u5316\u4e3a",Object(b.b)("strong",{parentName:"p"},"\u5982\u4f55\u6bd4\u5bf9\u4e24\u4e2a DOM \u7684\u5dee\u5f02\u3002")),Object(b.b)("p",null,"\u8bf4\u9053\u5bf9\u6bd4\u5dee\u5f02\uff0c\u53ef\u80fd\u5f88\u5bb9\u6613\u60f3\u5230",Object(b.b)("strong",{parentName:"p"},"\u7248\u672c\u63a7\u5236(git)\u3002")),Object(b.b)("p",null,"DOM \u662f\u6811\u5f62\u7ed3\u6784\uff0c\u6240\u4ee5 diff \u7b97\u6cd5\u5fc5\u987b\u662f\u9488\u5bf9\u6811\u5f62\u7ed3\u6784\u7684\u3002\u76ee\u524d\u5df2\u77e5\u7684\u5b8c\u6574\u6811\u5f62\u7ed3\u6784 diff \u7b97\u6cd5\u590d\u6742\u5ea6\u4e3a O(n^3) \u3002"),Object(b.b)("p",null,"\u5b8c\u6574\u7684 Tree diff \u5b9e\u73b0\u7b97\u6cd5\u3002","[2]"),Object(b.b)("p",null,"\u4f46\u662f\u65f6\u95f4\u590d\u6742\u5ea6 O(n^3) \u592a\u9ad8\u4e86\uff0c\u6240\u4ee5 Facebook \u5de5\u7a0b\u5e08\u8003\u8651\u5230\u7ec4\u4ef6\u7684\u7279\u6b8a\u60c5\u51b5\uff0c\u7136\u540e\u5c06\u590d\u6742\u5ea6\u964d\u4f4e\u5230\u4e86 O(n)\u3002"),Object(b.b)("p",null,"\u9644\uff1a\u8be6\u7ec6\u7684 diff \u7406\u89e3\uff1a\u4e0d\u53ef\u601d\u8bae\u7684 react diff \u3002","[3]"),Object(b.b)("h3",{id:"virtual-dom"},"Virtual DOM"),Object(b.b)("p",null,"\u524d\u9762\u8bf4\u5230\uff0cReact \u5176\u5b9e\u5b9e\u73b0\u4e86\u5bf9 DOM \u8282\u70b9\u7684\u7248\u672c\u63a7\u5236\u3002"),Object(b.b)("p",null,"\u505a\u8fc7 JS \u5e94\u7528\u4f18\u5316\u7684\u4eba\u53ef\u80fd\u90fd\u77e5\u9053\uff0cDOM \u662f\u590d\u6742\u7684\uff0c\u5bf9\u5b83\u7684\u64cd\u4f5c\uff08\u5c24\u5176\u662f\u67e5\u8be2\u548c\u521b\u5efa\uff09\u662f\u975e\u5e38\u6162\u975e\u5e38\u8017\u8d39\u8d44\u6e90\u7684\u3002\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u4ec5\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 div\uff0c\u5176\u5b9e\u4f8b\u5c5e\u6027\u5c31\u8fbe\u5230 231 \u4e2a\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Chrome v63\nconst div = document.createElement('div');\nlet m = 0;\nfor (let k in div) {\n  m++;\n}\nconsole.log(m); // 231\n")),Object(b.b)("p",null,"\u5bf9\u4e8e DOM \u8fd9\u4e48\u591a\u5c5e\u6027\uff0c\u5176\u5b9e\u5927\u90e8\u5206\u5c5e\u6027\u5bf9\u4e8e\u505a Diff \u662f\u6ca1\u6709\u4efb\u4f55\u7528\u5904\u7684\uff0c\u6240\u4ee5\u5982\u679c\u7528\u66f4\u8f7b\u91cf\u7ea7\u7684 JS \u5bf9\u8c61\u6765\u4ee3\u66ff\u590d\u6742\u7684 DOM \u8282\u70b9\uff0c\u7136\u540e\u628a\u5bf9 DOM \u7684 diff \u64cd\u4f5c\u8f6c\u79fb\u5230 JS \u5bf9\u8c61\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u5bf9 DOM \u7684\u67e5\u8be2\u64cd\u4f5c\u3002\u8fd9\u4e2a\u66f4\u8f7b\u91cf\u7ea7\u7684 JS \u5bf9\u8c61\u5c31\u79f0\u4e3a Virtual DOM \u3002"),Object(b.b)("p",null,"\u90a3\u4e48\u73b0\u5728\u7684\u8fc7\u7a0b\u5c31\u662f\u8fd9\u6837\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u7ef4\u62a4\u4e00\u4e2a\u4f7f\u7528 JS \u5bf9\u8c61\u8868\u793a\u7684 Virtual DOM\uff0c\u4e0e\u771f\u5b9e DOM \u4e00\u4e00\u5bf9\u5e94"),Object(b.b)("li",{parentName:"ol"},"\u5bf9\u524d\u540e\u4e24\u4e2a Virtual DOM \u505a diff \uff0c\u751f\u6210\u53d8\u66f4\uff08Mutation\uff09"),Object(b.b)("li",{parentName:"ol"},"\u628a\u53d8\u66f4\u5e94\u7528\u4e8e\u771f\u5b9e DOM\uff0c\u751f\u6210\u6700\u65b0\u7684\u771f\u5b9e DOM")),Object(b.b)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u56e0\u4e3a\u8981\u628a\u53d8\u66f4\u5e94\u7528\u5230\u771f\u5b9e DOM \u4e0a\uff0c\u6240\u4ee5\u8fd8\u662f\u907f\u514d\u4e0d\u4e86\u8981\u76f4\u63a5\u64cd\u4f5c DOM \uff0c\u4f46\u662f React \u7684 diff \u7b97\u6cd5\u4f1a\u628a DOM \u6539\u52a8\u6b21\u6570\u964d\u5230\u6700\u4f4e\u3002"),Object(b.b)("p",null,"\u5269\u4e0b\u7684\u5386\u53f2\u5c31\u4e0d\u8c08\u4e86\uff0c\u5df2\u7ecf\u5f15\u51fa\u8fd9\u7bc7\u6587\u7ae0\u7684\u91cd\u70b9\uff1a\u865a\u62df DOM\u3002\u8be6\u7ec6\u7684\u5386\u53f2\u53ef\u89c1\uff1aReact \u662f\u600e\u6837\u70bc\u6210\u7684","[4]","\uff0c\u6587\u4e2d\u5386\u53f2\u90e8\u5206\u5185\u5bb9\u5f88\u591a\u6458\u6284\u4e0e\u6b64\u3002"),Object(b.b)("h3",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),Object(b.b)("p",null,"\u4f20\u7edf\u524d\u7aef\u7684\u7f16\u7a0b\u65b9\u5f0f\u662f\u547d\u4ee4\u5f0f\u7684\uff0c\u76f4\u63a5\u64cd\u7eb5 DOM\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u8be5\u600e\u4e48\u5e72\u3002\u8fd9\u6837\u7684\u95ee\u9898\u5c31\u662f\uff0c\u5927\u91cf\u7684\u4ee3\u7801\u88ab\u7528\u4e8e\u64cd\u4f5c DOM \u5143\u7d20\uff0c\u4e14\u4ee3\u7801\u53ef\u8bfb\u6027\u5dee\uff0c\u53ef\u7ef4\u62a4\u6027\u4f4e\u3002"),Object(b.b)("p",null,"React \u7684\u51fa\u73b0\uff0c\u5c06\u547d\u4ee4\u5f0f\u53d8\u6210\u4e86\u58f0\u660e\u5f0f\uff0c\u6452\u5f03\u4e86\u76f4\u63a5\u64cd\u4f5c DOM \u7684\u7ec6\u8282\uff0c\u53ea\u5173\u6ce8\u6570\u636e\u7684\u53d8\u52a8\uff0cDOM \u64cd\u4f5c\u7531\u6846\u67b6\u6765\u5b8c\u6210\uff0c\u4ece\u800c\u5927\u5e45\u5ea6\u63d0\u5347\u4e86\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),Object(b.b)("p",null,"\u5728\u521d\u671f\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u6570\u636e\u7684\u53d8\u52a8\u5bfc\u81f4\u6574\u4e2a\u9875\u9762\u7684\u5237\u65b0\uff0c\u8fd9\u79cd\u6548\u7387\u5f88\u4f4e\uff0c\u56e0\u4e3a\u53ef\u80fd\u662f\u5c40\u90e8\u7684\u6570\u636e\u53d8\u5316\uff0c\u4f46\u662f\u8981\u5237\u65b0\u6574\u4e2a\u9875\u9762\uff0c\u9020\u6210\u4e86\u4e0d\u5fc5\u8981\u7684\u5f00\u9500\u3002"),Object(b.b)("p",null,"\u6240\u4ee5\u5c31\u6709\u4e86 Diff \u8fc7\u7a0b\uff0c\u5c06\u6570\u636e\u53d8\u52a8\u524d\u540e\u7684 DOM \u7ed3\u6784\u5148\u8fdb\u884c\u6bd4\u8f83\uff0c\u627e\u51fa\u4e24\u8005\u7684\u4e0d\u540c\u5904\uff0c\u7136\u540e\u518d\u5bf9\u4e0d\u540c\u4e4b\u5904\u8fdb\u884c\u66f4\u65b0\u6e32\u67d3\u3002"),Object(b.b)("p",null,"\u4f46\u662f\u7531\u4e8e\u6574\u4e2a DOM \u7ed3\u6784\u53c8\u592a\u5927\uff0c\u6240\u4ee5\u91c7\u7528\u4e86\u66f4\u8f7b\u91cf\u7ea7\u7684\u5bf9 DOM \u7684\u63cf\u8ff0\u2014\u865a\u62df DOM\u3002"),Object(b.b)("p",null,"\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u865a\u62df DOM \u548c Diff \u7b97\u6cd5\u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u89e3\u51b3\u7531\u547d\u4ee4\u5f0f\u7f16\u7a0b\u8f6c\u53d8\u4e3a\u58f0\u660e\u5f0f\u7f16\u7a0b\u3001\u6570\u636e\u9a71\u52a8\u540e\u6240\u5e26\u6765\u7684\u6027\u80fd\u95ee\u9898\u7684\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c",Object(b.b)("strong",{parentName:"p"},"\u76f4\u63a5\u64cd\u4f5c DOM \u7684\u6027\u80fd\u5e76\u4e0d\u4f1a\u4f4e\u4e8e\u865a\u62df DOM \u548c Diff \u7b97\u6cd5\uff0c\u751a\u81f3\u8fd8\u4f1a\u4f18\u4e8e\u3002")),Object(b.b)("p",null,"\u8fd9\u4e48\u8bf4\u7684\u539f\u56e0\u662f\u56e0\u4e3a Diff \u7b97\u6cd5\u7684\u6bd4\u8f83\u8fc7\u7a0b\uff0c\u6bd4\u8f83\u662f\u4e3a\u4e86\u627e\u51fa\u4e0d\u540c\u4ece\u800c\u6709\u7684\u653e\u77e2\u7684\u66f4\u65b0\u9875\u9762\u3002\u4f46\u662f\u6bd4\u8f83\u4e5f\u662f\u8981\u6d88\u8017\u6027\u80fd\u7684\u3002\u800c\u76f4\u63a5\u64cd\u4f5c DOM \u5c31\u662f\u6709\u7684\u653e\u77e2\uff0c\u6211\u4eec\u77e5\u9053\u8be5\u66f4\u65b0\u4ec0\u4e48\u4e0d\u8be5\u66f4\u65b0\u4ec0\u4e48\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u6709\u6bd4\u8f83\u7684\u8fc7\u7a0b\u3002\u6240\u4ee5\u76f4\u63a5\u64cd\u4f5c DOM \u6548\u7387\u53ef\u80fd\u66f4\u9ad8\u3002"),Object(b.b)("p",null,"React \u5389\u5bb3\u7684\u5730\u65b9\u5e76\u4e0d\u662f\u8bf4\u5b83\u6bd4 DOM \u5feb\uff0c\u800c\u662f\u8bf4\u4e0d\u7ba1\u4f60\u6570\u636e\u600e\u4e48\u53d8\u5316\uff0c\u6211\u90fd\u53ef\u4ee5\u4ee5\u6700\u5c0f\u7684\u4ee3\u4ef7\u6765\u8fdb\u884c\u66f4\u65b0 DOM\u3002\u65b9\u6cd5\u5c31\u662f\u6211\u5728\u5185\u5b58\u91cc\u9762\u7528\u65b0\u7684\u6570\u636e\u5237\u65b0\u4e00\u4e2a\u865a\u62df DOM \u6811\uff0c\u7136\u540e\u65b0\u65e7 DOM \u8fdb\u884c\u6bd4\u8f83\uff0c\u627e\u51fa\u5dee\u5f02\uff0c\u518d\u66f4\u65b0\u5230 DOM \u6811\u4e0a\u3002"),Object(b.b)("p",null,"\u6846\u67b6\u7684\u610f\u4e49\u5728\u4e8e\u4e3a\u4f60\u63a9\u76d6\u5e95\u5c42\u7684 DOM \u64cd\u4f5c\uff0c\u8ba9\u4f60\u7528\u66f4\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u6765\u63cf\u8ff0\u4f60\u7684\u76ee\u7684\uff0c\u4ece\u800c\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u5bb9\u6613\u7ef4\u62a4\u3002\u6ca1\u6709\u4efb\u4f55\u6846\u67b6\u53ef\u4ee5\u6bd4\u7eaf\u624b\u52a8\u7684\u4f18\u5316 DOM \u64cd\u4f5c\u66f4\u5feb\uff0c\u56e0\u4e3a\u6846\u67b6\u7684 DOM \u64cd\u4f5c\u5c42\u9700\u8981\u5e94\u5bf9\u4efb\u4f55\u4e0a\u5c42 API \u53ef\u80fd\u4ea7\u751f\u7684\u64cd\u4f5c\uff0c\u5b83\u7684\u5b9e\u73b0\u5fc5\u987b\u662f\u666e\u9002\u7684\u3002"),Object(b.b)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u865a\u62df DOM \u4e0e\u6027\u80fd\u7684\u5173\u7cfb\uff0c\u8bf7\u770b\u4e0b\u9762\u516c\u4f17\u53f7\u91cc\u9762\u7684\u4e24\u7bc7\u6587\u7ae0\u548c\u90a3\u4e2a\u77e5\u4e4e\u8bdd\u9898\uff0c\u4f1a\u8ba9\u4f60\u5bf9\u865a\u62df DOM \u53c8\u66f4\u6df1\u5c42\u6b21\u7684\u7406\u89e3\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u522b\u518d\u8bf4\u865a\u62df DOM \u5feb\u4e86\uff0c\u8981\u88ab\u6253\u8138\u7684"),Object(b.b)("li",{parentName:"ul"},"\u6df1\u5165\u7406\u89e3\u865a\u62df DOM\uff0c\u5b83\u771f\u7684\u4e0d\u5feb"),Object(b.b)("li",{parentName:"ul"},"\u7f51\u4e0a\u90fd\u8bf4\u64cd\u4f5c\u771f\u5b9e DOM \u6162\uff0c\u4f46\u6d4b\u8bd5\u7ed3\u679c\u5374\u6bd4 React \u66f4\u5feb\uff0c\u4e3a\u4ec0\u4e48","[5]")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u53e6\u5916\u518d\u63d0\u4e00\u4e2a\u70b9\uff0c\u5f88\u591a\u4eba\u4f1a\u628a Diff \u3001\u6570\u636e\u66f4\u65b0\u3001\u63d0\u5347\u6027\u80fd\u7b49\u6982\u5ff5\u7ed1\u5b9a\u8d77\u6765\uff0c\u4f46\u662f\u4f60\u60f3\u60f3\u8fd9\u4e2a\u95ee\u9898\uff1aReact \u7531\u4e8e\u53ea\u89e6\u53d1\u66f4\u65b0,\u800c\u4e0d\u80fd\u77e5\u9053\u7cbe\u786e\u53d8\u5316\u7684\u6570\u636e,\u6240\u4ee5\u9700\u8981 diff \u6765\u627e\u51fa\u5dee\u5f02\u7136\u540e patch \u5dee\u5f02\u961f\u5217\u3002Vue \u91c7\u7528\u6570\u636e\u52ab\u6301\u7684\u624b\u6bb5\u53ef\u4ee5\u7cbe\u51c6\u62ff\u5230\u53d8\u5316\u7684\u6570\u636e,\u4e3a\u4ec0\u4e48\u8fd8\u8981\u7528\u865a\u62df DOM\uff1f")),Object(b.b)("h2",{id:"\u865a\u62df-dom-\u7684\u4f5c\u7528"},"\u865a\u62df DOM \u7684\u4f5c\u7528"),Object(b.b)("p",null,"\u8981\u60f3\u56de\u7b54\u4e0a\u9762\u90a3\u4e2a\u95ee\u9898\uff0c\u771f\u7684\u4e0d\u8981\u4ec5\u4ec5\u4ee5\u4e3a\u865a\u62df DOM \u6216\u8005 React \u662f\u6765\u89e3\u51b3\u6027\u80fd\u95ee\u9898\u7684\uff0c\u597d\u5904\u53ef\u8fd8\u6709\u5f88\u591a\u5462\u3002\u4e0b\u9762\u6211\u603b\u7ed3\u4e86\u4e00\u4e9b\u865a\u62df DOM \u597d\u4f5c\u7528\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Virtual DOM \u5728\u727a\u7272(\u727a\u7272\u5f88\u5173\u952e)\u90e8\u5206\u6027\u80fd"),"\u7684\u524d\u63d0\u4e0b\uff0c\u589e\u52a0\u4e86\u53ef\u7ef4\u62a4\u6027\uff0c\u8fd9\u4e5f\u662f\u5f88\u591a\u6846\u67b6\u7684\u901a\u6027\u3002"),Object(b.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u5bf9 DOM \u7684\u96c6\u4e2d\u5316\u64cd\u4f5c\uff0c\u5728\u6570\u636e\u6539\u53d8\u65f6\u5148\u5bf9\u865a\u62df DOM \u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53cd\u6620\u5230\u771f\u5b9e\u7684 DOM \u4e2d\uff0c\u7528\u6700\u5c0f\u7684\u4ee3\u4ef7\u6765\u66f4\u65b0 DOM\uff0c\u63d0\u9ad8\u6548\u7387(\u63d0\u5347\u6548\u7387\u8981\u60f3\u60f3\u662f\u8ddf\u54ea\u4e2a\u9636\u6bb5\u6bd4\u63d0\u5347\u4e86\u6548\u7387\uff0c\u522b\u53ea\u8bb0\u4f4f\u4e86\u8fd9\u4e00\u6761)\u3002"),Object(b.b)("li",{parentName:"ul"},"\u6253\u5f00\u4e86\u51fd\u6570\u5f0f UI \u7f16\u7a0b\u7684\u5927\u95e8\u3002"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6e32\u67d3\u5230 DOM \u4ee5\u5916\u7684\u7aef\uff0c\u4f7f\u5f97\u6846\u67b6\u8de8\u5e73\u53f0\uff0c\u6bd4\u5982 ReactNative\uff0cReact VR \u7b49\u3002"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u66f4\u597d\u7684\u5b9e\u73b0 SSR\uff0c\u540c\u6784\u6e32\u67d3\u7b49\u3002\u8fd9\u6761\u5176\u5b9e\u662f\u8ddf\u4e0a\u9762\u4e00\u6761\u5dee\u4e0d\u591a\u7684\u3002"),Object(b.b)("li",{parentName:"ul"},"\u7ec4\u4ef6\u7684\u9ad8\u5ea6\u62bd\u8c61\u5316\u3002")),Object(b.b)("p",null,"\u65e2\u7136\u865a\u62df DOM \u6709\u8fd9\u4e48\u591a\u4f5c\u7528\uff0c\u90a3\u4e48\u4e0a\u9762\u7684\u95ee\u9898\uff0cVue \u91c7\u7528\u865a\u62df DOM \u7684\u539f\u56e0\u662f\u4ec0\u4e48\u5462\uff1f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Vue 2.0 \u5f15\u5165 vdom \u7684\u4e3b\u8981\u539f\u56e0\u662f vdom \u628a\u6e32\u67d3\u8fc7\u7a0b\u62bd\u8c61\u5316\u4e86\uff0c\u4ece\u800c\u4f7f\u5f97\u7ec4\u4ef6\u7684\u62bd\u8c61\u80fd\u529b\u4e5f\u5f97\u5230\u63d0\u5347\uff0c\u5e76\u4e14\u53ef\u4ee5\u9002\u914d DOM \u4ee5\u5916\u7684\u6e32\u67d3\u76ee\u6807\u3002\u6765\u81ea\u5c24\u5927\u6587\u7ae0\uff1aVue \u7684\u7406\u5ff5\u95ee\u9898","[6]")),Object(b.b)("h2",{id:"\u865a\u62df-dom-\u7684\u7f3a\u70b9"},"\u865a\u62df DOM \u7684\u7f3a\u70b9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9996\u6b21\u6e32\u67d3\u5927\u91cf DOM \u65f6\uff0c\u7531\u4e8e\u591a\u4e86\u4e00\u5c42\u865a\u62df DOM \u7684\u8ba1\u7b97\uff0c\u4f1a\u6bd4 innerHTML \u63d2\u5165\u6162\u3002"),Object(b.b)("li",{parentName:"ul"},"\u865a\u62df DOM \u9700\u8981\u5728\u5185\u5b58\u4e2d\u7684\u7ef4\u62a4\u4e00\u4efd DOM \u7684\u526f\u672c(\u66f4\u4e0a\u9762\u4e00\u6761\u5176\u5b9e\u4e5f\u5dee\u4e0d\u591a\uff0c\u4e0a\u9762\u4e00\u6761\u662f\u4ece\u901f\u5ea6\u4e0a\uff0c\u8fd9\u6761\u662f\u7a7a\u95f4\u4e0a)\u3002"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u865a\u62df DOM \u5927\u91cf\u66f4\u6539\uff0c\u8fd9\u662f\u5408\u9002\u7684\u3002\u4f46\u662f\u5355\u4e00\u7684\uff0c\u9891\u7e41\u7684\u66f4\u65b0\u7684\u8bdd\uff0c\u865a\u62df DOM \u5c06\u4f1a\u82b1\u8d39\u66f4\u591a\u7684\u65f6\u95f4\u5904\u7406\u8ba1\u7b97\u7684\u5de5\u4f5c\u3002\u6240\u4ee5\uff0c\u5982\u679c\u4f60\u6709\u4e00\u4e2a DOM \u8282\u70b9\u76f8\u5bf9\u8f83\u5c11\u9875\u9762\uff0c\u7528\u865a\u62df DOM\uff0c\u5b83\u5b9e\u9645\u4e0a\u6709\u53ef\u80fd\u4f1a\u66f4\u6162\u3002\u4f46\u5bf9\u4e8e\u5927\u591a\u6570\u5355\u9875\u9762\u5e94\u7528\uff0c\u8fd9\u5e94\u8be5\u90fd\u4f1a\u66f4\u5feb\u3002")),Object(b.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(b.b)("p",null,"\u672c\u6587\u5728\u4ecb\u7ecd\u865a\u62df DOM \u5e76\u6ca1\u6709\u50cf\u5176\u4ed6\u6587\u7ae0\u4e00\u6837\u53bb\u89e3\u91ca\u5b83\u7684\u5b9e\u73b0\u4ee5\u53ca\u76f8\u5173\u7684 Diff \u7b97\u6cd5\uff0c\u5173\u4e8e Diff \u7b97\u6cd5\u53ef\u4ee5\u770b\u8fd9\u7bc7",Object(b.b)("strong",{parentName:"p"},"\u865a\u62df DOM \u5230\u5e95\u662f\u4ec0\u4e48\uff1f"),"\u6587\u4e2d\u4ecb\u7ecd\u4e86\u5f88\u591a\u5e93\u7684 diff \u7b97\u6cd5\uff0c\u53ef\u89c1\u5176\u5b9e React \u7684 diff \u7b97\u6cd5\u5e76\u4e0d\u7b97\u592a\u5feb\u3002"),Object(b.b)("p",null,"\u800c\u662f\u901a\u8fc7\u5386\u53f2\u6765\u5f97\u51fa\u4ed6\u7684\u4ef7\u503c\u4f53\u73b0\uff0c\u4ece\u5386\u53f2\u600e\u4e48\u770b\u5927\u725b\u4eec\u662f\u600e\u4e48\u4e00\u6b65\u4e00\u6b65\u7684\u53bb\u89e3\u51b3\u95ee\u9898\uff0c\u4ece\u5386\u53f2\u4e2d\u770b\u4e3a\u4ec0\u4e48\u522b\u4eba\u80fd\u505a\u51fa\u8fd9\u4e48\u4f1f\u5927\u7684\u4e1c\u897f\uff0c\u800c\u6211\u4eec\u4e0d\u80fd\uff1f"),Object(b.b)("p",null,"\u6bcf\u4e2a\u4f1f\u5927\u7684\u4ea7\u54c1\u90fd\u4f1a\u6709\u975e\u5e38\u591a\u7684\u80cc\u666f\u652f\u6301\uff0c\u90fd\u662f\u4e00\u6b65\u4e00\u6b65\u53d1\u5c55\u800c\u6765\u7684\u3002"),Object(b.b)("p",null,"\u53e6\u5916\u6d17\u6e05\u4e86\u4e00\u4e2a\u9519\u8bef\u89c2\u5ff5\uff1a",Object(b.b)("strong",{parentName:"p"},"\u5f88\u591a\u4eba\u8ba4\u4e3a\u865a\u62df DOM \u6700\u5927\u7684\u4f18\u52bf\u662f diff \u7b97\u6cd5\uff0c\u51cf\u5c11 JavaScript \u64cd\u4f5c\u771f\u5b9e DOM \u7684\u5e26\u6765\u7684\u6027\u80fd\u6d88\u8017\u3002")),Object(b.b)("p",null,"\u867d\u7136\u8fd9\u4e00\u4e2a\u865a\u62df DOM \u5e26\u6765\u7684\u4e00\u4e2a\u4f18\u52bf\uff0c\u4f46\u5e76\u4e0d\u662f\u5168\u90e8\u3002\u865a\u62df DOM \u6700\u5927\u7684\u4f18\u52bf\u5728\u4e8e\u62bd\u8c61\u4e86\u539f\u672c\u7684\u6e32\u67d3\u8fc7\u7a0b\uff0c\u5b9e\u73b0\u4e86\u8de8\u5e73\u53f0\u7684\u80fd\u529b\uff0c\u800c\u4e0d\u4ec5\u4ec5\u5c40\u9650\u4e8e\u6d4f\u89c8\u5668\u7684 DOM\uff0c\u53ef\u4ee5\u662f\u5b89\u5353\u548c IOS \u7684\u539f\u751f\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u662f\u8fd1\u671f\u5f88\u706b\u70ed\u7684\u5c0f\u7a0b\u5e8f\uff0c\u4e5f\u53ef\u4ee5\u662f\u5404\u79cd GUI\u3002"),Object(b.b)("p",null,"\u6700\u540e\u5e0c\u671b\u5927\u5bb6\u591a\u601d\u8003\uff0c\u8ddf\u968f\u8005\u6d6a\u6f6e\u7ad9\u5728\u6d6a\u6f6e\u4e4b\u5dc5\u3002"),Object(b.b)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),Object(b.b)("p",null,"\u865a\u62df DOM \u4e3a\u4f55\u51fa\u73b0\u4ee5\u53ca\u6027\u80fd\u95ee\u9898\uff1f","[7]"),Object(b.b)("p",null,"React \u662f\u600e\u6837\u70bc\u6210\u7684","[8]"),Object(b.b)("p",null,"[1]"," React \u662f\u600e\u6837\u70bc\u6210\u7684: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000013365426#item-4"}),"https://segmentfault.com/a/1190000013365426#item-4")),Object(b.b)("p",null,"[2]"," \u5b8c\u6574\u7684 Tree diff \u5b9e\u73b0\u7b97\u6cd5\u3002: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf"}),"https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf")),Object(b.b)("p",null,"[3]"," \u4e0d\u53ef\u601d\u8bae\u7684 react diff\u3002: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://zhuanlan.zhihu.com/p/20346379"}),"https://zhuanlan.zhihu.com/p/20346379")),Object(b.b)("p",null,"[4]"," React \u662f\u600e\u6837\u70bc\u6210\u7684: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000013365426"}),"https://segmentfault.com/a/1190000013365426")),Object(b.b)("p",null,"[5]"," \u7f51\u4e0a\u90fd\u8bf4\u64cd\u4f5c\u771f\u5b9e DOM \u6162\uff0c\u4f46\u6d4b\u8bd5\u7ed3\u679c\u5374\u6bd4 React \u66f4\u5feb\uff0c\u4e3a\u4ec0\u4e48: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.zhihu.com/question/31809713"}),"https://www.zhihu.com/question/31809713")),Object(b.b)("p",null,"[6]"," Vue \u7684\u7406\u5ff5\u95ee\u9898: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://zhuanlan.zhihu.com/p/23752826"}),"https://zhuanlan.zhihu.com/p/23752826")),Object(b.b)("p",null,"[7]"," \u865a\u62df DOM \u4e3a\u4f55\u51fa\u73b0\u4ee5\u53ca\u6027\u80fd\u95ee\u9898\uff1f: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.csdn.net/hjc256/article/details/97135687"}),"https://blog.csdn.net/hjc256/article/details/97135687")),Object(b.b)("p",null,"[8]"," React \u662f\u600e\u6837\u70bc\u6210\u7684: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000013365426"}),"https://segmentfault.com/a/1190000013365426")))}u.isMDXComponent=!0}}]);