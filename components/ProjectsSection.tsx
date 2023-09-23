"use client";
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Personal Projects ++",
    description:
      "I like to Craft cool innovations for personal growth and uncovering the magic behind the scenes. From interactive data visualization with Highcharts, React, and TypeScript, to a self-built Text-to-Speech engine using speech synthesis. Delve into a user-friendly Web Video Trimmer powered by FFMPEG and web GPU, and explore dynamic BTC Wallets with live charting. Check out my GitHub for more exciting projects!",
    image: "/allProject.gif",
    link: "https://github.com/Harsh244007?tab=repositories",
  },
  {
    name: "Apperture Gear Studios - WIP",
    description:
      "Apperture Gear Studios is built on Next JS for their photography business. This platform consolidates all their clients' needs, providing a centralized hub for their event images and videos.",
    image: "/apperture.jpeg",
    link: "https://www.aperturegearstudio.com/",
  },

  {
    name: "Aplus Audios",
    description:
      "Aplus Audios, a leading provider of audio solutions. This website offers customers a convenient platform to access and explore their products available. Built on top of MERN stack, Aplus Audios aims to optimize the customer experience and simplify the process of discovering and purchasing their audio solutions online.",
    image: "/aplus.jpeg",
    link: "https://www.aplusaudios.com/",
  },
  {
    name: "Vagreya.com",
    description:
      "Vagreya is an event booking web application designed specifically for artists. It serves as a bridge connecting clients and artists, facilitating the organization of events. Built on the full MERN stack, this robust platform offers a comprehensive solution for managing and coordinating various aspects of event bookings.",
    image: "/vagreya.jpeg",
    link: "https://vagreya.com/",
  },
]

const ProjectsSection = () => {
  const [expandedId, setExpandedId] = React.useState<null | number>(null);

  const toggleDescription = (id:number):void => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  return (
    <section id="projects" tabIndex={1}>
    <h1 className="my-10 text-center font-bold text-4xl">
      Projects
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
    </h1>
    <div className="flex h-95vh flex-col space-y-28">
      {projects.map((project, idx) => {
        return (
          <div key={idx} tabIndex={2}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col mb-8  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.link} target="_blank" className="noBlackShadow">
                    <Image src={project.image} alt="" width={1000} height={1000} loading={"lazy"} className="rounded-xl shadow-xl hover:opacity-70 noBlackShadow" />
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p
                    className={`text-xl leading-7 mb-4 h-max ${expandedId === idx ? "max-h-96 text-neutral-200" : "max-h-24 text-neutral-400"}   overflow-hidden transition-max-height`}
                  >
                    {project.description}
                  </p>
  
                  <button onClick={() => toggleDescription(idx)} className="text-teal-500 hover:underline cursor-pointer">
                    {expandedId === idx ? "Read Less" : "Read More"}
                  </button>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank" className="projectSection">
                      <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        );
      })}
    </div>
  </section>  
  )
}

export default ProjectsSection
