import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="/images/portfolio/folio1.jpeg "
            alt="/"
            width="677"
            height="451"
            layout="responsive"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            className="object-cover"
            fill
            src="/images/portfolio/folio2.jpeg "
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/images/portfolio/folio3.jpeg "
            className="object-cover"
            fill
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/images/portfolio/folio4.jpeg "
            className="object-cover"
            fill
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/images/portfolio/folio5.jpeg "
            className="object-cover"
            fill
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
