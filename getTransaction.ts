const hre = require("hardhat")

async function getTransaction(transactionHash: string) {
    const provider = hre.ethers.provider;

    try {
        const transaction = await provider.getTransaction(transactionHash);
        console.log(transaction);
        const blockNumber = await provider.getBlockNumber();
        console.log('Current block number:', blockNumber);
    } catch (error) {
        console.error('Error fetching transaction:', error);
    }
}

// Usage
const transactionHash = '0x0fbf5040de6293e640e75fcc8519cb928ca33d17438c98dad27d56f5c3e53e49'; // Replace with the actual transaction hash
getTransaction(transactionHash);
