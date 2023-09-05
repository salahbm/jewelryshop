import React from "react";
import HomeBanner from "./components/HomeBanner";
import Collection from "./components/Collection";
import Category from "./components/Category";
import Diamonds from "./components/Diamonds";
import OurWork from "./components/OurWork";
const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Collection />
      <Category />
      <OurWork />
      <Diamonds />
    </div>
  );
};

export default Home;
