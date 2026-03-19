import React from "react";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";

const Drivers_Standings: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <ScrollToTop />
      <div className="text-center p-5">
        <Navbar />
        <h1 className="text-5xl text-white card-font">Drivers Standings</h1>
      </div>

      <div className="max-w-2xl mx-auto mt-16 px-6">
        <div className="border-2 border-yellow-400 rounded-lg overflow-hidden">
          <div
            className="w-full py-3 text-black font-bold text-base tracking-widest uppercase text-center"
            style={{
              background:
                "repeating-linear-gradient(-45deg, #facc15, #facc15 10px, #000 10px, #000 20px)",
            }}
          >
            <span className="bg-yellow-400 px-3 py-1">UNDER CONSTRUCTION</span>
          </div>

          <div className="p-8 text-center">
            <p className="text-white text-xl name-font mb-4">
              The Drivers Standings section is temporarily offline.
            </p>
            <p className="text-yellow-400 name-font mb-8">
              The F1 landscape has changed — new teams, new drivers, new regulations.
              We are updating our data sources to reflect the current grid.
            </p>
            <Link
              href="/"
              className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300 transition-colors name-font"
            >
              Back to Home
            </Link>
          </div>

          <div
            className="w-full py-3"
            style={{
              background:
                "repeating-linear-gradient(-45deg, #facc15, #facc15 10px, #000 10px, #000 20px)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Drivers_Standings;
