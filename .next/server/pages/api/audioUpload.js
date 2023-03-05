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
exports.id = "pages/api/audioUpload";
exports.ids = ["pages/api/audioUpload"];
exports.modules = {

/***/ "(api)/./pages/api/audioUpload.js":
/*!**********************************!*\
  !*** ./pages/api/audioUpload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    // Get data submitted in request's body.\n    const body = req.body;\n    // Optional logging to see the responses\n    // in the command line where next.js app is running.\n    console.log(\"body: \", body);\n    // Guard clause checks for first and last name,\n    // and returns early if they are not found\n    if (!body.first || !body.last) {\n        // Sends a HTTP bad request error code\n        return res.status(400).json({\n            data: \"First or last name not found\"\n        });\n    }\n    // Found the name.\n    // Sends a HTTP success code\n    res.status(200).json({\n        data: `${body.first} ${body.last}`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXVkaW9VcGxvYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLHdDQUF3QztJQUN4QyxNQUFNQyxPQUFPRixJQUFJRSxJQUFJO0lBRXJCLHdDQUF3QztJQUN4QyxvREFBb0Q7SUFDcERDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtJQUV0QiwrQ0FBK0M7SUFDL0MsMENBQTBDO0lBQzFDLElBQUksQ0FBQ0EsS0FBS0csS0FBSyxJQUFJLENBQUNILEtBQUtJLElBQUksRUFBRTtRQUM3QixzQ0FBc0M7UUFDdEMsT0FBT0wsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNO1FBQStCO0lBQ3JFLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE1BQU0sQ0FBQyxFQUFFUCxLQUFLRyxLQUFLLENBQUMsQ0FBQyxFQUFFSCxLQUFLSSxJQUFJLENBQUMsQ0FBQztJQUFDO0FBQzVELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlX2RhdGEvLi9wYWdlcy9hcGkvYXVkaW9VcGxvYWQuanM/ZTVmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgLy8gR2V0IGRhdGEgc3VibWl0dGVkIGluIHJlcXVlc3QncyBib2R5LlxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxuICBcbiAgICAvLyBPcHRpb25hbCBsb2dnaW5nIHRvIHNlZSB0aGUgcmVzcG9uc2VzXG4gICAgLy8gaW4gdGhlIGNvbW1hbmQgbGluZSB3aGVyZSBuZXh0LmpzIGFwcCBpcyBydW5uaW5nLlxuICAgIGNvbnNvbGUubG9nKCdib2R5OiAnLCBib2R5KVxuICBcbiAgICAvLyBHdWFyZCBjbGF1c2UgY2hlY2tzIGZvciBmaXJzdCBhbmQgbGFzdCBuYW1lLFxuICAgIC8vIGFuZCByZXR1cm5zIGVhcmx5IGlmIHRoZXkgYXJlIG5vdCBmb3VuZFxuICAgIGlmICghYm9keS5maXJzdCB8fCAhYm9keS5sYXN0KSB7XG4gICAgICAvLyBTZW5kcyBhIEhUVFAgYmFkIHJlcXVlc3QgZXJyb3IgY29kZVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZGF0YTogJ0ZpcnN0IG9yIGxhc3QgbmFtZSBub3QgZm91bmQnIH0pXG4gICAgfVxuICBcbiAgICAvLyBGb3VuZCB0aGUgbmFtZS5cbiAgICAvLyBTZW5kcyBhIEhUVFAgc3VjY2VzcyBjb2RlXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBgJHtib2R5LmZpcnN0fSAke2JvZHkubGFzdH1gIH0pXG4gIH0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmlyc3QiLCJsYXN0Iiwic3RhdHVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/audioUpload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/audioUpload.js"));
module.exports = __webpack_exports__;

})();