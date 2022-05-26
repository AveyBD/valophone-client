import React from "react";
import Hero from "./Hero";
import HomeReview from "./HomeReview";
import LatestParts from "./LatestParts";
import Newsletter from "./Newsletter";
import Partner from "./Partner";
import Shipment from "./Shipment";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestParts></LatestParts>
      <Stats></Stats>
      <HomeReview></HomeReview>
      <Shipment></Shipment>
      <Newsletter></Newsletter>
      <Partner></Partner>
    </div>
  );
};

export default Home;
