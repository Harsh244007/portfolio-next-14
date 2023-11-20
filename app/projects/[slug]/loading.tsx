import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <section className="flex backdrop-blur-2 filter-blur-20 top-1/2 opacity-100 right-1/2 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 fixed shadow-lg border-r-4 animate-pulse w-full min-h-screen m-auto">
    </section>
  );
};
export default function Loading() {
  return <LoadingSkeleton />;
}
