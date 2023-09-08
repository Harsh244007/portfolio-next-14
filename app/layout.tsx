"use client";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect, useState, useRef } from "react";
import { ClipLoader } from "react-spinners";

interface CustomCursorProps {
  nodeName: string;
  loading:boolean;
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
  loading,
  setNodeText,
  isClicked,
  onClick,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  let  mouseDebouncer:number
  useEffect(() => {

    const handleMouseMove = (event: MouseEvent) => {
      console.log("Mouse Move : ",event.target.nodeName)
      if (event.target instanceof HTMLElement) {
        if (
          event.target.nodeName.toLowerCase() === "iframe"||
          event.target.nodeName.toLowerCase() === "h1"||
                   event.target.nodeName.toLowerCase() === "img"
        ) {
          if (cursorRef.current) {
            cursorRef.current.style.display = "none";
            document.body.style.cursor = "auto";
          }
        } else {
          // console.log("Mouse Move Event : ",event)
          setNodeName(event.target.nodeName);
          setNodeText(event.target.innerText);
          clearTimeout(mouseDebouncer);

          if (cursorRef.current) {
            cursorRef.current.style.display = "flex";
            document.body.style.cursor = "none";
          }
          const mouseX = event.pageX;
          const mouseY = event.pageY;
          const positionElement = () => {
            if (cursorRef.current) {
              cursorRef.current.style.top = mouseY + "px";
              cursorRef.current.style.left = mouseX + "px";
            }
          };
          positionElement();

          mouseDebouncer = window.setTimeout(() => {
            if (cursorRef.current) {
              cursorRef.current.style.display = "none";
              document.body.style.cursor = "auto";
            }
          }, 4000);

        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseDebouncer);
    };
  }, []);


  return (
    <div
      onClick={onClick}
      className={`custom-cursor ${
        loading === true || nodeName.toLowerCase() === "a" ||  nodeName.toLowerCase() === "H2" || nodeName.toLowerCase() === "button" ? "hovered" : ""
      }`}
      ref={cursorRef}
    >
      <p>{loading === false && nodeName.toLowerCase() === "a" ||  nodeName.toLowerCase() === "H2" || nodeName.toLowerCase() === "button" ? nodeText :loading===false? "Hello!":"Welcome"}</p>
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
    console.log(()=>{})
    console.info(()=>{})

    console.error(()=>{})

    console.warn(()=>{})
    return () => {
      document.removeEventListener("contextmenu",  (e) => {
        e.preventDefault();
      });
          };
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
            loading={loading}
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
