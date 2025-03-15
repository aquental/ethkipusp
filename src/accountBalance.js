const { ethers } = require("ethers");

const alchemyUrl = 'RPC';

const provider = new ethers.JsonRpcProvider(alchemyUrl);

//Vitalik Address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

async function getBalance() {
    try {
        const balance = await provider.getBalance(address);
        console.log("Saldo da conta:", ethers.formatEther(balance), "ETH");
    } catch (e) {
        console.error("Erro ao obter o saldo da conta", e);
    }
}

getBalance();
