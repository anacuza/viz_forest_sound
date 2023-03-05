"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "(api)/./pages/api/form.js":
/*!***************************!*\
  !*** ./pages/api/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    // Get data submitted in request's body.\n    const body = req.body;\n    // Optional logging to see the responses\n    // in the command line where next.js app is running.\n    console.log(\"body: \", body);\n    // Guard clause checks for first and last name,\n    // and returns early if they are not found\n    if (!body.first || !body.last) {\n        // Sends a HTTP bad request error code\n        return res.status(400).json({\n            data: \"First or last name not found\"\n        });\n    }\n    // Found the name.\n    // Sends a HTTP success code\n    res.status(200).json({\n        data: `${body.first} ${body.last}`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsd0NBQXdDO0lBQ3hDLE1BQU1DLE9BQU9GLElBQUlFLElBQUk7SUFFckIsd0NBQXdDO0lBQ3hDLG9EQUFvRDtJQUNwREMsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO0lBRXRCLCtDQUErQztJQUMvQywwQ0FBMEM7SUFDMUMsSUFBSSxDQUFDQSxLQUFLRyxLQUFLLElBQUksQ0FBQ0gsS0FBS0ksSUFBSSxFQUFFO1FBQzdCLHNDQUFzQztRQUN0QyxPQUFPTCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU07UUFBK0I7SUFDckUsQ0FBQztJQUVELGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUJSLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsTUFBTSxDQUFDLEVBQUVQLEtBQUtHLEtBQUssQ0FBQyxDQUFDLEVBQUVILEtBQUtJLElBQUksQ0FBQyxDQUFDO0lBQUM7QUFDNUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1hdGVfZGF0YS8uL3BhZ2VzL2FwaS9mb3JtLmpzPzExOTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIC8vIEdldCBkYXRhIHN1Ym1pdHRlZCBpbiByZXF1ZXN0J3MgYm9keS5cbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHlcbiAgXG4gICAgLy8gT3B0aW9uYWwgbG9nZ2luZyB0byBzZWUgdGhlIHJlc3BvbnNlc1xuICAgIC8vIGluIHRoZSBjb21tYW5kIGxpbmUgd2hlcmUgbmV4dC5qcyBhcHAgaXMgcnVubmluZy5cbiAgICBjb25zb2xlLmxvZygnYm9keTogJywgYm9keSlcbiAgXG4gICAgLy8gR3VhcmQgY2xhdXNlIGNoZWNrcyBmb3IgZmlyc3QgYW5kIGxhc3QgbmFtZSxcbiAgICAvLyBhbmQgcmV0dXJucyBlYXJseSBpZiB0aGV5IGFyZSBub3QgZm91bmRcbiAgICBpZiAoIWJvZHkuZmlyc3QgfHwgIWJvZHkubGFzdCkge1xuICAgICAgLy8gU2VuZHMgYSBIVFRQIGJhZCByZXF1ZXN0IGVycm9yIGNvZGVcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGRhdGE6ICdGaXJzdCBvciBsYXN0IG5hbWUgbm90IGZvdW5kJyB9KVxuICAgIH1cbiAgXG4gICAgLy8gRm91bmQgdGhlIG5hbWUuXG4gICAgLy8gU2VuZHMgYSBIVFRQIHN1Y2Nlc3MgY29kZVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogYCR7Ym9keS5maXJzdH0gJHtib2R5Lmxhc3R9YCB9KVxuICB9Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImZpcnN0IiwibGFzdCIsInN0YXR1cyIsImpzb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/form.js"));
module.exports = __webpack_exports__;

})();