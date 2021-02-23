webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Pressure-slider/pressure-slider.tsx":
/*!************************************************************!*\
  !*** ./src/components/Pressure-slider/pressure-slider.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/guevaser/Documents/challenge/adi-challenge/src/components/Pressure-slider/pressure-slider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nconst sliderThumbStyles = props => `\n  width: 25px;\n  height: 25px;\n  background: ${props.color};\n  cursor: pointer;\n  outline: 5px solid #333;\n  opacity: ${props.opacity};\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n`;\n\nconst Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  align-items: center;\n  color: #888;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  .value {\n    flex: 1;\n    font-size: 2rem;\n  }\n  .slider {\n    flex: 6;\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #efefef;\n    outline: none;\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      ${props => sliderThumbStyles(props)}\n    }\n    &::-moz-range-thumb {\n      ${props => sliderThumbStyles(props)}\n    }\n  }\n`;\n_c = Styles;\n\nconst PressureSlider = () => {\n  _s();\n\n  const {\n    0: value,\n    1: setValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])((970 + 1030) / 2);\n\n  const handleOnChange = e => setValue(e.target.value);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Styles, {\n    opacity: value > 10 ? value / 255 : 0.1,\n    color: \"#0074D9\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"range\",\n      min: 970,\n      max: 1030,\n      value: value,\n      className: \"slider\",\n      onChange: handleOnChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"value\",\n      children: value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(PressureSlider, \"eZxkdvzdx9Px0RfkvcYTEi4ZL/M=\");\n\n_c2 = PressureSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PressureSlider);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Styles\");\n$RefreshReg$(_c2, \"PressureSlider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJlc3N1cmUtc2xpZGVyL3ByZXNzdXJlLXNsaWRlci50c3g/NTk5NSJdLCJuYW1lcyI6WyJzbGlkZXJUaHVtYlN0eWxlcyIsInByb3BzIiwiY29sb3IiLCJvcGFjaXR5IiwiU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiUHJlc3N1cmVTbGlkZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxpQkFBaUIsR0FBSUMsS0FBRCxJQUFZO0FBQ3RDO0FBQ0E7QUFDQSxnQkFBZ0JBLEtBQUssQ0FBQ0MsS0FBTTtBQUM1QjtBQUNBO0FBQ0EsYUFBYUQsS0FBSyxDQUFDRSxPQUFRO0FBQzNCO0FBQ0E7QUFDQSxDQVRBOztBQVdBLE1BQU1DLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBU0wsS0FBRCxJQUFXRCxpQkFBaUIsQ0FBQ0MsS0FBRCxDQUFRO0FBQzVDO0FBQ0E7QUFDQSxRQUFTQSxLQUFELElBQVdELGlCQUFpQixDQUFDQyxLQUFELENBQVE7QUFDNUM7QUFDQTtBQUNBLENBM0JBO0tBQU1HLE07O0FBNkJOLE1BQU1HLGNBQXdCLEdBQUcsTUFBTTtBQUFBOztBQUNyQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBQyxNQUFNLElBQVAsSUFBZSxDQUFoQixDQUFsQzs7QUFDQSxRQUFNQyxjQUFjLEdBQUlDLENBQUQsSUFBT0gsUUFBUSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBVUwsS0FBWCxDQUF0Qzs7QUFDQSxzQkFDRSxxRUFBQyxNQUFEO0FBQVEsV0FBTyxFQUFFQSxLQUFLLEdBQUcsRUFBUixHQUFhQSxLQUFLLEdBQUcsR0FBckIsR0FBMkIsR0FBNUM7QUFBaUQsU0FBSyxFQUFFLFNBQXhEO0FBQUEsNEJBQ0U7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUcsRUFBRSxHQUZQO0FBR0UsU0FBRyxFQUFFLElBSFA7QUFJRSxXQUFLLEVBQUVBLEtBSlQ7QUFLRSxlQUFTLEVBQUMsUUFMWjtBQU1FLGNBQVEsRUFBRUc7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLGdCQUF3Qkg7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBaEJEOztHQUFNRCxjOztNQUFBQSxjO0FBa0JTQSw2RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1ByZXNzdXJlLXNsaWRlci9wcmVzc3VyZS1zbGlkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFN0eWxlSFRNTEF0dHJpYnV0ZXMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IHNsaWRlclRodW1iU3R5bGVzID0gKHByb3BzKSA9PiBgXG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMuY29sb3J9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDVweCBzb2xpZCAjMzMzO1xuICBvcGFjaXR5OiAke3Byb3BzLm9wYWNpdHl9O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG5gO1xuXG5jb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgLnZhbHVlIHtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuc2xpZGVyIHtcbiAgICBmbGV4OiA2O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgJHsocHJvcHMpID0+IHNsaWRlclRodW1iU3R5bGVzKHByb3BzKX1cbiAgICB9XG4gICAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICAkeyhwcm9wcykgPT4gc2xpZGVyVGh1bWJTdHlsZXMocHJvcHMpfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUHJlc3N1cmVTbGlkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCg5NzAgKyAxMDMwKSAvIDIpO1xuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiBzZXRWYWx1ZShlLnRhcmdldCEudmFsdWUpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZXMgb3BhY2l0eT17dmFsdWUgPiAxMCA/IHZhbHVlIC8gMjU1IDogMC4xfSBjb2xvcj17XCIjMDA3NEQ5XCJ9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgIG1pbj17OTcwfVxuICAgICAgICBtYXg9ezEwMzB9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57dmFsdWV9PC9kaXY+XG4gICAgPC9TdHlsZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVzc3VyZVNsaWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pressure-slider/pressure-slider.tsx\n");

/***/ })

})