import React from "react";
import { Card } from "../components/card";
import { Article } from "./article";
import PROJECTJSON from "../../util/JSON/projects.json";
import Loading from "@/app/loading";
import { lazy, Suspense } from "react";
import { NavigationType } from "@/types/types";
const Navigation: NavigationType = lazy(() => import("@/app/components/nav"));
export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Suspense fallback={<Loading />}>
        <Navigation />
      </Suspense>
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from personal work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto">
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {PROJECTJSON.map((project, index) => (
              <Card key={index}>
                <Article project={project} views={Math.round(Math.random() * (4980 - 120) + 120)} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}