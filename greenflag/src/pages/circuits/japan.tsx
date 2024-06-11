"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Japan = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Japanese Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={japan} />
      </div>
      </>
  );
}

export default Japan;

const japan  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/JapaneseGP/japflag.jpeg",
              ]}
              title="History"
              description="The Suzuka International Racing Course in Suzuka City, Mie Prefecture, Japan, hosts the Formula 1 Japanese Grand Prix, a renowned motorsport event. Founded in 1962 by Soichiro Honda as a test track for Honda Motor Co., Ltd., it debuted in the Formula One World Championship in 1987."/>
           
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
                "/tracks/JapaneseGP.png",
              ]}
              title="Circuit"
              description=" Featuring a unique figure eight layout with a crossover, the circuit spans 5.807 km (3.608 mi), offering high-speed straights and challenging turns. Possessing an FIA Grade 1 license, it upholds top safety and design standards. Like the Albert Park Circuit, Suzuka is known for facilitating overtaking, ensuring thrilling races. Situated within the city and near a park, the Japanese Grand Prix at Suzuka continues to captivate drivers and fans alike with its scenic charm and high-speed action"/>
           
          </div>
      
      </div>
    ),
  },
]