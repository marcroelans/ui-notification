(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UiNotifcation"] = factory();
	else
		root["UiNotifcation"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/create-element-lib/src/h.js":
/*!**************************************************!*\
  !*** ./node_modules/create-element-lib/src/h.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-string */ \"./node_modules/create-element-lib/src/is-string.js\");\n\n\n/**\n * main function to create elements\n * @param {String} tag\n * @param {Object|Array} args\n */\nconst h = (tag, properties = {}, childs = []) => {\n  if (!Object(_is_string__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(tag)) {\n    throw new Error('No valid tag given'); // tag must be a string\n  }\n\n  // create the html node\n  const element = document.createElement(tag);\n\n  // get they object keys\n  const propKeys = Object.keys(properties);\n\n  propKeys.forEach((prop) => {\n    const value = properties[prop];\n\n    typeof value === 'function'\n      ? element.addEventListener('click', (e) => {\n          value(element, e); // call the given function with the element and event as parameters\n        })\n      : element.setAttribute(prop, value);\n  });\n\n  childs.forEach((child) => {\n    Object(_is_string__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(child)\n      ? element.appendChild(document.createTextNode(child))\n      : (child ? element.appendChild(child) : null);\n  });\n\n  // return the composed element\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\n\n\n//# sourceURL=webpack://UiNotifcation/./node_modules/create-element-lib/src/h.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/create-element-lib/src/index.js ***!
  \******************************************************/
/*! exports provided: h, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return version; });\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./node_modules/create-element-lib/src/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n/**\n * version\n * @type {String}\n */\nconst version = '0.1.1';\n\n\n\n\n//# sourceURL=webpack://UiNotifcation/./node_modules/create-element-lib/src/index.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/is-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/create-element-lib/src/is-string.js ***!
  \**********************************************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/**\n * checks if a given arg is a string\n * @type {String} s\n * @return {Boolean}\n */\nconst isString = s => typeof s === 'string';\n\n\n//# sourceURL=webpack://UiNotifcation/./node_modules/create-element-lib/src/is-string.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ \"./src/js/notification.js\");\n\n/**\r\n * init a notification\r\n * @param {String} title\r\n * @param {String} subtitle\r\n * @param {Object} config\r\n * @return {Class}\r\n */\n\nvar init = function init(title, subtitle) {\n  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return new _notification__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, subtitle, config);\n};\n\n\n\n//# sourceURL=webpack://UiNotifcation/./src/js/index.js?");

/***/ }),

/***/ "./src/js/notification.js":
/*!********************************!*\
  !*** ./src/js/notification.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var create_element_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-element-lib */ \"./node_modules/create-element-lib/src/index.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n\n\nvar Notification =\n/*#__PURE__*/\nfunction () {\n  function Notification(title, subtitle) {\n    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, Notification);\n\n    if (!title || !subtitle) {\n      throw new Error('Cannot create component Notification');\n    }\n\n    this.title = title;\n    this.subtitle = subtitle;\n    this.config = config;\n    this.options = this.applyOptions();\n    this.template = null;\n    this.createTemplate();\n    this.render();\n  }\n\n  _createClass(Notification, [{\n    key: \"applyOptions\",\n    value: function applyOptions() {\n      var defaultOption = {\n        root: document.querySelector('body'),\n        shadow: false,\n        closable: true,\n        duration: null,\n        shouldDestroy: true\n      };\n      return Object.assign({}, defaultOption, this.config);\n    }\n  }, {\n    key: \"createTemplate\",\n    value: function createTemplate() {\n      var _this = this;\n\n      var shadow;\n      var button;\n\n      if (this.options.shadow) {\n        shadow = Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n          \"class\": 'shadow'\n        });\n      }\n\n      if (this.options.closable) {\n        button = Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('button', {\n          \"class\": 'button',\n          click: function click() {\n            _this.destroy();\n          }\n        }, ['Schließen']);\n      }\n\n      this.template = Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n        \"class\": 'js--notification'\n      }, [shadow, Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n        \"class\": 'box'\n      }, [Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('p', {\n        \"class\": 'title'\n      }, [this.title]), Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('p', {\n        \"class\": 'subtitle'\n      }, [this.subtitle]), button])]);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      if (!this.template || !this.options.root) {\n        return;\n      }\n\n      if (this.options.beforeRender) {\n        this.options.beforeRender(this, this.template);\n      }\n\n      this.options.root.appendChild(this.template);\n\n      if (this.options.afterRender) {\n        this.options.afterRender(this, this.template);\n      }\n\n      if (this.options.duration > 0) {\n        setTimeout(function () {\n          _this2.destroy();\n        }, this.options.duration);\n      }\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.template) {\n        return;\n      }\n\n      if (this.options.beforeDestroy) {\n        this.options.beforeDestroy(this, this.template);\n      }\n\n      if (this.options.shouldDestroy) {\n        this.template.parentElement.removeChild(this.template);\n      }\n\n      if (this.options.afterDestroy) {\n        this.options.afterDestroy(this);\n      }\n    }\n  }]);\n\n  return Notification;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\n\n//# sourceURL=webpack://UiNotifcation/./src/js/notification.js?");

/***/ })

/******/ });
});