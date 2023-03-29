(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["waterMark"] = factory();
	else
		root["waterMark"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ waterMark; }
/* harmony export */ });
async function waterMark(el, binding) {
  function srcToImg(src) {
    return new Promise((res, rej) => {
      let img = new Image();
      // img.crossOrigin="";
      img.addEventListener('load', () => res(img));
      img.src = src;
      // img.width = 200;
      // img.height = 100;
      // img.objectFit = 'cover'
    });
  }

  ;
  function imgToCanvas(img) {
    // img.onload = () => {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let cans = canvas.getContext('2d');
    cans.drawImage(img, 0, 0);
    return canvas;
    // ca =  canvas
    // }
  }
  ;
  function mark(canvas, text = '默认水印', textColor = '#ccc') {
    return new Promise((res, rej) => {
      let ctx = canvas.getContext('2d');
      // 设置填充字号和字体，样式
      ctx.font = "12px 微软雅黑";
      ctx.rotate(-Math.PI / 18);
      ctx.fillStyle = textColor;
      // 设置右对齐
      ctx.textAlign = 'right';
      // 在指定位置绘制文字，这里指定距离右下角20坐标的地方
      for (let i = -canvas.height / 3; i <= canvas.width * 4 / 3; i += 80) {
        for (let j = -canvas.height / 3; j <= canvas.height * 4 / 3; j += 40) {
          ctx.fillText(text, i, j);
        }
      }
      res(canvas);
    });
  }
  ;
  console.log(binding.value.textColor);
  let img = await srcToImg(binding.value.imgUrl);
  console.log(img.width);
  let canvas = imgToCanvas(img);
  let markCan = await mark(canvas, binding.value.text, binding.value.textColor);
  el.appendChild(markCan);
}

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _waterMark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(Vue) {
  // Vue.component('g-popover', popover);
  Vue.directive('waterMark', _waterMark__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});