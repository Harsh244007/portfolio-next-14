import React from "react";
import Card  from "../components/card";
import { Article } from "./article";
import PROJECTJSON from "../../util/JSON/projects.json";
import Loading from "@/app/loading";
import { lazy, Suspense } from "react";
import { NavigationType } from "@/types/types";
import Particles from "../components/particles";
import RenderProjects from "./renderProjects";
import GoToTop from "../components/Common/GoToTop";

const Navigation: NavigationType = lazy(() => import("@/app/components/nav"));
export default async function ProjectsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  return (
    <div className="relative md:pb-16">
      <Particles className="absolute inset-0 z-10 animate-fade-in" quantity={2000} />
      <Suspense fallback={<Loading />}>
        <Navigation />
      </Suspense>
      <div className="px-6 pt-20 mx-auto relative z-20 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl [view-transition-name:projectHeader] font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h2>
          <p className="mt-4  sticky top-[120px] text-zinc-400">Some of the projects are from personal work and some are on my own time.</p>
        </div>
        {/* <div className="w-full h-px bg-zinc-800" /> */}
        <Suspense fallback={<Loading />}>
           <RenderProjects/>
        </Suspense>
        <GoToTop/>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
