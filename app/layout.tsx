import "../public/global.css";
import "../public/nprogress.css";
import { Electrolize, Raleway, Kurale, Caveat, Permanent_Marker, Ysabeau_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import React from "react";
import Particles from "@/app/components/particles";
import TransitionLayout from "./transitionLayout";
import useCustomNumber from "@/hooks/useCustomNumber";

const ProgressBar = React.lazy(() => import("./progressBar"));

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
      <head></head>
      <body className={`bg-slate-950`}>
        <Analytics />
        <React.Suspense fallback={"loding"}>
          <ProgressBar />
        </React.Suspense>
        <Particles className="absolute inset-0 z-auto animate-fade-in" quantity={200} />
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  );
}
