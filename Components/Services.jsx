/**
 * The Services component is a functional React component that 
 * displays a grid of images representing different services offered 
 * by the application or company. Each image is clickable and triggers 
 * a modal related to the corresponding service. This component is 
 * designed to be expanded in the future with additional services, 
 * descriptions, or links.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import images from "../Images/index";
import Image from "next/image";
import {
  sectionStyle,
  containerStyle,
  gridContainerStyle,
  imageContainerStyle,
  imageStyle
} from "../styles";

export default function Services({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) {
  // Array of service-related images
  const team = [
    { avatar: images.compShipment },
    { avatar: images.getShipment },
    { avatar: images.startShipment },
    { avatar: images.userProfile },
    { avatar: images.shipCount },
    { avatar: images.send },
  ];

  /**
   * Function to handle opening different modals based on the clicked service image.
   * @param {number} text - The identifier for the service (1-4) that determines which modal to open.
   */
  const openModelBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    }
  };

  return (
    <section className={sectionStyle}>
      <div className={containerStyle}>
        <div className={gridContainerStyle}>
          {team.map((item, i) => (
            <li key={i}>
              <div
                onClick={() => openModelBox(i + 1)}
                className={imageContainerStyle}
              >
                <Image 
                  src={item.avatar}
                  className={imageStyle}
                  alt=""
                />
              </div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
