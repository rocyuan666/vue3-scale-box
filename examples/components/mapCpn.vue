<template>
  <div id="container"></div>
</template>

<script setup>
import {} from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

function initMap() {
  AMapLoader.load({
    key: "41a92b71c69e8ae6be74dabeda835ede", // 申请好的Web端开发者Key，首次调用 load 时必填
    securityJsCode: "4692ae1c4d15ac61adc56bf545213002",
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      new AMap.Map("container", {
        viewMode: "2D", // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
        zoom: 11, //初始化地图层级
        center: [116.397428, 39.90923], //初始化地图中心点
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
initMap();
</script>

<style>
#container {
  width: 100%;
  height: 100%;
}
</style>
