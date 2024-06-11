"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Mexico = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Mexican Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Mexico;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/MexicanGP/mexicanflag.jpeg",
              ]}
              title="History"
              description="The Autódromo Hermanos Rodríguez, home to the Mexican Grand Prix, is a world-class motorsport venue located in Mexico City, Mexico. This circuit first hosted a Grand Prix in 1962 and has been the venue for the championship event in 1963–1970, 1986–1992, and from 2015–2019, with a return in 2021."/>
           
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
                "/tracks/MexicoGP.png",
              ]}
              title="History"
              description="Spanning 4.304 km (2.674 miles), the circuit features a unique blend of long straights and tight corners. The track was built within a park in the center part of Mexico City, similar to Monza in Milan, Italy. The race provides unique challenges for racing, standing at 2,240m (7,340 ft) above sea level. The circuit is also known for its long, 180-degree, lightly banked and fast Peraltada corner that finishes the lap."/>
           
          </div>
      
      </div>
    ),
  },
]