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

/***/ "./components/MapPage.js":
/*!*******************************!*\
  !*** ./components/MapPage.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./components/form.js\");\n\n\nfunction MapPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/MapPage.js\",\n                lineNumber: 7,\n                columnNumber: 15\n            }, this),\n            !isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/MapPage.js\",\n                lineNumber: 8,\n                columnNumber: 23\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GoogleMap, {\n                zoom: 14,\n                center: mapCenter,\n                mapTypeId: \"satellite\",\n                mapContainerStyle: {\n                    width: \"800px\",\n                    height: \"800px\"\n                },\n                onLoad: ()=>console.log(\"Map Component Loaded...\"),\n                onClick: handleClickedMap,\n                children: [\n                    console.log(markerPosition),\n                    isMarkerShown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Marker, {\n                        position: markerPosition\n                    }, void 0, false, {\n                        fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/MapPage.js\",\n                        lineNumber: 18,\n                        columnNumber: 31\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/MapPage.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = MapPage;\nvar _c;\n$RefreshReg$(_c, \"MapPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXlDO0FBRzFCLFNBQVNDLFVBQVU7SUFDOUIscUJBQ0k7OzBCQUNNLDhEQUFDRCw2Q0FBbUJBOzs7OztZQUN6QixDQUFDRSx5QkFBWSw4REFBQ0M7MEJBQUk7Ozs7O3FDQUNuQiw4REFBQ0M7Z0JBQ0RDLE1BQU07Z0JBQ05DLFFBQVFDO2dCQUNSQyxXQUFXO2dCQUNYQyxtQkFBbUI7b0JBQUVDLE9BQU87b0JBQVNDLFFBQVE7Z0JBQVE7Z0JBQ3JEQyxRQUFRLElBQU1DLFFBQVFDLEdBQUcsQ0FBQztnQkFDMUJDLFNBQVVDOztvQkFFTEgsUUFBUUMsR0FBRyxDQUFDRztvQkFDWkMsK0JBQWlCLDhEQUFDQzt3QkFBT0MsVUFBVUg7Ozs7Ozs7Ozs7O29CQUU1Qjs7O0FBSXBCLENBQUM7S0FwQnVCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBQYWdlLmpzPzUyZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VXaXRoSlNiYXNlZEZvcm0gZnJvbSAnLi9mb3JtJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBQYWdlKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFBhZ2VXaXRoSlNiYXNlZEZvcm0vPlxuICAgICAgICB7IWlzTG9hZGVkID8gIDxkaXY+TG9hZGluZy4uLjwvZGl2PiA6XG4gICAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgem9vbT17MTR9XG4gICAgICAgIGNlbnRlcj17bWFwQ2VudGVyfVxuICAgICAgICBtYXBUeXBlSWQ9e1wic2F0ZWxsaXRlXCJ9XG4gICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXt7IHdpZHRoOiAnODAwcHgnLCBoZWlnaHQ6ICc4MDBweCcgfX1cbiAgICAgICAgb25Mb2FkPXsoKSA9PiBjb25zb2xlLmxvZygnTWFwIENvbXBvbmVudCBMb2FkZWQuLi4nKX1cbiAgICAgICAgb25DbGljaz17IGhhbmRsZUNsaWNrZWRNYXB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhtYXJrZXJQb3NpdGlvbil9XG4gICAgICAgICAgICB7aXNNYXJrZXJTaG93biAmJiA8TWFya2VyIHBvc2l0aW9uPXttYXJrZXJQb3NpdGlvbn0gLz59XG4gICAgICAgIFxuICAgICAgICA8L0dvb2dsZU1hcD5cbn1cbjwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUGFnZVdpdGhKU2Jhc2VkRm9ybSIsIk1hcFBhZ2UiLCJpc0xvYWRlZCIsImRpdiIsIkdvb2dsZU1hcCIsInpvb20iLCJjZW50ZXIiLCJtYXBDZW50ZXIiLCJtYXBUeXBlSWQiLCJtYXBDb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJoYW5kbGVDbGlja2VkTWFwIiwibWFya2VyUG9zaXRpb24iLCJpc01hcmtlclNob3duIiwiTWFya2VyIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapPage.js\n"));

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PageWithJSbasedForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PageWithJSbasedForm() {\n    // Handles the submit event on form submit.\n    const handleSubmit = async (event)=>{\n        // Stop the form from submitting and refreshing the page.\n        event.preventDefault();\n        // Get data from the form.\n        const data = {\n            first: event.target.first.value,\n            last: event.target.last.value\n        };\n        // Send the data to the server in JSON format.\n        const JSONdata = JSON.stringify(data);\n        // API endpoint where we send form data.\n        const endpoint = \"/api/form\";\n        // Form the request for sending data to the server.\n        const options = {\n            // The method is POST because we are sending data.\n            method: \"POST\",\n            // Tell the server we're sending JSON.\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // Body of the request is the JSON data we created above.\n            body: JSONdata\n        };\n        // Send the form data to our forms API on Vercel and get a response.\n        const response = await fetch(endpoint, options);\n        // Get the response data from server as JSON.\n        // If server returns the name submitted, that means the form works.\n        const result = await response.json();\n        alert(\"Is this your full name: \".concat(result.data));\n    };\n    // const sendAudioFile = file => {\n    //     const formData = new FormData();\n    //     formData.append('audio-file', file);\n    //     return fetch('http://localhost:3000/api/audioUpload', {\n    //       method: 'POST',\n    //       body: formData\n    //     });\n    //   };\n    //   var saveBlob = async () => (function () {\n    //     var a = document.getElementById(\"blob\");\n    //     return function (blob, fileName) {\n    //         a.href = blob;\n    //         a.download = fileName;\n    //         a.click();\n    //         window.URL.revokeObjectURL(url);\n    //     };\n    // }());\n    // const recordAudio = () =>\n    // new Promise(async resolve => {\n    //   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });\n    //   const mediaRecorder = new MediaRecorder(stream);\n    //   const audioChunks = [];\n    //   mediaRecorder.addEventListener(\"dataavailable\", event => {\n    //     audioChunks.push(event.data);\n    //   });\n    //   const start = () => mediaRecorder.start();\n    //   const stop = () =>\n    //     new Promise(resolve => {\n    //       mediaRecorder.addEventListener(\"stop\", () => {\n    //         const audioBlob = new Blob(audioChunks, { type: \"audio/mpeg\" });\n    //           // sendAudioFile(audioBlob);\n    //       //   var xhr=new XMLHttpRequest();\n    //       //   xhr.onload=function(e) {\n    //       //     if(this.readyState === 4) {\n    //       //       console.log(\"Server returned: \",e.target.responseText);\n    //       //     }\n    //       //   };\n    //       //   var fd=new FormData();\n    //       //   fd.append(\"audio_data\", audioBlob, \"filename\");\n    //       //   xhr.open(\"POST\",\"upload.php\",true);\n    //       //   xhr.send(fd);\n    //         const audioUrl = URL.createObjectURL(audioBlob);\n    //         saveBlob(audioUrl, 'test.zip');\n    //         const audio = new Audio(audioUrl);\n    //         const play = () => audio.play();\n    //         resolve({ audioBlob, audioUrl, play });\n    // });\n    //       mediaRecorder.stop();\n    //     });\n    //   resolve({ start, stop });\n    // });\n    // const sleep = time => new Promise(resolve => setTimeout(resolve, time));\n    // const handleAction = async () => {\n    // const recorder = await recordAudio();\n    // const actionButton = document.getElementById(\"action\");\n    // actionButton.disabled = true;\n    // recorder.start();\n    // await sleep(3000);\n    // const audio = await recorder.stop();\n    // audio.play();\n    // await sleep(3000);\n    // actionButton.disabled = false;\n    // console.log(\"recorded\")\n    // };\n    return(// We pass the event to the handleSubmit() function on submit.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"First Name\"\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/form.js\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"first\",\n                name: \"first\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/form.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"last\",\n                children: \"Last Name\"\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/form.js\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"last\",\n                name: \"last\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/form.js\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/form.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacuza/Documents/GitHub/viz_forest_sound/components/form.js\",\n        lineNumber: 124,\n        columnNumber: 7\n    }, this));\n}\n_c = PageWithJSbasedForm;\nvar _c;\n$RefreshReg$(_c, \"PageWithJSbasedForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9mb3JtLmpzP2I0MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVdpdGhKU2Jhc2VkRm9ybSgpIHtcbiAgICAvLyBIYW5kbGVzIHRoZSBzdWJtaXQgZXZlbnQgb24gZm9ybSBzdWJtaXQuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBTdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZyBhbmQgcmVmcmVzaGluZyB0aGUgcGFnZS5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgXG4gICAgICAvLyBHZXQgZGF0YSBmcm9tIHRoZSBmb3JtLlxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZmlyc3Q6IGV2ZW50LnRhcmdldC5maXJzdC52YWx1ZSxcbiAgICAgICAgbGFzdDogZXZlbnQudGFyZ2V0Lmxhc3QudmFsdWUsXG4gICAgICB9XG4gIFxuICAgICAgLy8gU2VuZCB0aGUgZGF0YSB0byB0aGUgc2VydmVyIGluIEpTT04gZm9ybWF0LlxuICAgICAgY29uc3QgSlNPTmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICBcbiAgICAgIC8vIEFQSSBlbmRwb2ludCB3aGVyZSB3ZSBzZW5kIGZvcm0gZGF0YS5cbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gJy9hcGkvZm9ybSdcbiAgXG4gICAgICAvLyBGb3JtIHRoZSByZXF1ZXN0IGZvciBzZW5kaW5nIGRhdGEgdG8gdGhlIHNlcnZlci5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIC8vIFRoZSBtZXRob2QgaXMgUE9TVCBiZWNhdXNlIHdlIGFyZSBzZW5kaW5nIGRhdGEuXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAvLyBUZWxsIHRoZSBzZXJ2ZXIgd2UncmUgc2VuZGluZyBKU09OLlxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gQm9keSBvZiB0aGUgcmVxdWVzdCBpcyB0aGUgSlNPTiBkYXRhIHdlIGNyZWF0ZWQgYWJvdmUuXG4gICAgICAgIGJvZHk6IEpTT05kYXRhLFxuICAgICAgfVxuICBcbiAgICAgIC8vIFNlbmQgdGhlIGZvcm0gZGF0YSB0byBvdXIgZm9ybXMgQVBJIG9uIFZlcmNlbCBhbmQgZ2V0IGEgcmVzcG9uc2UuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCBvcHRpb25zKVxuICBcbiAgICAgIC8vIEdldCB0aGUgcmVzcG9uc2UgZGF0YSBmcm9tIHNlcnZlciBhcyBKU09OLlxuICAgICAgLy8gSWYgc2VydmVyIHJldHVybnMgdGhlIG5hbWUgc3VibWl0dGVkLCB0aGF0IG1lYW5zIHRoZSBmb3JtIHdvcmtzLlxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBhbGVydChgSXMgdGhpcyB5b3VyIGZ1bGwgbmFtZTogJHtyZXN1bHQuZGF0YX1gKVxuICAgIH1cbiAgXG4gIC8vIGNvbnN0IHNlbmRBdWRpb0ZpbGUgPSBmaWxlID0+IHtcbiAgLy8gICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F1ZGlvLWZpbGUnLCBmaWxlKTtcbiAgLy8gICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdWRpb1VwbG9hZCcsIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gIC8vICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gIC8vICAgICB9KTtcbiAgLy8gICB9O1xuXG4vLyAgIHZhciBzYXZlQmxvYiA9IGFzeW5jICgpID0+IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsb2JcIik7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIChibG9iLCBmaWxlTmFtZSkge1xuLy8gICAgICAgICBhLmhyZWYgPSBibG9iO1xuLy8gICAgICAgICBhLmRvd25sb2FkID0gZmlsZU5hbWU7XG4vLyAgICAgICAgIGEuY2xpY2soKTtcbi8vICAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbi8vICAgICB9O1xuLy8gfSgpKTtcblxuXG4vLyBjb25zdCByZWNvcmRBdWRpbyA9ICgpID0+XG4vLyBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcbi8vICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcbi8vICAgY29uc3QgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4vLyAgIGNvbnN0IGF1ZGlvQ2h1bmtzID0gW107XG5cbi8vICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCBldmVudCA9PiB7XG4vLyAgICAgYXVkaW9DaHVua3MucHVzaChldmVudC5kYXRhKTtcbi8vICAgfSk7XG5cbi8vICAgY29uc3Qgc3RhcnQgPSAoKSA9PiBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG5cbi8vICAgY29uc3Qgc3RvcCA9ICgpID0+XG4vLyAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4vLyAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9wXCIsICgpID0+IHtcbi8vICAgICAgICAgY29uc3QgYXVkaW9CbG9iID0gbmV3IEJsb2IoYXVkaW9DaHVua3MsIHsgdHlwZTogXCJhdWRpby9tcGVnXCIgfSk7XG5cblxuLy8gICAgICAgICAgIC8vIHNlbmRBdWRpb0ZpbGUoYXVkaW9CbG9iKTtcbi8vICAgICAgIC8vICAgdmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3QoKTtcbi8vICAgICAgIC8vICAgeGhyLm9ubG9hZD1mdW5jdGlvbihlKSB7XG4vLyAgICAgICAvLyAgICAgaWYodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4vLyAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciByZXR1cm5lZDogXCIsZS50YXJnZXQucmVzcG9uc2VUZXh0KTtcbi8vICAgICAgIC8vICAgICB9XG4vLyAgICAgICAvLyAgIH07XG4vLyAgICAgICAvLyAgIHZhciBmZD1uZXcgRm9ybURhdGEoKTtcbi8vICAgICAgIC8vICAgZmQuYXBwZW5kKFwiYXVkaW9fZGF0YVwiLCBhdWRpb0Jsb2IsIFwiZmlsZW5hbWVcIik7XG4vLyAgICAgICAvLyAgIHhoci5vcGVuKFwiUE9TVFwiLFwidXBsb2FkLnBocFwiLHRydWUpO1xuLy8gICAgICAgLy8gICB4aHIuc2VuZChmZCk7XG5cbi8vICAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XG5cbi8vICAgICAgICAgc2F2ZUJsb2IoYXVkaW9VcmwsICd0ZXN0LnppcCcpO1xuLy8gICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhhdWRpb1VybCk7XG4vLyAgICAgICAgIGNvbnN0IHBsYXkgPSAoKSA9PiBhdWRpby5wbGF5KCk7XG4vLyAgICAgICAgIHJlc29sdmUoeyBhdWRpb0Jsb2IsIGF1ZGlvVXJsLCBwbGF5IH0pO1xuLy8gfSk7XG5cbi8vICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuLy8gICAgIH0pO1xuXG4vLyAgIHJlc29sdmUoeyBzdGFydCwgc3RvcCB9KTtcbi8vIH0pO1xuXG4vLyBjb25zdCBzbGVlcCA9IHRpbWUgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcblxuLy8gY29uc3QgaGFuZGxlQWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuLy8gY29uc3QgcmVjb3JkZXIgPSBhd2FpdCByZWNvcmRBdWRpbygpO1xuLy8gY29uc3QgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb25cIik7XG4vLyBhY3Rpb25CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuLy8gcmVjb3JkZXIuc3RhcnQoKTtcbi8vIGF3YWl0IHNsZWVwKDMwMDApO1xuLy8gY29uc3QgYXVkaW8gPSBhd2FpdCByZWNvcmRlci5zdG9wKCk7XG4vLyBhdWRpby5wbGF5KCk7XG4vLyBhd2FpdCBzbGVlcCgzMDAwKTtcbi8vIGFjdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuLy8gY29uc29sZS5sb2coXCJyZWNvcmRlZFwiKVxuLy8gfTtcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gV2UgcGFzcyB0aGUgZXZlbnQgdG8gdGhlIGhhbmRsZVN1Ym1pdCgpIGZ1bmN0aW9uIG9uIHN1Ym1pdC5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdFwiIG5hbWU9XCJmaXJzdFwiIHJlcXVpcmVkIC8+XG4gIFxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3RcIiBuYW1lPVwibGFzdFwiIHJlcXVpcmVkIC8+XG4gIFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cblxuICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImFjdGlvblwiIG9uQ2xpY2s9e2hhbmRsZUFjdGlvbn0+U3RhcnQgcmVjb3JkaW5nLi4uPC9idXR0b24+XG4gICAgICAgIDxhIGlkPVwiYmxvYlwiPjwvYT4gKi99XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG4gICJdLCJuYW1lcyI6WyJQYWdlV2l0aEpTYmFzZWRGb3JtIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJmaXJzdCIsInRhcmdldCIsInZhbHVlIiwibGFzdCIsIkpTT05kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJhbGVydCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/form.js\n"));

/***/ })

});