"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Las_Vegas = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Las Vegas Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Las_Vegas;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/LasVegasGP/americanflag.jpeg",
              ]}
              title="History"
              description="The Las Vegas Grand Prix, part of the Formula One World Championship, is a world-class motorsport event located in Paradise, Nevada, United States. This circuit first hosted a Grand Prix on November 18, 2023 and has been a significant event in the Formula One calendar since then.

"/>
           
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
                "/tracks/Las-Vegas-GP.png",
              ]}
              title="History"
              description="Spanning 6.201 km (3.853 miles), the circuit features a unique blend of high-speed straights and complex corners. The track was built as a temporary street circuit that includes parts of the Las Vegas Strip. The race provides unique challenges for racing, being conducted as a night race. The circuit is known for its long straights, including a 1.9 km (1.2 mi) straight down the Las Vegas Strip, and two other lengthy straight sections."/>
           
          </div>
      
      </div>
    ),
  },
]