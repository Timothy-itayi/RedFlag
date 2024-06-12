import React from "react";

const LoadingStandings = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {Array.from({ length: 21 }).map((_, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full animate-pulse"
        >
          <div className="absolute inset-0 h-full w-full block rounded-3xl bg-gray-400 animate-pulse" />
          <div className="rounded-2xl h-full w-full p-5 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <div className="relative w-full h-40 overflow-hidden rounded-t-2xl bg-gray-600 animate-pulse" />
            <div className="relative z-50">
              <h4 className="text-zinc-100 card-font  flex-1 text-center tracking-wide mt-4 animate-pulse">Loading</h4>
              <div className="text-zinc-400 card-font grid grid-3  text-sm mt-2">
                <div className="flex justify-between mt-1">
                  <span className="font-bold  text-zinc-300 animate-pulse">Team:</span>
                  <span className="text-white  card-font flex-1 text-right animate-pulse">Loading</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-bold  text-zinc-300 animate-pulse">Points:</span>
                  <span className="text-white  card-font flex-1 text-right animate-pulse">Loading</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-bold  text-zinc-300 animate-pulse">Position:</span>
                  <span className="text-white  card-font flex-1 text-right animate-pulse">Loading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default LoadingStandings;
