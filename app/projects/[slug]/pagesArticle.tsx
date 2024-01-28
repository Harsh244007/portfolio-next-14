import { Eye } from "lucide-react";
import { ProjectDeatailsType } from "@/types/types";
import Link from "next/link";

type Props = {
  project: ProjectDeatailsType;
  views: number;
};

export const PagesArticle: React.FC<Props> = ({ project, views }) => {
  return (
    <article className="p-4 md:p-8 container mx-auto relative isolate overflow-hidden">
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange"></span>
        <span className="text-zinc-500 text-xs  flex items-center gap-1">
          {/* <Eye className="w-4 h-4" /> {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)} */}
        </span>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="mx-auto max-w-2xl w-full lg:mx-0">
          <h1
            style={{ viewTransitionName: project.title }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display"
          >
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">{project.description}</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {project.github && project.github !== "" ? (
              <Link target="_blank" key={project.github} href={project.github} className="text-white">
                {"Github"} <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : (
              ""
            )}
            {project.link && project.link !== "" ? (
              <Link target="_blank" key={project.link} href={project.link} className="text-white">
                {"Website"} <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
