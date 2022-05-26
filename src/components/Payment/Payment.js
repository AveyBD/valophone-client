import {
  faAddressCard,
  faCalculator,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="hero min-h-screen bg-green-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-bold text-primary text-center">
                Payment
              </h2>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-bold text-primary text-center">
                Order Summery
              </h2>
              <h2 className="text-xl">
                <FontAwesomeIcon icon={faToolbox}></FontAwesomeIcon>:{" "}
                {order.product}
              </h2>
              <p>
                <FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon>:{" "}
                {order.time}
              </p>
              <p>
                <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>:{" "}
                {order.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
