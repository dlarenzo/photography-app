import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero
        heading="My Work"
        message="Check out some of my recent works while traveling the world"
      />
      <Portfolio />
    </div>
  );
};

export default work;
