/**
 * The Footer component is a functional React component that serves as 
 * the footer section of a web page. It includes navigation links and 
 * options to download an app, which are represented by SVG icons. 
 * The component is typically placed at the bottom of a web page to 
 * provide users with additional information, such as terms of service, 
 * privacy policies, and download options. This component uses Tailwind
 * CSS classes for styling.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import { Fot1, Fot2 } from "../Components/index";
import {
  footerContainerStyle,
  footerLinkStyle,
  footerSectionStyle,
  footerAppLinkStyle,
  footerNavLinkStyle,
  footerHeaderTextStyle,
  footerLogoStyle,
  footerTextStyle,
  footerBottomTextStyle
} from "../styles";

export default function Footer() {
  // Array of footer navigation links
  const footerNavs = [
    { href: "javascript:void(0)", name: "Terms" },
    { href: "javascript:void(0)", name: "License" },
    { href: "javascript:void(0)", name: "Privacy" },
    { href: "javascript:void(0)", name: "About Us" },
  ];

  return (
    <footer className="pt-10">
      <div className={footerContainerStyle}>
        <div className="justify-between sm:flex">
          <div className={footerSectionStyle}>
            <img
              src="https://www.floatui.com/logo.svg"
              className={footerLogoStyle}
              alt="Float UI logo"
            />
            <p className={footerTextStyle}>
              Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.
            </p>
            <ul className={footerNavLinkStyle}>
              {footerNavs.map((item, idx) => (
                <li key={idx} className={footerLinkStyle}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className={footerHeaderTextStyle}>Get the App</p>
            <div className={footerAppLinkStyle}>
              <a href="javascript:void(0)">
                <Fot1 />
              </a>
              <a href="javascript:void(0)" className="mt-0 block sm:mt-3">
                <Fot2 />
              </a>
            </div>
          </div>
        </div>
        <div className={footerBottomTextStyle}>
          <p>&copy; 2024 M Hirschfeld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
