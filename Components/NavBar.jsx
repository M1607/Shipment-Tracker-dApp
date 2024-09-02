/**
 * The NavBar component is a dynamic and responsive navigation bar 
 * for a web application. It allows users to navigate between different 
 * sections of the app and provides functionality to connect to a
 * blockchain wallet (e.g., MetaMask). The component adapts to 
 * different screen sizes, offering a collapsible menu on smaller 
 * screens. It also displays the current user's wallet address if 
 * connected. The navigation menu includes predefined links and can 
 * be expanded to include more links and features as needed.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import { useEffect, useState, useContext } from "react";
import { TrackingContext } from "../Context/TrackingContext";
import { Nav1, Nav2, Nav3 } from "../Components/index";
import {
  navContainerStyle,
  navExpandedStyle,
  navInnerContainerStyle,
  navLogoContainerStyle,
  navMobileButtonStyle,
  navLinksContainerStyle,
  navLinkStyle,
  navListStyle,
  navUserInfoStyle,
  walletButtonStyle
} from "../styles";

export default function NavBar() {
  // State to manage the visibility of the mobile menu
  const [state, setState] = useState(false);

  // Destructure context values for current user and wallet connection
  const { currentUser, connectWallet } = useContext(TrackingContext);

  // Navigation links for the menu
  const navigation = [
    { title: "Home", path: "#" },
    { title: "Services", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "Erc20", path: "#" },
  ];

  // Effect to handle click events outside the menu to close it
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav className={`${navContainerStyle} ${state ? navExpandedStyle : ""}`}>
      <div className={navInnerContainerStyle}>
        <div className={navLogoContainerStyle}>
          <a href="javascript:void(0)">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className={navMobileButtonStyle}
              onClick={() => setState(!state)}
            >
              {state ? <Nav1 /> : <Nav2 />}
            </button>
          </div>
        </div>
        <div
          className={`${navLinksContainerStyle} ${state ? "block" : "hidden"}`}
        >
          <ul className={navListStyle}>
            {navigation.map((item, idx) => (
              <li key={idx} className={navLinkStyle}>
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={navUserInfoStyle}>
            {currentUser ? (
              <p className={walletButtonStyle}>
                {currentUser.slice(0, 25)}..
              </p>
            ) : (
              <button
                onClick={connectWallet}
                className={walletButtonStyle}
              >
                Connect Wallet
                <Nav3 />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
