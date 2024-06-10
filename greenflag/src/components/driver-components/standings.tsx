import React from "react";
import {HoverEffect } from '../driver-components/hover-effect';
import { Driver } from "../../types/driver"; // Assuming you have a type for Driver

interface StandingsProps {
  drivers: Driver[];
}

const Standings: React.FC<StandingsProps> = ({ drivers }) => {


  if (!drivers || drivers.length === 0) {
    // If drivers is undefined, null, or empty, return a loading indicator or an error message
    return <div>Loading...</div>;
  }

 // Adjust hoverEffectItems to match the DriverInfo interface
const hoverEffectItems = drivers.map((driver) => ({
  title: `${driver.firstName} ${driver.lastName}`,

  link: `/drivers/${driver.firstName.toLowerCase()}_${driver.lastName.toLowerCase()}`,
  image: driver.imageUrl ?? '/page0.JPG',
  team: driver.teamName,
  points: driver.standing ? driver.standing.points ?? 0 : 'N/A', // Check if standing exists before accessing points
  position: driver.standing ? driver.standing.position ?? 0 : 'N/A', // Check if standing exists before accessing position
}));


  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* Render HoverEffect with the updated items */}
      <HoverEffect items={hoverEffectItems} />
    </div>
  );
};

export default Standings;
