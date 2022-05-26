import {
  faMoneyBillTransfer,
  faShippingFast,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const ManageOrderRow = ({ order, index, refetch }) => {
  const markPaid = (id) => {
    const url = `http://localhost:5000/order/${id}`;
    console.log(url);
    fetch(url, {
      method: "put",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`OrderID: ${order._id.slice(5, -15)} is now Paid`);
        } else {
          toast.error("You dont have enough permission!");
        }
      });
  };
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
      <td>
        <span className="block">{order.paymentStatus.toUpperCase()}</span>{" "}
        {order.paymentStatus === "paid" && <span>TrxID: {order.trxId}</span>}
      </td>
      <td>{order.orderStatus.toUpperCase()}</td>
      <td>
        {order.paymentStatus === "pending" && (
          <span
            onClick={() => markPaid(order._id)}
            className="bg-primary text-center p-1 my-1 block text-white rounded cursor-pointer"
          >
            <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>Make
            Paid
          </span>
        )}
        {order.orderStatus === "placed" && (
          <span className="bg-blue-700 block text-center p-1 my-1 text-white rounded cursor-pointer">
            <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>Ship Order
          </span>
        )}
        {order.orderStatus === "placed" && (
          <span className="bg-red-600 block text-center p-1 my-1 text-white rounded cursor-pointer">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>Delete Order
          </span>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
