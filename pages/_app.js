/**
 * This file is the main entry point for a Next.js application. 
 * It sets up global styles and wraps the entire application with 
 * the TrackingProvider, which provides context and state management 
 * for the shipment tracking functionality across all pages. By 
 * including TrackingProvider at this level, every component in the 
 * application can access the blockchain-related features provided 
 * by the TrackingContext.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

// Import global CSS styles
import "@/styles/globals.css";

// INTERNAL IMPORT
// Import the TrackingProvider from the context directory
import { TrackingProvider } from "../Context/TrackingContext";
import {NavBar, Footer} from "../Components";

/**
 * This is the main entry point for the Next.js application.
 * The App component is a wrapper around all the individual pages of the application.
 * It includes global styles and wraps the entire application in the TrackingProvider
 * to provide blockchain-related context and state to all components.
 * 
 * @param {Object} Component - The active page component being rendered.
 * @param {Object} pageProps - The initial props that were preloaded for the page.
 * @returns The application wrapped with TrackingProvider.
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Wrap the application with TrackingProvider to provide context to all components */}
      <TrackingProvider>
        <NavBar />
        {/* Render the active page component with its associated props */}
        <Component {...pageProps} />
        <Footer />
      </TrackingProvider>
    </>
  );
}
