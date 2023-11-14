'use client'
import Link from "next/link";
import { NavigationType } from "@/types/types";
import Loading from "@/app/loading";
import React, { lazy, Suspense } from "react";
const Navigation: NavigationType = lazy(() => import("@/app/components/nav"));


const Error:React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
    <Suspense fallback={<Loading />}>
        <Navigation />
      </Suspense>
      <h1 className="text-3xl text-white font-semibold">404 - Page Not Found</h1>
      <p className="text-gray-200 text-center mt-2">
        Oops, you seem to be on the wrong page. Please go to the{" "}
        <Link href="/" className="text-underline underline">
          Home
        </Link>
        .
      </p>

      <Link href={"/"}>
        <button
          className={`bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 m-auto mt-4 `}
        >
          Home
        </button>
      </Link>
    </section>
  );
};

export default Error;
