/**
 * The TrackingContext provides a React Context API setup for the
 * Product Tracking Dapp. It acts as a centralized store for state 
 * and methods related to the tracking of shipments on the Ethereum 
 * blockchain. The TrackingProvider component wraps around other 
 * components, allowing them to access and interact with the Ethereum 
 * smart contract without needing to directly manage the contract's 
 * logic or state.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

import React, { useState, useEffect } from "react";
import Tracking from "./Tracking"; // Import the Tracking class

// Creating the TrackingContext using React's createContext API
export const TrackingContext = React.createContext();

/**
 * TrackingProvider is a context provider component that wraps around other components
 * in the application to provide them with access to the Tracking functionalities and state.
 * It manages the connection to the Ethereum wallet, tracks the current user, and provides
 * shipment-related operations to the components that consume this context.
 */
export const TrackingProvider = ({ children }) => {
  // The name of the Dapp, stored as a constant
  const DappName = "Product Tracking Dapp";

  // State variable to store the currently connected user's Ethereum address
  const [currentUser, setCurrentUser] = useState("");

  // Instantiate the Tracking class, which manages shipment operations
  const tracking = new Tracking();

  /**
   * checkIfWalletConnected is a utility function that checks if the user's Ethereum wallet is connected.
   * If a wallet is connected, it sets the currentUser state with the user's Ethereum address.
   */
  const checkIfWalletConnected = async () => {
    try {
      // Request the connected Ethereum accounts from MetaMask
      const accounts = await window.ethereum.request({ method: "eth_accounts" });

      // If an account is found, set it as the current user
      if (accounts.length) {
        setCurrentUser(accounts[0]);
      } else {
        return "No account";
      }
    } catch (error) {
      // Log any errors encountered during the connection check
      console.error("Error checking wallet connection:", error);
    }
  };

  // useEffect hook to check wallet connection status when the component mounts
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  /**
   * The context provider returns a TrackingContext.Provider component that wraps the children components.
   * It provides access to various shipment-related operations and state through the context value.
   * Components that consume this context will have access to functions like createShipment, getAllShipments, etc.
   */
  return (
    <TrackingContext.Provider
      value={{
        connectWallet: tracking.ethereumProvider.connectWallet, // Connect to the user's wallet
        createShipment: tracking.createShipment, // Create a new shipment
        getAllShipments: tracking.getAllShipments, // Get all shipments
        completeShipment: tracking.completeShipment, // Complete a shipment
        getShipment: tracking.getShipment, // Get a specific shipment
        startShipment: tracking.startShipment, // Start a shipment
        getShipmentsCount: tracking.getShipmentsCount, // Get the count of shipments
        DappName, // Name of the Dapp
        currentUser, // Currently connected user's Ethereum address
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
};
