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

const BASE_TOP = 120;
const MIN_WIDTH = 70;
const BASE_WIDTH = 100;
const ADDITIONAL_SPACING_MOBILE = 0.2;
const ADDITIONAL_SPACING_DESKTOP = 1;

function calculateTop(scrollPercentage = 0, ix = 0, isMobile = false) {
  const additionalSpacing = isMobile ? ADDITIONAL_SPACING_MOBILE : ADDITIONAL_SPACING_DESKTOP;
  const scrollOffset = (isMobile ? 5 : (100 - scrollPercentage));
  return `${BASE_TOP + (ix * (additionalSpacing + scrollOffset))}px`;
}

function calculateWidth(scrollPercentage = 0, ix = 0, maxItems = 0) {
  const decreaseFactor = (BASE_WIDTH - MIN_WIDTH) / (maxItems - 1);
  const currentWidth = BASE_WIDTH - (decreaseFactor * ix) * (scrollPercentage / 100);
  return Math.max(currentWidth, MIN_WIDTH);
}

const Card: React.FC<CardType> = ({ children, className, max = 10, ix = -1, stackAnimation = false, tabIndex = -1 }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleScroll = () => {
      const { innerHeight: windowHeight, scrollY: currentPosition } = window;
      const fullHeight = document.documentElement.scrollHeight;
      const newScrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(Math.round(newScrollPercentage));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
   const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };
  const topPosition = calculateTop(scrollPercentage, ix, isMobile)
  return (
    <div
      ref={containerRef}
      tabIndex={tabIndex}
      onMouseMove={onMouseMove}
      style={stackAnimation ? { zIndex: ix + 1, scale: `${Math.abs(calculateWidth(scrollPercentage, max - ix, max) / 100)} 1`, top: topPosition } : {}}
      className={`animate-z backdrop-blur-md overflow-hidden lg:overflow-visible ${stackAnimation ? "self-center z-max-hover w-full makeItScroll sticky" : "relative"} duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 border-zinc-600 hover:border-white bg-red-custom  bg-black hover:custom-box-shadow ${className} pr-1 ${tabIndex >= 0 ? "focus:ring-2 focus:ring-[#759dab]" : ""}`}
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