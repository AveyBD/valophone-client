import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const params = useParams();
  const [order, setOrder] = useState([]);
  const orderId = params.id;
  const url = `http://localhost:5000/orders/${orderId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(order);
  return (
    <div>
      <p>{orderId}</p>
    </div>
  );
};

export default Payment;
