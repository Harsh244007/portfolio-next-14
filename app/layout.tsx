"use client";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect, useState, useRef } from "react";
import { ClipLoader } from "react-spinners";

interface CustomCursorProps {
  nodeName: string;
  nodeText: string;
  setNodeName: React.Dispatch<React.SetStateAction<string>>; 
  setNodeText: React.Dispatch<React.SetStateAction<string>>; 
  isClicked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  nodeName,
  nodeText,
  setNodeName,
  setNodeText,
  isClicked,
  onClick,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  let mouseDebouncer: number; // Use let instead of const

  useEffect(() => {
    mouseDebouncer = window.setTimeout(() => {
      if (cursorRef.current) {
        cursorRef.current.style.display = "none";
        document.body.style.cursor = "auto";
      }
    }, 7000);

    const handleMouseMove = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (
          event.target.nodeName === "IFRAME" ||
          event.target.localName === "img"
        ) {
          if (cursorRef.current) {
            cursorRef.current.style.display = "none";
            document.body.style.cursor = "auto";
          }
        } else {
          setNodeName(event.target.localName);
          setNodeText(event.target.innerText);
          clearTimeout(mouseDebouncer);

          if (cursorRef.current) {
            cursorRef.current.style.display = "flex";
            document.body.style.cursor = "none";
          }

          mouseDebouncer = window.setTimeout(() => {
            if (cursorRef.current) {
              cursorRef.current.style.display = "none";
              document.body.style.cursor = "auto";
            }
          }, 7000);

          const mouseX = event.clientX;
          const mouseY = event.clientY;
          const positionElement = () => {
            if (cursorRef.current) {
              cursorRef.current.style.top = mouseY + "px";
              cursorRef.current.style.left = mouseX + "px";
            }
          };
          positionElement();
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseDebouncer);
    };
  }, [setNodeName, setNodeText]);

  const clickedClass = isClicked ? "-clicked" : "";

  return (
    <div
      onClick={onClick}
      className={`custom-cursor ${clickedClass} ${
        nodeName === "a" || nodeName === "button" ? "hovered" : ""
      }`}
      ref={cursorRef}
    >
      <p>{nodeName === "a" || nodeName === "button" ? nodeText : "Hello!"}</p>
      <div />
    </div>
  );
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const override = {
    display: "block",
    margin: "auto",
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.addEventListener(
      "contextmenu",
      (e) => {
        e.preventDefault();
      },
      false
    );

    setTimeout(() => setLoading(false), 1000);
  }, []);

  const [nodeName, setNodeName] = useState("");
  const [nodeText, setNodeText] = useState("");
  const [isClicked, setClicked] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClicked((prev) => !prev);
  };

  return (
    <html lang="en">
      <style>@import url("/font.css");</style>
      <head />
      <body className="bg-stone-900">
        {/* <Analytics /> */}
        <CustomCursor
          nodeName={nodeName}
          setNodeName={setNodeName}
          nodeText={nodeText}
          setNodeText={setNodeText}
          isClicked={isClicked}
          onClick={onClick}
        />
        {!loading ? (
          <>
            <Navbar />
            {children}
            <Footer />
            {/* <TextToSpeechPlayer/> */}
          </>
        ) : (
          <div className="loader">
            <ClipLoader
              color="#0d9488"
              size={150}
              cssOverride={override}
              loading={loading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p>Loading...</p>
          </div>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
