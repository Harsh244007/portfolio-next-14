"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Navigation()  {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter()
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const navigation = [
    { name: "Projects", href: "/projects", target: "_self" },
    { name: "Contact", href: "/contact", target: "_self" },
    { name: "Resume", href: "/Resume-Harsh-Patel.pdf", target: "_blank" },
  ];

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {navigation.map((navItem, index) => {
              return (
                <Link
                  key={index}
                  href={navItem.href}
                  target={navItem.target}
                  className="duration-200 text-zinc-400 hover:text-zinc-100"
                >
                  {navItem.name}
                </Link>
              );
            })}
          </div>

          <button onClick={()=>router.back()} className="duration-200 text-zinc-300 hover:text-zinc-100">
            <ArrowLeft className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </header>
  );
};
