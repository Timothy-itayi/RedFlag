"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Hungary = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Hungarian Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Hungary;

const items = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/HungaroringGP/hungaryflag.jpeg",
              ]}
              title="History"
              description="The Hungaroring, home to the Hungarian Grand Prix, stands as a globally acclaimed motorsport venue located in Mogyoród, Hungary. Recognized for its historic and iconic design, this permanent circuit holds a revered position in the annals of Formula One history.
              The Hungarian Grand Prix traces its roots back to 21 June 1936, when it debuted over a 5-kilometre (3.1-mile) track laid out in Népliget, a park in Budapest¹. However, political upheavals and the ensuing war halted Grand Prix motor racing in the country for half a century¹.
              A significant milestone occurred in 1986 when the Hungarian Grand Prix made history as the first Formula One race to be held behind the Iron Curtain¹. Staged at the twisty Hungaroring in Mogyoród, near Budapest, the race has since become a fixture on the racing calendar¹.

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
                "/tracks/Hungaroring.png",
              ]}
              title="History"
              description="the Hungaroring upholds the highest standards of safety and design. Spanning 4.381 km (2.722 miles), the circuit features high-speed straights and a challenging sequence of turns, offering drivers a thrilling test of skill¹.

"/>
           
          </div>
      
      </div>
    ),
  },
]