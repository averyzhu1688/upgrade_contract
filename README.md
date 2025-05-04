# OpenZeppelin Hardhat Upgrades
deploy the v1 conract:
npx hardhat run scripts/deploy_v1.js --network sepolia

upgrade contract v2
 npx hardhat run scripts/upgradeV1.js --network sepolia

 


# Hardhat verify MyContractV1
 npx hardhat verify --network sepolia 0x3CC22aeF35b75069608e041e813D7C61a16ecAef
Successfully verified contract MyContractV1 on the block explorer.
https://sepolia.etherscan.io/address/0x3CC22aeF35b75069608e041e813D7C61a16ecAef#code


# hardhat verify MyContractV2
npx hardhat verify --network sepolia 0x8f49cb15F1c8F5346d865dFd0B19e5f9Fc6C8539
Successfully verified contract MyContractV2 on the block explorer.
https://sepolia.etherscan.io/address/0x8f49cb15F1c8F5346d865dFd0B19e5f9Fc6C8539#code