require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const fs = require('fs');
const keyData = fs.readFileSync('./p-key.txt', {encoding:'utf8', flag:'r'});

module.exports = {
  networks:{
    mumbai:{
      url:'https://polygon-mumbai.infura.io/v3/2Y9wmDTMkkF3sUmqXZC6AHW82A5',
      accounts:[keyData],
      network_id: 80001,
      chainId: 80001,
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
