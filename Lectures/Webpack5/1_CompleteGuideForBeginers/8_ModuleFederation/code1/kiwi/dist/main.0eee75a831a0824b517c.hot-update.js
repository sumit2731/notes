"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetutorial"]("main",{

/***/ "./src/kiwi.js":
/*!*********************!*\
  !*** ./src/kiwi.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading/heading.js */ \"./src/components/heading/heading.js\");\n/* harmony import */ var _components_kiwi_image_kiwi_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/kiwi-image/kiwi-image.js */ \"./src/components/kiwi-image/kiwi-image.js\");\n\n\nvar heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nheading.render(\"kiwi\");\nvar kiwiImage = new _components_kiwi_image_kiwi_image_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nkiwiImage.render();\n/**\n * First part is path by which webpack will resolve which module to load, this is key in ModuleFederationPlugin config\n * Second part is name given by parenbt application while exposing this module\n */\n\n__webpack_require__.e(/*! import() */ \"webpack_container_remote_HelloWorldAp_HelloWorldButton\").then(__webpack_require__.t.bind(__webpack_require__, /*! HelloWorldAp/HelloWorldButton */ \"webpack/container/remote/HelloWorldAp/HelloWorldButton\", 23)).then(function (HelloWorldButtonModule) {\n  var HelloWorldButton = HelloWorldButtonModule[\"default\"];\n  var helloWorldButton = new HelloWorldButton();\n  helloWorldButton.render();\n});\n\n//# sourceURL=webpack://tutorial/./src/kiwi.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9f065dbe6187ff20e9d9")
/******/ })();
/******/ 
/******/ /* webpack/runtime/remotes loading */
/******/ (() => {
/******/ 	var chunkMapping = {
/******/ 		"webpack_container_remote_HelloWorldAp_HelloWorldButton": [
/******/ 			"webpack/container/remote/HelloWorldAp/HelloWorldButton"
/******/ 		]
/******/ 	};
/******/ 	var idToExternalAndNameMapping = {
/******/ 		"webpack/container/remote/HelloWorldAp/HelloWorldButton": [
/******/ 			"default",
/******/ 			"./HelloWorldButton",
/******/ 			"webpack/container/reference/HelloWorldAp"
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				var getScope = __webpack_require__.R;
/******/ 				if(!getScope) getScope = [];
/******/ 				var data = idToExternalAndNameMapping[id];
/******/ 				if(getScope.indexOf(data) >= 0) return;
/******/ 				getScope.push(data);
/******/ 				if(data.p) return promises.push(data.p);
/******/ 				var onError = (error) => {
/******/ 					if(!error) error = new Error("Container missing");
/******/ 					if(typeof error.message === "string")
/******/ 						error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 					__webpack_modules__[id] = () => {
/******/ 						throw error;
/******/ 					}
/******/ 					data.p = 0;
/******/ 				};
/******/ 				var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 					try {
/******/ 						var promise = fn(arg1, arg2);
/******/ 						if(promise && promise.then) {
/******/ 							var p = promise.then((result) => (next(result, d)), onError);
/******/ 							if(first) promises.push(data.p = p); else return p;
/******/ 						} else {
/******/ 							return next(promise, d, first);
/******/ 						}
/******/ 					} catch(error) {
/******/ 						onError(error);
/******/ 					}
/******/ 				}
/******/ 				var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 				var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 				var onFactory = (factory) => {
/******/ 					data.p = 1;
/******/ 					__webpack_modules__[id] = (module) => {
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ }
);