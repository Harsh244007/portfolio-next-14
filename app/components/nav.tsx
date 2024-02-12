"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import React, { memo, useEffect, useRef, useState } from "react";
import { navigationCommon as navigation } from "@/util/JSON/profileData";
import Link from "next/link";
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
                  <Link href={navItem.href} key={navItem.href}
                    className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
                  >
                    <li
                    >
                      {navItem.name}
                    </li>
                  </Link>
                );
              } else {
                return "";
              }
            })}
          </ul>

          <Link href={"/"}
            className="duration-200 text-zinc-300 hover:text-zinc-100 cursor-pointer"
          >
            {/* @ts-ignore */}
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default memo(Navigation)