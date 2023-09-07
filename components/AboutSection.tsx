"use client";
import React, { memo } from "react";

const skills = [
  { skill: "AEM V6.5" },
  { skill: "Java" },
  { skill: "Spring-FrameWork" },
  { skill: "Hibernate V5.5" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Socket.io" },
  { skill: "Node JS" },
  { skill: "Express JS" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "System Design" },
  { skill: "Algorithms" },
  { skill: "CSS" },
  { skill: "Less/Tailwind CSS" },
  { skill: "Git" },
];

const AboutSection = () => {
  const [expandedSection, setExpandedSection] = React.useState<boolean>(false);
  return (
    <section id="about" className="h-full" 
    tabIndex={1}>
      <div className="my-12 h-max pb-10 md:pt-14 md:pb-46">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div
          key={expandedSection ? "aboutUsExpand" : "aboutUsHidden"}
          className={`flex flex-col space-y-10 items-stretch justify-center align-top  md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left h-max overflow-hidden transition-max-height custom-height duration-1000 ease-in ${
            expandedSection ? "max-h-960" : "max-h-80"
          }`}
        >
          {" "}
          <div className={`md:w-1/2 h-auto overflow-hidden `}>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
              {"👋"} Hello, {"I'm"} Harsh, a <span className="font-bold">{"highly ambitious"}</span> and
              <span className="font-bold">{" self-motivated"}</span> software engineer based in Delhi, India.
            </p>
            <br />
            <p>
              Since my college days, {"I had"} strong passion for technology. {"🔍"} I was exploring the world of mobile performance improvement by rooting them and even managed to
              hack my {"college's"} Wi-Fi networks. 🤫
            </p>
            <br />
            <p>{"🚀"} This deep interest and enthusiasm in software led me to pursue a career in this field.</p>
            <br />

            <p>Alongside my professional journey, I have a diverse range of hobbies and passions that keep me engaged.</p>

            <br />
            <p>
              Whether it{"`"}s playing sports {"⚽"}, making tech related videos in youtube/instagram, traveling {"✈️, "} or exploring new aspects of myself, I am always seeking
              fresh experiences in life and opportunities to learn.
            </p>
            <br />
            <p>
              I firmly believe in <span className="font-bold text-teal-500">continuous growth</span> and{" "}
              <span className="font-bold text-teal-500">constantly pushing the boundaries</span> of what is possible.
            </p>
            <br />
            <p>Technology {"💡"} is my passion, and I am excited to see where my career takes me.</p>
            <br />

            <p>Currently, I am open to new opportunities and eagerly embracing the next chapter of my professional journey. 🙂</p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Tech Stack</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <a key={idx} className="noBlackShadow bg-teal-600 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold">
                    {item.skill}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <button onClick={() => setExpandedSection((prevValue) => !prevValue)} className="text-teal-500 hover:underline cursor-pointer">
          {expandedSection ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
};

export default memo(AboutSection);
