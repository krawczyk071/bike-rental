import React from "react";
import Hero from "../components/Hero";
import How from "../components/How";
import Rent from "../components/Rent";
import About from "../components/About";
import Review from "../components/Review";

const Homepage = () => {
  return (
    <section className="layout-lg">
      <Hero />
      <How />
      <Rent />
      <About />
      <Review />

      {/* <Help /> */}
    </section>
  );
};

export default Homepage;
