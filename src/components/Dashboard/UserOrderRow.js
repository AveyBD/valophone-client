import { faMoneyBillAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserOrderRow = ({order, index}) => {
  return (
    <tr>
      <th>{index +1}</th>
      <td className="flex flex-col"><p>OrderID: {order._id.slice(5,-15)}</p><p>Time: {order.time}</p></td>
      <td>{order.product}</td>
      <td>${order.price}</td>
      <td>{order.paymentStatus.toUpperCase()}</td>
      <td>{order.orderStatus.toUpperCase()}</td>
      <td>{order.paymentStatus == 'pending' && <><FontAwesomeIcon
          className="font-2xl cursor-pointer bg-red-600 p-2 rounded text-white"
          icon={faTrash}
        ></FontAwesomeIcon>{" "}
        <FontAwesomeIcon
          className="font-2xl cursor-pointer bg-black p-2 rounded text-white"
          icon={faMoneyBillAlt}
        ></FontAwesomeIcon></>}</td>
    </tr>
  );
};

export default UserOrderRow;
