/**
 * The GetShipment component is a React functional component designed 
 * to retrieve and display details of a specific shipment within the 
 * shipment tracking system. Users can input an ID to fetch shipment details, 
 * which are then displayed in a modal. This component is built to be expanded 
 * with additional functionality in the future.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import { useState } from "react";
import {
  modalOverlayStyle,
  modalContainerStyle,
  formInputStyle,
  closeButtonStyle,
  buttonStyle,
  formHeaderTextStyle,
  formContainerStyle,
  dataContainerStyle
} from "../styles";

export default function GetShipment({ getModel, setGetModel, getShipment }) {
  // State to store the index input by the user
  const [index, setIndex] = useState(0);
  // State to store the data of the retrieved shipment
  const [singleShipmentData, setSingleShipmentData] = useState();

  // Function to fetch shipment data based on the provided index
  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData); // Debugging: Log retrieved data
  };

  // Function to convert timestamp to a readable date format
  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dateTime;
  };

  return getModel ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/* Overlay to close the modal */}
      <div
        className={modalOverlayStyle}
        onClick={() => setGetModel(false)}
      ></div>

      {/* Modal content */}
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className={modalContainerStyle}>
          {/* Close button */}
          <div className="flex justify-end">
            <button
              className={closeButtonStyle}
              onClick={() => setGetModel(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Form content */}
          <div className={formContainerStyle}>
            <h4 className={formHeaderTextStyle}>
              Product Tracking Details
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              {/* Input for shipment ID */}
              <div className="relative mt-3">
                <input
                  type="number"
                  placeholder="Id"
                  className={formInputStyle}
                  onChange={(e) => setIndex(e.target.value)}
                />
              </div>

              {/* Button to fetch shipment details */}
              <button
                onClick={getShipmentData}
                className={buttonStyle}
              >
                Get details
              </button>
            </form>

            {/* Display the fetched shipment data */}
            {singleShipmentData === undefined ? (
              ""
            ) : (
              <div className={dataContainerStyle}>
                <p>Sender: {singleShipmentData.sender.slice(0, 25)}...</p>
                <p>Receiver: {singleShipmentData.receiver.slice(0, 25)}...</p>
                <p>Pickup Time: {convertTime(singleShipmentData.pickupTime)}</p>
                <p>Delivery Time: {convertTime(singleShipmentData.deliveryTime)}</p>
                <p>Distance: {singleShipmentData.distance} km</p>
                <p>Price: {singleShipmentData.price} ETH</p>
                <p>Status: {singleShipmentData.status}</p>
                <p>Paid: {singleShipmentData.isPaid ? "Complete" : "Not Completed"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
