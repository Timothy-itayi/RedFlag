"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Azerbaijan = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Azerbaijan Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Azerbaijan;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/AzerbaijanGP/bakuflag.jpeg",
              ]}
              title="History"
              description="The Baku City Circuit, home to the Azerbaijan Grand Prix, is a unique and thrilling motorsport venue located in Baku, the capital of Azerbaijan. This street circuit first hosted a Grand Prix in 2016 and is known for its blend of wide, open sections and tight, twisty turns."/>
           
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
                "/tracks/BakuGP.png",
              ]}
              title="History"
              description=" Spanning 6.003 km, the circuit features a long main straight along the Baku shoreline, which is a slipstreaming mecca, allowing cars to run three abreast into Turn 11. From there, the track loops around into the city’s narrow, winding Icheri Sheher old town, dramatically winding past Baku’s medieval city walls. This makes the circuit a mixture of high-speed racing and technical precision, similar to circuits like Monaco and Singapore."/>
           
          </div>
      
      </div>
    ),
  },
]