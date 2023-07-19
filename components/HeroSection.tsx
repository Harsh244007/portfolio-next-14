"use client"; // this is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import "styles/globals.css";

const HeroSection = () => {
  const image = ["/headshot.png", "/headshot.png"];
  const len = image.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);
  return (
    <section id="home">
      <div className="flex h95vh flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 CarouselParent">
          {image.map((e, i) => {
            return (
              <Image
                src={e}
                key={i}
                alt=""
                width={325}
                height={325}
                className={`shadow-2xl object-cover ${activeIndex == i && "activeCarousal"}`}
              />
            );
          })}
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 leading-tight md:mt-0 md:text-7xl bg-teal-500 bg-opacity-20 w-max mx-auto lg:mx-0 ">
            Hi, I&#39;m Harsh!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Delhi, India. Working towards creating software that makes
            life easier and more meaningful.
          </p>
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
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
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
