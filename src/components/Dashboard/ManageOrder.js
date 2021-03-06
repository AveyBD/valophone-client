import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    fetch("https://valophone.herokuapp.com/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(orders);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Info</th>
              <th>Address</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageOrderRow
                index={index}
                key={order._id}
                order={order}
                refetch={refetch}
              ></ManageOrderRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Info</th>
              <th>Address</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
