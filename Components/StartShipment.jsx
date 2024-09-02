/**
 * The StartShipment component is a React functional component that 
 * provides an interface for initiating a shipment within the application. 
 * It includes a modal where users can input the receiver's address and 
 * the shipment ID to start the shipping process. This component interacts 
 * with a function that communicates with a backend or blockchain to 
 * update the shipment status. The modal can be opened or closed based on 
 * the `startModal` state.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import { useState } from "react";
import { Str1 } from "../Components/index";
import {
  modalOverlayStyle,
  modalContainerStyle,
  closeButtonStyle,
  formContainerStyle,
  inputStyle,
  buttonStyle,
  formHeaderTextStyle
} from "../styles";

export default function StartShipment({ startModal, setStartModal, startShipment }) {
  // State to manage input fields for receiver and shipment index
  const [getProduct, setGetProduct] = useState({
    receiver: "",
    index: "",
  });

  // Function to initiate the shipment
  const startShipping = () => {
    startShipment(getProduct);
  };

  return startModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/* Overlay to close the modal */}
      <div
        className={modalOverlayStyle}
        onClick={() => setStartModal(false)}
      ></div>

      {/* Modal content */}
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className={modalContainerStyle}>
          {/* Close button */}
          <div className="flex justify-end">
            <button
              className={closeButtonStyle}
              onClick={() => setStartModal(false)}
            >
              <Str1 />
            </button>
          </div>

          {/* Form content */}
          <div className={formContainerStyle}>
            <h4 className={formHeaderTextStyle}>
              Start Shipping
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              {/* Input for receiver */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Receiver"
                  className={inputStyle}
                  onChange={(e) =>
                    setGetProduct({
                      ...getProduct,
                      receiver: e.target.value,
                    })
                  }
                />
              </div>

              {/* Input for shipment ID */}
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Id"
                  className={inputStyle}
                  onChange={(e) =>
                    setGetProduct({
                      ...getProduct,
                      index: e.target.value,
                    })
                  }
                />
              </div>

              {/* Button to start the shipment process */}
              <button
                onClick={startShipping}
                className={buttonStyle}
              >
                Start Shipment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null; // Return null if startModal is false, meaning the modal shouldn't be displayed
}
