webpackHotUpdate_N_E("pages/[meetupID]",{

/***/ "./components/meetups/meetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/meetupDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");

var _jsxFileName = "D:\\Next Js\\meetup\\components\\meetups\\meetupDetails.js";


function MeetupDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: "This is image place"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

_c = MeetupDetails;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/[meetupID]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupID]/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_meetupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/meetupDetails */ "./components/meetups/meetupDetails.js");


var _jsxFileName = "D:\\Next Js\\meetup\\pages\\[meetupID]\\index.js",
    _s = $RefreshSig$();




function MeetUpDetailPage(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_meetupDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imaga: "https://makkah.accorhotels.com/wp-content/uploads/sites/55/2018/08/hajj-rituals-makkah-accorhotels-1024x683.jpg",
    title: "title",
    address: "address"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

_s(MeetUpDetailPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = MeetUpDetailPage;
/* harmony default export */ __webpack_exports__["default"] = (MeetUpDetailPage);

var _c;

$RefreshReg$(_c, "MeetUpDetailPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL21lZXR1cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ttZWV0dXBJRF0vaW5kZXguanMiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTWVldFVwRGV0YWlsUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQTZCO0FBQ3pCLHNCQUFPLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0g7QUFBSyxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsS0FBaEI7QUFBdUIsU0FBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUVIO0FBQUEsZ0JBQUtELEtBQUssQ0FBQ0U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkcsZUFHSDtBQUFBLGdCQUFJRixLQUFLLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTUg7O0tBUFFKLGE7QUFVTUEsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7O0FBRUEsU0FBU0ssZ0JBQVQsQ0FBMEJKLEtBQTFCLEVBQWdDO0FBQUE7O0FBQzVCLE1BQU1LLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxzQkFBUSxxRUFBQyx5RUFBRDtBQUFlLFNBQUssRUFBQyxpSEFBckI7QUFBdUksU0FBSyxFQUFDLE9BQTdJO0FBQXFKLFdBQU8sRUFBQztBQUE3SjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFDSDs7R0FIUUYsZ0I7VUFDVUUscUQ7OztLQURWRixnQjtBQUtNQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSURdLmQwNmEwMDQwNDA4Yzg0ODgyNzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpe1xyXG4gICAgcmV0dXJuIDxDYXJkPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PVwiVGhpcyBpcyBpbWFnZSBwbGFjZVwiIC8+XHJcbiAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgPC9DYXJkPlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscyIsIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL21lZXR1cERldGFpbHMnXHJcblxyXG5mdW5jdGlvbiBNZWV0VXBEZXRhaWxQYWdlKHByb3BzKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4gIDxNZWV0dXBEZXRhaWxzIGltYWdhPSdodHRwczovL21ha2thaC5hY2NvcmhvdGVscy5jb20vd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzU1LzIwMTgvMDgvaGFqai1yaXR1YWxzLW1ha2thaC1hY2NvcmhvdGVscy0xMDI0eDY4My5qcGcnIHRpdGxlPSd0aXRsZScgYWRkcmVzcz0nYWRkcmVzcycgLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwRGV0YWlsUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=