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
  const SliderData = slides;
  console.log(SliderData);

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-4xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4 h-[600px] mb-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? `opacity-[1] ease-in duration-1000 overflow-hidden flex shrink-2 items-${slide.position} justify-${slide.position} relative`
                  : "opacity-0"
              }
            >
              <FaChevronLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  width={1440}
                  height={600}
                  src={slide.image}
                  alt="/"
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw, (max-height: 768px) 100vw, (max-height: 1440px) 50vw"
                  // objectFit="cover"
                />
              )}
              <FaChevronRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
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

{
  /* <div
              key={index}
              className={
                index === current
                  ? `opacity-[1] ease-in duration-1000 overflow-hidden flex shrink-2 items-${slide.position} justify-${slide.position} relative`
                  : "opacity-0"
              }
            >
              <FaChevronLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  // objectFit="cover"
                />
              )}
              <FaChevronRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  ); */
}
