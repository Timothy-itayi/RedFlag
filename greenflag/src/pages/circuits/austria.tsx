"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Austria = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Austrian Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Austria;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/AustrianGP/austrianflag.jpeg",
              ]}
              title="History"
              description="The Red Bull Ring, affectionately known as the Austrian Grand Prix, stands as a globally acclaimed motorsport venue situated in Spielberg, Styria, Austria. Esteemed for its historic and iconic design, this permanent circuit holds a revered position in the annals of Formula One history.
              Debuting in 1964 and later making a triumphant return to the Formula One calendar in 2014 after an eleven-year hiatus, the Red Bull Ring has been a mainstay in the racing world. Since its inception, the venue has played host to the Formula One Austrian Grand Prix, captivating audiences since 1964"/>
           
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
                "/tracks/AustrianGP.png",
              ]}
              title="History"
              description="Spanning 4.318 km (2.683 miles), the circuitapos;s design emphasizes high-speed straights and sharp corners, making it a favorite among drivers for its blend of technical difficulty and opportunities for overtaking.

The circuitapos;s elevation changes add to its character, with the highest point at the Remus curve and the lowest at the first corner. These changes in elevation not only challenge drivers but also offer spectacular viewing points for spectators. The layout features nine turns, each demanding precise control and strategy from drivers, especially in managing tire wear and fuel consumption over the course of a race."/>
           
          </div>
      
      </div>
    ),
  },
]