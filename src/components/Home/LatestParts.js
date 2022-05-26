import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const LatestParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  const lastParts = parts.reverse();
  return (
    <div>
      {[...parts].reverse().map(part=><p>{part.productName}</p>)}
    </div>
  );
};

export default LatestParts;
