/**
 * Handles all operations related to the shipment tracking system, 
 * including creating shipments, completing shipments, starting 
 * shipments, and fetching shipment data. This class uses the 
 * EthereumProvider to interact with the smart contract.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

import { ethers } from "ethers";
import tracking from "./Tracking.json";
import EthereumProvider from "./EthereumProvider"; // Import the EthereumProvider class

// Contract details
const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const ContractABI = tracking.abi;

// Tracking class to manage shipment-related operations
class Tracking {
  constructor() {
    this.ethereumProvider = new EthereumProvider();
    this.contractAddress = ContractAddress;
    this.contractABI = ContractABI;
  }

  // Internal method to fetch the contract instance
  async _fetchContract(signerOrProvider) {
    return new ethers.Contract(this.contractAddress, this.contractABI, signerOrProvider);
  }

  // Create a new shipment
  async createShipment(items) {
    const { receiver, pickupTime, distance, price } = items;

    try {
      const { signer } = await this.ethereumProvider.connectWallet();
      const contract = await this._fetchContract(signer);

      const createItem = await contract.createShipment(
        receiver,
        new Date(pickupTime).getTime(),
        distance,
        ethers.utils.parseUnits(price, 18),
        {
          value: ethers.utils.parseUnits(price, 18),
        }
      );
      await createItem.wait();
      console.log("Shipment created:", createItem);
    } catch (error) {
      console.error("Error creating shipment:", error);
    }
  }

  // Fetch all shipments
  async getAllShipments() {
    try {
      const provider = this.ethereumProvider.getReadOnlyProvider();
      const contract = await this._fetchContract(provider);

      const shipments = await contract.getAllTransactions();
      return shipments.map((shipment) => ({
        sender: shipment.sender,
        receiver: shipment.receiver,
        price: ethers.utils.formatEther(shipment.price.toString()),
        pickupTime: shipment.pickupTime.toNumber(),
        deliveryTime: shipment.deliveryTime.toNumber(),
        distance: shipment.distance.toNumber(),
        isPaid: shipment.isPaid,
        status: shipment.status,
      }));
    } catch (error) {
      console.error("Error fetching shipments:", error);
    }
  }

  // Get the count of shipments for a specific user
  async getShipmentsCount() {
    try {
      const { provider } = await this.ethereumProvider.connectWallet();
      const contract = await this._fetchContract(provider);

      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const shipmentsCount = await contract.getShipmentsCount(accounts[0]);

      return shipmentsCount.toNumber();
    } catch (error) {
      console.error("Error fetching shipments count:", error);
    }
  }

  // Complete a shipment
  async completeShipment(completeShip) {
    const { receiver, index } = completeShip;

    try {
      const { signer } = await this.ethereumProvider.connectWallet();
      const contract = await this._fetchContract(signer);

      const transaction = await contract.completeShipment(
        receiver,
        index,
        {
          gasLimit: 300000,
        }
      );
      await transaction.wait();
      console.log("Shipment completed:", transaction);
    } catch (error) {
      console.error("Error completing shipment:", error);
    }
  }

  // Fetch a single shipment by index
  async getShipment(index) {
    try {
      const { provider } = await this.ethereumProvider.connectWallet();
      const contract = await this._fetchContract(provider);

      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const shipment = await contract.getShipment(accounts[0], index);

      return {
        sender: shipment[0],
        receiver: shipment[1],
        pickupTime: shipment[2].toNumber(),
        deliveryTime: shipment[3].toNumber(),
        distance: shipment[4].toNumber(),
        price: ethers.utils.formatEther(shipment[5].toString()),
        status: shipment[6],
        isPaid: shipment[7],
      };
    } catch (error) {
      console.error("Error fetching shipment:", error);
    }
  }

  // Start a shipment
  async startShipment(getProduct) {
    const { receiver, index } = getProduct;

    try {
      const { signer } = await this.ethereumProvider.connectWallet();
      const contract = await this._fetchContract(signer);

      const shipment = await contract.startShipment(
        receiver,
        index
      );
      await shipment.wait();
      console.log("Shipment started:", shipment);
    } catch (error) {
      console.error("Error starting shipment:", error);
    }
  }
}

export default Tracking;

