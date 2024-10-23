"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

type CardType = {
  children: React.ReactNode;
  className: string;
  tabIndex?: number;
  ix?: number;
  max?: number;
  stackAnimation?: boolean;
};


const Card: React.FC<CardType> = ({ children, className, tabIndex = -1 }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const containerRef = useRef<HTMLDivElement>(null);




  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };
  return (
    <div
      ref={containerRef}
      tabIndex={tabIndex}
      onMouseMove={onMouseMove}
      className={`animate-z backdrop-blur-md overflow-hidden lg:overflow-visible relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 border-zinc-600 hover:border-white bg-red-custom  bg-black hover:custom-box-shadow ${className} pr-1 ${tabIndex >= 0 ? "focus:ring-2 focus:ring-[#759dab]" : ""}`}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,red)]" />
        <motion.div
          className={`absolute inset-0  z-10  opacity-100 via-white-100/5 transition duration-1000 group-hover:opacity-50`}
          style={style}
        />
        <motion.div
          className={`absolute inset-0  z-10 opacity-0 animate-fade-in mix-blend-overlay transition duration-1000 group-hover:opacity-20`}
          style={style}
        />
      </div>
      {children}
    </div>
  );
};
export default memo(Card)