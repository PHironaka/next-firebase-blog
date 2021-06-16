/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/index.module.scss */ \"./styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ \"./components/index.js\");\n\nvar _jsxFileName = \"/Users/peterhironaka/prototypes/next-firebaseblog/pages/index.js\";\n// This component represents the index page for the site. You\n// can read more about Pages in the Next.js docs at:\n// https://nextjs.org/docs/basic-features/pages\n\n\n\n\nconst getFormattedDate = milliseconds => {\n  const formatOptions = {\n    weekday: 'long',\n    month: 'long',\n    day: 'numeric',\n    year: 'numeric',\n    timeZone: 'UTC'\n  };\n  const date = new Date(milliseconds);\n  return date.toLocaleDateString(undefined, formatOptions);\n};\n\nconst HomePage = ({\n  posts\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().HomePage),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Blog Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, undefined), posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: post.coverImage,\n        alt: post.coverImageAlt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: getFormattedDate(post.dateCreated)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          dangerouslySetInnerHTML: {\n            __html: `${post.content.substring(0, 200)}...`\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: `/post/${post.slug}`,\n          children: \"Continue Reading\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)]\n    }, post.slug, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 21,\n  columnNumber: 3\n}, undefined); // This is for fetching data every time the page is visited. We do this\n// so that we don't have to redploy the site every time we add a blog post.\n// You can read more about this in the Next.js docs at:\n// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering\n\n\nasync function getServerSideProps() {\n  const posts = await (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.getPosts)();\n  return {\n    props: {\n      posts\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZpcmViYXNlYmxvZy8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiZ2V0Rm9ybWF0dGVkRGF0ZSIsIm1pbGxpc2Vjb25kcyIsImZvcm1hdE9wdGlvbnMiLCJ3ZWVrZGF5IiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwidGltZVpvbmUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsIkhvbWVQYWdlIiwicG9zdHMiLCJzdHlsZXMiLCJtYXAiLCJwb3N0IiwiY292ZXJJbWFnZSIsImNvdmVySW1hZ2VBbHQiLCJ0aXRsZSIsImRhdGVDcmVhdGVkIiwiX19odG1sIiwiY29udGVudCIsInN1YnN0cmluZyIsInNsdWciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJnZXRQb3N0cyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUlDLFlBQUQsSUFBa0I7QUFDekMsUUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxXQUFPLEVBQUUsTUFEVztBQUVwQkMsU0FBSyxFQUFFLE1BRmE7QUFHcEJDLE9BQUcsRUFBRSxTQUhlO0FBSXBCQyxRQUFJLEVBQUUsU0FKYztBQUtwQkMsWUFBUSxFQUFFO0FBTFUsR0FBdEI7QUFPQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTUixZQUFULENBQWI7QUFDQSxTQUFPTyxJQUFJLENBQUNFLGtCQUFMLENBQXdCQyxTQUF4QixFQUFtQ1QsYUFBbkMsQ0FBUDtBQUNELENBVkQ7O0FBWUEsTUFBTVUsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNmLDhEQUFDLCtDQUFEO0FBQUEseUJBQ0E7QUFBSyxhQUFTLEVBQUVDLDJFQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdELEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUVBLElBQUksQ0FBQ0MsVUFBZjtBQUEyQixXQUFHLEVBQUVELElBQUksQ0FBQ0U7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLG9CQUFPbkIsZ0JBQWdCLENBQUNnQixJQUFJLENBQUNJLFdBQU47QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQ0UsaUNBQXVCLEVBQUU7QUFDdkJDLGtCQUFNLEVBQUcsR0FBRUwsSUFBSSxDQUFDTSxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsR0FBMUIsQ0FBK0I7QUFEbkI7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQVFFO0FBQUcsY0FBSSxFQUFHLFNBQVFQLElBQUksQ0FBQ1EsSUFBSyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxPQUFjUixJQUFJLENBQUNRLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQyxDQXlCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRU8sZUFBZUMsa0JBQWYsR0FBb0M7QUFDekMsUUFBTVosS0FBSyxHQUFHLE1BQU1hLHVEQUFRLEVBQTVCO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGQ7QUFESztBQURGLEdBQVA7QUFLRDtBQUlELCtEQUFlRCxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGNvbXBvbmVudCByZXByZXNlbnRzIHRoZSBpbmRleCBwYWdlIGZvciB0aGUgc2l0ZS4gWW91XG4vLyBjYW4gcmVhZCBtb3JlIGFib3V0IFBhZ2VzIGluIHRoZSBOZXh0LmpzIGRvY3MgYXQ6XG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9wYWdlc1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICdAbGliL2ZpcmViYXNlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQHN0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdAY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEZvcm1hdHRlZERhdGUgPSAobWlsbGlzZWNvbmRzKSA9PiB7XG4gIGNvbnN0IGZvcm1hdE9wdGlvbnMgPSB7XG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIHRpbWVab25lOiAnVVRDJyxcbiAgfTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1pbGxpc2Vjb25kcyk7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIGZvcm1hdE9wdGlvbnMpO1xufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBwb3N0cyB9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSG9tZVBhZ2V9PlxuICAgIDxoMT5CbG9nIFBvc3RzPC9oMT5cbiAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICA8YXJ0aWNsZSBrZXk9e3Bvc3Quc2x1Z30+XG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmNvdmVySW1hZ2V9IGFsdD17cG9zdC5jb3ZlckltYWdlQWx0fSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgIDxzcGFuPntnZXRGb3JtYXR0ZWREYXRlKHBvc3QuZGF0ZUNyZWF0ZWQpfTwvc3Bhbj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgJHtwb3N0LmNvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCl9Li4uYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvcD5cbiAgICAgICAgICA8YSBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+Q29udGludWUgUmVhZGluZzwvYT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApKX1cbiAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuKTtcblxuXG4vLyBUaGlzIGlzIGZvciBmZXRjaGluZyBkYXRhIGV2ZXJ5IHRpbWUgdGhlIHBhZ2UgaXMgdmlzaXRlZC4gV2UgZG8gdGhpc1xuLy8gc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIHJlZHBsb3kgdGhlIHNpdGUgZXZlcnkgdGltZSB3ZSBhZGQgYSBibG9nIHBvc3QuXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGlzIGluIHRoZSBOZXh0LmpzIGRvY3MgYXQ6XG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHNlcnZlcnNpZGVwcm9wcy1zZXJ2ZXItc2lkZS1yZW5kZXJpbmdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/index.module.scss":
/*!**********************************!*\
  !*** ./styles/index.module.scss ***!
  \**********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"HomePage\": \"styles_HomePage__L_VKu\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZpcmViYXNlYmxvZy8uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcz8yM2ZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSG9tZVBhZ2VcIjogXCJzdHlsZXNfSG9tZVBhZ2VfX0xfVkt1XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/index.module.scss\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/database");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["contexts_auth_js","components_index_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();