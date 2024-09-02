// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * This contract defines all the events related to shipment tracking. 
 * These events include ShipmentCreated, ShipmentInTransit, ShipmentDelivered, and ShipmentPaid.
 * Events are used to log important actions and state changes in the shipment process.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

 contract ShipmentEvents {
    event ShipmentCreated(
        address indexed sender,
        address indexed receiver,
        uint256 pickupTime,
        uint256 distance,
        uint256 price
    );
    event ShipmentInTransit(
        address indexed sender,
        address indexed receiver,
        uint256 pickupTime
    );
    event ShipmentDelivered(
        address indexed sender,
        address indexed receiver,
        uint256 deliveryTime
    );
    event ShipmentPaid(
        address indexed sender,
        address indexed receiver,
        uint256 amount
    );
}