import React from "react";
import FeatureProducts from "./components/FeatureProducts";

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "Next Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />;
    </>
  );
};

export default Home;
