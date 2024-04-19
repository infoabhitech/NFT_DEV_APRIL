"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 4899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7548);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      inputName,
      inputCountry,
      inputRegion,
      inputDescription,
      inputEmail,
      inputIndustry
    } = req.body;
    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    try {
      await client.connect();
      const database = client.db('NFTDatabase'); // Choose a name for your database

      const collection = database.collection('NFTBusiness'); // Choose a name for your collection

      await collection.insertOne({
        inputName,
        inputCountry,
        inputRegion,
        inputDescription,
        inputEmail,
        inputIndustry
      });
      res.status(201).json({
        message: 'Data submitted successfully!'
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong!'
      });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed!'
    });
  }
}

/***/ }),

/***/ 7548:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4899));
module.exports = __webpack_exports__;

})();