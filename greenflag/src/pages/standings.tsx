import React from "react";
import StandingsContainer from "../components/driver-components/standings-container"; // Import the StandingsContainer component

const Standings: React.FC = () => {
  return (
    <div>
      <h1>Driver Standings</h1>
      <StandingsContainer />
    </div>
  );
};

export default Standings;
