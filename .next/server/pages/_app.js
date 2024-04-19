(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: ./images/logo.ico
/* harmony default export */ const logo = ({"src":"/_next/static/image/images/logo.49ce5438960234df85265908b8dbb36a.ico","height":150,"width":150});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function NFTMarketplace({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "grid grid-cols-12 items-center border-b p-6",
      style: {
        backgroundColor: "purple"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-span-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mx-auto h-16 w-16",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: logo,
              className: "w-full cursor-pointer"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-span-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-2xl text-center font-bold text-white",
          children: "Rise&Fame Marketplace"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex mt-4 justify-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mr-4",
              children: "Main Marketplace"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/business-brand",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mr-6 text-white",
              children: "Business Brand"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/mint-item",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mr-6",
              children: "Mint Tokens"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/account-dashboard",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mr-6",
              children: "Account Dashboard"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/customer-collector",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mr-6 text-white",
              children: "Customer Collector"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/my-nfts",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mr-6",
              children: "My NFts"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/about",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mr-6 text-black font-bold",
              children: "About"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (NFTMarketplace);

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,675], () => (__webpack_exec__(4916)));
module.exports = __webpack_exports__;

})();