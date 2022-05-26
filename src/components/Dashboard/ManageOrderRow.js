import { faMoneyBillTransfer, faShippingFast, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageOrderRow = ({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.user}</td>
      <td>
        <p>OrderID: {order._id.slice(5, -15)}</p>
        <p>Time: {order.time}</p>
      </td>
      <td>{order.address}</td>
      <td>{order.product}</td>
      <td>{order.qty}</td>
      <td>{order.price}</td>
      <td>{order.paymentStatus.toUpperCase()}</td>
      <td>{order.orderStatus.toUpperCase()}</td>
      <td>{order.paymentStatus !== 'pending' && <span className="bg-primary text-center p-1 my-1 block text-white rounded cursor-pointer"><FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>Make Paid</span>}
      {order.orderStatus === 'placed' && <span className="bg-blue-700 block text-center p-1 my-1 text-white rounded cursor-pointer"><FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>Ship Order</span>}
      {order.orderStatus === 'placed' && <span className="bg-red-600 block text-center p-1 my-1 text-white rounded cursor-pointer"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>Delete Order</span>}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
