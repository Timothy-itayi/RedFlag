import React from "react";
import { HoverEffect } from '../driver-components/hover-effect';
import { Driver } from "../../types/driver"; // Assuming you have a type for Driver

// Function to replace special characters in a string with their normal equivalents
const replaceSpecialCharacters = (str: string) => {
  const specialCharactersMap: { [key: string]: string } = {
    'é': 'e',
    'ü': 'u',
    // Add more mappings as needed
  };

  return str.replace(/[^\w\s]/gi, (char) => specialCharactersMap[char] || '');
};

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
    // Normalize driver name by removing special characters
    title: `${replaceSpecialCharacters(driver.firstName)} ${replaceSpecialCharacters(driver.lastName)}`,
    // Encode the normalized driver name for the URL
    link: `/drivers/${encodeURIComponent(replaceSpecialCharacters(driver.firstName.toLowerCase()))}_${encodeURIComponent(replaceSpecialCharacters(driver.lastName.toLowerCase()))}`,
    // Encode the image URL
    image: encodeURIComponent(driver.imageUrl ?? '/current_drivers/jack01.png'),
    team: driver.teamName,
    points: driver.standing ? driver.standing.points ?? 0 : 'N/A',
    position: driver.standing ? driver.standing.position ?? 0 : 'N/A',
  }));

  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* Render HoverEffect with the updated items */}
      <HoverEffect items={hoverEffectItems} />
    </div>
  );
};

export default Standings;
