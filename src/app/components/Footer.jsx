import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-slate-800 p-8 mx-auto">
      <div className="max-w-[1240px] m-auto flex justify-between">
        <Link href="/">Lighthouse Photography &copy; 2024</Link>
        <Link href="/gallery">larenzodegraff.com</Link>
      </div>
    </div>
  );
};

export default Footer;
