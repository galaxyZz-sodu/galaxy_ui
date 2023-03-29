(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["magnifier"] = factory();
	else
		root["magnifier"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      outX: 0,
      outY: 0,
      mouseX: 0,
      mouseY: 0,
      originTop: 0,
      nowTop: 0,
      maskW: this.maskWidth,
      minHeight: 0,
      MaskShow: false,
      isCrossBorder: false,
      maxRightDistance: 0,
      bigRightSiderInstance: 0,
      screenWidth: 0,
      scrollY: 0
    };
  },
  props: {
    imgUrl: {
      type: String
    },
    width: {
      type: Number,
      default: 500
    },
    maskWidth: {
      type: Number,
      default: 100
    }
  },
  computed: {
    bigStyle() {
      return {
        'big-right': this.maxRightDistance > 0,
        'big-bottom': this.maxRightDistance <= 0
      };
    }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.maxRightDistance = this.screenWidth - this.bigRightSiderInstance;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值
          // console.log(that.maxRightDistance)
          that.timer = false;
        }, 400);
      }
    }
  },
  computed: {
    // scrollY() {
    //     return this.originTop - this.$refs.min.getBoundingClientRect().top;
    // },
    maskX() {
      if (this.mouseX - this.outX <= this.maskWidth / 2) {
        return 0;
      } else if (this.mouseX - this.outX >= this.width - this.maskWidth / 2) {
        return this.width - this.maskWidth;
      } else {
        return this.mouseX - this.outX - this.maskWidth / 2;
      }
    },
    maskY() {
      if (this.mouseY - this.outY + this.scrollY < this.maskWidth / 2) {
        return 0;
      } else if (this.mouseY - this.outY + this.scrollY >= this.minHeight - this.maskWidth / 2) {
        return this.minHeight - this.maskWidth;
      } else {
        return this.mouseY - this.outY + this.scrollY - this.maskWidth / 2;
      }
    },
    bigMoveX() {
      return this.maskX * -(this.width / this.maskWidth);
    },
    bigMoveY() {
      return this.maskY * -(this.width / this.maskWidth);
    }
  },
  methods: {
    getMouseMove(e) {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
      this.nowTop = e.pageY;
      this.scrollY = this.originTop - this.$refs.min.getBoundingClientRect().top;
      console.log('yyy', this.scrollY);
      // console.log('666',this.$refs.min.getBoundingClientRect().top);
      // console.log('x',this.mouseX)
      // console.log(e.clientY );
      // console.log(e.pageY);
      // console.log('nowTop',this.nowTop)
      // console.log('bd',document.body.scrollTop)
    },

    getMouseOver() {
      this.MaskShow = true;
    },
    getMouseLeave() {
      this.MaskShow = false;
    },
    getElementLeftAndTop(element) {
      console.log('scroll', element.scrollTop);
      var left = element.offsetLeft; // 当前元素左边距
      var top = element.offsetTop; // 当前元素上边距
      var parent = element.offsetParent; // 当前元素的父级元素
      console.log(parent);
      while (parent !== null) {
        left += parent.offsetLeft; // 累加左边距
        top += parent.offsetTop; // 累加上边距
        parent = parent.offsetParent; // 依次获取父元素
        // console.log(parent)
      }
      // console.log(left)
      console.log('eleTop', top);
      this.outX = left;
      console.log('or', this.originTop);
      console.log('now', element.getBoundingClientRect().top);
      this.outY = top;
    },
    isScroll() {
      console.log('j');
    }
  },
  mounted() {
    console.log('87', this.$refs.min.getBoundingClientRect().top);
    var outImg = document.querySelector('.out');
    var minImg = document.querySelector('.min');
    var bigImg = document.querySelector('.big');
    this.originTop = minImg.getBoundingClientRect().top;
    // 获取原图片到文档左侧和顶部的距离
    this.getElementLeftAndTop(minImg);
    // this.maxRightDistance = window.innerWidth - bigImg.getBoundingClientRect().right;
    this.bigRightSiderInstance = bigImg.getBoundingClientRect().right;
    // console.log('outX',this.outX);
    // console.log('outy',this.outY);
    this.minHeight = minImg.offsetHeight;
    this.maxRightDistance = window.innerWidth - this.bigRightSiderInstance;
    const that = this;
    window.onresize = () => {
      return (() => {
        // window.screenWidth = document.body.clientWidth
        that.screenWidth = window.innerWidth;
        that.getElementLeftAndTop(minImg);
      })();
    };
    // window.onscroll = () => {
    //     return (() => {
    //         console.log('gun');
    //     })()

    // }
  }
});

/***/ }),

/***/ 226:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "out",
    on: {
      scroll: _vm.isScroll
    }
  }, [_c("div", [_c("div", {
    ref: "min",
    staticClass: "min",
    on: {
      mousemove: function ($event) {
        $event.stopPropagation();
        return _vm.getMouseMove.apply(null, arguments);
      },
      mouseover: function ($event) {
        $event.stopPropagation();
        return _vm.getMouseOver.apply(null, arguments);
      },
      mouseleave: function ($event) {
        $event.stopPropagation();
        return _vm.getMouseLeave.apply(null, arguments);
      }
    }
  }, [_c("img", {
    staticClass: "min-img",
    style: {
      width: _vm.width + "px"
    },
    attrs: {
      src: _vm.imgUrl,
      alt: ""
    }
  }), _vm._v(" "), _vm.MaskShow ? _c("div", {
    staticClass: "mask",
    style: {
      left: _vm.maskX + "px",
      top: _vm.maskY + "px",
      width: _vm.maskWidth + "px",
      height: _vm.maskWidth + "px"
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "big",
    class: {
      "big-hid": !_vm.MaskShow || _vm.maxRightDistance < 0
    },
    style: {
      left: _vm.width + 5 + "px",
      width: _vm.width + "px",
      height: _vm.width + "px"
    }
  }, [_c("img", {
    staticClass: "big-img",
    style: {
      left: _vm.bigMoveX + "px",
      top: _vm.bigMoveY + "px",
      width: _vm.width * (_vm.width / _vm.maskWidth) + "px"
    },
    attrs: {
      src: _vm.imgUrl,
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "big-2",
    class: {
      "big-hid": !_vm.MaskShow || _vm.maxRightDistance >= 0
    },
    style: {
      left: 0,
      top: _vm.minHeight + 5 + "px",
      width: _vm.width + "px",
      height: _vm.width + "px"
    }
  }, [_c("img", {
    staticClass: "big-img",
    style: {
      left: _vm.bigMoveX + "px",
      top: _vm.bigMoveY + "px",
      width: _vm.width * (_vm.width / _vm.maskWidth) + "px"
    },
    attrs: {
      src: _vm.imgUrl,
      alt: ""
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ 230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5618b175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(227);
/* harmony import */ var _index_vue_vue_type_style_index_0_id_5618b175_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(229);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5618b175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5618b175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5618b175",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "tlib/others/magnifier/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 227:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5618b175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5618b175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5618b175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);


/***/ }),

/***/ 229:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5618b175_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);


/***/ }),

/***/ 8:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
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
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(Vue) {
  Vue.component('g-magnifier', _index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});