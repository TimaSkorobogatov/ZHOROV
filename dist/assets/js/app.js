/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("const buttons = document.querySelectorAll('.open-modal-btn');\r\nconst closeButtons = document.querySelectorAll('.modalClose');\r\nbuttons.forEach(button => {\r\n  button.addEventListener('click', function() {\r\n    document.getElementById(\"modalCalculate\").classList.add(\"open\")\r\n    document.body.classList.add('no-scroll');\r\n  });\r\n});\r\ncloseButtons.forEach(button => {\r\n  button.addEventListener('click', function() {\r\n    document.getElementById(\"modalCalculate\").classList.remove(\"open\")\r\n    document.body.classList.remove('no-scroll');\r\n  });\r\n});\r\n\r\nconst buttons2 = document.querySelectorAll('.open-modal-btn2');\r\nbuttons2.forEach(button => {\r\n  button.addEventListener('click', function() {\r\n    document.getElementById(\"modalDiscussion\").classList.add(\"open\")\r\n    document.body.classList.add('no-scroll');\r\n  });\r\n});\r\ncloseButtons.forEach(button => {\r\n  button.addEventListener('click', function() {\r\n    document.getElementById(\"modalDiscussion\").classList.remove(\"open\")\r\n    document.body.classList.remove('no-scroll');\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;