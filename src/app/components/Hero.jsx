import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
      {/* Overlay */}
      <div />
      <div>
        <h2>Heading</h2>
        <p>Message</p>
        <button>Book</button>
      </div>
    </div>
  );
};

export default Hero;
