"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Belgium = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Belgium Grand Prix </h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Belgium;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BelgiumGP/belgianflag.jpeg",
              ]}
              title="History"
              description="The Circuit de Spa-Francorchamps, host to the Belgian Grand Prix, stands as a globally acclaimed motorsport venue nestled in Stavelot, Belgium. Renowned for its historic and iconic design, this permanent circuit holds a revered position in the annals of Formula One history.

The roots of the Belgian Grand Prix trace back to 1925 when the first national race of Belgium was held at the Spa region's race course. To accommodate the burgeoning Grand Prix motor racing, the Circuit de Spa-Francorchamps was constructed in 1921. Since its inaugural race in 1925, the Belgian Grand Prix has been a fixture of the FIA Formula One World Championship, commencing with the championship's inception in 1950.

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
                "/tracks/BelgiumGp.png",
              ]}
              title="History"
              description="Spanning 7.004 km (4.352 miles), it stands as one of the longest and most demanding circuits on the Formula 1 calendar.

The circuit is famous for its combination of high-speed straights, such as the Kemmel Straight, and challenging turns, such as the iconic Eau Rouge and Raidillon complex. These sections demand exceptional skill and bravery from drivers, as they navigate steep inclines and sharp corners at high speeds. Eau Rouge, in particular, is legendary for its daunting uphill left-right-left sequence that tests the limits of both man and machine."

/>
           
          </div>
      
      </div>
    ),
  },
]
