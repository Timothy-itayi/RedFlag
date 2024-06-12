import React from "react";
import StandingsContainer from "../components/driver-components/standings-container"; // Import the StandingsContainer component
import ScrollToTop from "@/components/ui/scroll-to-top";
import Navbar from "@/components/ui/navbar";

const Drivers_Standings: React.FC = () => {
  return (
    <div>
    
        <ScrollToTop/>
    <div className="text-center p-10">
    <Navbar />
      <h1 className="text-5xl  text-white card-font">Drivers Standings</h1>
    </div>
    <p className="text-white text-2xl flex m-4 name-font justify-center">  Click a driver to view latest session</p>
  
      <StandingsContainer />
    </div>
  );
};

export default Drivers_Standings;
