import React from "react"
import Image from "next/image"

const skills = [
  { skill: "AEM" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node JS" },
  { skill: "Express JS" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Algorithms" },
  { skill: "Git" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 h-95vh pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
             {"👋"} Hello, {"I'm"} Harsh, a <span className="font-bold">{"highly ambitious"}</span> and 
              <span className="font-bold">{" self-motivated"}</span> software engineer based in Delhi, India.
            </p>
            <br />
            <p>
            Since my college days, {"I had"} strong passion for technology. {"🔍"} I was exploring the world of mobile performance improvement by rooting them and even managed to hack my {"college's"} Wi-Fi networks.  🤫 
            </p> 
            <br />
            <p>
           {"🚀"} This deep interest and enthusiasm in software led me to pursue a career in this field. 
            </p>
            <br />
            
            <p>
            Alongside my professional journey, I have a diverse range of hobbies and passions that keep me engaged.
            </p>
            
            <br />
            <p>
            Whether it's playing sports {"⚽"}, traveling {"✈️, "} or exploring new aspects of myself, I am always seeking fresh experiences in life and opportunities to learn.
            </p>
            <br />
            <p>

            I firmly believe in <span className="font-bold text-teal-500">continuous growth</span> and <span className="font-bold text-teal-500">constantly pushing the boundaries</span> of what is possible. 
           
            </p>
            <br />
            <p>

            Technology {"💡"} is my passion, and I am excited to see where my career takes me. 
            </p>
            <br />
            
            <p>
            Currently, I am open to new opportunities and eagerly embracing the next chapter of my professional journey. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <a key={idx} className="noBlackShadow bg-teal-600 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold">
                    {item.skill}
                  </a>
                )
              })}
            </div>
            {/* <Image src="/hero-image.png" alt="" width={325} height={325} className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
