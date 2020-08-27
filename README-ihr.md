# React ImageHover

A react components

封装鼠标经过/点击图层时，切换正反面的 UI 逻辑。

``` html
<figure class="imghvr-reveal-right">
  <img src="https://jdc.jd.com/img/300x300" />
  <figcaption>
    <!-- Hover Content -->
  </figcaption>
</figure>
```

## Usage

``` js
import { RevealRight } from 'react-imagehover';

<RevealRight src={src} >
  {/** Hover Content */}
</RevealRight>
```

``` js
import * as ImageHover from 'react-imagehover';

<ImageHover.RevealRight src={src} >
  {/** Hover Content */}
</ImageHover.RevealRight>
```

## Hook

```tsx
import { ImageHover, useImageHover } from 'react-imagehover';

const [frontLayerStyle, backLayerStyle] = useImageHover('reveal-right');

<ImageHover.div>
  <div style={frontLayerStyle}>
    // your front layer content
  </div>
  <div style={backLayerStyle}>
    // your back layer content
  </div>
</ImageHover.div>
```
