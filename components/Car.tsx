"use client"; // this is a client component
import React from 'react';
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

interface IframeComponentProps {
  url?: string;
}

const CarComponent: React.FC<IframeComponentProps> = ({ url }) => {
  return (
    <section id="car" className="w-full h-screen flex gap-10 flex-col justify-center items-center">
      <iframe
        src={url}
        className="w-full bg-teal-500 h-full border-none"
        title="Harsh Car"
      />
           <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          className="noBlackShadow"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default CarComponent;
