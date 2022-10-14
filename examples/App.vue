<template>
  <ScaleBox :width="1920" :height="1080" :delay="100">
    <div class="ec-demo" id="ec-demo"></div>
  </ScaleBox>
</template>

<script setup>
import { onMounted } from "vue";
import ScaleBox from "../lib/index.vue";
import { chartRender } from "./chartRender";

onMounted(() => {
  chartRender();
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #02234d;
  text-align: center;
}
.ec-demo {
  width: 100%;
  height: 100%;
}
</style>
