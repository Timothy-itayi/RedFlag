"use client";
import React from "react";
import { WobbleCard } from "../../components/driver-components/driver-card"; // Adjust the import path as necessary

export function Logan_Sargeant() {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="text-7xl text-white name-font">Logan Sargeant</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-7xl">
          <WobbleCard children={undefined} />
        </div>
      </div>
    </>
  );
}

export default Logan_Sargeant;
