// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * This contract defines the Shipment structure and the ShipmentStatus enumeration.
 * It is used to represent the status and details of a shipment, including sender, receiver,
 * pickup and delivery times, distance, price, and payment status.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

 contract ShipmentContract {
    enum ShipmentStatus {
        PENDING,
        IN_TRANSIT,
        DELIVERED
    }

    struct Shipment {
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        ShipmentStatus status;
        bool isPaid;
    }
}