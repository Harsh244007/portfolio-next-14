"use client";
import PROJECTJSON from "../../util/JSON/projects.json";
import { Article } from "./article";
import Card from "../components/card";
import { useEffect } from "react";
import Loading from "../loading";

const RenderProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PROJECTSDATA = PROJECTJSON;
  return (
    <div className="grid grid-cols-1 gap-8 mx-auto">
      <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
        {PROJECTSDATA.length === 0 ?
          <div className="flex items-center justify-center">
            <Loading />
          </div>
          : PROJECTSDATA.map((project, index) => (
            <Card max={PROJECTSDATA.length} stackAnimation={true} ix={index} tabIndex={-1} key={index} className="">
              <Article project={project} />
            </Card>
          ))}
      </div>
    </div>
  );
};
export default RenderProjects;
