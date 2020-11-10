webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Carousel/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Carousel/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Carousel/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Carousel/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/anchor-is-valid */\n\n/* eslint-disable jsx-a11y/alt-text */\n\n/* eslint-disable react/no-danger */\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n\n/* eslint-disable jsx-a11y/no-static-element-interactions */\n\n\n\n\nvar Carousel = function Carousel(_ref) {\n  _s();\n\n  var items = _ref.items;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      current = _useState[0],\n      setCurrent = _useState[1];\n\n  var updateUrl = function updateUrl(path) {\n    return path.includes('http') ? path : \"\".concat(\"\").concat(path);\n  };\n\n  var showSlide = function showSlide(n) {\n    if (items.length < 1) {\n      return;\n    }\n\n    if (n > items.length) {\n      setCurrent(0);\n    }\n  };\n\n  var nextSlide = function nextSlide() {\n    if (current >= items.length - 1) {\n      setCurrent(0);\n    } else {\n      setCurrent(current + 1);\n    }\n\n    showSlide(current);\n  };\n\n  var prevSlide = function prevSlide() {\n    if (current <= 0) {\n      setCurrent(items.length - 1);\n    } else {\n      setCurrent(current - 1);\n    }\n\n    showSlide(current);\n  };\n\n  var listItems = items.map(function (item, i) {\n    var _jsxDEV2;\n\n    var backgroundImage = \"url(\".concat(item.image, \")\");\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"figure\", (_jsxDEV2 = {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"carouselItem\"],\n      style: i === current ? {\n        display: 'block'\n      } : {\n        display: 'none'\n      }\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"style\", {\n      backgroundImage: backgroundImage\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"children\", [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"carouselCount\"],\n      children: [i + 1, \" / \", items.length]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"carouselText\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n        children: item.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        children: [\"[TOO BOXY!?] \", item.description]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"figcaption\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"carouselCaption\"],\n      children: [\" \", item.cta.lead, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: updateUrl(item.cta.url),\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: item.cta.label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 64\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]), _jsxDEV2), \"carousel\".concat(item.id), true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"carousel\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"next\"],\n      onClick: nextSlide,\n      children: \"\\u276F\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), listItems, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"prev\"],\n      onClick: prevSlide,\n      children: \"\\u276E\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"8+O75ArtRNvpQgzeZSk5wKohTHI=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nCarousel.propTypes = {\n  items: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(String)\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvaW5kZXguanN4PzZlYzAiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJpdGVtcyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ1cGRhdGVVcmwiLCJwYXRoIiwiaW5jbHVkZXMiLCJwcm9jZXNzIiwic2hvd1NsaWRlIiwibiIsImxlbmd0aCIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImxpc3RJdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2UiLCJjYXJvdXNlbEl0ZW0iLCJkaXNwbGF5IiwiY2Fyb3VzZWxDb3VudCIsImNhcm91c2VsVGV4dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXJvdXNlbENhcHRpb24iLCJjdGEiLCJsZWFkIiwidXJsIiwibGFiZWwiLCJpZCIsImNhcm91c2VsIiwibmV4dCIsInByZXYiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsQ0FBRCxDQURSO0FBQUEsTUFDdkJDLE9BRHVCO0FBQUEsTUFDZEMsVUFEYzs7QUFHOUIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRDtBQUFBLFdBQVdBLElBQUksQ0FBQ0MsUUFBTCxDQUFjLE1BQWQsSUFBd0JELElBQXhCLGFBQWtDRSxFQUFsQyxTQUE2REYsSUFBN0QsQ0FBWDtBQUFBLEdBQWxCOztBQUVBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QixRQUFJVCxLQUFL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QSxXQURGO0FBT0QsQ0ExQ0Q7O0dBQU1iLFE7O0tBQUFBLFE7QUE0Q1NBLHVFQUFmO0FBRUFBLFFBQVEsQ0FBQ21DLFNBQVQsR0FBcUI7QUFDbkJsQyxPQUFLLEVBQUVtQyxpREFBUyxDQUFDQyxPQUFWLENBQWtCQyxNQUFsQjtBQURZLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbHQtdGV4dCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgY2Fyb3VzZWwsXG4gIGNhcm91c2VsSXRlbSxcbiAgY2Fyb3VzZWxDb3VudCxcbiAgY2Fyb3VzZWxUZXh0LFxuICBjYXJvdXNlbENhcHRpb24sXG4gIHByZXYsXG4gIG5leHQsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IENhcm91c2VsID0gKHsgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB1cGRhdGVVcmwgPSAocGF0aCkgPT4gKHBhdGguaW5jbHVkZXMoJ2h0dHAnKSA/IHBhdGggOiBgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9JHtwYXRofWApO1xuXG4gIGNvbnN0IHNob3dTbGlkZSA9IChuKSA9PiB7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA8IDEpIHsgcmV0dXJuOyB9XG4gICAgaWYgKG4gPiBpdGVtcy5sZW5ndGgpIHsgc2V0Q3VycmVudCgwKTsgfVxuICB9O1xuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnQgPj0gaXRlbXMubGVuZ3RoIC0gMSkgeyBzZXRDdXJyZW50KDApOyB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudChjdXJyZW50ICsgMSk7XG4gICAgfVxuICAgIHNob3dTbGlkZShjdXJyZW50KTtcbiAgfTtcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50IDw9IDApIHsgc2V0Q3VycmVudChpdGVtcy5sZW5ndGggLSAxKTsgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnQoY3VycmVudCAtIDEpO1xuICAgIH1cbiAgICBzaG93U2xpZGUoY3VycmVudCk7XG4gIH07XG5cbiAgY29uc3QgbGlzdEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0ZW0uaW1hZ2V9KWA7XG4gICAgcmV0dXJuIChcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2Fyb3VzZWxJdGVtfSBrZXk9e2BjYXJvdXNlbCR7aXRlbS5pZH1gfSBzdHlsZT17aSA9PT0gY3VycmVudCA/IHsgZGlzcGxheTogJ2Jsb2NrJyB9IDogeyBkaXNwbGF5OiAnbm9uZScgfX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlIH19PlxuICAgICAgPHAgY2xhc3NOYW1lPXtjYXJvdXNlbENvdW50fT57aSArIDF9IC8ge2l0ZW1zLmxlbmd0aH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2Fyb3VzZWxUZXh0fT5cbiAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwPltUT08gQk9YWSE/XSB7aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT17Y2Fyb3VzZWxDYXB0aW9ufT4ge2l0ZW0uY3RhLmxlYWR9IDxhIGhyZWY9e3VwZGF0ZVVybChpdGVtLmN0YS51cmwpfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+e2l0ZW0uY3RhLmxhYmVsfTwvYT48L2ZpZ2NhcHRpb24+XG4gICAgPC9maWd1cmU+XG4gICl9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJvdXNlbH0+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e25leHR9IG9uQ2xpY2s9e25leHRTbGlkZX0+JiMxMDA5NTs8L2J1dHRvbj5cbiAgICAgIHtsaXN0SXRlbXN9XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3ByZXZ9IG9uQ2xpY2s9e3ByZXZTbGlkZX0+JiMxMDA5NDs8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihTdHJpbmcpLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carousel/index.jsx\n");

/***/ })

})