"use client"; 
import React,{memo} from 'react';

interface IframeComponentProps {
  url?: string;
}

const SolarComponent: React.FC<IframeComponentProps> = ({ url }) => {
  return (
<section id="solar" className="w-full h-screen flex flex-col justify-center items-center" tabIndex={1}>
  <h1 className="text-center font-bold text-4xl">
    Sun-Moon-Earth
    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
  </h1>
  <iframe src={url} className="w-full bg-sun h-full border" title="Harsh Car" />
</section>
  );
};

export default memo(SolarComponent);
