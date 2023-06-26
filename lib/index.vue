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
const emits = defineEmits(["scaleChange"]);
onMounted(() => {
  setScale();
  window.addEventListener("resize", debounce(setScale, props.delay));
});

const rocScaleBox = ref(null);
const style = reactive({
  position: "fixed",
  transform: "scale(var(--scale)) translate(-50%, -50%)",
  transformOrigin: "0 0",
  left: "50%",
  top: "50%",
  zIndex: 999,
});
if (props.isFlat) {
  // 拉伸模式
  style["transform"] =
    "scaleX(var(--scaleX)) scaleY(var(--scaleY)) translate(-50%, -50%)";
} else {
  // 等比缩放模式
  style["transform"] = "scale(var(--scale)) translate(-50%, -50%)";
}

/**
 * 等比缩放比例 计算
 */
const scale = ref(0);
function getScale() {
  const wh = window.innerHeight / props.height;
  const ww = window.innerWidth / props.width;
  return ww < wh ? ww : wh;
}

/**
 * 不等比缩放比例 计算 X Y
 */
const scaleX = ref(0);
const scaleY = ref(0);
function getScaleX() {
  const ww = window.innerWidth / props.width;
  return ww;
}
function getScaleY() {
  const wh = window.innerHeight / props.height;
  return wh;
}

/**
 * 设置缩放值
 */
function setScale() {
  if (rocScaleBox.value) {
    if (props.isFlat) {
      // 拉伸模式
      scaleX.value = getScaleX();
      scaleY.value = getScaleY();
      rocScaleBox.value.style.setProperty("--scaleX", scaleX.value);
      rocScaleBox.value.style.setProperty("--scaleY", scaleY.value);
    } else {
      // 等比缩放模式
      scale.value = getScale();
      rocScaleBox.value.style.setProperty("--scale", scale.value);
    }
  }
}

watchEffect(() => {
  let args = [scale.value];
  if (props.isFlat) {
    args = [scaleX.value, scaleY.value];
  } else {
    args = scale.value;
  }
  emits("scaleChange", args);
});
</script>
