"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Canada = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Canadian Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Canada;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/CanadianGP/canadianflag.jpeg",
              ]}
              title="History"
              description="The Circuit Gilles Villeneuve, commonly known as the Canadian Grand Prix, stands as a globally recognized motorsport venue situated on Notre Dame Island in Montreal, Quebec, Canada. Revered for its historic and iconic design, this street circuit holds an esteemed place in Formula One history.
              Initially hosted at Mosport Park in Bowmanville, Ontario, the event transitioned between Mosport and Circuit Mont-Tremblant, Quebec. Safety concerns prompted a permanent move to Mosport until 1978 when similar issues led to the relocation to its current home at Circuit Gilles Villeneuve. Since its inception in 1967, the venue has been the proud host of the Formula One Canadian Grand Prix, captivating audiences since 1961."/>
           
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
                "/tracks/CanadianGP.png",
              ]}
              title="History"
              description="Spanning 4.361 km (2.709 miles), the circuit is renowned for its high-speed straights and challenging turns, making it a favorite among drivers and fans alike.

The layout of Circuit Gilles Villeneuve is characterized by its blend of long straights, tight chicanes, and hairpin turns. The circuit's proximity to the St. Lawrence River and its parkland setting provide a unique backdrop to the racing action, offering scenic views and a vibrant atmosphere.

One of the standout features of the circuit is the Wall of Champions, located at the final chicane. This infamous section has claimed many victims over the years, including numerous world champions, highlighting the circuit's unforgiving nature and the technical skill required to navigate it successfully."/>
          </div>
      
      </div>
    ),
  },
]