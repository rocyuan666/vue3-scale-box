/**
 * width      宽
 * height     高
 * bgc        背景颜色
 * delay      自适应缩放防抖延迟时间（ms）
 */
export default {
  width: {
    type: Number,
    default: 1920,
  },
  height: {
    type: Number,
    default: 1080,
  },
  bgc: {
    type: String,
    default: "transparent",
  },
  delay: {
    type: Number,
    default: 100,
  },
  isFlat: {
    type: Boolean,
    default: false,
  },
};
