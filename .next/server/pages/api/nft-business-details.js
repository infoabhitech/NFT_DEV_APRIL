"use strict";
(() => {
var exports = {};
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 4317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _mongoose = _interopRequireDefault(__webpack_require__(5619));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NftBusinessSchema = new _mongoose.default.Schema({
  inputName: {
    type: String
  },
  inputDescription: {
    type: String
  }
}, {
  collection: "NFTBusiness"
});
module.exports = _mongoose.default.models.NFTBusiness || _mongoose.default.model("NFTBusiness", NftBusinessSchema);

/***/ }),

/***/ 3970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(5619);
;// CONCATENATED MODULE: ./db/dbConnect.js

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const dbConnect = async () => {
  try {
    await (0,external_mongoose_.connect)(`${process.env.MONGODB_URI}`); // console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error.message}`);
  }
};

/* harmony default export */ const db_dbConnect = (dbConnect);
// EXTERNAL MODULE: ./models/nftBusinessModel.js
var nftBusinessModel = __webpack_require__(4317);
var nftBusinessModel_default = /*#__PURE__*/__webpack_require__.n(nftBusinessModel);
;// CONCATENATED MODULE: ./pages/api/nft-business-details.js


async function handler(req, res) {
  const {
    method,
    body
  } = req;

  if (method === "POST") {
    const businessName = body.business_name;

    if (!businessName) {
      return res.status(400).json({
        success: false,
        message: "No NFT ID!"
      });
    }

    await db_dbConnect();

    try {
      const businessDetails = await nftBusinessModel_default().findOne({
        inputName: businessName
      });
      res.status(200).json({
        success: true,
        business: businessDetails
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message
      });
    }
  }

  return res.status(400).json({
    success: false,
    message: "Unable to process the request."
  });
}

/***/ }),

/***/ 5619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3970));
module.exports = __webpack_exports__;

})();