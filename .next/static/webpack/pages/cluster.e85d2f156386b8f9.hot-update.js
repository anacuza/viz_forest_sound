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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Footer.module.css */ \"./styles/Footer.module.css\");\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Footer(param) {\n    let { pgcontent , changeContent  } = param;\n    _s();\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const handleClick = ()=>{\n        setIsActive(2);\n        setTimeout(()=>{\n            setIsActive(3);\n        }, 700); //miliseconds\n        setTimeout(()=>{\n            changeContent();\n            setIsActive(1);\n        }, 1250); //miliseconds\n    };\n    // useEffect(() => {\n    //     setTimeout(() => {\n    //       ref.current.click();\n    //     }, 1250); //miliseconds\n    //   }, []);\n    // $( \".buttonSubmit\" ).click(function() {\n    //     $( \".buttonSubmit\" ).addClass( \"onclic\", 250, validate);\n    //   });\n    //   function validate() {\n    //     setTimeout(function() {\n    //       $( \".buttonSubmit\" ).removeClass( \"onclic\" );\n    //       $( \".buttonSubmit\" ).addClass( \"validate\", 450, callback );\n    //     }, 2250 );\n    //   }\n    //     function callback() {\n    //       setTimeout(function() {\n    //         $( \".buttonSubmit\" ).removeClass( \"validate\" );\n    //       }, 1250 );\n    //     }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer_container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: isActive == 1 ? \"\".concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonSubmit)) : isActive == 2 ? \"\".concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonSubmit), \" \").concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().onclic)) : \" \".concat((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().validate)),\n                onClick: handleClick,\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    class: \"arrow right\"\n                }, void 0, false, {\n                    fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/footer.js\",\n                    lineNumber: 52,\n                    columnNumber: 1\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/footer.js\",\n                lineNumber: 51,\n                columnNumber: 1\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/footer.js\",\n            lineNumber: 50,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(Footer, \"GXvMxj5uLc8L2psdPDGlEDxor64=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNFO0FBRWlCO0FBQ0s7QUFHckMsU0FBU00sT0FBTyxLQUEwQixFQUFFO1FBQTVCLEVBQUNDLFVBQVMsRUFBRUMsY0FBYSxFQUFDLEdBQTFCOztJQUUzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTVEsTUFBTU4sNkNBQU1BLENBQUMsSUFBSTtJQUV2QixNQUFNTyxjQUFjLElBQU07UUFFdEJGLFlBQVk7UUFDUkcsV0FBVyxJQUFNO1lBQ2JILFlBQVk7UUFDaEIsR0FBRyxNQUFNLGFBQWE7UUFDdEJHLFdBQVcsSUFBTTtZQUNiTDtZQUNBRSxZQUFZO1FBQ2hCLEdBQUcsT0FBTyxhQUFhO0lBRTNCO0lBRUEsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBRTlCLFlBQVk7SUFFWiwwQ0FBMEM7SUFDMUMsK0RBQStEO0lBQy9ELFFBQVE7SUFFUiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHNEQUFzRDtJQUN0RCxvRUFBb0U7SUFDcEUsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDBEQUEwRDtJQUMxRCxtQkFBbUI7SUFDbkIsUUFBUTtJQUVoQixxQkFBTztrQkFDUCw0RUFBQ0k7WUFBSUMsV0FBV2IsbUZBQXVCO3NCQUN2Qyw0RUFBQ2U7Z0JBQU9GLFdBQVdOLFlBQVUsSUFBSSxHQUF1QixPQUFwQlAsK0VBQW1CLElBQUtPLFlBQVUsSUFBSSxHQUEwQlAsT0FBdkJBLCtFQUFtQixFQUFDLEtBQWlCLE9BQWRBLHlFQUFhLElBQUssSUFBb0IsT0FBaEJBLDJFQUFlLENBQUU7Z0JBQUVtQixTQUFTVDtnQkFBYUQsS0FBS0E7MEJBQ3hLLDRFQUFDVztvQkFBRUMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBaER1QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9vdGVyLmpzP2IxNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcih7cGdjb250ZW50LCBjaGFuZ2VDb250ZW50fSkge1xuXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblxuICAgICAgICBzZXRJc0FjdGl2ZSgyKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNBY3RpdmUoMylcbiAgICAgICAgICAgIH0sIDcwMCk7IC8vbWlsaXNlY29uZHNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoYW5nZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBzZXRJc0FjdGl2ZSgxKVxuICAgICAgICAgICAgfSwgMTI1MCk7IC8vbWlsaXNlY29uZHNcbiAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICByZWYuY3VycmVudC5jbGljaygpO1xuICAgICAgICAvLyAgICAgfSwgMTI1MCk7IC8vbWlsaXNlY29uZHNcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgIH0sIFtdKTtcblxuICAgICAgICAvLyAkKCBcIi5idXR0b25TdWJtaXRcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgJCggXCIuYnV0dG9uU3VibWl0XCIgKS5hZGRDbGFzcyggXCJvbmNsaWNcIiwgMjUwLCB2YWxpZGF0ZSk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyAgIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgJCggXCIuYnV0dG9uU3VibWl0XCIgKS5yZW1vdmVDbGFzcyggXCJvbmNsaWNcIiApO1xuICAgICAgICAvLyAgICAgICAkKCBcIi5idXR0b25TdWJtaXRcIiApLmFkZENsYXNzKCBcInZhbGlkYXRlXCIsIDQ1MCwgY2FsbGJhY2sgKTtcbiAgICAgICAgLy8gICAgIH0sIDIyNTAgKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICAgICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgLy8gICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgICAkKCBcIi5idXR0b25TdWJtaXRcIiApLnJlbW92ZUNsYXNzKCBcInZhbGlkYXRlXCIgKTtcbiAgICAgICAgLy8gICAgICAgfSwgMTI1MCApO1xuICAgICAgICAvLyAgICAgfVxuXG5yZXR1cm4oPD5cbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyX2NvbnRhaW5lcn0+XG48YnV0dG9uIGNsYXNzTmFtZT17aXNBY3RpdmU9PTEgPyBgJHtzdHlsZXMuYnV0dG9uU3VibWl0fWAgOiBpc0FjdGl2ZT09MiA/IGAke3N0eWxlcy5idXR0b25TdWJtaXR9ICR7c3R5bGVzLm9uY2xpY31gIDogYCAke3N0eWxlcy52YWxpZGF0ZX1gfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gcmVmPXtyZWZ9PlxuPGkgY2xhc3M9XCJhcnJvdyByaWdodFwiPjwvaT5cbjwvYnV0dG9uPlxuXG48L2Rpdj48Lz4pXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiRm9vdGVyIiwicGdjb250ZW50IiwiY2hhbmdlQ29udGVudCIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJyZWYiLCJoYW5kbGVDbGljayIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb290ZXJfY29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uU3VibWl0Iiwib25jbGljIiwidmFsaWRhdGUiLCJvbkNsaWNrIiwiaSIsImNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.js\n"));

/***/ })

});