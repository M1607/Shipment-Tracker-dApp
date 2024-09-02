/**
 * This script deploys a smart contract called Tracking to the 
 * Ethereum blockchain. It uses Hardhat, which is a development 
 * framework that provides tools and libraries to compile, deploy, 
 * test, and debug Ethereum software.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

// Import the Hardhat Runtime Environment explicitly
const hre = require("hardhat");

async function main() {
    // Retrieve the contract factory for the "Tracking" contract
    // The contract factory is an abstraction to deploy new instances of the contract
    const Tracking = await hre.ethers.getContractFactory("Tracking");

    // Deploy the "Tracking" contract
    // The deploy() function initiates the deployment and returns a promise that resolves to the contract instance
    const tracking = await Tracking.deploy();

    // Wait until the deployment is confirmed
    // The contract will be deployed on the network, and this step ensures that it's properly deployed
    await tracking.deployed();

    // Log the address where the contract was deployed
    console.log(
        `Tracking deployed to ${tracking.address}`
    );
}

// Execute the main function and handle any errors
main().catch((error) => {
    // Log the error to the console
    console.error(error);
    // Exit the process with an error code to indicate failure
    process.exitCode = 1;
});
