"use client"; 
import React, { useEffect, useState,memo } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import "styles/globals.css";
import { teal, lightOrange, lightGrey, lightReddish } from "./RGBADataUrl.jsx";

const HeroSection = () => {
  const image = [
    "/headshot.jpg",
    "/headshot4.png",
    "/headshot3.JPG",
    "/headshot2.png",
    "/headshot5.JPG",
    "/headshot3.png",
  ];
  const len = image.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  const [startX, setStartX] = useState(null);
  const handleSwipeStart = (event: any) => {
    setStartX(event.touches[0].clientX);
  };
  const handleSwipeMove = (event: any) => {
    if (startX !== null) {
      const currentX = event.touches[0].clientX;
      const difference = startX - currentX;
      if (difference > 0) {
        // Swiped left
        setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
      }
      if (difference < 0) {
        // Swiped right
        setActiveIndex((prevIndex) => (prevIndex == 0 ? len : prevIndex - 1));
      }
      setStartX(null);
    }
  };
  return (
    <section id="home" tabIndex={1}>
      <div className="flex h-90vh flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 lg:py-48 lg:flex-row lg:space-x-4 lg:text-left">
        <div className="lg:mt-2 lg:w-1/2 CarouselParent">
          {image.map((e, i) => {
            return (
              <div
                key={i}
                onTouchStart={handleSwipeStart}
                onTouchMove={handleSwipeMove}
                className={`shadow-2xl ${activeIndex == i && "activeCarousal"}`}
              >
                <Image
                  src={e}
                  alt="Main Image Harsh Patel"
                  placeholder="blur"
                  width={325}
                  blurDataURL={
                    i === 0
                      ? lightOrange
                      : i === 4
                      ? lightGrey
                      : i === 2
                      ? lightReddish
                      : teal
                  }
                  height={325}
                  className={`shadow-2xl object-cover`}
                />
              </div>
            );
          })}
          <div className="carousel-dots">
            {image.map((e, i) => (
              <span
                key={i}
                className={`carousel-dot ${
                  i === 0
                    ? "orangeDot"
                    : i === 4
                    ? "lightGreyDot"
                    : i === 2
                    ? "lightReddishDot"
                    : ""
                } ${activeIndex === i ? "active-dot" : ""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="lg:mt-2 lg:w-3/5">
          <h1 className="text-4xl font-bold mt-6 leading-tight lg:mt-0 lg:text-7xl bg-teal-500 bg-opacity-20 w-max mx-auto lg:mx-0 ">
            Hello, I&#39;m Harsh!
          </h1>
          <p className="text-lg mt-4 mb-6 lg:text-2xl">
            <span className="font-semibold text-teal-600">
              A Software Engineer{" "}
            </span>
            from Delhi, India.
          </p>
          <p className="text-lg mt-4 mb-6 lg:text-2xl">
            Dedicated to developing software that enhances lives and adds value.
          </p>
          <p className="text-lg mt-4 mb-6 lg:text-2xl display-none">
            Also, creating insightful DSA and System Design videos on YouTube
            and Instagram for effective learning.{" "}
          </p>
          <a
            href="https://github.com/Harsh244007?tab=repositories"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-100 m-1 sm:m-3 font-semibold px-3 sm:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            // activeClass="active"
          >
            Github
          </a>
          <a
            href="/Resume-Harsh-Patel.pdf"
            target="_blank"
            className="text-neutral-100 m-1 sm:m-3 font-semibold px-3 sm:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            // activeClass="active"
          >
            Resume
          </a>
          <a
            href="https://leetcode.com/patelharsh241999/"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-100 m-1 sm:m-3 font-semibold px-3 sm:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            // activeClass="active"
          >
            Leetcode
          </a>
    
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
