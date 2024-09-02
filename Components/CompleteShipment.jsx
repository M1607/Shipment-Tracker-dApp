/**
 * The CompleteShipment component is a React functional component 
 * that provides an interface for marking a shipment as complete 
 * within the shipment tracking system. Users can input the receiver's 
 * address and shipment ID to update the shipment's status. This component 
 * interacts with a function that communicates with a backend or blockchain 
 * to finalize the shipment. The modal can be opened or closed based on 
 * the `completeModal` state.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import React, { useState } from "react";
import { Str1 } from ".";
import {
  buttonStyle,       // Reusable style for buttons
  modalOverlayStyle, // Reusable style for the modal overlay
  modalContainerStyle, // Reusable style for the modal container
  formInputStyle,    // Reusable style for form inputs
  closeButtonStyle   // Reusable style for the close button
} from "../styles";

export default function CompleteShipment({ completeModal, setCompleteModal, completeShipment }) {
  // State to manage input fields for receiver and shipment index
  const [completeShip, setCompleteShip] = useState({
    receiver: "",
    index: "",
  });

  // Function to trigger the shipment completion process
  const changeStatus = async () => {
    completeShipment(completeShip);
  };

  return completeModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/* Overlay to close the modal */}
      <div className={modalOverlayStyle} onClick={() => setCompleteModal(false)}></div>

      {/* Modal content */}
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className={modalContainerStyle}>
          {/* Close button */}
          <div className="flex justify-end">
            <button className={closeButtonStyle} onClick={() => setCompleteModal(false)}>
              <Str1 />
            </button>
          </div>

          {/* Form content */}
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">Complete Shipment</h4>

            <form onSubmit={(e) => e.preventDefault()}>
              {/* Input for receiver */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Receiver"
                  className={formInputStyle}
                  onChange={(e) =>
                    setCompleteShip({
                      ...completeShip,
                      receiver: e.target.value,
                    })
                  }
                />
              </div>

              {/* Input for shipment ID */}
              <div className="relative mt-3">
                <input
                  type="number"
                  placeholder="ID"
                  className={formInputStyle}
                  onChange={(e) =>
                    setCompleteShip({
                      ...completeShip,
                      index: e.target.value,
                    })
                  }
                />
              </div>

              {/* Button to change the shipment status */}
              <button
                onClick={changeStatus}
                className={`block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2 ${buttonStyle}`}
              >
                Change Status
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null; // Return null if completeModal is false, meaning the modal shouldn't be displayed
}
