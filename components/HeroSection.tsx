"use client"; // this is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import "styles/globals.css";
import { teal,lightOrange } from "./RGBADataUrl.jsx"

const HeroSection = () => {
  const image = ["/headshot.jpg", "/headshot4.png","/headshot2.png", "/headshot3.png"];
  const len = image.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  const [startX, setStartX] = useState(null)
  const handleSwipeStart = (event:any) => {
    setStartX(event.touches[0].clientX)
  }
  const handleSwipeMove = (event:any) => {
    if (startX !== null) {
      const currentX = event.touches[0].clientX
      const difference = startX - currentX
      if (difference > 0) {
        // Swiped left
        setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1))
      }
      if (difference < 0) {
        // Swiped right
        setActiveIndex((prevIndex) => (prevIndex == 0 ? len : prevIndex - 1))
      }
      setStartX(null)
    }
  }
  return (
    <section id="home">
      <div className="flex h-90vh flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 CarouselParent">
          {image.map((e, i) => {
            return (
              <div key={i} onTouchStart={handleSwipeStart} onTouchMove={handleSwipeMove} className={`shadow-2xl ${activeIndex == i && "activeCarousal"}`}        >
              <Image
                src={e}
                alt="Main Image Harsh Patel"
                placeholder="blur"
                width={325}
                blurDataURL={i===0?lightOrange:teal}
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
                className={`carousel-dot ${i===0?"orangeDot":""} ${activeIndex === i ? "active-dot":""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 leading-tight md:mt-0 md:text-7xl bg-teal-500 bg-opacity-20 w-max mx-auto lg:mx-0 ">
            Hello, I&#39;m Harsh!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            
            <span className="font-semibold text-teal-600">
              A Software Engineer{" "}
            </span>
            from Delhi, India.
            </p> 
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          Dedicated to developing software that enhances lives and adds value. 
          
          </p> 
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          Also, creating insightful DSA and System Design videos on YouTube and Instagram for effective learning.          </p>
          <Link
            to="projects"
            className="text-neutral-100 m-1 sm:m-3 md:ml-0 font-semibold px-3 sm:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
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
          <a
            href="https://www.youtube.com/@codingwithharsh__/videos"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-100 m-1 sm:m-3 font-semibold px-3 sm:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            // activeClass="active"
          >
            YouTube
          </a>
        </div>
      </div>
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

export default HeroSection;
