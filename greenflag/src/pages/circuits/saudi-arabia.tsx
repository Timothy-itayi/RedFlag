"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Saudi_Arabia = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Saudi Arabian Grand Prix </h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={bahrain} />
      </div>
      </>
  );
}

export default Saudi_Arabia;

const bahrain  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/Saudi_ArabianGP/saflag0.jpeg",
              ]}
              title="History"
              description="Motorsport history in Jeddah traces back to the early 2000s, with local enthusiasts organizing informal racing events on city streets. However, the true milestone came in 2019 when Saudi Arabia announced plans to construct a permanent circuit in Jeddah, aiming to host a Formula One Grand Prix.  Completed in a record time of seven months. Designed by Carsten Tilke, son of renowned circuit designer Hermann Tilke, this world-class facility is the Kingdom's first of its kind."/>
           
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
                "/tracks/JeddahCircuit.png",
              ]}
              title="Circuit"
              description=" The Jeddah Corniche Circuit is a state-of-the-art motorsport venue that opened in 2021. This 6.174 km (3.837 mi) circuit is located in the heart of Jeddah, Saudi Arabia, and is used for the annual Formula One Saudi Arabian Grand Prix. The circuit has a FIA Grade 1 license, the highest certification granted by the Fédération Internationale de l’Automobile (FIA), signifying its adherence to the highest standards of safety and design."/>
           
          </div>
      
      </div>
    ),
  },
 
]

