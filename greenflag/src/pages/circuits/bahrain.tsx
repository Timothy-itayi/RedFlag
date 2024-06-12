"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Bahrain = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Brahrain Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={bahrain} />
      </div>
      </>
  );
}

export default Bahrain;

const bahrain  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BahrainGP/bahrainflag.jpeg",
              ]}
              title="History"
              description="The Bahrain Grand Prix was the first Grand Prix to be held in the Middle East. The construction of the Bahrain circuit was a national objective for Bahrain, initiated by the Crown Prince, Shaikh Salman bin Hamad Al Khalifa. The 2004 Grand Prix was the first held in the Middle East."/>
           
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
                "/tracks/Bahrain-circuit.png",
              ]}
              title="Circuit"
              description="The Bahrain International Circuit is a 5.412 km (3.363 mi) motorsport venue opened in 2004. It's used for drag racing, GP2 Series, and the annual Formula One Bahrain Grand Prix. The circuit has a FIA Grade 1 license. It's known for its blend of high-speed straights and challenging turns that facilitate overtaking."/>
           
          </div>
      
      </div>
    ),
  },
  
 
]


