"use client";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import React from "react";
import { ClipLoader } from "react-spinners";
import dynamic from "next/dynamic";
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
  }, []);
  return (
    <html lang="en">
    <style>@import url("/font.css")</style>
      <head />
      <body className="dark:bg-stone-900">
      <Analytics />
        {!loading ? (
          <ThemeProvider enableSystem={true} attribute="class">
            <AnimatedCursor
              innerSize={8}
              // showSystemCursor={true}
              outerSize={14}
              color="255, 255, 255"
              outerAlpha={0.4}
              trailingSpeed={2}
              innerScale={3}
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
                "button",
                ".link",
              ]}
            />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
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
