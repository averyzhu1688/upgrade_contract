
const { ethers, upgrades } = require("hardhat");


//deploy MyContractV1、TransparentUpgradeableProxy、ProxyAdmin
//TransparentUpgradeableProxy bind the MyContractV1
async function main(){
    //const gas = await ethers.provider.getFeeData();
    const contractV1Factory = await ethers.getContractFactory("MyContractV1");
    const proxy_Contract = await upgrades.deployProxy(contractV1Factory, [42],{
        initializer:"initialValue"
    });
    await proxy_Contract.waitForDeployment();
    //升级透明代码合约地址
    const proxy_Contract_addr = await proxy_Contract.getAddress();
    //返回v1版本合约(MyContractV1)地址
    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy_Contract_addr
      );

    //
    const proxyAdminAddress = await upgrades.erc1967.getAdminAddress(
        proxy_Contract_addr
        );
    console.log("proxyAdminAddress:",proxyAdminAddress);
    console.log("MyContractV1 address:",implementationAddress);
    console.log(`proxy contract address:${proxy_Contract_addr}`);
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});