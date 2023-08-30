"use client";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import React from "react";
import { ClipLoader } from "react-spinners";
import dynamic from "next/dynamic";
import TextToSpeechPlayer from "@/components/TextToSppech";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const override = {
    display: "block",
    margin: "auto",
  };
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    document.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );
    setTimeout(() => setLoading(false), 1000);
    console.log(()=>{})
    console.info(()=>{})

    console.error(()=>{})

    console.warn(()=>{})

  }, []);
  return (
    <html lang="en">
    <style>@import url("/font.css")</style>
      <head />
      <body className="bg-stone-900">
      {/* <Analytics /> */}
        {!loading ? (
          <>
            <AnimatedCursor
              innerSize={10}
              outerSize={20}
              color="255, 255, 255"
              outerAlpha={0.2}
              trailingSpeed={1}
              innerScale={3}
              outerStyle={{      
              }}
              outerScale={5}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                ".carousel-dot",
                "button",
                ".link",
              ]}
              innerStyle={{
                backgroundColor: 'var(--cursor-color)',
                border: '20px solid white'
              }}
            />
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
}
