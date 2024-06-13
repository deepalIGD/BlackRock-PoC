import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
        forking:{
            enabled: true,
            url: `https://mainnet.infura.io/v3/5b7d545a6ebb46078acc75aa8a6d9efd`
        },
        chainId: 31337,
    },
    localhost: {
      timeout: 600000, // Increase timeout to 60 seconds
    }
  }
};

export default config;

