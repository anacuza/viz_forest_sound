"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cluster",{

/***/ "./components/FinalPage.js":
/*!*********************************!*\
  !*** ./components/FinalPage.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Final; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Final_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Final.module.css */ \"./styles/Final.module.css\");\n/* harmony import */ var _styles_Final_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Final_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Final(param) {\n    let { labelList , recorderList  } = param;\n    console.log(labelList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Final_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Final_module_css__WEBPACK_IMPORTED_MODULE_1___default().container_label),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Picked labels\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/FinalPage.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, this),\n                        labelList.map((label, i)=>{\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"label\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/FinalPage.js\",\n                                lineNumber: 14,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/FinalPage.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Final_module_css__WEBPACK_IMPORTED_MODULE_1___default().container_recording),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Recordings\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/FinalPage.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        console.log(recorderList),\n                        recorderList.map((recording, i)=>{\n                            // {   let blobData = new Blob(recording, { type: 'audio/wav' });\n                            //     const url = URL.createObjectURL(blob)}\n                            {\n                                console.log(recording.audio);\n                            }\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: recording.audio,\n                                download: true,\n                                children: \"hello\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/FinalPage.js\",\n                                lineNumber: 27,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/FinalPage.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/FinalPage.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Final;\nvar _c;\n$RefreshReg$(_c, \"Final\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQThDO0FBRy9CLFNBQVNDLE1BQU0sS0FBeUIsRUFBRTtRQUEzQixFQUFDQyxVQUFTLEVBQUVDLGFBQVksRUFBQyxHQUF6QjtJQUUxQkMsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNJO2tCQUNJLDRFQUFDSTtZQUFJQyxXQUFXUCwyRUFBZ0I7OzhCQUU1Qiw4REFBQ007b0JBQUlDLFdBQVdQLGlGQUFzQjs7c0NBQ2xDLDhEQUFDVTtzQ0FBRzs7Ozs7O3dCQUNIUixVQUFVUyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0MsSUFBTTswQ0FDekIsOERBQUNDOzBDQUFHOzs7Ozs7d0JBQ0o7Ozs7Ozs7OEJBSVIsOERBQUNSO29CQUFJQyxXQUFXUCxxRkFBMEI7O3NDQUN0Qyw4REFBQ1U7c0NBQUc7Ozs7Ozt3QkFDSE4sUUFBUUMsR0FBRyxDQUFDRjt3QkFDWkEsYUFBYVEsR0FBRyxDQUFDLENBQUNLLFdBQVdILElBQzFCOzRCQUNJLGlFQUFpRTs0QkFDakUsNkNBQTZDOzRCQUM3QztnQ0FBQ1QsUUFBUUMsR0FBRyxDQUFDVyxVQUFVQyxLQUFLOzRCQUFDOzBDQUM3Qiw4REFBQ0M7Z0NBQUVDLE1BQU1ILFVBQVVDLEtBQUs7Z0NBQUVHLFFBQVE7MENBQUM7Ozs7Ozt3QkFDdkM7Ozs7Ozs7Ozs7Ozs7O0FBUXhCLENBQUM7S0FoQ3VCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFBhZ2UuanM/YmFiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0ZpbmFsLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmluYWwoe2xhYmVsTGlzdCwgcmVjb3JkZXJMaXN0fSkge1xuXG4gICAgY29uc29sZS5sb2cobGFiZWxMaXN0KVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX2xhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlBpY2tlZCBsYWJlbHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWxMaXN0Lm1hcCgobGFiZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5sYWJlbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9yZWNvcmRpbmd9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+UmVjb3JkaW5nczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhyZWNvcmRlckxpc3QpfVxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkZXJMaXN0Lm1hcCgocmVjb3JkaW5nLCBpKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7ICAgbGV0IGJsb2JEYXRhID0gbmV3IEJsb2IocmVjb3JkaW5nLCB7IHR5cGU6ICdhdWRpby93YXYnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhyZWNvcmRpbmcuYXVkaW8pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3JlY29yZGluZy5hdWRpb30gZG93bmxvYWQ+aGVsbG88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkZpbmFsIiwibGFiZWxMaXN0IiwicmVjb3JkZXJMaXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9sYWJlbCIsImgyIiwibWFwIiwibGFiZWwiLCJpIiwiaDMiLCJjb250YWluZXJfcmVjb3JkaW5nIiwicmVjb3JkaW5nIiwiYXVkaW8iLCJhIiwiaHJlZiIsImRvd25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalPage.js\n"));

/***/ })

});