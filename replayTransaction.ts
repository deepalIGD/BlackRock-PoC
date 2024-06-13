import { ethers, network } from 'hardhat';
const hre = require("hardhat")
import { TransactionResponse, Signer } from 'ethers';


async function impersonate(address: string): Promise<Signer> {
    await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [address],
    });

    const newSigner = await ethers.getSigner(address);
    return newSigner;
}

async function replay(){
    var realSender = await impersonate('0x5072Ed40EBa6bE38C2370cAD1Cb1df0202924e53'); // For real ABUSDT from Fork
    console.log("============The real sender address:=========", realSender.getAddress())

    var rtx = await getTransaction('0xc7c1d9ee18e6a66b7e96e921b6aa03b69770ec9f14d3b95fd886f86db7d7f25a')
    console.log('============the transaction data:==============', rtx?.data);

    //replay transaction

      // Define contract address and data
      const contractAddress = '0x103b907c2278CC0a51Ac5e700b84Da9bFd65B1D1'; // Replace with the contract address
    
  
      // Create transaction object
      const tx = {
          to: contractAddress,
          data: rtx?.data,
          gasLimit: 3000000, // Example: Set the gas limit
          gasPrice: 31972178264 // Example: Set the initial gas price
      };

     
      // Send the transaction
      const response = await realSender.sendTransaction(tx);
  
      console.log('Transaction sent:', response.hash);

}

async function getTransaction(transactionHash: string): Promise<TransactionResponse | null> {
    const provider = hre.ethers.provider;

    try {
        const transaction = await provider.getTransaction(transactionHash);
        //console.log(transaction);
        return transaction
    } catch (error) {
        console.error('Error fetching transaction:', error);
        return null
    }
}
replay()