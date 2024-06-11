import React from "react";

import DriverData from "../driver-components/driver-data"; 
import Standings from "../driver-components/standings"; 

const StandingsContainer: React.FC = () => {
  return (
    <DriverData>
      {({ drivers, isLoading, error }) => {
        if (isLoading) {
          return <div>Loading...</div>;
        }

        if (error) {
          return <div>Error: {error}</div>;
        }

        return <Standings drivers={drivers} />;
      }}
    </DriverData>
  );
};

export default StandingsContainer;