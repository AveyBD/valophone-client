import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import UserOrderRow from "./UserOrderRow";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const url = `http://localhost:5000/myorders?mail=${user.email}`;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    fetch(url, {
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
      <h2>My Order</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Info</th>
              <th>Item</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <UserOrderRow
                index={index}
                key={order._id}
                order={order}
                refetch={refetch}
              ></UserOrderRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Info</th>
              <th>Item</th>
              <th>Amount</th>
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

export default MyOrder;
