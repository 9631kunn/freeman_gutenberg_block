/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__case_block_js__ = __webpack_require__(/*! ./case/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_block_js__ = __webpack_require__(/*! ./slider/block.js */ 3);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCBcIi4vY2FzZS9ibG9jay5qc1wiO1xuaW1wb3J0IFwiLi9zbGlkZXIvYmxvY2suanNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************!*\
  !*** ./src/case/block.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\nvar RichText = wp.blockEditor.RichText;\n\nregisterBlockType(\"freeman-block/case\", {\n\ttitle: \"導入事例\",\n\ticon: wp.element.createElement(\n\t\t\"svg\",\n\t\t{\n\t\t\txmlns: \"http://www.w3.org/2000/svg\",\n\t\t\twidth: \"20\",\n\t\t\theight: \"20\",\n\t\t\tviewBox: \"0 0 50 50\"\n\t\t},\n\t\twp.element.createElement(\n\t\t\t\"g\",\n\t\t\t{ fill: \"#1a1311\" },\n\t\t\twp.element.createElement(\"path\", { d: \"M23.262 21.635v1.432h17.764v-2.186h-17.01a.735.735 0 00-.754.754zM23.264 34.746l-.007 7.306h17.769v-7.306z\" }),\n\t\t\twp.element.createElement(\"path\", { d: \"M10.673 22.417a13.9 13.9 0 0113.8-13.968h16.551V0H0v42.056h10.673z\" })\n\t\t),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M24.475 9.628a12.728 12.728 0 00-12.637 12.789v19.641h10.257l.007-8.487h18.932V24.25H22.095v-2.615a1.9 1.9 0 011.92-1.928h17.009V9.628z\",\n\t\t\tfill: \"#1a1311\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M39.971 10.807h-15.5a11.54 11.54 0 00-11.472 11.61v18.554h7.925l.007-8.581h19.041v-6.962h-19.04v-3.794a3.083 3.083 0 013.085-3.107h15.954z\",\n\t\t\tfill: \"#dc0016\",\n\t\t\tstroke: \"#dc0016\",\n\t\t\tstrokeMiterlimit: \"2\",\n\t\t\tstrokeWidth: \".75\"\n\t\t})\n\t),\n\tcategory: \"common\",\n\tattributes: {\n\t\ttitle: {\n\t\t\tsource: \"html\",\n\t\t\tselector: \"h3\",\n\t\t\tdefault: \"導入事例\"\n\t\t},\n\t\tdescription: {\n\t\t\tsource: \"html\",\n\t\t\tselector: \"p\"\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\t\tvar title = attributes.title,\n\t\t    description = attributes.description;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: \"h3\",\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t},\n\t\t\t\tvalue: title\n\t\t\t}),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: \"p\",\n\t\t\t\tonChange: function onChange(description) {\n\t\t\t\t\treturn setAttributes({ description: description });\n\t\t\t\t},\n\t\t\t\tvalue: description\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className,\n\t\t    attributes = _ref2.attributes;\n\t\tvar title = attributes.title,\n\t\t    description = attributes.description;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(RichText.Content, { tagName: \"h3\", value: title }),\n\t\t\twp.element.createElement(RichText.Content, { tagName: \"p\", value: description })\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jYXNlL2Jsb2NrLmpzP2QyOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cbnZhciBSaWNoVGV4dCA9IHdwLmJsb2NrRWRpdG9yLlJpY2hUZXh0O1xuXG5yZWdpc3RlckJsb2NrVHlwZShcImZyZWVtYW4tYmxvY2svY2FzZVwiLCB7XG5cdHRpdGxlOiBcIuWwjuWFpeS6i+S+i1wiLFxuXHRpY29uOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XCJzdmdcIixcblx0XHR7XG5cdFx0XHR4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdFx0d2lkdGg6IFwiMjBcIixcblx0XHRcdGhlaWdodDogXCIyMFwiLFxuXHRcdFx0dmlld0JveDogXCIwIDAgNTAgNTBcIlxuXHRcdH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJnXCIsXG5cdFx0XHR7IGZpbGw6IFwiIzFhMTMxMVwiIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMjMuMjYyIDIxLjYzNXYxLjQzMmgxNy43NjR2LTIuMTg2aC0xNy4wMWEuNzM1LjczNSAwIDAwLS43NTQuNzU0ek0yMy4yNjQgMzQuNzQ2bC0uMDA3IDcuMzA2aDE3Ljc2OXYtNy4zMDZ6XCIgfSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTAuNjczIDIyLjQxN2ExMy45IDEzLjkgMCAwMTEzLjgtMTMuOTY4aDE2LjU1MVYwSDB2NDIuMDU2aDEwLjY3M3pcIiB9KVxuXHRcdCksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG5cdFx0XHRkOiBcIk0yNC40NzUgOS42MjhhMTIuNzI4IDEyLjcyOCAwIDAwLTEyLjYzNyAxMi43ODl2MTkuNjQxaDEwLjI1N2wuMDA3LTguNDg3aDE4LjkzMlYyNC4yNUgyMi4wOTV2LTIuNjE1YTEuOSAxLjkgMCAwMTEuOTItMS45MjhoMTcuMDA5VjkuNjI4elwiLFxuXHRcdFx0ZmlsbDogXCIjMWExMzExXCJcblx0XHR9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdGQ6IFwiTTM5Ljk3MSAxMC44MDdoLTE1LjVhMTEuNTQgMTEuNTQgMCAwMC0xMS40NzIgMTEuNjF2MTguNTU0aDcuOTI1bC4wMDctOC41ODFoMTkuMDQxdi02Ljk2MmgtMTkuMDR2LTMuNzk0YTMuMDgzIDMuMDgzIDAgMDEzLjA4NS0zLjEwN2gxNS45NTR6XCIsXG5cdFx0XHRmaWxsOiBcIiNkYzAwMTZcIixcblx0XHRcdHN0cm9rZTogXCIjZGMwMDE2XCIsXG5cdFx0XHRzdHJva2VNaXRlcmxpbWl0OiBcIjJcIixcblx0XHRcdHN0cm9rZVdpZHRoOiBcIi43NVwiXG5cdFx0fSlcblx0KSxcblx0Y2F0ZWdvcnk6IFwiY29tbW9uXCIsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0c291cmNlOiBcImh0bWxcIixcblx0XHRcdHNlbGVjdG9yOiBcImgzXCIsXG5cdFx0XHRkZWZhdWx0OiBcIuWwjuWFpeS6i+S+i1wiXG5cdFx0fSxcblx0XHRkZXNjcmlwdGlvbjoge1xuXHRcdFx0c291cmNlOiBcImh0bWxcIixcblx0XHRcdHNlbGVjdG9yOiBcInBcIlxuXHRcdH1cblx0fSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXHRcdHZhciB0aXRsZSA9IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0ICAgIGRlc2NyaXB0aW9uID0gYXR0cmlidXRlcy5kZXNjcmlwdGlvbjtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0dGFnTmFtZTogXCJoM1wiLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodGl0bGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB0aXRsZSB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWU6IHRpdGxlXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHR0YWdOYW1lOiBcInBcIixcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGRlc2NyaXB0aW9uKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbHVlOiBkZXNjcmlwdGlvblxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIHRpdGxlID0gYXR0cmlidXRlcy50aXRsZSxcblx0XHQgICAgZGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVzLmRlc2NyaXB0aW9uO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7IHRhZ05hbWU6IFwiaDNcIiwgdmFsdWU6IHRpdGxlIH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHsgdGFnTmFtZTogXCJwXCIsIHZhbHVlOiBkZXNjcmlwdGlvbiB9KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nhc2UvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/case/editor.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jYXNlL2VkaXRvci5zY3NzP2M3ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jYXNlL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./src/slider/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;\nvar Button = wp.components.Button;\n\n\nregisterBlockType(\"freeman-block/slider\", {\n\ttitle: \"スライダー\",\n\ticon: wp.element.createElement(\n\t\t\"svg\",\n\t\t{\n\t\t\txmlns: \"http://www.w3.org/2000/svg\",\n\t\t\twidth: \"20\",\n\t\t\theight: \"20\",\n\t\t\tviewBox: \"0 0 50 50\"\n\t\t},\n\t\twp.element.createElement(\n\t\t\t\"g\",\n\t\t\t{ fill: \"#1a1311\" },\n\t\t\twp.element.createElement(\"path\", { d: \"M23.262 21.635v1.432h17.764v-2.186h-17.01a.735.735 0 00-.754.754zM23.264 34.746l-.007 7.306h17.769v-7.306z\" }),\n\t\t\twp.element.createElement(\"path\", { d: \"M10.673 22.417a13.9 13.9 0 0113.8-13.968h16.551V0H0v42.056h10.673z\" })\n\t\t),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M24.475 9.628a12.728 12.728 0 00-12.637 12.789v19.641h10.257l.007-8.487h18.932V24.25H22.095v-2.615a1.9 1.9 0 011.92-1.928h17.009V9.628z\",\n\t\t\tfill: \"#1a1311\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M39.971 10.807h-15.5a11.54 11.54 0 00-11.472 11.61v18.554h7.925l.007-8.581h19.041v-6.962h-19.04v-3.794a3.083 3.083 0 013.085-3.107h15.954z\",\n\t\t\tfill: \"#dc0016\",\n\t\t\tstroke: \"#dc0016\",\n\t\t\tstrokeMiterlimit: \"2\",\n\t\t\tstrokeWidth: \".75\"\n\t\t})\n\t),\n\tcategory: \"media\",\n\tattributes: {\n\t\tmediaID: {\n\t\t\ttype: \"number\"\n\t\t},\n\t\timageUrl: {\n\t\t\ttype: \"array\",\n\t\t\tdefault: []\n\t\t},\n\t\timageAlt: {\n\t\t\ttype: \"array\",\n\t\t\tdefault: []\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar className = props.className,\n\t\t    attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\n\n\t\tvar onSelectImage = function onSelectImage(media) {\n\t\t\tvar mediaId = media.map(function (image) {\n\t\t\t\treturn image.id;\n\t\t\t});\n\t\t\tvar imageUrl = media.map(function (image) {\n\t\t\t\treturn image.url;\n\t\t\t});\n\t\t\tvar imageAlt = media.map(function (image) {\n\t\t\t\treturn image.alt;\n\t\t\t});\n\t\t\tsetAttributes({\n\t\t\t\tmediaID: mediaId,\n\t\t\t\timageUrl: imageUrl,\n\t\t\t\timageAlt: imageAlt\n\t\t\t});\n\t\t};\n\n\t\t//URL の配列から画像を生成\n\t\tvar getImages = function getImages(urls) {\n\t\t\tvar imagesArray = urls.map(function (url) {\n\t\t\t\treturn wp.element.createElement(\"img\", { src: url, className: \"image\", alt: \"\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u753B\\u50CF\" });\n\t\t\t});\n\t\t\treturn imagesArray;\n\t\t};\n\n\t\t//メディアライブラリを開くボタンをレンダリングする関数（上記関数を使って画像をレンダリング）\n\t\tvar getImageButton = function getImageButton(open) {\n\t\t\tif (attributes.imageUrl.length > 0) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ onClick: open, className: \"block-container\" },\n\t\t\t\t\tgetImages(attributes.imageUrl)\n\t\t\t\t);\n\t\t\t}\n\t\t\treturn wp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"button-container\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{ onClick: open, className: \"button button-large\" },\n\t\t\t\t\t\"\\u753B\\u50CF\\u3092\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\"\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\n\t\t//画像を削除する（メディアをリセットする）関数\n\t\tvar removeMedia = function removeMedia() {\n\t\t\tsetAttributes({\n\t\t\t\tmediaID: [],\n\t\t\t\timageUrl: [],\n\t\t\t\timageAlt: []\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\tMediaUploadCheck,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\tmultiple: true,\n\t\t\t\t\tgallery: true,\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\tallowedTypes: [\"image\"],\n\t\t\t\t\tvalue: attributes.mediaID,\n\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\treturn getImageButton(open);\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\tattributes.imageUrl.length !== 0 && // imageUrl（配列の長さ）で判定\n\t\t\twp.element.createElement(\n\t\t\t\tMediaUploadCheck,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{\n\t\t\t\t\t\tonClick: removeMedia,\n\t\t\t\t\t\tisLink: true,\n\t\t\t\t\t\tisDestructive: true,\n\t\t\t\t\t\tclassName: \"removeImage\"\n\t\t\t\t\t},\n\t\t\t\t\t\"\\u753B\\u50CF\\u3092\\u524A\\u9664\"\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className,\n\t\t    attributes = _ref2.attributes;\n\n\t\t//画像をレンダリングする関数\n\t\tvar getImagesSave = function getImagesSave(url, alt) {\n\t\t\tvar imageElement = void 0;\n\t\t\tvar imagesArray = [];\n\n\t\t\tfor (var i = 0; i < url.length; i++) {\n\t\t\t\tif (url.length === 0) {\n\t\t\t\t\timageElement = null;\n\t\t\t\t} else if (alt[i]) {\n\t\t\t\t\timageElement = wp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"swiper-slide\" },\n\t\t\t\t\t\twp.element.createElement(\"img\", { src: url[i], alt: alt[i] })\n\t\t\t\t\t);\n\t\t\t\t} else {\n\t\t\t\t\timageElement = wp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"swiper-slide\" },\n\t\t\t\t\t\twp.element.createElement(\"img\", { src: url[i], alt: \"\", \"aria-hidden\": \"true\" })\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t\timagesArray.push(imageElement);\n\t\t\t}\n\t\t\treturn imagesArray;\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"swiper-container single-slider js-single-slider\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"swiper-wrapper\" },\n\t\t\t\t\tgetImagesSave(attributes.imageUrl, attributes.imageAlt)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"single-slider__box\" },\n\t\t\t\t\twp.element.createElement(\"div\", { className: \"swiper-button-prev\" }),\n\t\t\t\t\twp.element.createElement(\"div\", { className: \"swiper-button-next\" }),\n\t\t\t\t\twp.element.createElement(\"div\", { className: \"swiper-pagination\" })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zbGlkZXIvYmxvY2suanM/MjdlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRibG9ja0VkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBNZWRpYVVwbG9hZENoZWNrID0gX3dwJGJsb2NrRWRpdG9yLk1lZGlhVXBsb2FkQ2hlY2s7XG52YXIgQnV0dG9uID0gd3AuY29tcG9uZW50cy5CdXR0b247XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJmcmVlbWFuLWJsb2NrL3NsaWRlclwiLCB7XG5cdHRpdGxlOiBcIuOCueODqeOCpOODgOODvFwiLFxuXHRpY29uOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XCJzdmdcIixcblx0XHR7XG5cdFx0XHR4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdFx0d2lkdGg6IFwiMjBcIixcblx0XHRcdGhlaWdodDogXCIyMFwiLFxuXHRcdFx0dmlld0JveDogXCIwIDAgNTAgNTBcIlxuXHRcdH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJnXCIsXG5cdFx0XHR7IGZpbGw6IFwiIzFhMTMxMVwiIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMjMuMjYyIDIxLjYzNXYxLjQzMmgxNy43NjR2LTIuMTg2aC0xNy4wMWEuNzM1LjczNSAwIDAwLS43NTQuNzU0ek0yMy4yNjQgMzQuNzQ2bC0uMDA3IDcuMzA2aDE3Ljc2OXYtNy4zMDZ6XCIgfSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTAuNjczIDIyLjQxN2ExMy45IDEzLjkgMCAwMTEzLjgtMTMuOTY4aDE2LjU1MVYwSDB2NDIuMDU2aDEwLjY3M3pcIiB9KVxuXHRcdCksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG5cdFx0XHRkOiBcIk0yNC40NzUgOS42MjhhMTIuNzI4IDEyLjcyOCAwIDAwLTEyLjYzNyAxMi43ODl2MTkuNjQxaDEwLjI1N2wuMDA3LTguNDg3aDE4LjkzMlYyNC4yNUgyMi4wOTV2LTIuNjE1YTEuOSAxLjkgMCAwMTEuOTItMS45MjhoMTcuMDA5VjkuNjI4elwiLFxuXHRcdFx0ZmlsbDogXCIjMWExMzExXCJcblx0XHR9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdGQ6IFwiTTM5Ljk3MSAxMC44MDdoLTE1LjVhMTEuNTQgMTEuNTQgMCAwMC0xMS40NzIgMTEuNjF2MTguNTU0aDcuOTI1bC4wMDctOC41ODFoMTkuMDQxdi02Ljk2MmgtMTkuMDR2LTMuNzk0YTMuMDgzIDMuMDgzIDAgMDEzLjA4NS0zLjEwN2gxNS45NTR6XCIsXG5cdFx0XHRmaWxsOiBcIiNkYzAwMTZcIixcblx0XHRcdHN0cm9rZTogXCIjZGMwMDE2XCIsXG5cdFx0XHRzdHJva2VNaXRlcmxpbWl0OiBcIjJcIixcblx0XHRcdHN0cm9rZVdpZHRoOiBcIi43NVwiXG5cdFx0fSlcblx0KSxcblx0Y2F0ZWdvcnk6IFwibWVkaWFcIixcblx0YXR0cmlidXRlczoge1xuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6IFwibnVtYmVyXCJcblx0XHR9LFxuXHRcdGltYWdlVXJsOiB7XG5cdFx0XHR0eXBlOiBcImFycmF5XCIsXG5cdFx0XHRkZWZhdWx0OiBbXVxuXHRcdH0sXG5cdFx0aW1hZ2VBbHQ6IHtcblx0XHRcdHR5cGU6IFwiYXJyYXlcIixcblx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cblx0XHR2YXIgb25TZWxlY3RJbWFnZSA9IGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UobWVkaWEpIHtcblx0XHRcdHZhciBtZWRpYUlkID0gbWVkaWEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0XHRyZXR1cm4gaW1hZ2UuaWQ7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBpbWFnZVVybCA9IG1lZGlhLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcblx0XHRcdFx0cmV0dXJuIGltYWdlLnVybDtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIGltYWdlQWx0ID0gbWVkaWEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0XHRyZXR1cm4gaW1hZ2UuYWx0O1xuXHRcdFx0fSk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0bWVkaWFJRDogbWVkaWFJZCxcblx0XHRcdFx0aW1hZ2VVcmw6IGltYWdlVXJsLFxuXHRcdFx0XHRpbWFnZUFsdDogaW1hZ2VBbHRcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvL1VSTCDjga7phY3liJfjgYvjgonnlLvlg4/jgpLnlJ/miJBcblx0XHR2YXIgZ2V0SW1hZ2VzID0gZnVuY3Rpb24gZ2V0SW1hZ2VzKHVybHMpIHtcblx0XHRcdHZhciBpbWFnZXNBcnJheSA9IHVybHMubWFwKGZ1bmN0aW9uICh1cmwpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogdXJsLCBjbGFzc05hbWU6IFwiaW1hZ2VcIiwgYWx0OiBcIlxcdTMwQTJcXHUzMEMzXFx1MzBEN1xcdTMwRURcXHUzMEZDXFx1MzBDOVxcdTc1M0JcXHU1MENGXCIgfSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBpbWFnZXNBcnJheTtcblx0XHR9O1xuXG5cdFx0Ly/jg6Hjg4fjgqPjgqLjg6njgqTjg5bjg6njg6rjgpLplovjgY/jg5zjgr/jg7PjgpLjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovplqLmlbDvvIjkuIroqJjplqLmlbDjgpLkvb/jgaPjgabnlLvlg4/jgpLjg6zjg7Pjg4Djg6rjg7PjgrDvvIlcblx0XHR2YXIgZ2V0SW1hZ2VCdXR0b24gPSBmdW5jdGlvbiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlcy5pbWFnZVVybC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IG9uQ2xpY2s6IG9wZW4sIGNsYXNzTmFtZTogXCJibG9jay1jb250YWluZXJcIiB9LFxuXHRcdFx0XHRcdGdldEltYWdlcyhhdHRyaWJ1dGVzLmltYWdlVXJsKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiYnV0dG9uLWNvbnRhaW5lclwiIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0eyBvbkNsaWNrOiBvcGVuLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiIH0sXG5cdFx0XHRcdFx0XCJcXHU3NTNCXFx1NTBDRlxcdTMwOTJcXHUzMEEyXFx1MzBDM1xcdTMwRDdcXHUzMEVEXFx1MzBGQ1xcdTMwQzlcIlxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvL+eUu+WDj+OCkuWJiumZpOOBmeOCi++8iOODoeODh+OCo+OCouOCkuODquOCu+ODg+ODiOOBmeOCi++8iemWouaVsFxuXHRcdHZhciByZW1vdmVNZWRpYSA9IGZ1bmN0aW9uIHJlbW92ZU1lZGlhKCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdG1lZGlhSUQ6IFtdLFxuXHRcdFx0XHRpbWFnZVVybDogW10sXG5cdFx0XHRcdGltYWdlQWx0OiBbXVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRNZWRpYVVwbG9hZENoZWNrLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZSxcblx0XHRcdFx0XHRnYWxsZXJ5OiB0cnVlLFxuXHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdEltYWdlLFxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlczogW1wiaW1hZ2VcIl0sXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMubWVkaWFJRCxcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYub3Blbjtcblx0XHRcdFx0XHRcdHJldHVybiBnZXRJbWFnZUJ1dHRvbihvcGVuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0YXR0cmlidXRlcy5pbWFnZVVybC5sZW5ndGggIT09IDAgJiYgLy8gaW1hZ2VVcmzvvIjphY3liJfjga7plbfjgZXvvInjgafliKTlrppcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0TWVkaWFVcGxvYWRDaGVjayxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRvbkNsaWNrOiByZW1vdmVNZWRpYSxcblx0XHRcdFx0XHRcdGlzTGluazogdHJ1ZSxcblx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmU6IHRydWUsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwicmVtb3ZlSW1hZ2VcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJcXHU3NTNCXFx1NTBDRlxcdTMwOTJcXHU1MjRBXFx1OTY2NFwiXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cblx0XHQvL+eUu+WDj+OCkuODrOODs+ODgOODquODs+OCsOOBmeOCi+mWouaVsFxuXHRcdHZhciBnZXRJbWFnZXNTYXZlID0gZnVuY3Rpb24gZ2V0SW1hZ2VzU2F2ZSh1cmwsIGFsdCkge1xuXHRcdFx0dmFyIGltYWdlRWxlbWVudCA9IHZvaWQgMDtcblx0XHRcdHZhciBpbWFnZXNBcnJheSA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodXJsLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGltYWdlRWxlbWVudCA9IG51bGw7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWx0W2ldKSB7XG5cdFx0XHRcdFx0aW1hZ2VFbGVtZW50ID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcInN3aXBlci1zbGlkZVwiIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHVybFtpXSwgYWx0OiBhbHRbaV0gfSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGltYWdlRWxlbWVudCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJzd2lwZXItc2xpZGVcIiB9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiB1cmxbaV0sIGFsdDogXCJcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW1hZ2VzQXJyYXkucHVzaChpbWFnZUVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGltYWdlc0FycmF5O1xuXHRcdH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwic3dpcGVyLWNvbnRhaW5lciBzaW5nbGUtc2xpZGVyIGpzLXNpbmdsZS1zbGlkZXJcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJzd2lwZXItd3JhcHBlclwiIH0sXG5cdFx0XHRcdFx0Z2V0SW1hZ2VzU2F2ZShhdHRyaWJ1dGVzLmltYWdlVXJsLCBhdHRyaWJ1dGVzLmltYWdlQWx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJzaW5nbGUtc2xpZGVyX19ib3hcIiB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzd2lwZXItYnV0dG9uLXByZXZcIiB9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgfSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN3aXBlci1wYWdpbmF0aW9uXCIgfSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlci9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** ./src/slider/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zbGlkZXIvZWRpdG9yLnNjc3M/OGFkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlci9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);