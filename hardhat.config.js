require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-verify");
require('dotenv').config()

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.28",
  networks:{
    sepolia:{
      url: SEPOLIA_URL,
      accounts:[PRIVATE_KEY],
    }
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY
  }
};
