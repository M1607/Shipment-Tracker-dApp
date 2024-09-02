// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Shipment.sol";
import "./TypeShipment.sol";
import "./Events.sol";

/**
 * This is the main contract that manages the shipment tracking process. It leverages 
 * the ShipmentContract and TypeShipmentContract to store and manage shipment data, and uses 
 * the ShipmentEvents contract to emit events that log key actions and state changes in the 
 * shipment lifecycle. The Tracking contract includes functions for creating shipments, 
 * starting and completing shipments, and retrieving shipment data.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

contract Tracking is ShipmentContract, TypeShipmentContract, ShipmentEvents {
    // Mapping from sender's address to their list of shipments
    mapping(address => Shipment[]) public shipments;
    // Array to store all types of shipments
    TypeShipment[] typeShipments;
    // Counter to track the number of shipments created
    uint256 public shipmentCount;

    // Constructor initializes the shipment count to zero
    constructor() {
        shipmentCount = 0;
    }

    /**
     * Creates a new shipment and stores it in the sender's list of shipments.
     * The shipment is initialized with a PENDING status.
     * Emits a ShipmentCreated event.
     * 
     * @param _receiver The address of the shipment receiver.
     * @param _pickupTime The timestamp when the shipment is picked up.
     * @param _distance The distance the shipment will travel.
     * @param _price The price required to initiate the shipment.
     */
    function createShipment(
        address _receiver,
        uint256 _pickupTime,
        uint256 _distance,
        uint256 _price
    ) public payable {
        // Ensure the payment sent matches the price of the shipment
        require(msg.value == _price, "Payment amount must match the price.");

        // Create a new shipment object and add it to the sender's shipments array
        Shipment memory shipment = Shipment(
            msg.sender,
            _receiver,
            _pickupTime,
            0,  // Delivery time is set to 0 initially
            _distance,
            _price,
            ShipmentStatus.PENDING,
            false  // isPaid is false since payment is not yet processed
        );

        shipments[msg.sender].push(shipment);
        shipmentCount++;

        // Also store the shipment in the TypeShipment array
        typeShipments.push(
            TypeShipment(
                msg.sender,
                _receiver,
                _pickupTime,
                0,
                _distance,
                _price,
                ShipmentStatus.PENDING,
                false
            )
        );

        // Emit an event to log the creation of the shipment
        emit ShipmentCreated(
            msg.sender,
            _receiver,
            _pickupTime,
            _distance,
            _price
        );
    }

    /**
     * Marks a shipment as "In Transit" by updating its status.
     * Emits a ShipmentInTransit event.
     * 
     * @param _sender The address of the shipment sender.
     * @param _receiver The address of the shipment receiver.
     * @param _index The index of the shipment in the sender's list.
     */
    function startShipment(
        address _sender,
        address _receiver,
        uint256 _index
    ) public {
        // Retrieve the shipment from the sender's list using the index
        Shipment storage shipment = shipments[_sender][_index];
        TypeShipment storage typeShipment = typeShipments[_index];

        // Verify that the receiver is correct and the shipment is still pending
        require(shipment.receiver == _receiver, "Invalid receiver.");
        require(
            shipment.status == ShipmentStatus.PENDING,
            "Shipment already in transit."
        );

        // Update the status to "In Transit"
        shipment.status = ShipmentStatus.IN_TRANSIT;
        typeShipment.status = ShipmentStatus.IN_TRANSIT;

        // Emit an event to log that the shipment is now in transit
        emit ShipmentInTransit(_sender, _receiver, shipment.pickupTime);
    }

    /**
     * Completes the shipment by marking it as "Delivered" and processing payment.
     * Transfers the payment to the sender.
     * Emits ShipmentDelivered and ShipmentPaid events.
     * 
     * @param _sender The address of the shipment sender.
     * @param _receiver The address of the shipment receiver.
     * @param _index The index of the shipment in the sender's list.
     */
    function completeShipment(
        address _sender,
        address _receiver,
        uint256 _index
    ) public {
        // Retrieve the shipment from the sender's list using the index
        Shipment storage shipment = shipments[_sender][_index];
        TypeShipment storage typeShipment = typeShipments[_index];

        // Verify that the receiver is correct, shipment is in transit, and not yet paid
        require(shipment.receiver == _receiver, "Invalid receiver.");
        require(
            shipment.status == ShipmentStatus.IN_TRANSIT,
            "Shipment is not in transit."
        );
        require(!shipment.isPaid, "Shipment already paid.");

        // Mark the shipment as delivered and record the delivery time
        shipment.status = ShipmentStatus.DELIVERED;
        typeShipment.status = ShipmentStatus.DELIVERED;
        typeShipment.deliveryTime = block.timestamp;
        shipment.deliveryTime = block.timestamp;

        // Transfer the payment amount to the sender
        uint256 amount = shipment.price;
        payable(shipment.sender).transfer(amount);

        // Update payment status
        shipment.isPaid = true;
        typeShipment.isPaid = true;

        // Emit events to log the delivery and payment
        emit ShipmentDelivered(_sender, _receiver, shipment.deliveryTime);
        emit ShipmentPaid(_sender, _receiver, amount);
    }

    /**
     * Retrieves the details of a specific shipment.

     * @param _sender The address of the shipment sender.
     * @param _index The index of the shipment in the sender's list.
     * @return Various details about the shipment.
     */
    function getShipment(
        address _sender,
        uint256 _index
    )
        public
        view
        returns (
            address,
            address,
            uint256,
            uint256,
            uint256,
            uint256,
            ShipmentStatus,
            bool
        )
    {
        Shipment memory shipment = shipments[_sender][_index];
        return (
            shipment.sender,
            shipment.receiver,
            shipment.pickupTime,
            shipment.deliveryTime,
            shipment.distance,
            shipment.price,
            shipment.status,
            shipment.isPaid
        );
    }

    /**
     * Returns the number of shipments associated with a specific sender.
     * 
     * @param _sender The address of the shipment sender.
     * @return The number of shipments for the sender.
     */
    function getShipmentsCount(address _sender) public view returns (uint256) {
        return shipments[_sender].length;
    }

    /**
     * Retrieves all the transactions stored in the typeShipments array.
     * 
     * @return An array of all TypeShipment records.
     */
    function getAllTransactions() public view returns (TypeShipment[] memory) {
        return typeShipments;
    }
}