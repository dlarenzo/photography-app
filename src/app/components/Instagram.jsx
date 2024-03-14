import React from "react";
import IgImg1 from "../../../public/images/igImg1.jpeg";
import IgImg2 from "../../../public/images/igImg2.jpeg";
import IgImg3 from "../../../public/images/igImg3.jpeg";
import IgImg4 from "../../../public/images/igImg4.jpeg";
import IgImg5 from "../../../public/images/igImg5.jpeg";
import IgImg6 from "../../../public/images/igImg6.jpeg";

import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-12 md:py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="py-4">@LighthousePhotography</p>
      <div className="w-full h-full  min-h-[600px] md:min-h-[425px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-4">
        <InstagramImg socialImg={IgImg1} alt="/" />
        <InstagramImg socialImg={IgImg2} alt="/" />
        <InstagramImg socialImg={IgImg3} alt="/" />
        <InstagramImg socialImg={IgImg4} alt="/" />
        <InstagramImg socialImg={IgImg5} alt="/" />
        <InstagramImg socialImg={IgImg6} alt="/" />
      </div>
    </div>
  );
};

export default Instagram;
