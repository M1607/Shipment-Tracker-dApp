/**
 * The Profile component is a React functional component designed to 
 * display user profile information within a web application. It includes 
 * a modal that shows the user's avatar, current Ethereum address, and 
 * relevant statistics such as their balance and total shipments. The 
 * component interacts with a function to retrieve the number of shipments 
 * associated with the user. The modal can be opened or closed based on 
 * the `openProfile` state.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import React, { useState, useEffect } from "react";
import Image from "next/image";

// INTERNAL IMPORTS
import images from "../Images/index";
import { Str1 } from ".";
import {
  modalOverlayStyle,
  modalContainerStyle,
  closeButtonStyle,
  profileContainerStyle,
  profileDetailsStyle,
  avatarStyle,
  profileNameStyle,
  profileAddressStyle,
  profileStatsStyle,
  profileStatButtonStyle
} from "../styles";

export default function Profile({
  openProfile,
  setOpenProfile,
  currentUser,
  getShipmentsCount,
}) {
  // State to store the total number of shipments
  const [count, setCount] = useState();

  useEffect(() => {
    // Fetch the total number of shipments when the component mounts
    const fetchData = async () => {
      const allData = await getShipmentsCount();
      setCount(allData);
    };

    fetchData();
  }, [getShipmentsCount]);

  return openProfile ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/* Overlay to close the modal */}
      <div
        className={modalOverlayStyle}
        onClick={() => setOpenProfile(false)}
      ></div>

      {/* Modal content */}
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className={modalContainerStyle}>
          {/* Close button */}
          <div className="flex justify-end">
            <button
              className={closeButtonStyle}
              onClick={() => setOpenProfile(false)}
            >
              <Str1 />
            </button>
          </div>

          {/* Profile details */}
          <div className={profileContainerStyle}>
            <div className={profileDetailsStyle}>
              <Image
                className={avatarStyle}
                src={images.avatar}
                alt="User avatar"
              />
              <h5 className={profileNameStyle}>Welcome Trader</h5>
              <span className={profileAddressStyle}>{currentUser}</span>

              {/* User statistics */}
              <div className={profileStatsStyle}>
                <a href="#" className={profileStatButtonStyle}>
                  Balance: 345 ETH
                </a>
                <a href="#" className={profileStatButtonStyle}>
                  Total Shipment: {count}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null; // Return null if openProfile is false, meaning the modal shouldn't be displayed
}
