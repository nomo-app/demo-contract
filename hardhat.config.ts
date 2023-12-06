import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();



const config: HardhatUserConfig = {
  solidity: "0.8.20",

  networks: {
    zeniq: {
      url: "https://smart.zeniq.network:9545",
      chainId: 383414847825,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      }
    },
  }
};

export default config;
