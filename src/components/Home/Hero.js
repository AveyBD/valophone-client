import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/FqdKtmv/Pngtree-fingers-of-man-and-robot-7258873.png"
            className="w-full md:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="md:max-w-lg">
            <h1 className="text-5xl font-bold">Valo Phone!</h1>
            <p className="py-6">
              Want to build your own phone? Looking for manufacturer of
              Smartphone ? You are at the perfect place. We, Valo Phone build
              the best smartphone around the world.
            </p>
            <Link to={'/shop'}><button className="btn btn-primary">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
