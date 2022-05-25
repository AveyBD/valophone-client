import { faMoneyBillAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Swal from "sweetalert2";

const UserOrderRow = ({ order, index, refetch }) => {
  const delOrder = (id) => {
    console.log("Deleting:", id);
    Swal.fire({
      title: "Are you sure?",
      text: `You are deleting orderID: ${order._id.slice(
        5,
        -15
      )}. You can't revert it.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              refetch();
              Swal.fire("Deleted!", "Your order has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td className="flex flex-col">
        <p>OrderID: {order._id.slice(5, -15)}</p>
        <p>Time: {order.time}</p>
      </td>
      <td>{order.product}</td>
      <td>${order.price}</td>
      <td>{order.paymentStatus.toUpperCase()}</td>
      <td>{order.orderStatus.toUpperCase()}</td>
      <td>
        {order.paymentStatus == "pending" && (
          <>
            <FontAwesomeIcon
              onClick={() => delOrder(order._id)}
              className="font-2xl cursor-pointer bg-red-600 p-2 rounded text-white"
              icon={faTrash}
            ></FontAwesomeIcon>{" "}
            <FontAwesomeIcon
              className="font-2xl cursor-pointer bg-black p-2 rounded text-white"
              icon={faMoneyBillAlt}
            ></FontAwesomeIcon>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserOrderRow;
