"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Cota = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">United States Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Cota;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/COTA/americanflag.jpeg",
              ]}
              title="History"
              description="The Circuit of The Americas is home to the Formula One United States Grand Prix, NASCAR’s Texas Grand Prix, and the Motorcycle Grand Prix of the Americas, a round in MotoGP and the FIA World Endurance Championship with the Lone Star Le Mans. It has also hosted the biggest names in racing, action sports, and music since 2012."/>
           
          </div>
      
      </div>
    ),
  },
  
  {
    title: "Circuit",
    value: "circuit",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/tracks/COTA.png",
              ]}
              title="History"
              description="Spanning 3.41 miles (5.513 km), the circuit features 20 turns. The track was designed to challenge the world’s most exacting competitors while providing a thrilling spectacle for audiences. The layout was conceived by promoter Tavo Hellmund and 1993 Motorcycle World Champion Kevin Schwantz with the assistance of German architect and circuit designer Hermann Tilke."/>
           
          </div>
      
      </div>
    ),
  },
]