"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import React, { memo, useEffect, useRef, useState } from "react";
import { navigationCommon as navigation } from "@/util/JSON/profileData";
import Link from "next/link";
import StaggeredText from "./Common/StaggeredText";
function Navigation() {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const pathname = usePathname();
  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-slate-950 bg-opacity-10 backdrop-blur  duration-200 border-b  ${isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500  border-zinc-800 "
          }`}
      >
        <nav className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <ul className="flex justify-between gap-8">
            {navigation.map((navItem) => {
              if (pathname !== navItem.href) {
                return (
                  <Link
                    tabIndex={0} href={navItem.href} key={navItem.href}
                    className="duration-200 px-2 pt-1 group/headerZoop text-zinc-400 hover:text-zinc-100 cursor-pointer"
                  >
                    <li
                    >
                      <StaggeredText className="" focus={false} hoverGroup={false} str={navItem.name}>
                      </StaggeredText>
                    </li>
                  </Link>
                );
              } else {
                return "";
              }
            })}
          </ul>

          <Link href={"/"}
            tabIndex={1}
            className="duration-200 group/headerArrow text-zinc-300 hover:text-zinc-100 cursor-pointer"
          >
            {/* @ts-ignore */}
            <div className="relative   overflow-hidden">
              <ArrowLeft className="w-6 h-6 relative top-0 group-focus/headerArrow:top-[24px] group-hover/headerArrow:top-[24px] group-active/headerArrow:top-[24px]" />
              <ArrowLeft className="w-6 h-6 absolute inset-0 top-[-24px] group-focus/headerArrow:top-[0px] group-hover/headerArrow:top-[0px] group-active/headerArrow:top-[0px] " />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default memo(Navigation)