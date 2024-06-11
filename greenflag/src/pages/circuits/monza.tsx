"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Monza = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Italian Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Monza;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/ItalianGP/italianflag.jpeg",
              ]}
              title="History"
              description="The Autodromo Nazionale Monza, home to the Italian Grand Prix, is a globally acclaimed motorsport venue located in Monza, Italy. Known for its historic and iconic design, this permanent circuit holds a revered position in the annals of Formula One history."/>
           
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
                "/tracks/ItalianGP.png",
              ]}
              title="History"
              description="Spanning 5.793 km (3.600 miles), the circuit features high-speed straights and a challenging sequence of turns, providing a thrilling challenge for drivers."/>
           
          </div>
      
      </div>
    ),
  },
]