import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen bg-slate-900  bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <h2 className="text-lg text-white font-semibold">Loading</h2>
    </div>
  );
};

export default loading;
