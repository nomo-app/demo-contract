import { ethers } from "hardhat";

async function main() {
  const priceOracle = await ethers.deployContract("PriceOracle");

  const address = await priceOracle.getAddress();

  console.log("PriceOracle deployed to:", address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
