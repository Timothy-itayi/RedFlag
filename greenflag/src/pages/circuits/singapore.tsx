"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Singapore = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Singapore Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Singapore;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/SingaporeGP/singaporeflag.jpeg",
              ]}
              title="History"
              description="The Marina Bay Street Circuit, home to the Singapore Grand Prix, is a unique and thrilling motorsport venue located in the heart of Singapore. This street circuit first hosted a Grand Prix in 2008 and was the inaugural night race and first street circuit in Asia designed for Formula One races."/>
           
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
                "/tracks/Singapore-GP.png",
              ]}
              title="History"
              description="Spanning 5.063 km, the circuit is one of the most physically demanding on the calendar. Its bumpy street surface coupled with humid conditions gives the drivers plenty to think about. With 23 corners, drivers are working the wheel a lot, too, around the high-speed lap. The circuit also boasts some of the most unique features of any track on the F1 calendar, including Turn 18, which actually sees the drivers pass underneath a grandstand."/>
           
          </div>
      
      </div>
    ),
  },
]