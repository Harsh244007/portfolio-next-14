import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import CarComponent from "@/components/Car"
import ProjectsSection from "@/components/ProjectsSection"
export default function Home() {
  const currentProtocol = typeof window !== 'undefined' ? window.location.protocol : 'https:';
  const iframeUrl =
    currentProtocol === 'https:'
      ? 'https://harsh-car.netlify.app/'
      : 'http://harsh-car.netlify.app/';

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <CarComponent url={iframeUrl}/>
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
