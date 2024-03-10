"use client";

import React, { useState } from "react";
import { SliderData } from "./SliderData";
import dynamic from "next/dynamic";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const DynamicImage = dynamic(() => import("next/image"), {
  ssr: false,
});

const slider = ({ slides }) => {
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
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <div>
                <FaChevronLeft
                  onClick={prevSlide}
                  className="absolute top-[45%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
                {index === current && (
                  <DynamicImage
                    src={slide.image}
                    alt="/"
                    width={1440}
                    height={600}
                    objectFit="cover"
                  />
                )}
                <FaChevronRight
                  onClick={nextSlide}
                  className="absolute top-[45%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default slider;
