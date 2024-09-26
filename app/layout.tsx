import "../public/global.css";
import { Electrolize, Raleway, Kurale, Caveat, Permanent_Marker, Ysabeau_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import React from "react";
import Particles from "@/app/components/particles";
import useCustomNumber from "@/hooks/useCustomNumber";
import Image from "next/image";
import TransparentImage from "./components/TransparentImage";
// import { Head } from "next/document";
// import { readFileSync } from "fs";
// import { join } from "path";
import { ViewTransitions } from 'next-view-transitions'

const TransitionLayout = React.lazy(() => import("./transitionLayout"));

export const metadata: Metadata = {
  title: {
    default: "Harsh Patel | Portfolio",
    template: "%s | Harsh Patel",
  },
  description: "Harsh Patel | Building tech that redefines industry standards.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut:
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
  },
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": '/IMG_0596.jpeg',
    "twitter:card": "summary_large_image",
    "og:url": "https://harsh-portfolio-flax.vercel.app",
    "og:image": '/IMG_0596.jpeg',
    "og:type": "website",
  }
};

const electrolize = Electrolize({
  subsets: ["latin"],
  weight: ["400"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
});
const kurale = Kurale({
  subsets: ["latin"],
  weight: ["400"],
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});
const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
const ysabeau = Ysabeau_SC({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ysabeau",
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const customNumber = useCustomNumber(0, 5);
  return (
    <ViewTransitions>

      <html
        lang="en"
        className={
          customNumber === 0
            ? electrolize.className
            : customNumber === 1
              ? raleway.className
              : customNumber === 2
                ? kurale.className
                : customNumber === 3
                  ? caveat.className
                  : customNumber === 4
                    ? marker.className
                    : ysabeau.className
        }
      >
        <head>

        </head>
        <body className={`bg-slate-950 overflow-auto will-change-scroll overflow-x-hidden m-auto h-screen w-full`}>
          <TransparentImage />
          <Analytics />
          <Particles className="absolute inset-0 z-auto animate-fade-in will-change-contents" quantity={200} />
          <React.Suspense fallback={<></>}>

            <TransitionLayout>{children}</TransitionLayout>
          </React.Suspense>
          <footer className="fixed p-0 right-0 overflow-hidden left-0 bottom-0 h-2 w-full"></footer>
        </body>
      </html>
    </ViewTransitions>

  );
}
