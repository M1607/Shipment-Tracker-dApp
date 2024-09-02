/**
 * The Table component is a functional React component designed to display
 * shipment data in a structured tabular format. It includes columns for 
 * sender, receiver, pickup time, distance, price, delivery time, payment status, 
 * and shipment status. The data is passed into the component as props, and 
 * each shipment is rendered as a row in the table. The component also provides 
 * a button to trigger the creation of a new shipment.
 *
 * @author M Hirschfeld
 * @date September 2, 2024
 */

import {
  containerStyle,
  headerContainerStyle,
  headerTitleStyle,
  headerSubtitleStyle,
  addButtonStyle,
  tableContainerStyle,
  tableStyle,
  tableHeaderStyle,
  tableHeaderCellStyle,
  tableBodyStyle,
  tableCellStyle,
} from "../styles";

export default function Table({ setCreateShipmentModel, allShipmentdata }) {
  // Function to convert Unix timestamp to a readable date format
  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dateTime;
  };

  console.log(allShipmentdata); // Debugging: Log the shipment data to the console

  return (
    <div className={containerStyle}>
      <div className={headerContainerStyle}>
        <div className="max-w-lg">
          <h3 className={headerTitleStyle}>
            Create Tracking
          </h3>
          <p className={headerSubtitleStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => setCreateShipmentModel(true)}
            className={addButtonStyle}
          >
            Add Tracking
          </button>
        </div>
      </div>
      <div className={tableContainerStyle}>
        <table className={tableStyle}>
          <thead className={tableHeaderStyle}>
            <tr>
              {["Sender", "Receiver", "Pickup Time", "Distance", "Price", "Delivery Time", "Paid", "Status"].map((header) => (
                <th key={header} className={tableHeaderCellStyle}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={tableBodyStyle}>
            {allShipmentdata?.map((shipment, idx) => (
              <tr key={idx}>
                <td className={tableCellStyle}>
                  {shipment.sender.slice(0, 15)}...
                </td>
                <td className={tableCellStyle}>
                  {shipment.receiver.slice(0, 15)}...
                </td>
                <td className={tableCellStyle}>
                  {convertTime(shipment.pickupTime)}
                </td>
                <td className={tableCellStyle}>
                  {shipment.distance} Km
                </td>
                <td className={tableCellStyle}>
                  {shipment.price}
                </td>
                <td className={tableCellStyle}>
                  {convertTime(shipment.deliveryTime)}
                </td>
                <td className={tableCellStyle}>
                  {shipment.isPaid ? "Completed" : "Not Complete"}
                </td>
                <td className={tableCellStyle}>
                  {shipment.status === 0
                    ? "Pending"
                    : shipment.status === 1
                    ? "IN_TRANSIT"
                    : "Delivered"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
