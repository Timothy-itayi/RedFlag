"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Spain = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Spanish Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Spain;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/SpanishGP/spanishflag.jpeg",
              ]}
              title="History"
              description="The Circuit de Barcelona-Catalunya, widely known as the Spanish Grand Prix, serves as a globally renowned motorsport venue nestled in Montmeló, Spain. Celebrated for its historic and iconic design, this permanent circuit holds a distinguished position in Formula One history.
              Originating as a sports car event at Mosport Park in Bowmanville, Ontario, the race later alternated between Mosport and Circuit Mont-Tremblant, Quebec, before settling permanently at Mosport in 1971. However, safety concerns prompted another move in 1978, leading to the Canadian Grand Prix's relocation to its current home at Circuit Gilles Villeneuve. Since its inaugural Formula One race in 1967, the venue has proudly hosted the Formula One Spanish Grand Prix, captivating audiences since 1961."/>
           
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
                "/tracks/SpanishGP.png",
              ]}
              title="History"
              description="  Spanning 4.657 km (2.894 miles), its layout features high-speed straights and challenging turns, presenting an exhilarating challenge for drivers.

"/>
           
          </div>
      
      </div>
    ),
  },
]