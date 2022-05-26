import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import HomePartShow from "./HomePartShow";

const LatestParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-primary font-bold text-center mt-7">
        Our Latest Parts!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {[...parts]
          .reverse()
          .slice(0, 6)
          .map((part) => (
            <HomePartShow key={part._id} part={part}></HomePartShow>
          ))}
      </div>
    </div>
  );
};

export default LatestParts;
