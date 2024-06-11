"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Brazil = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Brazilian Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Brazil;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BrazilGP/brazilianflag.jpeg",
              ]}
              title="History"
              description="The Autódromo José Carlos Pace, home to the Brazilian Grand Prix, is a world-class motorsport venue located in the Interlagos neighborhood of São Paulo, Brazil. This circuit first hosted a Grand Prix in 1972 and has been a significant event in the Formula One calendar since 1973."/>
           
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
                "/tracks/brazil.png",
              ]}
              title="History"
              description="Spanning 4.309 km (2.677 miles), the circuit features a unique blend of high-speed straights and complex corners. The track was built within a park in the center part of São Paulo, similar to Monza in Milan, Italy. The race provides unique challenges for racing, standing at 2,240m (7,340 ft) above sea level. The circuit is also known for its long, 180-degree, lightly banked and fast Peraltada corner that finishes the lap."/>
           
          </div>
      
      </div>
    ),
  },
]