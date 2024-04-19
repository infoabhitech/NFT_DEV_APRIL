"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 2132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getNFTs),
/* harmony export */   "e": () => (/* binding */ getNftBusinessDetails)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4879);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2025);
/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1615);
/* harmony import */ var _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7928);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.polygon.technology/");
const getNFTs = async () => {
  // what we want to load:
  // ***provider, tokenContract, marketContract, data for our marketItems***
  const tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__/* .nftaddress */ .k, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, provider);
  const marketContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__/* .nftmarketaddress */ .A, _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_2__/* .abi */ .Mt, provider);
  const data = await marketContract.fetchMarketTokens();
  const items = await Promise.all(data.map(async i => {
    const tokenUri = await tokenContract.tokenURI(i.tokenId); // we want get the token metadata - json

    const meta = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenUri);
    let price = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatUnits(i.price.toString(), "ether");
    let item = {
      price,
      tokenId: i.tokenId.toNumber(),
      seller: i.seller,
      owner: i.owner,
      image: meta.data.image,
      name: meta.data.name,
      description: meta.data.description
    };
    return item;
  }));
  return items !== null && items !== void 0 ? items : [];
};
const getNftBusinessDetails = async businessName => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/nft-business-details", {
      business_name: businessName
    });
    return data === null || data === void 0 ? void 0 : data.business;
  } catch (err) {
    throw err;
  }
};

/***/ })

};
;