/**
 * The index.js file is a React functional component that serves as 
 * the main page of your application. It integrates various components 
 * such as Table, Form, Services, Profile, CompleteShipment, 
 * GetShipment, and StartShipment, which together provide a user 
 * interface for managing and interacting with shipment data. The 
 * component uses React’s state and context features to manage the 
 * application's state and interact with the blockchain-based shipment 
 * tracking system. The useEffect hook is used to fetch all shipment 
 * data when the component is mounted.
 *
 *
 * @author (M Hirschfeld)
 * (September 2, 2024)
 */

// Import React and necessary hooks for state management and side effects
import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORT
// Import components from the Components directory
import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../Components/index";

// Import the TrackingContext to access blockchain-related functions and state
import { TrackingContext } from "../Context/TrackingContext";

/**
 * The index component serves as the main page of the application. It utilizes various components
 * to provide a user interface for interacting with the shipment tracking system. The component fetches all shipment
 * data upon mounting and manages state variables that control the visibility of different modals (e.g., create shipment, 
 * profile, start shipment). The context provided by TrackingContext is used to interact with blockchain-related functionalities.
 * 
 * @returns A JSX element that renders the main page with shipment management features.
 */
const index = () => {
  // Destructure functions and state variables from TrackingContext
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    GetShipment,
    StartShipment,
    getShipmentCount,
  } = useContext(TrackingContext);

  // STATE VARIABLES
  // State to manage the visibility of the create shipment modal
  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  // State to manage the visibility of the profile modal
  const [openProfile, setOpenProfile] = useState(false);
  // State to manage the visibility of the start shipment modal
  const [startModal, setStartModal] = useState(false);
  // State to manage the visibility of the complete shipment modal
  const [completeModal, setCompleteModal] = useState(false);
  // State to manage the visibility of the get shipment modal
  const [getModel, setGetModel] = useState(false);
  
  // DATA STATE
  // State to store all shipment data fetched from the blockchain
  const [allShipmentsdata, setallShipmentsdata] = useState();

  /**
   * useEffect hook to fetch all shipment data when the component is mounted.
   * It calls the getAllShipment function from the TrackingContext and stores the retrieved data
   * in the allShipmentsdata state.
   */
  useEffect(() => {
    const getCampaignsData = getAllShipment();

    return async () => {
      const allData = await getCampaignsData;
      setallShipmentsdata(allData);
    };
  }, []);
  
  return (
    <>
      {/* Render the Services component, passing state setter functions as props */}
      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
      />
      
      {/* Render the Table component, passing the shipment data and modal state setter */}
      <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentsdata={allShipmentsdata}
      />
      
      {/* Render the Form component, passing the state and function to handle shipment creation */}
      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />
      
      {/* Render the Profile component, passing the profile modal state and user data */}
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentCount={getShipmentCount}
      />
      
      {/* Render the CompleteShipment component, passing the state and function to complete a shipment */}
      <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
      
      {/* Render the GetShipment component, passing the state and function to get a specific shipment */}
      <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={GetShipment}
      />
      
      {/* Render the StartShipment component, passing the state and function to start a shipment */}
      <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        StartShipment={StartShipment}
      />
    </>
  );
};

// Export the index component as the default export
export default index;
