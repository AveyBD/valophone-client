import {
  faPenAlt,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AdminProductRow = ({ product, index, refetch }) => {
  const handleDel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are deleting orderID: ${product.productName}. You can't revert it.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://valophone.herokuapp.com/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire("Deleted!", "The Product has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product?.productName}</td>
      <td>
        <img src={product?.img} className="w-8 h-8"></img>
      </td>
      <td>{product?.available}</td>
      <td>{product?.minqty}</td>
      <td>{product?.maxqty}</td>
      <td>{product.price}</td>
      <td>{product.description.slice(0, 10)}</td>
      <td className="flex gap-1">
        <FontAwesomeIcon
          onClick={() => handleDel(product._id)}
          className="font-2xl cursor-pointer bg-red-600 p-2 rounded text-white"
          icon={faTrashCan}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="font-2xl cursor-pointer bg-green-600 p-2 rounded text-white"
          icon={faPenAlt}
        ></FontAwesomeIcon>
      </td>
    </tr>
  );
};

export default AdminProductRow;
