import React from "react";
import { Link } from "react-router-dom";

const HomePartShow = ({part}) => {
  return (
    <div class="relative flex flex-col justify-center mt-1 md:mt-4">
      <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
        <img
          class="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src={part.img}
        />

        <div class="p-4">
          <small class="text-primary text-xs">Min: {part.minqty}</small>{" "}<small class="text-primary text-xs">Max: {part.maxqty}</small> {" "}<small class="text-primary text-xs">Available: {part.available}</small>
          <h1 class="text-2xl font-medium text-slate-600 pb-2">{part.productName}</h1>
          <p class="text-sm tracking-tight font-light text-slate-400 leading-6">
           {part.description.slice(0,150)}
          </p>
          <div className="card-actions justify-between items-center">
          <button className="font-bold text-xl text-primary">
            Price: ${part.price}
          </button>
          <Link to={`/checkout/${part._id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePartShow;
