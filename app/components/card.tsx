"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
// import { PropsWithChildren } from "react";
type CardType = {
  children: React.ReactNode;
  className: string;
};
export const Card: React.FC<CardType> = ({ children, className }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className={` animate-z overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 border-zinc-600 hover:border-white  bg-red-custom backdrop-blur-2px hover:custom-box-shadow ${className}`}
    >
      <div className="pointer-events-none ">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,red)]" />
        <motion.div
          className="absolute inset-0 z-10  opacity-100  via-white-100/5  transition duration-1000  group-hover:opacity-50 will"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 animate-fade-in mix-blend-overlay transition duration-1000 group-hover:opacity-20"
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
