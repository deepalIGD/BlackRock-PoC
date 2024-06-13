# Pre-requisites
Install Nodejs

# Installation
npm install

# Start

Run hardhat node as a fork of the Ethereum mainnet:

```
npx hardhat node --fork https://mainnet.infura.io/v3/5b7d545a6ebb46078acc75aa8a6d9efd
```

Transfer BUILDT tokens to an allowed address (transfer will succeed):
```
npx hardhat run .\impersonateBUILDTTokenTransferAllowed --network localhost
```

Transfer BUILDT tokens to an unregistered address (transfer will revert with a message - Wallet not in registry service)

```
npx hardhat run .\impersonateBUILDTokenTransferNotAllowed --network localhost
```





