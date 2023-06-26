<template>
  <ScaleBox
    :width="1920"
    :height="1080"
    :delay="100"
    :bgc="'#f99'"
    :isFlat="false"
    @scaleChange="scaleChange"
  >
    <div class="map-box">
      <MapCpn :style="{ transform: `scale(${scale})` }" />
    </div>
  </ScaleBox>
</template>

<script setup>
import { ref } from "vue";
import ScaleBox from "../lib/index.vue";
import MapCpn from "./components/mapCpn.vue";

const scale = ref(1);

function scaleChange(scaleVal) {
  /*
    默认为关闭拉伸模式(等比缩放模式)
    开启拉伸模式(isFlat = true) scaleVal = [x缩放值, y缩放值]
    关闭拉伸模式(isFlat = false) scaleVal = [等比缩放值]
  */
  scale.value = 1 / scaleVal[0];
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.map-box {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  margin-top: 200px;
  overflow: hidden;
}
</style>
