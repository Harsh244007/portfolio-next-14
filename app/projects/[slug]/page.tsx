import PROJECTJSON from "@/util/JSON/projects.json";
import { ProjectDeatailsType } from "@/types/types";
import { PagesArticle } from "./pagesArticle";
import { notFound } from "next/navigation";
import Loading from "@/app/loading";
import React, { lazy, Suspense } from "react";
import { NavigationType } from "@/types/types";
import Particles from "@/app/components/particles";
import { Card } from "@/app/components/card";

const Navigation: NavigationType = lazy(() => import("@/app/components/nav"));

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  const slug = decodeURIComponent(params?.slug);
  const project: ProjectDeatailsType | undefined = PROJECTJSON.find(
    (project: ProjectDeatailsType) => project.title === slug
  );
  if (!project) return notFound();

  return (
    <section className=" min-h-screen">
      <Particles className="absolute inset-0 z-10 animate-fade-in" quantity={300} />
      <Suspense fallback={<Loading />}>
        <Navigation />
      </Suspense>
      <div className="px-6 pt-30 mx-auto prose prose-zinc prose-quoteless space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <Card>
          <PagesArticle project={project} views={Math.round(Math.random() * (4980 - 120) + 120)} />
        </Card>
      </div>
    </section>
  );
}
