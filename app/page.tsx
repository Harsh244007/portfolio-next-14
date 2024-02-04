import Link from "next/link";
import React, { Suspense,lazy } from "react";
import Particles from "./components/particles";
import { ExtendedDocument } from "@/types/types";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { navigation, aboutMe } from "@/util/JSON/profileData";
import Image from "next/image";
import BodyScroll from "@/hooks/useBodyScroll";
const HomeNavigation = lazy(() => import("./components/homeNavigation"));

export default async function Home() {
  console.info("Example Sitemap",process.env.NEXT_PUBLIC_ROOT_DOMAIN )
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  return (
    <div className="flex nav-Home flex-col items-center  justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black opacity-0 fade-in">
      <BodyScroll/>
      <nav className="my-16 animate-fade-in px-2 sm:px-0 ">
        <Suspense fallback={<Loading />}>
          <HomeNavigation Navigation={navigation} />
        </Suspense>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1
        style={{ viewTransitionName: aboutMe.transition }}
        className="z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text pr-4 pl-4 "
      >
        {aboutMe.name}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 px-2 sm:px-0 text-center animate-fade-in">
        <h2 className="flex justify-center items-center gap-1 text-sm text-zinc-400 hover:text-white">{aboutMe.quote}</h2>
        <h3 className="text-sm text-zinc-400 hover:text-white">
          <Link target="_blank" href={aboutMe.github.link} className="underline duration-500 hover:text-zinc-300">
            {aboutMe.github.title}
          </Link>
        </h3>
      </div>
    </div>
  );
}
