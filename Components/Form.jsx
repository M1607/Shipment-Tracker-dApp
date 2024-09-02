/**
 * The Form component is a React functional component that allows users to create 
 * a shipment by entering details such as the receiver's address, pickup time, distance, 
 * and price. The component includes a form with input fields and a submission button. 
 * The form data is managed using React's state, and upon submission, it triggers the 
 * `createShipment` function passed as a prop. The form is displayed within a modal, 
 * which can be toggled using the `setCreateShipmentModel` prop.
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
  formTextStyle,
  formHeaderTextStyle,
  formContainerStyle
} from "../styles";

export default function Form({ setCreateShipmentModel, createShipmentModel, createShipment }) {
  // State to manage the form inputs for creating a shipment
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  // Function to handle the creation of a shipment
  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("Error creating shipment");
    }
  };

  // Render the form inside a modal if createShipmentModel is true
  return createShipmentModel ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/* Overlay to close the modal */}
      <div
        className={modalOverlayStyle}
        onClick={() => setCreateShipmentModel(false)}
      ></div>

      {/* Modal content */}
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className={modalContainerStyle}>
          {/* Close button */}
          <div className="flex justify-end">
            <button
              className={closeButtonStyle}
              onClick={() => setCreateShipmentModel(false)}
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
              Track Product, Create Shipment
            </h4>
            <p className={formTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Receiver Input */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Receiver"
                  className={formInputStyle}
                  onChange={(e) =>
                    setShipment({
                      ...shipment,
                      receiver: e.target.value,
                    })
                  }
                />
              </div>

              {/* Pickup Time Input */}
              <div className="relative mt-3">
                <input
                  type="date"
                  placeholder="Pickup Time"
                  className={formInputStyle}
                  onChange={(e) =>
                    setShipment({
                      ...shipment,
                      pickupTime: e.target.value,
                    })
                  }
                />
              </div>

              {/* Distance Input */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Distance"
                  className={formInputStyle}
                  onChange={(e) =>
                    setShipment({
                      ...shipment,
                      distance: e.target.value,
                    })
                  }
                />
              </div>

              {/* Price Input */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Price"
                  className={formInputStyle}
                  onChange={(e) =>
                    setShipment({
                      ...shipment,
                      price: e.target.value,
                    })
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={createItem}
                className={buttonStyle}
              >
                Create Shipment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
