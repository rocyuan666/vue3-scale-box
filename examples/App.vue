<template>
  <ScaleBox
    :width="1920"
    :height="1080"
    :delay="100"
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
  scale.value = 1 / scaleVal;
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
