---
title: Single Page Application 如何进行无侵入开发
date: "2015-05-06T23:46:37.121Z"
keyword: #css#design
---

## ECode 是如何实现无侵入二开的

查询 PC 端所有正在`无侵入二开`的组件：

``` js
window.pcComponentsConfig
```

## 1. 中间件源码

```js
function middleware(obj, name, saName) {
  const com = getModule(obj);
  let result = com;
  if (isObject(window.pcComponentsConfig)) {
    const overwrite = window.pcComponentsConfig[name];
    if (isObject(overwrite)) {
      if (isReactComponent(com, name)) {
        result = React.forwardRef((props, ref) => {
          if (props._noOverwrite) {
            return React.createElement(com, { ...props, ref });
          }
          let newProps = { ...props };
          const overwriteInRender = window.pcComponentsConfig[name];
          if (isObject(overwriteInRender)) {
            // overwrite render lev 1
            const renderFn = overwriteInRender.overwriteRenderFn;
            if (isFunction(renderFn)) {
              const overwriteRender = renderFn(newProps, saName || name);
              if (overwriteRender !== false) {
                return overwriteRender;
              }
            }
            // overwrite props lev 2
            const propsJson = overwriteInRender.overwritePropsJson;
            if (isObject(propsJson)) {
              newProps = { ...newProps, ...propsJson };
            }
            const propsFn = overwriteInRender.overwritePropsFn;
            if (isFunction(propsFn)) {
              const overwriteProps = propsFn(newProps, saName || name);
              if (isObject(overwriteProps)) {
                newProps = { ...newProps, ...overwriteProps };
              }
            }
            // overwrite class lev 3
            const classFn = overwriteInRender.overwriteClassFn;
            if (isFunction(classFn)) {
              const overwriteClass = classFn(com, newProps, saName || name);
              if (overwriteClass.com && isObject(overwriteClass.props)) {
                return React.createElement(overwriteClass.com, {
                  ...overwriteClass.props,
                  ref
                });
              }
            }
          }
          return React.createElement(com, { ...newProps, ref });
        });
      }
      Object.keys(com).forEach(key => {
        const staticAttribute = getModule(com[key]);
        const staticAttributeName = `${name}.${key}`;
        if (isReactComponent(staticAttribute, key, staticAttributeName)) {
          result[key] = middleware(staticAttribute, key, staticAttributeName);
        } else {
          result[key] = staticAttribute;
        }
      });
    }
  }
  return result;
}
```

## 2. 几个重要的钩子

``` js

```

## 3. React.forwardRef 概述

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

## 参考

[[1] React.forwardRef 转发组件实例](https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref)

``` js
ecodeSDK.overwritePropsFnQueueMapSet('WeaRightMenu',{ //组件名
  fn:(newProps)=>{ //newProps代表组件参数
    //进行位置判断
    if(!window.location.href.includes('/main/workflow/req')) return;

    if(WfForm.getBaseInfo().nodeid != 3119) return;

    if(WfForm.getBaseInfo().workflowid != 479) return;

    if(WfForm.getBaseInfo().requestid != 485309) return;

    return {
      ...newProps, 
      children: [ 
        newProps.children, 
        window.wfform.getGlobalStore().tabKey === 'odoc' 
        && 
        <div 
          className="fixed" 
          style={{ right: 80, top: 70, width: 100, height: 60 }} 
          onClick={() => antd.Modal.warning({
            title: '操作说明',
            content: '为保留用印效果，当前数据暂时无法签署！',
          })} 
        />
      ]
    }
  },
  order:1, //排序字段，如果存在同一个页面复写了同一个组件，控制顺序时使用
  desc:'透明图层阻止演示数据契约锁签署'
});
```
