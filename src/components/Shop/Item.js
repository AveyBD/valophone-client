import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-2">
      <figure>
        <img src={product.img} alt={product.productName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <div className="flex font-mono font-bold bg-green-100">
          <p>Minimum: {product.minqty} </p>
          <p>Maximum: {product.maxqty} </p>
          <p>Available: {product.available} </p>
        </div>
        <p>{product.description}</p>
        <div className="card-actions justify-between items-center">
          <button className="font-bold text-xl text-primary">
            Price: ${product.price}
          </button>
          <Link to={`/checkout/${product._id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
