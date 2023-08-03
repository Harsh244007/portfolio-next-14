import React, { useState, useEffect } from "react";

const TextToSpeechPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [pausedAt, setPausedAt] = useState(0);
// @ts-ignore
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);

  const getTextToRead = () => {
    // @ts-ignore
    const textContent:any = document.body.textContent;
    const withoutTags = textContent.replace(/<[^>]+>/g, " ");
    const withoutFunctions = withoutTags.replace(/\{[^}]+\}/g, "");
    return withoutFunctions.trim().split(" ");
  };

  useEffect(() => {
    if (isPlaying) {
      const words = getTextToRead();
      const utterance = new SpeechSynthesisUtterance(words.join(" "));
      utterance.rate = speed;
      utterance.onboundary = (event) => {
        if (event.name === "word") {
            // setHighlightedIndex(event.charIndex / 2); // Dividing by 2 to account for spaces
          setHighlightedWord(words[event.charIndex / 2]); // Dividing by 2 to account for spaces
        }
      };
      utterance.onend = () => {
        setHighlightedWord(null);
        // setHighlightedIndex(-1);
        setIsPlaying(false);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    //   setHighlightedIndex(-1);
      setHighlightedWord(null);
    }
  }, [isPlaying, speed]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="text-to-speech-player justify-between items-center flex flex-col fixed bottom-4 left-1/2 transform -translate-x-1/2 w-74 h-18 text-teal-600 bg-stone-800 rounded-md p-2">
      <p className="text-xl">Text to speech</p>
      <div className="flex justify-between items-center">
        <button onClick={handlePlayPause} className="text-white">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0.25"
          max="3"
          step="0.25"
          value={speed}
          onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
          className="flex-grow mx-2"
        />
      </div>
      <div className="mt-2">
        {highlightedWord && (
          <span className="bg-orange-200 px-1">{highlightedWord}</span>
        )}
      </div>
      {/* <div className="mt-2">
        {getTextToRead().map((word, index) => (
          <span
            key={index}
            className={`${
              index === highlightedIndex
                ? "bg-orange-200"
                : ""
            } px-1`}
          >
            {word}{" "}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default TextToSpeechPlayer;
