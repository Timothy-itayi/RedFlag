import React from "react";
import StandingsContainer from "../components/driver-components/standings-container"; // Import the StandingsContainer component
import ScrollToTop from "@/components/ui/scroll-to-top";
import Navbar from "@/components/ui/navbar";

const Standings: React.FC = () => {
  return (
    <div>
    
        <ScrollToTop/>
    <div className="text-center p-10">
    <Navbar />
      <h1 className="text-7xl  text-white name-font">Drivers Standings</h1>
    </div>
      <StandingsContainer />
    </div>
  );
};

export default Standings;
