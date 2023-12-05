"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/utf-8-validate";
exports.ids = ["vendor-chunks/utf-8-validate"];
exports.modules = {

/***/ "(ssr)/./node_modules/utf-8-validate/fallback.js":
/*!*************************************************!*\
  !*** ./node_modules/utf-8-validate/fallback.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\n/**\n * Checks if a given buffer contains only correct UTF-8.\n * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by\n * Markus Kuhn.\n *\n * @param {Buffer} buf The buffer to check\n * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`\n * @public\n */\nfunction isValidUTF8(buf) {\n  const len = buf.length;\n  let i = 0;\n\n  while (i < len) {\n    if ((buf[i] & 0x80) === 0x00) {  // 0xxxxxxx\n      i++;\n    } else if ((buf[i] & 0xe0) === 0xc0) {  // 110xxxxx 10xxxxxx\n      if (\n        i + 1 === len ||\n        (buf[i + 1] & 0xc0) !== 0x80 ||\n        (buf[i] & 0xfe) === 0xc0  // overlong\n      ) {\n        return false;\n      }\n\n      i += 2;\n    } else if ((buf[i] & 0xf0) === 0xe0) {  // 1110xxxx 10xxxxxx 10xxxxxx\n      if (\n        i + 2 >= len ||\n        (buf[i + 1] & 0xc0) !== 0x80 ||\n        (buf[i + 2] & 0xc0) !== 0x80 ||\n        buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 ||  // overlong\n        buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0  // surrogate (U+D800 - U+DFFF)\n      ) {\n        return false;\n      }\n\n      i += 3;\n    } else if ((buf[i] & 0xf8) === 0xf0) {  // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n      if (\n        i + 3 >= len ||\n        (buf[i + 1] & 0xc0) !== 0x80 ||\n        (buf[i + 2] & 0xc0) !== 0x80 ||\n        (buf[i + 3] & 0xc0) !== 0x80 ||\n        buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 ||  // overlong\n        buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4  // > U+10FFFF\n      ) {\n        return false;\n      }\n\n      i += 4;\n    } else {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = isValidUTF8;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvZmFsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLE1BQU0sc0NBQXNDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzQ0FBc0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzQ0FBc0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdhZ21pLy4vbm9kZV9tb2R1bGVzL3V0Zi04LXZhbGlkYXRlL2ZhbGxiYWNrLmpzPzAxNDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIGJ1ZmZlciBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTguXG4gKiBQb3J0ZWQgZnJvbSBodHRwczovL3d3dy5jbC5jYW0uYWMudWsvJTdFbWdrMjUvdWNzL3V0ZjhfY2hlY2suYyBieVxuICogTWFya3VzIEt1aG4uXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYGJ1ZmAgY29udGFpbnMgb25seSBjb3JyZWN0IFVURi04LCBlbHNlIGBmYWxzZWBcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFVURjgoYnVmKSB7XG4gIGNvbnN0IGxlbiA9IGJ1Zi5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGlmICgoYnVmW2ldICYgMHg4MCkgPT09IDB4MDApIHsgIC8vIDB4eHh4eHh4XG4gICAgICBpKys7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhlMCkgPT09IDB4YzApIHsgIC8vIDExMHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAxID09PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldICYgMHhmZSkgPT09IDB4YzAgIC8vIG92ZXJsb25nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDI7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmMCkgPT09IDB4ZTApIHsgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAyID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgYnVmW2ldID09PSAweGUwICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4ODAgfHwgIC8vIG92ZXJsb25nXG4gICAgICAgIGJ1ZltpXSA9PT0gMHhlZCAmJiAoYnVmW2kgKyAxXSAmIDB4ZTApID09PSAweGEwICAvLyBzdXJyb2dhdGUgKFUrRDgwMCAtIFUrREZGRilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gMztcbiAgICB9IGVsc2UgaWYgKChidWZbaV0gJiAweGY4KSA9PT0gMHhmMCkgeyAgLy8gMTExMTB4eHggMTB4eHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgIGlmIChcbiAgICAgICAgaSArIDMgPj0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgMl0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAzXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIGJ1ZltpXSA9PT0gMHhmMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZjApID09PSAweDgwIHx8ICAvLyBvdmVybG9uZ1xuICAgICAgICBidWZbaV0gPT09IDB4ZjQgJiYgYnVmW2kgKyAxXSA+IDB4OGYgfHwgYnVmW2ldID4gMHhmNCAgLy8gPiBVKzEwRkZGRlxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNWYWxpZFVURjg7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/fallback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/utf-8-validate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/utf-8-validate/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\ntry {\n  module.exports = __webpack_require__(/*! node-gyp-build */ \"(ssr)/./node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n  module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/./node_modules/utf-8-validate/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBZ0I7QUFDM0MsRUFBRTtBQUNGLEVBQUUseUdBQXNDO0FBQ3hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC13YWdtaS8uL25vZGVfbW9kdWxlcy91dGYtOC12YWxpZGF0ZS9pbmRleC5qcz9mMWYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdub2RlLWd5cC1idWlsZCcpKF9fZGlybmFtZSk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWxsYmFjaycpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/index.js\n");

/***/ })

};
;