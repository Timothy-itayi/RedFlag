"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Australia = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Australian Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={australia} />
      </div>
      </>
  );
}

export default Australia;

const australia  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/AustralianGP/ausflag.jpeg",
              ]}
              title="History"
              description="The Albert Park Circuit in Melbourne, Australia, hosts the Formula 1 Australian Grand Prix, renowned as a premier motorsport venue. Combining public roads and park space around Albert Park Lake, this semi-permanent street circuit offers a fast and flowing layout. Since its debut in Grand Prix racing in 1953, it officially joined the Formula One World Championship in 1996, boasting a FIA Grade 1 license for safety and design standards."/>
           
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
                "/tracks/AusGp.png"]}
              title="History"
              description=" Spanning 5.303 km (3.295 mi), the track features high-speed straights and challenging turns, with a smooth surface and relatively low grip levels, adding complexity for drivers. Nestled within a park and near a lake, the circuit offers a unique ambiance, making the Australian Grand Prix a beloved event among drivers and fans alike for its high-speed action and picturesque surroundings."/>
           
          </div>
      
      </div>
    ),
  },
]
