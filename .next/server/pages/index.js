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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/index.module.scss */ \"./styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ \"./components/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/peterhironaka/prototypes/next-firebaseblog/pages/index.js\";\n// This component represents the index page for the site. You\n// can read more about Pages in the Next.js docs at:\n// https://nextjs.org/docs/basic-features/pages\n\n\n\n\n\nconst getFormattedDate = milliseconds => {\n  const formatOptions = {\n    weekday: 'long',\n    month: 'long',\n    day: 'numeric',\n    year: 'numeric',\n    timeZone: 'UTC'\n  };\n  const date = new Date(milliseconds);\n  return date.toLocaleDateString(undefined, formatOptions);\n};\n\nconst HomePage = ({\n  posts\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().HomePage),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Blog Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, undefined), posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: post.coverImage,\n        alt: post.coverImageAlt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: getFormattedDate(post.dateCreated)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          dangerouslySetInnerHTML: {\n            __html: `${post.content.substring(0, 200)}...`\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: `/post/${post.slug}`,\n          children: \"Continue Reading\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)]\n    }, post.slug, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 22,\n  columnNumber: 3\n}, undefined); // This is for fetching data every time the page is visited. We do this\n// so that we don't have to redploy the site every time we add a blog post.\n// You can read more about this in the Next.js docs at:\n// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering\n\n\nasync function getStaticProps() {\n  const posts = await (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.getPosts)();\n  return {\n    props: {\n      posts\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZpcmViYXNlYmxvZy8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiZ2V0Rm9ybWF0dGVkRGF0ZSIsIm1pbGxpc2Vjb25kcyIsImZvcm1hdE9wdGlvbnMiLCJ3ZWVrZGF5IiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwidGltZVpvbmUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsIkhvbWVQYWdlIiwicG9zdHMiLCJzdHlsZXMiLCJtYXAiLCJwb3N0IiwiY292ZXJJbWFnZSIsImNvdmVySW1hZ2VBbHQiLCJ0aXRsZSIsImRhdGVDcmVhdGVkIiwiX19odG1sIiwiY29udGVudCIsInN1YnN0cmluZyIsInNsdWciLCJnZXRTdGF0aWNQcm9wcyIsImdldFBvc3RzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUlDLFlBQUQsSUFBa0I7QUFDekMsUUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxXQUFPLEVBQUUsTUFEVztBQUVwQkMsU0FBSyxFQUFFLE1BRmE7QUFHcEJDLE9BQUcsRUFBRSxTQUhlO0FBSXBCQyxRQUFJLEVBQUUsU0FKYztBQUtwQkMsWUFBUSxFQUFFO0FBTFUsR0FBdEI7QUFPQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTUixZQUFULENBQWI7QUFDQSxTQUFPTyxJQUFJLENBQUNFLGtCQUFMLENBQXdCQyxTQUF4QixFQUFtQ1QsYUFBbkMsQ0FBUDtBQUNELENBVkQ7O0FBWUEsTUFBTVUsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNmLDhEQUFDLCtDQUFEO0FBQUEseUJBQ0E7QUFBSyxhQUFTLEVBQUVDLDJFQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdELEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUVBLElBQUksQ0FBQ0MsVUFBZjtBQUEyQixXQUFHLEVBQUVELElBQUksQ0FBQ0U7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLG9CQUFPbkIsZ0JBQWdCLENBQUNnQixJQUFJLENBQUNJLFdBQU47QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQ0UsaUNBQXVCLEVBQUU7QUFDdkJDLGtCQUFNLEVBQUcsR0FBRUwsSUFBSSxDQUFDTSxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsR0FBMUIsQ0FBK0I7QUFEbkI7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFNBQVFQLElBQUksQ0FBQ1EsSUFBSyxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxPQUFjUixJQUFJLENBQUNRLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQyxDQXlCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRU8sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNWixLQUFLLEdBQUcsTUFBTWEsdURBQVEsRUFBNUI7QUFFQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMZDtBQURLO0FBREYsR0FBUDtBQUtEO0FBSUQsK0RBQWVELFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgY29tcG9uZW50IHJlcHJlc2VudHMgdGhlIGluZGV4IHBhZ2UgZm9yIHRoZSBzaXRlLiBZb3Vcbi8vIGNhbiByZWFkIG1vcmUgYWJvdXQgUGFnZXMgaW4gdGhlIE5leHQuanMgZG9jcyBhdDpcbi8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2Jhc2ljLWZlYXR1cmVzL3BhZ2VzXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJ0BsaWIvZmlyZWJhc2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ0Bjb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgZ2V0Rm9ybWF0dGVkRGF0ZSA9IChtaWxsaXNlY29uZHMpID0+IHtcbiAgY29uc3QgZm9ybWF0T3B0aW9ucyA9IHtcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgdGltZVpvbmU6ICdVVEMnLFxuICB9O1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobWlsbGlzZWNvbmRzKTtcbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgZm9ybWF0T3B0aW9ucyk7XG59O1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHBvc3RzIH0pID0+IChcbiAgPExheW91dD5cbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ib21lUGFnZX0+XG4gICAgPGgxPkJsb2cgUG9zdHM8L2gxPlxuICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgIDxhcnRpY2xlIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgPGltZyBzcmM9e3Bvc3QuY292ZXJJbWFnZX0gYWx0PXtwb3N0LmNvdmVySW1hZ2VBbHR9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHNwYW4+e2dldEZvcm1hdHRlZERhdGUocG9zdC5kYXRlQ3JlYXRlZCl9PC9zcGFuPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGAke3Bvc3QuY29udGVudC5zdWJzdHJpbmcoMCwgMjAwKX0uLi5gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9wPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5Db250aW51ZSBSZWFkaW5nPC9MaW5rPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgICkpfVxuICA8L2Rpdj5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5cbi8vIFRoaXMgaXMgZm9yIGZldGNoaW5nIGRhdGEgZXZlcnkgdGltZSB0aGUgcGFnZSBpcyB2aXNpdGVkLiBXZSBkbyB0aGlzXG4vLyBzbyB0aGF0IHdlIGRvbid0IGhhdmUgdG8gcmVkcGxveSB0aGUgc2l0ZSBldmVyeSB0aW1lIHdlIGFkZCBhIGJsb2cgcG9zdC5cbi8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaW4gdGhlIE5leHQuanMgZG9jcyBhdDpcbi8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2Jhc2ljLWZlYXR1cmVzL2RhdGEtZmV0Y2hpbmcjZ2V0c2VydmVyc2lkZXByb3BzLXNlcnZlci1zaWRlLXJlbmRlcmluZ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","contexts_auth_js","components_index_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();