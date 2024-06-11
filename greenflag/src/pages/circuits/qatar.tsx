"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Qatar = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Qatar Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Qatar;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/QatarGP/qatarflag.jpeg",
              ]}
              title="History"
              description="The Qatar Grand Prix, part of the Formula One World Championship, is a world-class motorsport event held in Qatar. This circuit first hosted a Grand Prix on November 21, 2021 and has been a significant event in the Formula One calendar since then."/>
           
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
                "/tracks/QatarGP.png",
              ]}
              title="History"
              description="Spanning 5.419 km (3.367 miles), the circuit features a unique blend of high-speed straights and complex corners. The track, known as the Losail International Circuit, is located in Lusail, Qatar. The race provides unique challenges for racing, being conducted as a night race. The circuit is known for its long straights and complex corners."/>
           
          </div>
      
      </div>
    ),
  },
]