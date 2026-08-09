"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproducts"] = self["webpackChunkproducts"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js"
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"webpack/sharing/consume/default/faker/faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst products = [];\n\nfor (let i = 0; i < 3; i++) {\n  const name = faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.productName();\n  products.push(`<div>${name}</div>`);\n}\n\ndocument.querySelector(\"#dev-products\").innerHTML = products.join(\"\\n\");\n\n\n//# sourceURL=webpack://products/./src/bootstrap.js?\n}");

/***/ }

}]);