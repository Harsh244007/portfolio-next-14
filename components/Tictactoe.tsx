"use client"; 
import React,{memo} from 'react';

interface IframeComponentProps {
  url?: string;
}

const TictactoeComponent: React.FC<IframeComponentProps> = ({ url }) => {
  return (
<section id="tictactoe" className="w-full h-screen flex flex-col justify-center items-center">
  <h1 className="text-center font-bold text-4xl">
    Tic-Tac-Toe(Dynamic)
    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
  </h1>
  <iframe src={url} className="w-full bg-teal-car h-full border-none" title="Harsh Car" />
</section>
  );
};

export default memo(TictactoeComponent);
