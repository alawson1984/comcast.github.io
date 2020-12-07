webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/Pagination/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Pagination/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Pagination/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar paginate = function paginate(currentPage, endPage, onPageSelect) {\n  var n = 0;\n  var pages = [];\n\n  while (n < endPage) {\n    pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: function onClick(e) {\n        return onPageSelect(e);\n      },\n      value: n,\n      className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"page\"], \" \").concat(currentPage === n ? 'selected' : null),\n      children: n + 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 16\n    }, _this));\n    n += 1;\n  }\n\n  return pages;\n};\n\nvar Pagination = function Pagination(_ref) {\n  var count = _ref.count,\n      currentPage = _ref.currentPage,\n      onPageSelect = _ref.onPageSelect;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"pagination\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [count, \" repo\", count > 1 && 's']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this), count > 10 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"\\u2190\", paginate(parseInt(currentPage, 10), Math.ceil(count / 10), onPageSelect), \"\\u2192\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"page \", parseInt(currentPage, 10) + 1, \" of \", Math.ceil(count / 10)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nPagination.propTypes = {\n  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  onPageSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qc3g/ZjE2MCJdLCJuYW1lcyI6WyJwYWdpbmF0ZSIsImN1cnJlbnRQYWdlIiwiZW5kUGFnZSIsIm9uUGFnZVNlbGVjdCIsIm4iLCJwYWdlcyIsInB1c2giLCJlIiwicGFnZSIsIlBhZ2luYXRpb24iLCJjb3VudCIsInBhZ2luYXRpb24iLCJwYXJzZUludCIsIk1hdGgiLCJjZWlsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBS0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsV0FBRCxFQUFjQyxPQUFkLEVBQXVCQyxZQUF2QixFQUF3QztBQUN2RCxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQU1DLEtBQUssR0FBRyxFQUFkOztBQUNBLFNBQU9ELENBQUMsR0FBR0YsT0FBWCxFQUFvQjtBQUNsQkcsU0FBSyxDQUFDQyxJQUFOLGVBQVc7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxlQUFPSixZQUFZLENBQUNJLENBQUQsQ0FBbkI7QUFBQSxPQUEvQjtBQUF1RCxXQUFLLEVBQUVILENBQTlEO0FBQWlFLGVBQVMsWUFBS0ksc0RBQUwsY0FBYVAsV0FBVyxLQUFLRyxDQUFoQixHQUFvQixVQUFwQixHQUFpQyxJQUE5QyxDQUExRTtBQUFBLGdCQUFpSUEsQ0FBQyxHQUFHO0FBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWDtBQUNBQSxLQUFDLElBQUksQ0FBTDtBQUNEOztBQUNELFNBQU9DLEtBQVA7QUFDRCxDQVJEOztBQVVBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVVQsV0FBVixRQUFVQSxXQUFWO0FBQUEsTUFBdUJFLFlBQXZCLFFBQXVCQSxZQUF2QjtBQUFBLHNCQUNqQjtBQUFLLGFBQVMsRUFBRVEsNERBQWhCO0FBQUEsNEJBQ0U7QUFBQSxpQkFBSUQsS0FBSixXQUFnQkEsS0FBSyxHQUFHLENBQVIsSUFBYSxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHQSxLQUFLLEdBQUcsRUFBUixpQkFDQztBQUFBLDJCQUVHVixRQUFRLENBQUNZLFFBQVEsQ0FBQ1gsV0FBRCxFQUFjLEVBQWQsQ0FBVCxFQUE0QlksSUFBSSxDQUFDQyxJQUFMLENBQVVKLEtBQUssR0FBRyxFQUFsQixDQUE1QixFQUFtRFAsWUFBbkQsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQVNFO0FBQUEsMEJBQVNTLFFBQVEsQ0FBQ1gsV0FBRCxFQUFjLEVBQWQsQ0FBUixHQUE0QixDQUFyQyxVQUE0Q1ksSUFBSSxDQUFDQyxJQUFMLENBQVVKLEtBQUssR0FBRyxFQUFsQixDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEaUI7QUFBQSxDQUFuQjs7S0FBTUQsVTtBQWNTQSx5RUFBZjtBQUVBQSxVQUFVLENBQUNNLFNBQVgsR0FBdUI7QUFDckJMLE9BQUssRUFBRU0saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESDtBQUVyQmpCLGFBQVcsRUFBRWUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGVDtBQUdyQmYsY0FBWSxFQUFFYSxpREFBUyxDQUFDRyxJQUFWLENBQWVEO0FBSFIsQ0FBdkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIHBhZ2luYXRpb24sXG4gIHBhZ2UsXG4gIHNlbGVjdGVkLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuY29uc3QgcGFnaW5hdGUgPSAoY3VycmVudFBhZ2UsIGVuZFBhZ2UsIG9uUGFnZVNlbGVjdCkgPT4ge1xuICBsZXQgbiA9IDA7XG4gIGNvbnN0IHBhZ2VzID0gW107XG4gIHdoaWxlIChuIDwgZW5kUGFnZSkge1xuICAgIHBhZ2VzLnB1c2goPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IG9uUGFnZVNlbGVjdChlKX0gdmFsdWU9e259IGNsYXNzTmFtZT17YCR7cGFnZX0gJHtjdXJyZW50UGFnZSA9PT0gbiA/ICdzZWxlY3RlZCcgOiBudWxsfWB9PntuICsgMX08L2J1dHRvbj4pO1xuICAgIG4gKz0gMTtcbiAgfVxuICByZXR1cm4gcGFnZXM7XG59O1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgY291bnQsIGN1cnJlbnRQYWdlLCBvblBhZ2VTZWxlY3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17cGFnaW5hdGlvbn0+XG4gICAgPHA+e2NvdW50fSByZXBve2NvdW50ID4gMSAmJiAncyd9PC9wPlxuICAgIHtjb3VudCA+IDEwICYmIChcbiAgICAgIDxwPlxuICAgICAgICAmbGFycjtcbiAgICAgICAge3BhZ2luYXRlKHBhcnNlSW50KGN1cnJlbnRQYWdlLCAxMCksIE1hdGguY2VpbChjb3VudCAvIDEwKSwgb25QYWdlU2VsZWN0KX1cbiAgICAgICAgJnJhcnI7XG4gICAgICA8L3A+XG4gICAgKX1cbiAgICA8cD5wYWdlIHtwYXJzZUludChjdXJyZW50UGFnZSwgMTApICsgMX0gb2Yge01hdGguY2VpbChjb3VudCAvIDEwKX08L3A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uUGFnZVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.jsx\n");

/***/ })

})