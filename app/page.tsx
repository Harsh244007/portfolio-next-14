import AboutSection from "@/components/AboutSection";
import SliderComponent from "@/components/Slider";
import HeroSection from "@/components/HeroSection";
import EmbeddedIframes from "@/components/Csswork";
import SolarComponent from "@/components/Solar";
import TictactoeComponent from "@/components/Tictactoe";
import CarComponent from "@/components/Car";
import ProjectsSection from "@/components/ProjectsSection";
export default function Home() {
  const currentProtocol =
    typeof window !== "undefined" ? window.location.protocol : "https:";
  const iframeUrl1 =
    currentProtocol === "https:"
      ? "https://harsh-car.netlify.app/"
      : "http://harsh-car.netlify.app/";
  const iframeUrlTic =
    currentProtocol === "https:"
      ? "https://tic-tac-toe-preact-ts-tw.vercel.app/"
      : "http://tic-tac-toe-preact-ts-tw.vercel.app/";
  const iframeUrl3 =
    currentProtocol === "https:"
      ? "https://triangle-ballon.netlify.app/"
      : "http://triangle-ballon.netlify.app/";
  const iframeUrl2 =
    currentProtocol === "https:"
      ? "https://circular-overlap.netlify.app/"
      : "http://circular-overlap.netlify.app/";
  const iframeUrl4 =
    currentProtocol === "https:"
      ? "https://animated-tab-bar.netlify.app/"
      : "http://animated-tab-bar.netlify.app/";
  const iframeUrl5 =
    currentProtocol === "https:"
      ? "https://chameleon-harsh.netlify.app/"
      : "http://chameleon-harsh.netlify.app/";
  const iFrameURL6 =
    currentProtocol === "https:"
      ? "https://css-piano-ts.vercel.app/"
      : "http://css-piano-ts.vercel.app/";
  const iframeUrlSolar = 
      currentProtocol === "https:"
      ? "https://solar-system-css-harsh-preact-ts-tw.vercel.app/"
      : "http://solar-system-css-harsh-preact-ts-tw.vercel.app/";

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <SolarComponent url={iframeUrlSolar}/>
      <TictactoeComponent url={iframeUrlTic} />
      <EmbeddedIframes
        url1={iFrameURL6}
        url2={iframeUrl2}
        url3={iframeUrl3}
        url4={iframeUrl4}
        url5={iframeUrl5}
      />
      <AboutSection />
      <CarComponent url={iframeUrl1} />
      <SliderComponent />
      <ProjectsSection />
    </main>
  );
}
