/**
 * Manages the connection to the Ethereum network, including wallet 
 * connections, providers, and signers. This class centralizes the 
 * logic related to interacting with Ethereum, such as connecting to 
 * MetaMask and fetching the contract instance.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

import Web3Modal from "web3modal";
import { ethers } from "ethers";

// EthereumProvider class to manage Ethereum connections and providers
class EthereumProvider {
  constructor() {
    this.web3Modal = new Web3Modal();
  }

  // Connect to MetaMask and return the signer
  async connectWallet() {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    const connection = await this.web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return { provider, signer };
  }

  // Get provider without signing (useful for read-only operations)
  getReadOnlyProvider() {
    return new ethers.providers.JsonRpcProvider();
  }
}

export default EthereumProvider;
