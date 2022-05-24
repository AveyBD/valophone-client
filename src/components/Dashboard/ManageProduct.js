import React, { useEffect, useState } from "react";
import AdminProductRow from "./AdminProductRow";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "GET",
      // headers: {
      //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-secondary font-bold text-xl">
        Manage All Product here
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Img</th>
              <th>Available</th>
              <th>Min Qty</th>
              <th>Max Qty</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <AdminProductRow
                key={product._id}
                product={product}
              ></AdminProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
