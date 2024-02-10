"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/dashboard.js":
/*!**************************!*\
  !*** ./src/dashboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navigation_bar_navigation_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.js */ \"./src/components/navigation-bar/navigation-bar.js\");\n\nvar navigationItems = [{\n  url: \"/hello-world-page\",\n  title: \"Hello World Page\"\n}, {\n  url: \"/kiwi-page\",\n  title: \"Kiwi Page\"\n}];\nvar navigationBar = new _components_navigation_bar_navigation_bar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nnavigationBar.render(navigationItems);\nvar url = window.location.pathname;\nif (url === \"/hello-world-page\") {\n  __webpack_require__.e(/*! import() */ \"webpack_container_remote_HelloWorldApp_HelloWorldPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! HelloWorldApp/HelloWorldPage */ \"webpack/container/remote/HelloWorldApp/HelloWorldPage\", 23)).then(function (HelloWorldPageModule) {\n    var HelloWorldPage = HelloWorldPageModule[\"default\"];\n    var helloWorldPage = new HelloWorldPage();\n    helloWorldPage.render();\n  });\n} else if (url === \"/kiwi-page\") {\n  debugger;\n  __webpack_require__.e(/*! import() */ \"webpack_container_remote_KiwiApp_KiwiPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! KiwiApp/KiwiPage */ \"webpack/container/remote/KiwiApp/KiwiPage\", 23)).then(function (KiwiPageModule) {\n    var KiwiPage = KiwiPageModule[\"default\"];\n    var kiwiPage = new KiwiPage();\n    kiwiPage.render();\n  });\n}\nconsole.log(\"dashboard\");\n\n//# sourceURL=webpack://dashboard/./src/dashboard.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("631379d5fb16306f9dfe")
/******/ })();
/******/ 
/******/ }
);