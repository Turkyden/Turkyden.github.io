---
title: 对象数组去重并且统计出现次数
date: "2015-05-28T22:40:32.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

```js
const removeRepeat = (arr) => {
  let obj = {}
  let newArr = []
  return newArr = arr.reduce((item, next) => {
    if(!obj[next.value]) {
        obj[next.value] = true;
        item.push({
            ...next,
            num: 1
        });
        return item
    }else{
        return item.map(v => {
            return {
                ...v,
                num: v.value == next.value ? v.num + 1 : v.num
            }
        })
    }
  }, [])
}

removeRepeat([{ value: 'ddj' }, { value: 'ddj' }, { value: 'zcs' }]);
```
