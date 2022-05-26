import React, { useEffect, useState } from "react";
import Item from "./Item";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://valophone.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-primary font-bold text-center md:mt-5 md:mb-5">
        Valo Phone Parts Shop
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 justify-items-center">
        {products.map((product, index) => (
          <Item key={product._id} product={product}></Item>
        ))}
      </div>
    </div>
  );
};

export default Shop;
