"use client";
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"
import { AiOutlineGithub} from "react-icons/ai";

const projects = [
  {
    name: "Recursive Comment Section.",
    description:
      "Explore an engaging and intuitive comment section built with Preact, TypeScript, and Tailwind CSS. Dive into a seamless experience of nested comments, replies, and discussions. Discover the power of interactive web development in this feature-rich example. Join the conversation and make your voice heard!",
    image: "/comment.JPG",
    link:"https://recursive-nested-comments.vercel.app/",
    github: "https://github.com/Harsh244007/Recursive-nested-comments",
  },
  {
    name: "Ecommerce App with discount on individual items from backend.",
    description:
      "I've developed an eCommerce app using Next.js, fetching data from Node.js with a 5-item limit per page. Each item comes with its unique discount coupon for user application. I have used tailwind and typescript with next js and mongoose.",
    image: "/ecom.gif",
    link:"https://e-com-store-next-typescript.vercel.app/",
    github: "https://github.com/Harsh244007/e-com-store-next-typescript",
  },
  {
    name: "Master algo with visualize app in preact and typescript.",
    description:
      "I've created a user-friendly app using Preact, TypeScript, and Tailwind CSS to simplify mastering Data Structures and Algorithms, covering topics from strings to trees and graphs. The app includes visualizations to aid in comprehension, making the learning process more accessible in today's chaotic world.",
    image: "",
    link:"https://master-algo-in-react-typescript.vercel.app",
    github: "https://github.com/Harsh244007/Master-algo-in-react-typescript-",
  },
  {
    name: "Rate limiting algorithms in express - typescript.",
    description:
      "I've created a Rate limiting algorithms in Express with TypeScript help manage and control the number of requests a server can handle from a single client within a specified timeframe.",
    image: "",
    link:"",
    github: "https://github.com/Harsh244007/rate-limiting-algos",
  },
  {
    name: "Fully Working Movie and TV Shows streming using React and Node",
    description:
      "I've built a movie and TV series clone using Preact and TypeScript, showcasing an extensive collection of films. I've also set up a proxy for the BonkuMovies API on Vercel, leveraging Node.js to provide seamless access to a wide range of content.",
    image: "/bonku.gif",
    link:"https://bonku-movies-clone.vercel.app/",
    github: "https://github.com/Harsh244007/bonku-movies-clone",
  },  
  {
    name: "University Dean Student CRUD and session booking app.",
    description:
      "I've built a Node.js-based university session API that enables students to schedule one-on-one sessions with deans. It incorporates secure user authentication through JWT and password hashing via bcrypt. The system maintains a strict one-student-to-one-dean ratio for each session, ensuring personalized and efficient interactions between students and deans.",
    image: "",
    link:"",
    github: "https://github.com/Harsh244007/dean-student-backend",
  },
  {
    name: "A really cool chatbot in react with custom inputs for student info.",
    description:
      "I've crafted a chatbot using React, Redux, TypeScript, and Tailwind CSS, featuring a customized input system that appears as needed, enhancing user interactions for a dynamic and engaging experience.",
    image: "/chatbot.gif",
    link:"https://chat-bot-react-redux-ts.vercel.app/",
    github: "https://github.com/Harsh244007/chat-bot-react-redux-ts",
  },
  {
    name: "JAVA SpringBoot weather app.",
    description:
      "I've developed a highly optimized Java Spring Boot application backed by PostgreSQL for a weather app. It efficiently fetches weather data for every city, ensuring real-time updates and accurate information at users' fingertips..",
    image: "",
    link:"",
    github: "https://github.com/Harsh244007/spring-hibernate-postgres-weather-app",
  },
  {
    name: "NODE JS Proxy server for Bonku Movies API.",
    description:
      "I've created a Node.js proxy server to resolve CORS issues when accessing the Bonku Movies API in the browser. This proxy allows seamless data retrieval from the API to the browser, ensuring a smooth and secure user experience while circumventing cross-origin restrictions.",
    image: "",
    link:"",
    github: "https://github.com/Harsh244007/backend-bonkumovies-proxy",
  },
  {
    name: "Text to Speech with Speech Synthesis web api.",
    description:
      "I've developed a web application that utilizes the Speech Synthesis Web API, offering users multiple customizable settings. This app converts text into speech, allowing users to adjust parameters such as pitch, rate, and voice selection for a personalized and versatile text-to-speech experience.",
    image: "/speech.JPG",
    link:"https://speech-synthesis-app-demo.vercel.app/",
    github: "https://github.com/Harsh244007/speech-synthesis-app-demo",
  },
  {
    name: "Web Accesibility Simplified in react.",
    description:
      "I've developed a React app with TypeScript and Tailwind CSS to simplify the often complex topic of web accessibility. This app provides a user-friendly platform for understanding and implementing web accessibility guidelines, making it easier for developers and designers to create inclusive and user-friendly web experiences for all.",
    image: "/accessibility.JPG",
    link:"https://web-accesibility-preact-ts-tw.vercel.app/",
    github: "https://github.com/Harsh244007/web-accesibility-preact-ts-tw",
  },
  {
    name: "Text to Speech with Speech Synthesis web api.",
    description:
      "I've developed a web application that utilizes the Speech Synthesis Web API, offering users multiple customizable settings. This app converts text into speech, allowing users to adjust parameters such as pitch, rate, and voice selection for a personalized and versatile text-to-speech experience.",
    image: "/speech.JPG",
    link:"https://speech-synthesis-app-demo.vercel.app/",
    github: "https://github.com/Harsh244007/speech-synthesis-app-demo",
  },
  {
    name: "SOLID principle simplified in react.",
    description:
      "I've created an app using React and Tailwind CSS that simplifies the understanding of the SOLID principles. It presents the principles in an easy-to-grasp manner, utilizing pre-formatted tags for code examples. This user-friendly interface makes it accessible for learners to comprehend and apply SOLID design principles in software development.",
    image: "/solid.JPG",
    link:"https://solid-principle-react-simplified.vercel.app/",
    github: "https://github.com/Harsh244007/solid-principle-react-simplified-in-preact",
  },
  {
    name: "TickTacToe, video trimmer and Other Projects ++",
    description:
      "I like to Craft cool innovations for personal growth and uncovering the magic behind the scenes. From interactive data visualization with Highcharts, React, and TypeScript, to a self-built Text-to-Speech engine using speech synthesis. Delve into a user-friendly Web Video Trimmer powered by FFMPEG and web GPU, and explore dynamic BTC Wallets with live charting. Check out my GitHub for more exciting projects!",
    image: "/allProject.gif",
    link:"",
    github: "https://github.com/Harsh244007?tab=repositories",
  },
  {
    name: "Apperture Gear Studios - WIP",
    description:
      "Apperture Gear Studios is built on Next JS for their photography business. This platform consolidates all their clients' needs, providing a centralized hub for their event images and videos.",
    image: "/apperture.jpeg",
    github:"",
    link: "https://www.aperturegearstudio.com/",
  },

  {
    name: "Aplus Audios",
    description:
      "Aplus Audios, a leading provider of audio solutions. This website offers customers a convenient platform to access and explore their products available. Built on top of MERN stack, Aplus Audios aims to optimize the customer experience and simplify the process of discovering and purchasing their audio solutions online.",
    image: "/aplus.jpeg",
    github:"",
    link: "https://www.aplusaudios.com/",
  },
  // {
  //   name: "Vagreya.com",
  //   description:
  //     "Vagreya is an event booking web application designed specifically for artists. It serves as a bridge connecting clients and artists, facilitating the organization of events. Built on the full MERN stack, this robust platform offers a comprehensive solution for managing and coordinating various aspects of event bookings.",
  //   image: "/vagreya.jpeg",
  //   link: "https://vagreya.com/",
  // },
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
    <section id="projects" className="mt-3" tabIndex={1}>
    <h1 className="my-10 text-center font-bold text-4xl fade  fadeOut ">
      Projects
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
    </h1>
    <div className="flex h-95vh flex-col space-y-28">
      {projects.map((project, idx) => {
        return (
          <div key={idx} tabIndex={2}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex fade fadeOut flex-col mb-8  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                {project.image !== ""?
                <div className=" md:w-1/2">
                  <Link href={project.link} target="_blank" className="noBlackShadow">
                    <Image src={project.image} alt="" width={1000} height={1000} loading={"lazy"} className="rounded-xl shadow-xl hover:opacity-70 noBlackShadow" />
                  </Link>
                </div>:""}
                <div className={`${project.image !== ""?"md:w-1/2":""}`}>
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
                    {project.link !== "" ? 
                    <Link href={project.link} target="_blank" className="projectSection">
                      <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                    :""
                  }
                  {project.github !== "" ? 
                      <Link href={project.github} target="_blank" className="projectSection">
                        <AiOutlineGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                      </Link>
                    :""
                  }
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
