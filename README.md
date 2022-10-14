# vue3-scale-box

vue3大屏适配缩放组件

## 安装
```bash
npm install vue3-scale-box
```

## 使用
```html
<template>
  <ScaleBox
    :width="1920"
    :height="1080"
    bgc="transparent"
    :delay="100"
  >
    <div class="ec-demo" id="ec-demo"></div>
  </ScaleBox>
</template>
```

``` javascript
<script setup>
import ScaleBox from "vue3-scale-box";
</script>
```

## 属性
- ` width ` 宽度 默认 ` 1920 `
- ` height ` 高度 默认 ` 1080 `
- ` bgc ` 背景颜色 默认 ` "transparent" `
- ` delay `自适应缩放防抖延迟时间（ms） 默认 ` 100 `
