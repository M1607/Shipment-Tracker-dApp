/**
 * The index.js file serves as a central export module for various 
 * components and SVG assets in a React application. By aggregating 
 * the exports from multiple files into a single module, this file 
 * simplifies imports in other parts of the application. Instead of 
 * importing each component or SVG individually, developers can import 
 * them all from this index.js file, making the codebase cleaner and 
 * more organized.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

// Import various React components from their respective files
import Footer from "./Footer";
import Table from "./Table";
import NavBar from "./NavBar";
import Form from "./Form";
import Services from "./Services";
import Profile from "./Profile";
import GetShipment from "./GetShipment";
import CompleteShipment from "./CompleteShipment";
import StartShipment from "./StartShipment";

// Import SVG assets from their respective files
import Nav1 from "./SVG/Nav1";
import Nav2 from "./SVG/Nav2";
import Nav3 from "./SVG/Nav3";
import Fot1 from "./SVG/Fot1";
import Fot2 from "./SVG/Fot2";
import Str1 from "./SVG/Str1";

/**
 * This index.js file serves as a central export module for various components and SVG assets in the application.
 * It allows for more organized and simplified imports throughout the application by aggregating all exports in one place.
 * Instead of importing each component or SVG individually from its own file, other parts of the application can import
 * everything they need from this single module. This approach helps maintain a cleaner and more manageable codebase.
 */
export {
    Footer,
    Table,
    NavBar,
    Form,
    Services,
    Profile,
    GetShipment,
    CompleteShipment,
    StartShipment,
    //SVG
    Nav1,
    Nav2,
    Nav3,
    Fot1,
    Fot2,
    Str1,
};
