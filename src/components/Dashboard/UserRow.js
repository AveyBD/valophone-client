import React from "react";

const UserRow = ({ user, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.displayName}</td>
      <td>{user?.email}</td>
      <td>{user.uid}</td>
      <td>
        <span className="font-2xl cursor-pointer bg-green-600 p-2 rounded text-white">Make Admin</span> {" "}
        <span className="font-2xl cursor-pointer bg-red-600 p-2 rounded text-white">Make User</span>

      </td>
    </tr>
  );
};

export default UserRow;
