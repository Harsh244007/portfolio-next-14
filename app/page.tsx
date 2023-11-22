import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects", target: "_self" },
  { name: "Contact", href: "/contact", target: "_self" },
  { name: "Resume", href: "/Resume-Harsh-Patel.pdf", target: "_blank" },
  {name:"3D Designs",href:"https://next-three-js-island.vercel.app/",target:"_blank"}
];

const aboutMe = {
  name: "Harsh Patel",
  quote: "Building tech that redefines industry standards.",
  github: { title: "github", link: "https://github.com/Harsh244007?tab=repositories" },
};

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              target={item.target}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {aboutMe.name}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">{aboutMe.quote}</h2>
        <h3 className="text-sm text-zinc-500">
          <Link target="_blank" href={aboutMe.github.link} className="underline duration-500 hover:text-zinc-300">
            {aboutMe.github.title}
          </Link>
        </h3>
      </div>
    </div>
  );
}
