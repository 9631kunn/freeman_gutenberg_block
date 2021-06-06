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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_block_js__ = __webpack_require__(/*! ./slider/block.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCBcIi4vYmxvY2svYmxvY2suanNcIjtcbmltcG9ydCBcIi4vc2xpZGVyL2Jsb2NrLmpzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar RichText = wp.editor.RichText;\n\nregisterBlockType(\"cgb/block-freeman-block\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"freeman-block - CGB Block\"), // Block title.\n\ticon: \"shield\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"freeman-block — CGB Block\"), __(\"CGB Example\"), __(\"create-guten-block\")],\n\tattributes: {\n\t\tchildren: {\n\t\t\tsource: \"html\",\n\t\t\tselector: \"div\"\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    attributes = _ref.attributes;\n\t\tvar children = attributes.children;\n\n\t\treturn wp.element.createElement(RichText, {\n\t\t\ttagName: \"div\",\n\t\t\tclassName: className,\n\t\t\tonChange: function onChange(children) {\n\t\t\t\treturn setAttributes({ children: children });\n\t\t\t},\n\t\t\tvalue: children\n\t\t});\n\t},\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\t\tvar children = attributes.children;\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\tchildren\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY2diL2Jsb2NrLWZyZWVtYW4tYmxvY2tcIiwge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKFwiZnJlZW1hbi1ibG9jayAtIENHQiBCbG9ja1wiKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246IFwic2hpZWxkXCIsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6IFwiY29tbW9uXCIsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKFwiZnJlZW1hbi1ibG9jayDigJQgQ0dCIEJsb2NrXCIpLCBfXyhcIkNHQiBFeGFtcGxlXCIpLCBfXyhcImNyZWF0ZS1ndXRlbi1ibG9ja1wiKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0c291cmNlOiBcImh0bWxcIixcblx0XHRcdHNlbGVjdG9yOiBcImRpdlwiXG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGNoaWxkcmVuID0gYXR0cmlidXRlcy5jaGlsZHJlbjtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdHRhZ05hbWU6IFwiZGl2XCIsXG5cdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjaGlsZHJlbikge1xuXHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KTtcblx0XHRcdH0sXG5cdFx0XHR2YWx1ZTogY2hpbGRyZW5cblx0XHR9KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblx0XHR2YXIgY2hpbGRyZW4gPSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHRudWxsLFxuXHRcdFx0Y2hpbGRyZW5cblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** ./src/slider/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    MediaUpload = _wp$editor.MediaUpload,\n    MediaUploadCheck = _wp$editor.MediaUploadCheck;\nvar Button = wp.components.Button;\n\n\nregisterBlockType(\"myblock/block-image\", {\n\ttitle: \"画像ブロック\",\n\ticon: \"index-card\",\n\tcategory: \"common\",\n\tattributes: {\n\t\tmediaID: {\n\t\t\ttype: \"number\"\n\t\t},\n\t\timageUrl: {\n\t\t\ttype: \"array\",\n\t\t\tdefault: []\n\t\t},\n\t\timageAlt: {\n\t\t\ttype: \"array\",\n\t\t\tdefault: []\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar className = props.className,\n\t\t    attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\n\n\t\tvar onSelectImage = function onSelectImage(media) {\n\t\t\tvar media_ID = media.map(function (image) {\n\t\t\t\treturn image.id;\n\t\t\t});\n\t\t\tvar imageUrl = media.map(function (image) {\n\t\t\t\treturn image.url;\n\t\t\t});\n\t\t\tvar imageAlt = media.map(function (image) {\n\t\t\t\treturn image.alt;\n\t\t\t});\n\t\t\tsetAttributes({\n\t\t\t\tmediaID: media_ID,\n\t\t\t\timageUrl: imageUrl,\n\t\t\t\timageAlt: imageAlt\n\t\t\t});\n\t\t};\n\n\t\t//URL の配列から画像を生成\n\t\tvar getImages = function getImages(urls) {\n\t\t\tvar imagesArray = urls.map(function (url) {\n\t\t\t\treturn wp.element.createElement(\"img\", { src: url, className: \"image\", alt: \"\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u753B\\u50CF\" });\n\t\t\t});\n\t\t\treturn imagesArray;\n\t\t};\n\n\t\t//メディアライブラリを開くボタンをレンダリングする関数（上記関数を使って画像をレンダリング）\n\t\tvar getImageButton = function getImageButton(open) {\n\t\t\tif (attributes.imageUrl.length > 0) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ onClick: open, className: \"block-container\" },\n\t\t\t\t\tgetImages(attributes.imageUrl)\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"button-container\" },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{ onClick: open, className: \"button button-large\" },\n\t\t\t\t\t\t\"\\u753B\\u50CF\\u3092\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\"\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t};\n\n\t\t//画像を削除する（メディアをリセットする）関数\n\t\tvar removeMedia = function removeMedia() {\n\t\t\tsetAttributes({\n\t\t\t\tmediaID: [],\n\t\t\t\timageUrl: [],\n\t\t\t\timageAlt: []\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\tMediaUploadCheck,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\tmultiple: true,\n\t\t\t\t\tgallery: true,\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\tallowedTypes: [\"image\"],\n\t\t\t\t\tvalue: attributes.mediaID,\n\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\treturn getImageButton(open);\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t),\n\t\t\tattributes.imageUrl.length != 0 && // imageUrl（配列の長さ）で判定\n\t\t\twp.element.createElement(\n\t\t\t\tMediaUploadCheck,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{\n\t\t\t\t\t\tonClick: removeMedia,\n\t\t\t\t\t\tisLink: true,\n\t\t\t\t\t\tisDestructive: true,\n\t\t\t\t\t\tclassName: \"removeImage\"\n\t\t\t\t\t},\n\t\t\t\t\t\"\\u753B\\u50CF\\u3092\\u524A\\u9664\"\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\t//画像をレンダリングする関数\n\t\tvar getImagesSave = function getImagesSave(url, alt) {\n\t\t\tvar image_elem = void 0;\n\t\t\tvar imagesArray = [];\n\n\t\t\tfor (var i = 0; i < url.length; i++) {\n\t\t\t\tif (url.length === 0) {\n\t\t\t\t\timage_elem = null;\n\t\t\t\t} else {\n\t\t\t\t\tif (alt[i]) {\n\t\t\t\t\t\timage_elem = wp.element.createElement(\"img\", { className: \"card_image\", src: url[i], alt: alt[i] });\n\t\t\t\t\t} else {\n\t\t\t\t\t\timage_elem = wp.element.createElement(\"img\", {\n\t\t\t\t\t\t\tclassName: \"card_image\",\n\t\t\t\t\t\t\tsrc: url[i],\n\t\t\t\t\t\t\talt: \"\",\n\t\t\t\t\t\t\t\"aria-hidden\": \"true\"\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\timagesArray.push(image_elem);\n\t\t\t}\n\t\t\treturn imagesArray;\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"block-container\" },\n\t\t\tgetImagesSave(attributes.imageUrl, attributes.imageAlt)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zbGlkZXIvYmxvY2suanM/MjdlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIE1lZGlhVXBsb2FkQ2hlY2sgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkQ2hlY2s7XG52YXIgQnV0dG9uID0gd3AuY29tcG9uZW50cy5CdXR0b247XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJteWJsb2NrL2Jsb2NrLWltYWdlXCIsIHtcblx0dGl0bGU6IFwi55S75YOP44OW44Ot44OD44KvXCIsXG5cdGljb246IFwiaW5kZXgtY2FyZFwiLFxuXHRjYXRlZ29yeTogXCJjb21tb25cIixcblx0YXR0cmlidXRlczoge1xuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6IFwibnVtYmVyXCJcblx0XHR9LFxuXHRcdGltYWdlVXJsOiB7XG5cdFx0XHR0eXBlOiBcImFycmF5XCIsXG5cdFx0XHRkZWZhdWx0OiBbXVxuXHRcdH0sXG5cdFx0aW1hZ2VBbHQ6IHtcblx0XHRcdHR5cGU6IFwiYXJyYXlcIixcblx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cblx0XHR2YXIgb25TZWxlY3RJbWFnZSA9IGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UobWVkaWEpIHtcblx0XHRcdHZhciBtZWRpYV9JRCA9IG1lZGlhLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcblx0XHRcdFx0cmV0dXJuIGltYWdlLmlkO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgaW1hZ2VVcmwgPSBtZWRpYS5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHRcdHJldHVybiBpbWFnZS51cmw7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBpbWFnZUFsdCA9IG1lZGlhLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcblx0XHRcdFx0cmV0dXJuIGltYWdlLmFsdDtcblx0XHRcdH0pO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdG1lZGlhSUQ6IG1lZGlhX0lELFxuXHRcdFx0XHRpbWFnZVVybDogaW1hZ2VVcmwsXG5cdFx0XHRcdGltYWdlQWx0OiBpbWFnZUFsdFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vVVJMIOOBrumFjeWIl+OBi+OCieeUu+WDj+OCkueUn+aIkFxuXHRcdHZhciBnZXRJbWFnZXMgPSBmdW5jdGlvbiBnZXRJbWFnZXModXJscykge1xuXHRcdFx0dmFyIGltYWdlc0FycmF5ID0gdXJscy5tYXAoZnVuY3Rpb24gKHVybCkge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiB1cmwsIGNsYXNzTmFtZTogXCJpbWFnZVwiLCBhbHQ6IFwiXFx1MzBBMlxcdTMwQzNcXHUzMEQ3XFx1MzBFRFxcdTMwRkNcXHUzMEM5XFx1NzUzQlxcdTUwQ0ZcIiB9KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGltYWdlc0FycmF5O1xuXHRcdH07XG5cblx0XHQvL+ODoeODh+OCo+OCouODqeOCpOODluODqeODquOCkumWi+OBj+ODnOOCv+ODs+OCkuODrOODs+ODgOODquODs+OCsOOBmeOCi+mWouaVsO+8iOS4iuiomOmWouaVsOOCkuS9v+OBo+OBpueUu+WDj+OCkuODrOODs+ODgOODquODs+OCsO+8iVxuXHRcdHZhciBnZXRJbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldEltYWdlQnV0dG9uKG9wZW4pIHtcblx0XHRcdGlmIChhdHRyaWJ1dGVzLmltYWdlVXJsLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgb25DbGljazogb3BlbiwgY2xhc3NOYW1lOiBcImJsb2NrLWNvbnRhaW5lclwiIH0sXG5cdFx0XHRcdFx0Z2V0SW1hZ2VzKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiYnV0dG9uLWNvbnRhaW5lclwiIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0eyBvbkNsaWNrOiBvcGVuLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiIH0sXG5cdFx0XHRcdFx0XHRcIlxcdTc1M0JcXHU1MENGXFx1MzA5MlxcdTMwQTJcXHUzMEMzXFx1MzBEN1xcdTMwRURcXHUzMEZDXFx1MzBDOVwiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvL+eUu+WDj+OCkuWJiumZpOOBmeOCi++8iOODoeODh+OCo+OCouOCkuODquOCu+ODg+ODiOOBmeOCi++8iemWouaVsFxuXHRcdHZhciByZW1vdmVNZWRpYSA9IGZ1bmN0aW9uIHJlbW92ZU1lZGlhKCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdG1lZGlhSUQ6IFtdLFxuXHRcdFx0XHRpbWFnZVVybDogW10sXG5cdFx0XHRcdGltYWdlQWx0OiBbXVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRNZWRpYVVwbG9hZENoZWNrLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZSxcblx0XHRcdFx0XHRnYWxsZXJ5OiB0cnVlLFxuXHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdEltYWdlLFxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlczogW1wiaW1hZ2VcIl0sXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMubWVkaWFJRCxcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYub3Blbjtcblx0XHRcdFx0XHRcdHJldHVybiBnZXRJbWFnZUJ1dHRvbihvcGVuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0YXR0cmlidXRlcy5pbWFnZVVybC5sZW5ndGggIT0gMCAmJiAvLyBpbWFnZVVybO+8iOmFjeWIl+OBrumVt+OBle+8ieOBp+WIpOWumlxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRNZWRpYVVwbG9hZENoZWNrLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IHJlbW92ZU1lZGlhLFxuXHRcdFx0XHRcdFx0aXNMaW5rOiB0cnVlLFxuXHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJyZW1vdmVJbWFnZVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcIlxcdTc1M0JcXHU1MENGXFx1MzA5MlxcdTUyNEFcXHU5NjY0XCJcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cblx0XHQvL+eUu+WDj+OCkuODrOODs+ODgOODquODs+OCsOOBmeOCi+mWouaVsFxuXHRcdHZhciBnZXRJbWFnZXNTYXZlID0gZnVuY3Rpb24gZ2V0SW1hZ2VzU2F2ZSh1cmwsIGFsdCkge1xuXHRcdFx0dmFyIGltYWdlX2VsZW0gPSB2b2lkIDA7XG5cdFx0XHR2YXIgaW1hZ2VzQXJyYXkgPSBbXTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHVybC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRpbWFnZV9lbGVtID0gbnVsbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoYWx0W2ldKSB7XG5cdFx0XHRcdFx0XHRpbWFnZV9lbGVtID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBcImNhcmRfaW1hZ2VcIiwgc3JjOiB1cmxbaV0sIGFsdDogYWx0W2ldIH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpbWFnZV9lbGVtID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImNhcmRfaW1hZ2VcIixcblx0XHRcdFx0XHRcdFx0c3JjOiB1cmxbaV0sXG5cdFx0XHRcdFx0XHRcdGFsdDogXCJcIixcblx0XHRcdFx0XHRcdFx0XCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGltYWdlc0FycmF5LnB1c2goaW1hZ2VfZWxlbSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaW1hZ2VzQXJyYXk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IFwiYmxvY2stY29udGFpbmVyXCIgfSxcblx0XHRcdGdldEltYWdlc1NhdmUoYXR0cmlidXRlcy5pbWFnZVVybCwgYXR0cmlidXRlcy5pbWFnZUFsdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zbGlkZXIvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/slider/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zbGlkZXIvc3R5bGUuc2Nzcz8yNzI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2xpZGVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************!*\
  !*** ./src/slider/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zbGlkZXIvZWRpdG9yLnNjc3M/OGFkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NsaWRlci9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);