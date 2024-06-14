"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  British = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">British Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default British;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BritishGP/britishflag.jpeg",
              ]}
              title="History"
              description="The Silverstone Circuit, synonymous with the British Grand Prix, stands as a beacon of motorsport excellence, nestled in the heart of Silverstone, England. Renowned for its rich history and iconic layout, this permanent circuit holds a revered place in the annals of Formula One.
              Since its debut in 1926 and its annual occurrence since 1948, the British Grand Prix has been a cornerstone event, gracing the FIA Formula One World Championship calendar every year since the championship's inception in 1950"/>
           
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
                "/tracks/BritishGP.png",
              ]}
              title="History"
              description="Spanning 5.891 km (3.66 miles), Silverstone is one of the longest circuits on the Formula 1 calendar and offers a unique blend of high-speed straights and challenging corners.

Located in Northamptonshire, England, Silverstone's layout includes iconic sections such as the Hangar Straight, where cars reach top speeds, and the fast, sweeping corners of Maggotts, Becketts, and Chapel. These corners demand precision and bravery from drivers as they navigate through rapid changes in direction at high velocities."/>
           
          </div>
      
      </div>
    ),
  },
]