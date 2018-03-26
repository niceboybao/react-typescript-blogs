webpackJsonp([2],{

/***/ 179:
/*!*****************************************!*\
  !*** ./src/containers/Team4/reducer.ts ***!
  \*****************************************/
/*! exports provided: name, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 66);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_actions__ = __webpack_require__(/*! redux-actions */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(/*! ./constants */ 43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(/*! ../../constants */ 22);\n\n\n\n\nvar _handleActions;\n\n\n\n\nvar name = __WEBPACK_IMPORTED_MODULE_5__constants__[\"e\" /* RN_TEAM4_HTTP_QUERY */];\nvar httpReducer = Object(__WEBPACK_IMPORTED_MODULE_3_redux_actions__[\"handleActions\"])((_handleActions = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_handleActions, __WEBPACK_IMPORTED_MODULE_4__constants__[\"e\" /* HTTP_GET_FETCH_SUCCEEDED */], function (state, action) {\n    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state, {\n        httpData: state.httpData.concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(action.payload, null, 4))\n    });\n}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_handleActions, __WEBPACK_IMPORTED_MODULE_4__constants__[\"d\" /* HTTP_GET_FETCH_RESPONSE_ERROR */], function (state, action) {\n    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state, {\n        httpData: state.httpData.concat('[' + action.payload + ']')\n    });\n}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_handleActions, __WEBPACK_IMPORTED_MODULE_4__constants__[\"b\" /* HTTP_GET_FETCH_FAILED */], function (state, action) {\n    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state, {\n        httpData: state.httpData.concat('[' + action.payload + ']')\n    });\n}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_handleActions, __WEBPACK_IMPORTED_MODULE_4__constants__[\"f\" /* SHOW_ALL_DATA */], function (state, action) {\n    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state, {\n        httpDataFilter: \"ALL\"\n    });\n}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_handleActions, __WEBPACK_IMPORTED_MODULE_4__constants__[\"g\" /* SHOW_EVEN_DATA */], function (state, action) {\n    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state, {\n        httpDataFilter: \"EVEN\"\n    });\n}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_handleActions, __WEBPACK_IMPORTED_MODULE_4__constants__[\"h\" /* SHOW_ODD_DATA */], function (state, action) {\n    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state, {\n        httpDataFilter: \"ODD\"\n    });\n}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_handleActions, __WEBPACK_IMPORTED_MODULE_4__constants__[\"a\" /* CHANGE_SWITCH_STATUS */], function (state, action) {\n    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state, {\n        switchStatus: !state.switchStatus\n    });\n}), _handleActions), {\n    httpData: ['[initdata]'],\n    httpDataFilter: 'ALL',\n    switchStatus: false\n});\nvar _default = httpReducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n    if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n        return;\n    }\n\n    __REACT_HOT_LOADER__.register(name, 'name', '/Users/niceBoy/Documents/justTryProject/blogs.git/src/containers/Team4/reducer.ts');\n\n    __REACT_HOT_LOADER__.register(httpReducer, 'httpReducer', '/Users/niceBoy/Documents/justTryProject/blogs.git/src/containers/Team4/reducer.ts');\n\n    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/niceBoy/Documents/justTryProject/blogs.git/src/containers/Team4/reducer.ts');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL1RlYW00L3JlZHVjZXIudHM/N2Q5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFjdGlvbiwgaGFuZGxlQWN0aW9ucywgQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCB7SFRUUF9HRVRfRkVUQ0hfU1VDQ0VFREVELCBIVFRQX0dFVF9GRVRDSF9SRVNQT05TRV9FUlJPUiwgSFRUUF9HRVRfRkVUQ0hfRkFJTEVELCBTSE9XX0FMTF9EQVRBLCBTSE9XX09ERF9EQVRBLCBTSE9XX0VWRU5fREFUQSwgQ0hBTkdFX1NXSVRDSF9TVEFUVVN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Uk5fVEVBTTRfSFRUUF9RVUVSWX0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9IFJOX1RFQU00X0hUVFBfUVVFUlk7XG5cbmNvbnN0IGh0dHBSZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyh7XG4gICAgW0hUVFBfR0VUX0ZFVENIX1NVQ0NFRURFRF06IChzdGF0ZSwgYWN0aW9uOiBBY3Rpb248YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIGh0dHBEYXRhOiAoc3RhdGUuaHR0cERhdGEgYXMgQXJyYXk8T2JqZWN0PikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkLCBudWxsLCA0KSlcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbSFRUUF9HRVRfRkVUQ0hfUkVTUE9OU0VfRVJST1JdOiAoc3RhdGUsIGFjdGlvbjogQWN0aW9uPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBodHRwRGF0YTogKHN0YXRlLmh0dHBEYXRhIGFzIEFycmF5PE9iamVjdD4pLmNvbmNhdCgnWycgKyBhY3Rpb24ucGF5bG9hZCArICddJylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbSFRUUF9HRVRfRkVUQ0hfRkFJTEVEXTogKHN0YXRlLCBhY3Rpb246IEFjdGlvbjxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgaHR0cERhdGE6IChzdGF0ZS5odHRwRGF0YSBhcyBBcnJheTxPYmplY3Q+KS5jb25jYXQoJ1snICsgYWN0aW9uLnBheWxvYWQgKyAnXScpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW1NIT1dfQUxMX0RBVEFdOiAoc3RhdGUsIGFjdGlvbjogQWN0aW9uPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBodHRwRGF0YUZpbHRlcjogXCJBTExcIlxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtTSE9XX0VWRU5fREFUQV06IChzdGF0ZSwgYWN0aW9uOiBBY3Rpb248YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIGh0dHBEYXRhRmlsdGVyOiBcIkVWRU5cIlxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtTSE9XX09ERF9EQVRBXTogKHN0YXRlLCBhY3Rpb246IEFjdGlvbjxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgaHR0cERhdGFGaWx0ZXI6IFwiT0REXCJcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbQ0hBTkdFX1NXSVRDSF9TVEFUVVNdOiAoc3RhdGUsIGFjdGlvbjogQWN0aW9uPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBzd2l0Y2hTdGF0dXM6ICFzdGF0ZS5zd2l0Y2hTdGF0dXNcbiAgICAgICAgfSk7XG4gICAgfVxufSxcbiAgICB7XG4gICAgICAgIGh0dHBEYXRhOiBbJ1tpbml0ZGF0YV0nXSxcbiAgICAgICAgaHR0cERhdGFGaWx0ZXI6ICdBTEwnLFxuICAgICAgICBzd2l0Y2hTdGF0dXM6IGZhbHNlXG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb250YWluZXJzL1RlYW00L3JlZHVjZXIudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///179\n");

/***/ })

});