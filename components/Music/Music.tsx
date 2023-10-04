"use client"
import React, { useState, useEffect } from "react";

const MusicButton: React.FC = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();

  const handleClick = () => {
    if (isAudioLoaded) {
      const audioElement = audioRef.current;
      if (audioElement) {
        if (audioElement.paused) {
          audioElement.play();
          audioElement.volume = 0.5; 
        } else {
          audioElement.pause(); 
        }
      }
      setIsRotating((prev) => !prev);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("canplaythrough", () => {
        setIsAudioLoaded(true);
      });
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("canplaythrough", () => {
          setIsAudioLoaded(false);
        });
      }
    };
  }, []);

  return (
    <>
    <section aria-hidden="true"
      className={`fixed bottom-4 right-4 h-12 w-12 flex items-center justify-center bg-stone-900  border border-gray-300 text-white rounded-full cursor-pointer ${
        isRotating ? "rotate" : ""
      } ${isAudioLoaded?"flex":"hidden"}`}
      onClick={handleClick}
    >
      <button>
        🎵
      </button>
    </section>
      {/* // @ts-ignore */}
      <audio ref={audioRef} preload="auto" data-wf-ignore="true" loop className="bgAudio">
        <source src={"/music.mp3"} type="audio/mp3" />
      </audio>
      </>
  );
};

export default MusicButton;
