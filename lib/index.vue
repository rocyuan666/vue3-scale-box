<template>
  <div
    class="roc-scale-box"
    ref="rocScaleBox"
    :style="{
      ...style,
      width: props.width + 'px',
      height: props.height + 'px',
      backgroundColor: props.bgc,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  defineProps,
  watchEffect,
  defineEmits,
} from "vue";
import { debounce } from "./debounce";
import propsData from "./props";

const props = defineProps(propsData);
const rocScaleBox = ref(null);
const scale = ref(0);
const style = reactive({
  position: "fixed",
  transform: "scale(var(--scale)) translate(-50%, -50%)",
  transformOrigin: "0 0",
  left: "50%",
  top: "50%",
  zIndex: 999,
});
function getScale() {
  const wh = window.innerHeight / props.height;
  const ww = window.innerWidth / props.width;
  return ww < wh ? ww : wh;
}
function setScale() {
  scale.value = getScale();
  if (rocScaleBox.value) {
    rocScaleBox.value.style.setProperty("--scale", scale.value);
  }
}
onMounted(() => {
  setScale();
  window.addEventListener("resize", debounce(setScale, props.delay));
});

const emits = defineEmits(["scaleChange"]);
watchEffect(() => {
  emits("scaleChange", scale.value);
});
</script>
