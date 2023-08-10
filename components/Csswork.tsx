"use client"; // this is a client component
import React from "react";
interface EmbeddedIframesProps {
  url2?: string;
  url3?: string;
  url4?: string;
  url5?: string;

}
const EmbeddedIframes: React.FC<EmbeddedIframesProps> = ({ url2, url3 url4, url5 }) => {
  const [expandedSection, setExpandedSection] = React.useState<boolean>(false);

  return (
    <section id="css" className="flex flex-col flex-wrap justify-around">
      <h1 className="text-center font-bold text-4xl">
          Some of CSS Work
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className={`flex flex-wrap justify-around ${expandedSection?"h-max":"h-500"}`}>
      <div className="max-w-full h-500 w-full  md:w-1/2  p-1">
        <iframe
          src={url2}
          className="w-full h-full"
          title="Circular Overlap"
          />
      </div>
      <div className="max-w-full h-500  w-full md:w-1/2 p-1">
        <iframe
        src={url3}     
        className="w-full h-full"
        title="Triangle Balloon"
        />
      </div> 
      <div className="max-w-full h-500 w-full  md:w-1/2  p-1">
        <iframe
          src={url4}
          className="w-full h-full"
          title="Animated Tab bars"
          />
      </div>
      <div className="max-w-full h-500  w-full md:w-1/2 p-1">
        <iframe
        src={url5}     
        className="w-full h-full"
        title="Chameleon CSS"
        />
      </div>
        </div>
        <button
                onClick={() => setExpandedSection((prevValue)=>!prevValue)}
                className="text-teal-500 hover:underline cursor-pointer"
              >
                {expandedSection? "Show Less" : "Show More"}
              </button>
    </section>
  );
};

export default EmbeddedIframes;
