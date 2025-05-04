require('dotenv').config()
const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = process.env.UPGRADEABLE_PROXY;

//deploy MyContractV2 
////TransparentUpgradeableProxy bind the MyContractV2
async function main(){
    const contractV2Factory = await ethers.getContractFactory("MyContractV2");
    console.log("UPGRADEABLE_PROXY=",UPGRADEABLE_PROXY);
    let proxyContract = await upgrades.upgradeProxy(UPGRADEABLE_PROXY,contractV2Factory);
    
    //升级透明代码合约地址
    const proxy_Contract_addr = await proxyContract.getAddress();

    //返回v1版本合约(MyContractV2)地址
    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy_Contract_addr
      );

    console.log("proxyContract address:",proxy_Contract_addr);
    console.log("implementationAddress(MyContractV2)", implementationAddress);


    //调用3次自增方法
    await proxyContract.decrease();
    await proxyContract.decrease();
    await proxyContract.decrease();

    //调用升级合约获取number值
    const result = await proxyContract.getNumber();
    console.log("getNumber=",result);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})