/**
 * The `styles.js` file centralizes the CSS class names used across the React components
 * in the application. By storing these class names in a single file, the application
 * achieves a consistent design, reduces redundancy, and makes it easier to update
 * and maintain styles globally. This approach promotes reusability and ensures
 * that changes in design can be implemented efficiently by modifying a single source of truth.
 *
 * The styles are defined as constants, with descriptive names that correspond to
 * the components and elements they style. These constants are then imported and
 * used in the respective components, ensuring a modular and maintainable codebase.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

// Button styles
export const buttonStyle =
  "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2";

// Modal overlay and container styles
export const modalOverlayStyle =
  "fixed inset-0 w-full h-full bg-black opacity-40";
export const modalContainerStyle =
  "relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg";

// Form styles
export const formInputStyle =
  "w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg";
export const closeButtonStyle =
  "p-2 text-gray-400 rounded-md hover:bg-gray-100";
export const formTextStyle = "text-[15px] text-gray-600";
export const formHeaderTextStyle = "text-lg font-medium text-gray-800";
export const formContainerStyle = "max-w-sm mx-auto py-3 space-y-3";

// Footer styles
export const footerContainerStyle =
  "max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8";
export const footerLinkStyle = "text-gray-800 hover:text-gray-500 duration-150";
export const footerSectionStyle = "space-y-6";
export const footerAppLinkStyle = "flex items-center gap-3 mt-3 sm:block";
export const footerNavLinkStyle =
  "flex flex-wrap items-center gap-4 text-sm sm:text-base";
export const footerHeaderTextStyle = "text-gray-700 font-semibold";
export const footerLogoStyle = "w-32";
export const footerTextStyle = "max-w-md";
export const footerBottomTextStyle = "mt-10 py-10 border-t md:text-center";

// Data display styles
export const dataContainerStyle = "text-left mt-4";

// Navigation bar styles
export const navContainerStyle = "bg-white pb-5 md:text-sm";
export const navExpandedStyle =
  "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0";
export const navInnerContainerStyle =
  "gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8";
export const navLogoContainerStyle =
  "flex items-center justify-between py-5 md:block";
export const navMobileButtonStyle =
  "menu-btn text-gray-500 hover:text-gray-800";
export const navLinksContainerStyle =
  "flex-1 items-center mt-8 md:mt-0 md:flex";
export const navLinkStyle = "text-gray-700 hover:text-gray-900";
export const navListStyle =
  "justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0";
export const navUserInfoStyle =
  "flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0";
export const walletButtonStyle =
  "flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex";

// Profile styles
export const profileContainerStyle =
  "max-w-sm mx-auto py-3 space-y-3 text-center";
export const profileDetailsStyle = "flex flex-col items-center pb-10";
export const avatarStyle = "w-24 h-24 mb-3 rounded-full shadow-lg";
export const profileNameStyle =
  "mb-1 text-xl font-medium text-gray-900 dark:text-white";
export const profileAddressStyle = "text-sm text-gray-500 dark:text-gray-400";
export const profileStatsStyle = "flex mt-4 space-x-3 md:mt-6";
export const profileStatButtonStyle =
  "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2";

// Section and container styles
export const sectionStyle = "py-0 pb-14";
export const containerStyle = "max-w-screen-xl mx-auto px-4 md:px-8";
export const gridContainerStyle =
  "grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-12";

// Image container and image styles
export const imageContainerStyle = "w-full h-60 sm:h-52 md:h-56";
export const imageStyle =
  "w-full h-full object-cover object-center shadow-md rounded-xl";

// Input styles
export const inputStyle =
  "w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg";

// Header styles
export const headerContainerStyle = "items-start justify-between md:flex";
export const headerTitleStyle = "text-gray-800 text-xl font-black sm:text-2xl";
export const headerSubtitleStyle = "text-gray-600 mt-2";

// Table styles
export const addButtonStyle =
  "inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 md:text-sm rounded-lg";
export const tableContainerStyle =
  "mt-12 shadow-sm border rounded-lg overflow-x-auto";
export const tableStyle = "w-full table-auto text-sm text-left";
export const tableHeaderStyle = "bg-gray-50 text-gray-600 font-medium border-b";
export const tableHeaderCellStyle = "py-3 px-6";
export const tableBodyStyle = "text-gray-600 divide-y";
export const tableCellStyle = "px-6 py-4 whitespace-nowrap";
