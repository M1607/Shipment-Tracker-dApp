// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Shipment.sol";

/**
 * This contract defines the TypeShipment structure, which is similar to the Shipment structure
 * but is used to store different types of shipment data in an array. It tracks additional information
 * about the shipment, allowing for future expansion and modularity in shipment tracking.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

 contract TypeShipmentContract {
    struct TypeShipment {
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        ShipmentContract.ShipmentStatus status;
        bool isPaid;
    }
}
