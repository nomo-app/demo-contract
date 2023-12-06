import { ethers } from "hardhat";

async function main() {
  const demoContract = await ethers.deployContract("DemoContract");

  const address = await demoContract.getAddress();

  console.log("DemoContract deployed to:", address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
