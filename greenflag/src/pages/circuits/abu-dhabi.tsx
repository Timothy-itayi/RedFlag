"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Abu_Dhabi = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Abu Dhabi Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Abu_Dhabi;

const items = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/AbuDhabiGP/abudhabiflag.jpeg",
              ]}
              title="History"
              description="The Abu Dhabi Grand Prix, part of the Formula One World Championship, is a world-class motorsport event located in Abu Dhabi, the capital of the United Arab Emirates. This circuit first hosted a Grand Prix on November 1, 2009 and has been a significant event in the Formula One calendar since then."/>
           
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
                "/tracks/AbuDhabiGP.png",
              ]}
              title="Circuit"
              description="Spanning 5.281 km (3.282 miles), the circuit features a unique blend of high-speed straights and complex corners. The track, known as the Yas Marina Circuit, is located on Yas Island, a man-made island that features hotels, resorts, theme parks, golf courses, and a marina. The race provides unique challenges for racing, being conducted as a night race. The circuit is known for its long straights and complex corners."/>
           
          </div>
      
      </div>
    ),
  },
]