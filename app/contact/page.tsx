import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import Loading from "@/app/loading";
import React, { lazy, Suspense } from "react";
import Particles from "../components/particles";
import { NavigationType } from "@/types/types";
const Navigation: NavigationType = lazy(() => import("@/app/components/nav"));
const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/harsh-patel244/",
    label: "LinkedIn",
    handle: "harsh-patel",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:patelharsh241999@gmail.com",
    label: "Email",
    handle: "patelharsh241999",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Harsh244007?tab=repositories",
    label: "Github",
    handle: "harsh244007",
  },
];

const Contact: React.FC = () => {
  return (
    <div
      style={{ viewTransitionName: "Contact" }}
      className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 opacity-0 fade-in relative"
    >
      <Particles className="absolute inset-0 z-10 animate-fade-in" quantity={400} />
      <Suspense fallback={<Loading />}>
        <Navigation />
      </Suspense>
      <div className="container flex flex-col gap-4 items-center justify-center min-h-screen  overflow-y-hidden px-4 mx-auto relative mt-16 md:mt-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Contact</h2>
        <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s, i) => (
            <Card key={i}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-14"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative animate-z flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="animate-z flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Contact;
