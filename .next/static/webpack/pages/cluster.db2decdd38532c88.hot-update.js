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

/***/ "./components/Recorder.js":
/*!********************************!*\
  !*** ./components/Recorder.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Recorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Recorder_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Recorder.module.css */ \"./styles/Recorder.module.css\");\n/* harmony import */ var _styles_Recorder_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Recorder_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _recorder_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recorder-controls */ \"./components/recorder-controls/index.js\");\n/* harmony import */ var _recordings_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recordings-list */ \"./components/recordings-list/index.js\");\n/* harmony import */ var _hooks_useRecorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hooks/useRecorder */ \"./hooks/useRecorder.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Recorder(param) {\n    let { setRecorderList , recorderList  } = param;\n    _s();\n    const { recorderState , ...handlers } = (0,_hooks_useRecorder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { audio  } = recorderState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Recorder_module_css__WEBPACK_IMPORTED_MODULE_4___default().content_container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"voice-recorder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"title\",\n                        children: \"Voice Recorder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/Recorder.js\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"recorder-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_recorder_controls__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                recorderState: recorderState,\n                                handlers: handlers\n                            }, void 0, false, {\n                                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/Recorder.js\",\n                                lineNumber: 16,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_recordings_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                audio: audio,\n                                setRecorderState: setRecorderList,\n                                recorderList: recorderList\n                            }, void 0, false, {\n                                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/Recorder.js\",\n                                lineNumber: 17,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/Recorder.js\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/Recorder.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/Recorder.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Recorder, \"j6QlyBbPBE/SISUwNhNbWA2Y8J8=\", false, function() {\n    return [\n        _hooks_useRecorder__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Recorder;\nvar _c;\n$RefreshReg$(_c, \"Recorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY29yZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ0U7QUFDSjtBQUNFO0FBR2xDLFNBQVNJLFNBQVMsS0FBK0IsRUFBRTtRQUFqQyxFQUFDQyxnQkFBZSxFQUFFQyxhQUFZLEVBQUMsR0FBL0I7O0lBQzdCLE1BQU0sRUFBRUMsY0FBYSxFQUFFLEdBQUdDLFVBQVUsR0FBR0wsOERBQVdBO0lBQ2xELE1BQU0sRUFBRU0sTUFBSyxFQUFFLEdBQUdGO0lBQ2xCLHFCQUNJO2tCQUNBLDRFQUFDRztZQUFJQyxXQUFXWCxzRkFBd0I7c0JBQ3hDLDRFQUFDYTtnQkFBUUYsV0FBVTs7a0NBQ3JCLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBUTs7Ozs7O2tDQUN0Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDViwwREFBZ0JBO2dDQUFDTSxlQUFlQTtnQ0FBZUMsVUFBVUE7Ozs7OzswQ0FDMUQsOERBQUNOLHdEQUFjQTtnQ0FBQ08sT0FBT0E7Z0NBQU9NLGtCQUFrQlY7Z0NBQWlCQyxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZGLENBQUM7R0FoQnVCRjs7UUFDbUJELDBEQUFXQTs7O0tBRDlCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlY29yZGVyLmpzPzgxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9SZWNvcmRlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlY29yZGVyQ29udHJvbHMgZnJvbSBcIi4vcmVjb3JkZXItY29udHJvbHNcIjtcbmltcG9ydCBSZWNvcmRpbmdzTGlzdCBmcm9tIFwiLi9yZWNvcmRpbmdzLWxpc3RcIjtcbmltcG9ydCB1c2VSZWNvcmRlciBmcm9tIFwiLi8uLi9ob29rcy91c2VSZWNvcmRlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZGVyKHtzZXRSZWNvcmRlckxpc3QsIHJlY29yZGVyTGlzdH0pIHtcbiAgICBjb25zdCB7IHJlY29yZGVyU3RhdGUsIC4uLmhhbmRsZXJzIH0gPSB1c2VSZWNvcmRlcigpO1xuICAgIGNvbnN0IHsgYXVkaW8gfSA9IHJlY29yZGVyU3RhdGU7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfY29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidm9pY2UtcmVjb3JkZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlZvaWNlIFJlY29yZGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxSZWNvcmRlckNvbnRyb2xzIHJlY29yZGVyU3RhdGU9e3JlY29yZGVyU3RhdGV9IGhhbmRsZXJzPXtoYW5kbGVyc30gLz5cbiAgICAgICAgPFJlY29yZGluZ3NMaXN0IGF1ZGlvPXthdWRpb30gc2V0UmVjb3JkZXJTdGF0ZT17c2V0UmVjb3JkZXJMaXN0fSByZWNvcmRlckxpc3Q9e3JlY29yZGVyTGlzdH0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWNvcmRlckNvbnRyb2xzIiwiUmVjb3JkaW5nc0xpc3QiLCJ1c2VSZWNvcmRlciIsIlJlY29yZGVyIiwic2V0UmVjb3JkZXJMaXN0IiwicmVjb3JkZXJMaXN0IiwicmVjb3JkZXJTdGF0ZSIsImhhbmRsZXJzIiwiYXVkaW8iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50X2NvbnRhaW5lciIsInNlY3Rpb24iLCJoMSIsInNldFJlY29yZGVyU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Recorder.js\n"));

/***/ })

});