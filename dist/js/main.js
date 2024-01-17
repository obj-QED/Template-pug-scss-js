/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/alerts_banner/alerts_banner.js":
/*!**************************************************************!*\
  !*** ./src/blocks/components/alerts_banner/alerts_banner.js ***!
  \**************************************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  function closeBanner(banner, observer) {
    banner.classList.add("hidden");
    localStorage.setItem("".concat(banner.id, "Closed"), "true");
    if (observer) {
      observer.disconnect();
    }
  }
  var topBanner = document.getElementById("topBanner");
  var bottomBanner = document.getElementById("bottomBanner");
  function isBannerClosed(banner) {
    return localStorage.getItem("".concat(banner.id, "Closed")) === "true";
  }
  if (isBannerClosed(bottomBanner)) {
    bottomBanner.classList.add("hidden");
  }
  var observer;
  if (!isBannerClosed(bottomBanner)) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          bottomBanner.style.opacity = "0";
        } else {
          bottomBanner.classList.remove("hidden");
          setTimeout(function () {
            return bottomBanner.style.opacity = "1";
          }, 50);
        }
      });
    }, {
      threshold: [0, 1]
    });
    observer.observe(topBanner);
  }
  var closeButton = document.getElementById("bottomBanner");
  closeButton.addEventListener("click", function () {
    closeBanner(bottomBanner, observer);
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_alerts_banner_alerts_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/alerts_banner/alerts_banner */ "./src/blocks/components/alerts_banner/alerts_banner.js");
/* harmony import */ var _components_alerts_banner_alerts_banner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_alerts_banner_alerts_banner__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/vendor.js":
/*!*********************************!*\
  !*** ./src/js/import/vendor.js ***!
  \*********************************/
/***/ (function() {

function checkDevice() {
  function isLandscape() {
    return window.innerWidth > window.innerHeight;
  }
  var isMobile = window.innerWidth <= 992;
  window.device = {
    mobile: isMobile,
    landscape: isLandscape(),
    isMobile: isMobile,
    isMobileLandscape: isMobile && isLandscape(),
    isDesktop: !isMobile
  };
  localStorage.setItem("device", JSON.stringify(window.device));
}
function innerHeightVh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
}
window.addEventListener("load", function () {
  checkDevice();
  innerHeightVh();
});
window.addEventListener("resize", function () {
  checkDevice();
  innerHeightVh();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/vendor */ "./src/js/import/vendor.js");
/* harmony import */ var _import_vendor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_vendor__WEBPACK_IMPORTED_MODULE_2__);



}();
/******/ })()
;
//# sourceMappingURL=main.js.map