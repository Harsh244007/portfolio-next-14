"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { BsMagic } from "react-icons/bs";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const SliderComponent: React.FC = () => {
  const numberInputRef = useRef<HTMLInputElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const progressBarTextRef = useRef<HTMLSpanElement>(null);

  const [disabled, setDisabled] = useState<boolean>(false);
  const [sliderNumber, setSliderNumber] = useState<string>("");
  const [showSlider, setShowSlider] = useState<boolean>(false);

  const fillProgressBar = useCallback((percentage: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.value = `${percentage}`;
    }
  }, []);

  useEffect(() => {
    if (progressBarTextRef.current && progressBarRef.current) {
      progressBarRef.current.value = "0";
      progressBarTextRef.current.innerText = "0";
    }
  }, [sliderNumber]);

  const startFilling = useCallback(
    (progress: number, value: number) => {
      if (progress <= value) {
        if (progressBarTextRef.current && progressBarRef.current) {
          progressBarTextRef.current.innerText = progress.toString();
          fillProgressBar(progress);
          setTimeout(() => startFilling(progress + 2, value), 2000);
        }
      } else {
        setDisabled(false);
      }
    },
    [fillProgressBar]
  );

  const handleNumberInput = useCallback(() => {
    if (showSlider === false) setShowSlider(true);

    if (sliderNumber !== "") {
      let value = parseInt(sliderNumber, 10);
      if (value % 2 !== 0) {
        if (value <= 2) value = 2;
        value += 1;
      }
      value = Math.min(value, 100);
      value = Math.max(value, 2);

      if (progressBarRef.current) progressBarRef.current.max = `${value}`;
      setTimeout(() => startFilling(2, value), 2000);
    }
  }, [showSlider, sliderNumber, startFilling]);

  return (
<section id="slider" className="container mx-auto py-10">
  <h1 className="text-center font-bold text-4xl">
    <h1 className="text-center flex justify-center items-center gap-10 flex-wrap">
      Give any number in this input and see the magic <BsMagic />
    </h1>
    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
  </h1>
  <div className="w-80 flex -flex-col flex-wrap m-auto">
    <input
      type="number"
      id="numberInput"
      disabled={disabled}
      onChange={(e) => setSliderNumber(e.target.value)}
      ref={numberInputRef}
      className="w-full text-2xl text-white placeholder-white placeholder-opacity-70 bg-teal-500 px-4 py-2 mt-4 rounded-lg"
      pattern="^(0*[1-9][0-9]?|100)$"
      placeholder="Enter a number"
    />
    <button
      className="text-neutral-100 m-auto sm:m-3 font-semibold px-3 sm:px-6 py-3 bg-teal-600 rounded mt-4 shadow hover:bg-teal-700"
      onClick={handleNumberInput}
      disabled={disabled}
    >
      Submit
    </button>

    <div id="progress-bar" className="w-full h-2 my-4 rounded">
      <input type="range" disabled={showSlider} ref={progressBarRef} step="2" defaultValue="0" className="w-full h-2 mt-4 thumb-teal" />
    </div>
    <p className="mt-4 text-sm">
      Progress Bar Value: <span ref={progressBarTextRef}>0</span>
    </p>
  </div>
  <div className="flex flex-row pt-5 items-center text-center justify-center ">
    <Link to="projects" activeClass="active" spy={true} className="noBlackShadow" smooth={true} offset={-100} duration={500}>
      <HiArrowDown size={35} className="animate-bounce" />
    </Link>
  </div>
</section>
  );
};

export default SliderComponent;
