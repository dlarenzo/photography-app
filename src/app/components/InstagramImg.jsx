import React from "react";
import Image from "next/image";

const InstagramImg = ({ socialImg }) => {
  return (
    <div>
      <Image src={socialImg} alt="Instagram Image" />
    </div>
  );
};

export default InstagramImg;
