(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pagination"] = factory();
	else
		root["pagination"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_313aedf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _index_vue_vue_type_style_index_0_id_313aedf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_313aedf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_313aedf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "313aedf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "tlib/data/pagination/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_313aedf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_313aedf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_313aedf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);


/***/ }),
/* 36 */
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
    attrs: {
      id: "pagination"
    }
  }, [_c("input", {
    staticClass: "btn-prev",
    class: {
      disalbed: _vm.current == 1
    },
    attrs: {
      type: "button",
      value: "<"
    },
    on: {
      click: function ($event) {
        return _vm.setPage(_vm.current - 1);
      }
    }
  }), _vm._v(" "), _c("pager", {
    attrs: {
      "total-page": _vm.totalPage,
      "default-current-page": _vm.current
    },
    on: {
      change: _vm.pageChange
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "btn-next",
    class: {
      disalbed: _vm.current == _vm.totalPage
    },
    attrs: {
      type: "button",
      value: ">"
    },
    on: {
      click: function ($event) {
        return _vm.setPage(_vm.current + 1);
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Pagination",
  components: {
    Pager: _pager_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    // 默认当前页码
    defaultCurrentPage: {
      type: Number,
      default() {
        return 1;
      }
    },
    // 默认每页数据的条数
    defaultPageSize: {
      type: Number,
      default() {
        return 10;
      }
    },
    // 数据的总条数
    total: {
      type: Number,
      default() {
        return 100;
      }
    }
  },
  data() {
    return {
      current: this.defaultCurrentPage
    };
  },
  computed: {
    // 计算数据总页数
    totalPage() {
      return Math.ceil(this.total / this.defaultPageSize);
    }
  },
  methods: {
    // 上一页、下一页按钮被点击时，页码发生改变，且要传出被点击的页码
    setPage(page) {
      // 左边越界
      if (page < 1) this.current = 1;
      // 右边越界
      else if (page > this.totalPage) {
        this.current = this.totalPage;
      }
      // 正常情况
      else {
        this.current = page;
      }
      // 发出事件，让外部知道页码改变了
      this.$emit('change', this.current);
    },
    // 接收pager中发出的改变页码事件，并再次发送出去
    pageChange(page) {
      this.$emit('change', page);
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_vue_vue_type_template_id_d1ee573a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _pager_vue_vue_type_style_index_0_id_d1ee573a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pager_vue_vue_type_template_id_d1ee573a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _pager_vue_vue_type_template_id_d1ee573a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d1ee573a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "tlib/data/pagination/pager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_template_id_d1ee573a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_template_id_d1ee573a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_template_id_d1ee573a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "pager"
  }, [_c("li", {
    staticClass: "number",
    class: {
      active: this.current === 1
    },
    on: {
      click: function ($event) {
        return _vm.setPage(1);
      }
    }
  }, [_vm._v("1")]), _vm._v(" "), _vm.totalPage > _vm.centerSize + 2 && _vm.current - _vm.centerSize / 2 - 1 > 1 ? _c("li", {
    staticClass: "more left",
    on: {
      click: function ($event) {
        return _vm.setPage(_vm.current - _vm.jumpSize);
      }
    }
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.centerPages, function (page, index) {
    return _c("li", {
      key: index,
      staticClass: "number",
      class: {
        active: _vm.current === page
      },
      on: {
        click: function ($event) {
          return _vm.setPage(page);
        }
      }
    }, [_vm._v(_vm._s(page))]);
  }), _vm._v(" "), _vm.totalPage > _vm.centerSize + 2 && _vm.current + _vm.centerSize / 2 + 1 < _vm.totalPage ? _c("li", {
    staticClass: "more right",
    on: {
      click: function ($event) {
        return _vm.setPage(_vm.current + _vm.jumpSize);
      }
    }
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm.totalPage !== 1 ? _c("li", {
    staticClass: "number",
    class: {
      active: this.current === _vm.totalPage
    },
    on: {
      click: function ($event) {
        return _vm.setPage(_vm.totalPage);
      }
    }
  }, [_vm._v(_vm._s(_vm.totalPage))]) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_3_use_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Pager",
  props: {
    totalPage: Number,
    //数据总页数
    defaultCurrentPage: Number,
    //默认当前页码
    //中间页码数默认为5
    centerSize: {
      type: Number,
      default() {
        return 5;
      }
    },
    jumpSize: {
      type: Number,
      default() {
        return 5;
      }
    }
  },
  computed: {
    // 中间页码计算
    centerPages() {
      let centerPage = this.current;
      // 若当前页面大于this.current+2(以current为中心右边加两页) +1(尾页)>this.totalPage，则取this.totalPage-3为中心
      if (this.current > this.totalPage - 3) {
        centerPage = this.totalPage - 3; //注意这里是centerPage，不是this.current
      }
      // 若当前页面小于或等于4，则取4为中心
      if (this.current < 4) {
        centerPage = 4;
      }
      if (this.totalPage <= this.centerSize + 2) {
        // 总页码较少时，则全部显示出来
        const centerArr = [];
        for (let i = 2; i < this.totalPage; i++) {
          centerArr.push(i);
        }
        return centerArr;
      } else {
        // 总页数较大时，只显示中间centerSize个页码
        const centerArr = [];
        for (let i = centerPage - 2; i <= centerPage + 2; i++) {
          centerArr.push(i);
        }
        return centerArr;
      }
    }
  },
  data() {
    return {
      // 因为不可以直接修改props传过来的值，所以在data中用current保存props中默认页面页数defaultCurrentPage的值，用watch监听props中defaultCurrentPage值的改变
      // （前一页、后一页按钮被点击时，会传入新的值，但是data中的current不会更新，用watch监听并赋新的值，可解决该bug）
      current: this.defaultCurrentPage
    };
  },
  watch: {
    // 监听props中defaultCurrentPage值的改变，更新current的值
    defaultCurrentPage: function (newValue, oldValue) {
      this.current = newValue;
    }
  },
  methods: {
    // 上一页、下一页按钮被点击时，页码发生改变，且要传出被点击的页码
    setPage(page) {
      // 左边越界
      if (page < 1) this.current = 1;
      // 右边越界
      else if (page > this.totalPage) {
        this.current = this.totalPage;
      }
      // 正常情况
      else {
        this.current = page;
      }
      // 发出pager中页码被改变的事件
      this.$emit('change', this.current);
    }
  }
});

/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_style_index_0_id_d1ee573a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_313aedf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
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
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(Vue) {
  Vue.component('g-pagination', _index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});