"use client";

import React, { useState } from "react";
import { SliderData } from "./SliderData";
// import dynamic from "next/dynamic";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

// const DynamicImage = dynamic(() => import("next/image"), {
//   ssr: false,
// });

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto my-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4 ">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className="  "
              {...(index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0")}
            >
              <FaChevronLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <div className=" w-11/12 max-h-[600px] p-4 relativ mx-auto">
                  <Image src={slide.image} alt="/" width={800} height={400} />
                </div>
              )}
              <FaChevronRight
                onClick={nextSlide}
                className="absolute top-[45%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
