(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue3ScaleBox"] = factory(require("vue"));
	else
		root["vue3ScaleBox"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./lib/debounce.js
function debounce(fn, delay) {
  let timer;
  return function () {
    const th = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}

;// CONCATENATED MODULE: ./lib/props.js
/**
 * width      宽
 * height     高
 * bgc        背景颜色
 * delay      自适应缩放防抖延迟时间（ms）
 */
/* harmony default export */ var props = ({
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
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/index.vue?vue&type=script&setup=true&lang=js







/* harmony default export */ var dist_ruleSet_0_use_0_libvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  props: props,
  emits: ["scaleChange"],
  setup(__props, { emit: emits }) {

const props = __props;



(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
  setScale();
  window.addEventListener("resize", debounce(setScale, props.delay));
});

const rocScaleBox = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
const style = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
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
const scale = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
function getScale() {
  const wh = window.innerHeight / props.height;
  const ww = window.innerWidth / props.width;
  return ww < wh ? ww : wh;
}

/**
 * 不等比缩放比例 计算 X Y
 */
const scaleX = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
const scaleY = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
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

(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(() => {
  let args = [scale.value];
  if (props.isFlat) {
    args = [scaleX.value, scaleY.value];
  } else {
    args = scale.value;
  }
  emits("scaleChange", args);
});

return (_ctx, _cache) => {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: "roc-scale-box",
    ref_key: "rocScaleBox",
    ref: rocScaleBox,
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      ...style,
      width: props.width + 'px',
      height: props.height + 'px',
      backgroundColor: props.bgc,
    })
  }, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")
  ], 4))
}
}

});
;// CONCATENATED MODULE: ./lib/index.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./lib/index.vue



const __exports__ = dist_ruleSet_0_use_0_libvue_type_script_setup_true_lang_js;

/* harmony default export */ var lib = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (lib);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});