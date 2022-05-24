import {
  faPenAlt,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

const AdminProductRow = ({ product, index, refetch }) => {
  const handleDel = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("Product Deleted");
          refetch();
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
        onClick={()=>handleDel(product._id)}
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
