import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
  throw new Error("Please configure a MNEMONIC in a .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    zeniq: {
      url: "https://smart.zeniq.network:9545",
      chainId: 383414847825,
      accounts: {
        mnemonic,
      }
    },
  }
};

export default config;
