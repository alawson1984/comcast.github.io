webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Jumbotron/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Jumbotron/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Jumbotron/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Jumbotron/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */\n\n\n\n\n\nvar LEFT = 37;\nvar RIGHT = 39;\n\nvar changeTab = function changeTab(event) {\n  var isDirectionPressed = event.keyCode === LEFT || event.keyCode === RIGHT;\n\n  if (!isDirectionPressed) {\n    return;\n  }\n\n  if (event.keyCode === LEFT) {\n    var _event$target$previou;\n\n    (_event$target$previou = event.target.previousElementSibling) === null || _event$target$previou === void 0 ? void 0 : _event$target$previou.focus();\n  }\n\n  if (event.keyCode === RIGHT) {\n    var _event$target$nextEle;\n\n    (_event$target$nextEle = event.target.nextElementSibling) === null || _event$target$nextEle === void 0 ? void 0 : _event$target$nextEle.focus();\n  }\n\n  event.preventDefault();\n};\n\nvar Jumbotron = function Jumbotron(_ref) {\n  _s();\n\n  var items = _ref.items;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      currentItem = _useState[0],\n      setCurrentItem = _useState[1];\n\n  var updateUrl = function updateUrl(path) {\n    return path.includes('http') ? path : \"\".concat(\"\").concat(path);\n  };\n\n  var tabs = items.map(function (item) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      \"aria-controls\": \"panel\".concat(item.id),\n      \"aria-selected\": item.id === currentItem,\n      className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotronTab\"], \" \").concat(item.id === currentItem ? _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"selected\"] : ''),\n      id: \"tab\".concat(item.id),\n      onClick: function onClick() {\n        return setCurrentItem(item.id);\n      },\n      onKeyDown: changeTab,\n      role: \"tab\",\n      tabIndex: item.id === currentItem ? 0 : -1,\n      type: \"button\",\n      children: item.title\n    }, \"tab\".concat(item.id), false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this);\n  });\n  var panels = items.map(function (item) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotronPanel\"], \" \").concat(item.id === currentItem ? _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"selected\"] : ''),\n      tabIndex: \"0\",\n      role: \"tabpanel\",\n      id: \"panel\".concat(item.id),\n      \"aria-labelledby\": \"tab\".concat(item.id),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"card\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"cardTitle\"],\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"cardDescription\",\n          children: item.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }, _this), item.cta && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"cardCta\",\n          children: [item.cta.lead, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: updateUrl(item.cta.url),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: updateUrl(item.cta.url),\n              className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"cta\"],\n              children: item.cta.label\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 97\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 60\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 22\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, _this), item.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"featuredImage\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          src: \"\".concat(\"\").concat(item.image),\n          alt: \"\",\n          preload: \"true\",\n          layout: \"fill\",\n          objectfit: \"cover\",\n          objectposition: \"center\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, _this)]\n    }, \"panel\".concat(item.id), true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotron\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      role: \"tablist\",\n      \"aria-label\": \"Features\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotronTabs\"],\n        children: tabs\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"platform\",\n        children: panels\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Jumbotron, \"w7hILHQrV4nnxOq72cmys9PFAJM=\");\n\n_c = Jumbotron;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumbotron);\nJumbotron.propTypes = {\n  items: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,\n    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n    description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired\n  })).isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Jumbotron\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSnVtYm90cm9uL2luZGV4LmpzeD8xYjY5Il0sIm5hbWVzIjpbIkxFRlQiLCJSSUdIVCIsImNoYW5nZVRhYiIsImV2ZW50IiwiaXNEaXJlY3Rpb25QcmVzc2VkIiwia2V5Q29kZSIsInRhcmdldCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJmb2N1cyIsIm5leHRFbGVtZW50U2libGluZyIsInByZXZlbnREZWZhdWx0IiwiSnVtYm90cm9uIiwiaXRlbXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJdGVtIiwic2V0Q3VycmVudEl0ZW0iLCJ1cGRhdGVVcmwiLCJwYXRoIiwiaW5jbHVkZXMiLCJwcm9jZXNzIiwidGFicyIsIm1hcCIsIml0ZW0iLCJpZCIsImp1bWJvdHJvblRhYiIsInNlbGVjdGVkIiwidGl0bGUiLCJwYW5lbHMiLCJqdW1ib3Ryb25QYW5lbCIsImNhcmQiLCJjYXJkVGl0bGUiLCJkZXNjcmlwdGlvbiIsImN0YSIsImxlYWQiLCJ1cmwiLCJsYWJlbCIsImltYWdlIiwiZmVhdHVyZWRJbWFnZSIsImp1bWJvdHJvbiIsImp1bWJvdHJvblRhYnMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUEsSUFBTUEsSUFBSSxHQUFHLEVBQWI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDM0IsTUFBTUMsa0JBQWtCLEdBQUlELEtBQUssQ0FBQ0UsT0FBTixLQUFrQkwsSUFBbEIsSUFBMEJHLEtBQUssQ0FBQ0UsT0FBTixLQUFrQkosS0FBeEU7O0FBQ0EsTUFBSSxDQUFDRyxrQkFBTCxFQUF5QjtBQUN2QjtB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QUFFQUEsU0FBUyxDQUFDNkIsU0FBVixHQUFzQjtBQUNwQjVCLE9BQUssRUFBRTZCLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0I7QUFDdkNwQixNQUFFLEVBQUVrQixpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQURrQjtBQUV2Q25CLFNBQUssRUFBRWUsaURBQVMsQ0FBQ0ssTUFBVixDQUFpQkQsVUFGZTtBQUd2Q2QsZUFBVyxFQUFFVSxpREFBUyxDQUFDSyxNQUFWLENBQWlCRCxVQUhTO0FBSXZDVCxTQUFLLEVBQUVLLGlEQUFTLENBQUNLLE1BQVYsQ0FBaUJEO0FBSmUsR0FBaEIsQ0FBbEIsRUFLSEE7QUFOZ0IsQ0FBdEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9KdW1ib3Ryb24vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC10by1pbnRlcmFjdGl2ZS1yb2xlICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQge1xuICBqdW1ib3Ryb24sXG4gIGp1bWJvdHJvblRhYnMsXG4gIGp1bWJvdHJvblRhYixcbiAganVtYm90cm9uUGFuZWwsXG4gIHNlbGVjdGVkLFxuICBjYXJkLFxuICBjYXJkVGl0bGUsXG4gIGN0YSxcbiAgZmVhdHVyZWRJbWFnZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgTEVGVCA9IDM3O1xuY29uc3QgUklHSFQgPSAzOTtcblxuY29uc3QgY2hhbmdlVGFiID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGlzRGlyZWN0aW9uUHJlc3NlZCA9IChldmVudC5rZXlDb2RlID09PSBMRUZUIHx8IGV2ZW50LmtleUNvZGUgPT09IFJJR0hUKTtcbiAgaWYgKCFpc0RpcmVjdGlvblByZXNzZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IExFRlQpIHtcbiAgICBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZz8uZm9jdXMoKTtcbiAgfVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gUklHSFQpIHtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nPy5mb2N1cygpO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5jb25zdCBKdW1ib3Ryb24gPSAoeyBpdGVtcyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0Q3VycmVudEl0ZW1dID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgdXBkYXRlVXJsID0gKHBhdGgpID0+IChwYXRoLmluY2x1ZGVzKCdodHRwJykgPyBwYXRoIDogYCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfSR7cGF0aH1gKTtcblxuICBjb25zdCB0YWJzID0gaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgYXJpYS1jb250cm9scz17YHBhbmVsJHtpdGVtLmlkfWB9XG4gICAgICBhcmlhLXNlbGVjdGVkPXtpdGVtLmlkID09PSBjdXJyZW50SXRlbX1cbiAgICAgIGNsYXNzTmFtZT17YCR7anVtYm90cm9uVGFifSAke2l0ZW0uaWQgPT09IGN1cnJlbnRJdGVtID8gc2VsZWN0ZWQgOiAnJ31gfVxuICAgICAgaWQ9e2B0YWIke2l0ZW0uaWR9YH1cbiAgICAgIGtleT17YHRhYiR7aXRlbS5pZH1gfVxuICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEl0ZW0oaXRlbS5pZCl9XG4gICAgICBvbktleURvd249e2NoYW5nZVRhYn1cbiAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgdGFiSW5kZXg9e2l0ZW0uaWQgPT09IGN1cnJlbnRJdGVtID8gMCA6IC0xfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAge2l0ZW0udGl0bGV9XG4gICAgPC9idXR0b24+XG4gICkpO1xuXG4gIGNvbnN0IHBhbmVscyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YCR7anVtYm90cm9uUGFuZWx9ICR7aXRlbS5pZCA9PT0gY3VycmVudEl0ZW0gPyBzZWxlY3RlZCA6ICcnfWB9IHRhYkluZGV4PVwiMFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPXtgcGFuZWwke2l0ZW0uaWR9YH0ga2V5PXtgcGFuZWwke2l0ZW0uaWR9YH0gYXJpYS1sYWJlbGxlZGJ5PXtgdGFiJHtpdGVtLmlkfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmR9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtjYXJkVGl0bGV9PntpdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmREZXNjcmlwdGlvblwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAge2l0ZW0uY3RhICYmIDxwIGNsYXNzTmFtZT1cImNhcmRDdGFcIj57aXRlbS5jdGEubGVhZH08TGluayBocmVmPXt1cGRhdGVVcmwoaXRlbS5jdGEudXJsKX0+PGEgaHJlZj17dXBkYXRlVXJsKGl0ZW0uY3RhLnVybCl9IGNsYXNzTmFtZT17Y3RhfT57aXRlbS5jdGEubGFiZWx9PC9hPjwvTGluaz48L3A+fVxuICAgICAgPC9kaXY+XG4gICAgICB7aXRlbS5pbWFnZVxuICAgICAgICAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZlYXR1cmVkSW1hZ2V9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfSR7aXRlbS5pbWFnZX1gfSBhbHQ9XCJcIiBwcmVsb2FkPVwidHJ1ZVwiIGxheW91dD1cImZpbGxcIiBvYmplY3RmaXQ9XCJjb3ZlclwiIG9iamVjdHBvc2l0aW9uPVwiY2VudGVyXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8L2FydGljbGU+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2p1bWJvdHJvbn0+XG4gICAgICA8YXJ0aWNsZSByb2xlPVwidGFibGlzdFwiIGFyaWEtbGFiZWw9XCJGZWF0dXJlc1wiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2p1bWJvdHJvblRhYnN9PlxuICAgICAgICAgIHt0YWJzfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBsYXRmb3JtXCI+XG4gICAgICAgICAge3BhbmVsc31cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSnVtYm90cm9uO1xuXG5KdW1ib3Ryb24ucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSkuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Jumbotron/index.jsx\n");

/***/ })

})