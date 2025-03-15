const { ethers } = require('ethers');
require("@chainlink/env-enc").config();
import process from "node:process";

const sepoliaUrl = process.env.SCROLL_RPC;

const provider = new ethers.JsonRpcProvider(sepoliaUrl);

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

async function sendTransaction() {
    const tx = {
        to: '0x02DC6a217Cc8f4649310A155905deA7C0ADe0AF8', // Destiny address
        value: ethers.parseEther('0.1'), // Amount to be transferred
        gasLimit: 21000,
        // gasPrice: let provider define it
    };

    try {
        const txResponse = await wallet.sendTransaction(tx);
        console.log('Transaction hash:', txResponse.hash);

        // wait for transaction to be mined
        const receipt = await txResponse.wait();
        console.log('Transaction mined. Data:', receipt);
    } catch (e) {
        console.error('Error sending transaction', e);
    }
}

sendTransaction();
