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

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Footer.module.css */ \"./styles/Footer.module.css\");\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Footer(param) {\n    let { pgcontent , changeContent  } = param;\n    _s();\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const handleClick = ()=>{\n        setIsActive(2);\n        setTimeout(()=>{\n            setIsActive(3);\n        }, 700); //miliseconds\n        setTimeout(()=>{\n            changeContent();\n            setIsActive(1);\n        }, 1250); //miliseconds\n    };\n    // useEffect(() => {\n    //     setTimeout(() => {\n    //       ref.current.click();\n    //     }, 1250); //miliseconds\n    //   }, []);\n    // $( \".buttonSubmit\" ).click(function() {\n    //     $( \".buttonSubmit\" ).addClass( \"onclic\", 250, validate);\n    //   });\n    //   function validate() {\n    //     setTimeout(function() {\n    //       $( \".buttonSubmit\" ).removeClass( \"onclic\" );\n    //       $( \".buttonSubmit\" ).addClass( \"validate\", 450, callback );\n    //     }, 2250 );\n    //   }\n    //     function callback() {\n    //       setTimeout(function() {\n    //         $( \".buttonSubmit\" ).removeClass( \"validate\" );\n    //       }, 1250 );\n    //     }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer_container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: isActive == 1 ? \"\".concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonSubmit)) : isActive == 2 ? \"\".concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonSubmit), \" \").concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().onclic)) : \" \".concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().validate)),\n                onClick: handleClick,\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().arrow)\n                }, void 0, false, {\n                    fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/footer.js\",\n                    lineNumber: 52,\n                    columnNumber: 1\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/footer.js\",\n                lineNumber: 51,\n                columnNumber: 1\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/footer.js\",\n            lineNumber: 50,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(Footer, \"GXvMxj5uLc8L2psdPDGlEDxor64=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNFO0FBRWlCO0FBQ0s7QUFHckMsU0FBU00sT0FBTyxLQUEwQixFQUFFO1FBQTVCLEVBQUNDLFVBQVMsRUFBRUMsY0FBYSxFQUFDLEdBQTFCOztJQUUzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTVEsTUFBTU4sNkNBQU1BLENBQUMsSUFBSTtJQUV2QixNQUFNTyxjQUFjLElBQU07UUFFdEJGLFlBQVk7UUFDUkcsV0FBVyxJQUFNO1lBQ2JILFlBQVk7UUFDaEIsR0FBRyxNQUFNLGFBQWE7UUFDdEJHLFdBQVcsSUFBTTtZQUNiTDtZQUNBRSxZQUFZO1FBQ2hCLEdBQUcsT0FBTyxhQUFhO0lBRTNCO0lBRUEsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBRTlCLFlBQVk7SUFFWiwwQ0FBMEM7SUFDMUMsK0RBQStEO0lBQy9ELFFBQVE7SUFFUiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHNEQUFzRDtJQUN0RCxvRUFBb0U7SUFDcEUsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDBEQUEwRDtJQUMxRCxtQkFBbUI7SUFDbkIsUUFBUTtJQUVoQixxQkFBTztrQkFDUCw0RUFBQ0k7WUFBSUMsV0FBV2IsbUZBQXVCO3NCQUN2Qyw0RUFBQ2U7Z0JBQU9GLFdBQVdOLFlBQVUsSUFBSSxHQUF1QixPQUFwQlAsK0VBQW1CLElBQUtPLFlBQVUsSUFBSSxHQUEwQlAsT0FBdkJBLCtFQUFtQixFQUFDLEtBQWlCLE9BQWRBLHlFQUFhLElBQUssSUFBb0IsT0FBaEJBLDJFQUFlLENBQUU7Z0JBQUVtQixTQUFTVDtnQkFBYUQsS0FBS0E7MEJBQ3hLLDRFQUFDVztvQkFBRVAsV0FBV2Isd0VBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFCLENBQUM7R0FoRHVCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvb3Rlci5qcz9iMTU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRm9vdGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoe3BnY29udGVudCwgY2hhbmdlQ29udGVudH0pIHtcblxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgc2V0SXNBY3RpdmUoMilcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzQWN0aXZlKDMpXG4gICAgICAgICAgICB9LCA3MDApOyAvL21pbGlzZWNvbmRzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgc2V0SXNBY3RpdmUoMSlcbiAgICAgICAgICAgIH0sIDEyNTApOyAvL21pbGlzZWNvbmRzXG4gICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgcmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICAgICAgLy8gICAgIH0sIDEyNTApOyAvL21pbGlzZWNvbmRzXG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICB9LCBbXSk7XG5cbiAgICAgICAgLy8gJCggXCIuYnV0dG9uU3VibWl0XCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICQoIFwiLmJ1dHRvblN1Ym1pdFwiICkuYWRkQ2xhc3MoIFwib25jbGljXCIsIDI1MCwgdmFsaWRhdGUpO1xuICAgICAgICAvLyAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gICBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICAgICQoIFwiLmJ1dHRvblN1Ym1pdFwiICkucmVtb3ZlQ2xhc3MoIFwib25jbGljXCIgKTtcbiAgICAgICAgLy8gICAgICAgJCggXCIuYnV0dG9uU3VibWl0XCIgKS5hZGRDbGFzcyggXCJ2YWxpZGF0ZVwiLCA0NTAsIGNhbGxiYWNrICk7XG4gICAgICAgIC8vICAgICB9LCAyMjUwICk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgIC8vICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICAgICAgJCggXCIuYnV0dG9uU3VibWl0XCIgKS5yZW1vdmVDbGFzcyggXCJ2YWxpZGF0ZVwiICk7XG4gICAgICAgIC8vICAgICAgIH0sIDEyNTAgKTtcbiAgICAgICAgLy8gICAgIH1cblxucmV0dXJuKDw+XG48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcl9jb250YWluZXJ9PlxuPGJ1dHRvbiBjbGFzc05hbWU9e2lzQWN0aXZlPT0xID8gYCR7c3R5bGVzLmJ1dHRvblN1Ym1pdH1gIDogaXNBY3RpdmU9PTIgPyBgJHtzdHlsZXMuYnV0dG9uU3VibWl0fSAke3N0eWxlcy5vbmNsaWN9YCA6IGAgJHtzdHlsZXMudmFsaWRhdGV9YH0gb25DbGljaz17aGFuZGxlQ2xpY2t9IHJlZj17cmVmfT5cbjxpIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT48L2k+XG48L2J1dHRvbj5cblxuPC9kaXY+PC8+KVxufSJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkZvb3RlciIsInBnY29udGVudCIsImNoYW5nZUNvbnRlbnQiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwicmVmIiwiaGFuZGxlQ2xpY2siLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9vdGVyX2NvbnRhaW5lciIsImJ1dHRvbiIsImJ1dHRvblN1Ym1pdCIsIm9uY2xpYyIsInZhbGlkYXRlIiwib25DbGljayIsImkiLCJhcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.js\n"));

/***/ })

});