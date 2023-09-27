"use client"; 
import React,{memo} from 'react';

interface IframeComponentProps {
  url?: string;
}

const CountryComponent: React.FC<IframeComponentProps> = ({ url }) => {
  return (
<section id="tictactoe" className="w-full  my-4  flex flex-col justify-center items-center" tabIndex={1}>
  <h1 className="text-center font-bold text-4xl fade fadeOut">
    Country Pair
    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
  </h1>
  <iframe src={url} className="w-full bg-sun h-full border fade fadeOut" title="Harsh Car" />
</section>
  );
};

export default memo(CountryComponent);
