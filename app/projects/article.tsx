"use client";
import Link from "next/link";
// import { Eye } from "lucide-react";
import { ProjectType } from "@/types/types";
import StaggeredText from "../components/Common/StaggeredText";
import LinkTransition from "@/app/components/Common/ViewLink"

type Props = {
  project: ProjectType;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <LinkTransition tabIndex={0} className={`  group/headerZoop rounded-xl focus:block focus:ring-2 focus:ring-[#759dab] `} href={`/projects/${encodeURIComponent(project.title)}`}>
      <article tabIndex={-1} className="p-4 md:p-8 focus:ring-2 focus:ring-[#759dab] ">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange"></span>
          {/* <span className="text-zinc-500 text-xs  flex items-center gap-1"> */}
          {/* <Eye className="w-4 h-4" /> {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)} */}
          {/* </span> */}
        </div>
        <h2
          style={{ viewTransitionName: project.title.split(" ").join("") }}
          className={` z-20  text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display pr-2 `}
        >
          <StaggeredText className="text-xl lg:text-xl h-20" focus={false} hoverGroup={false} str={project.title}>
          </StaggeredText>

        </h2>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
      </article>
    </LinkTransition>
  );
};
