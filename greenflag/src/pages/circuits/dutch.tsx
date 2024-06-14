"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Dutch = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Dutch Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Dutch;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/DutchGP/dutchflag.jpeg",
              ]}
              title="History"
              description="The Circuit Zandvoort, home to the Dutch Grand Prix, stands as a globally acclaimed motorsport venue nestled in Zandvoort, North Holland, the Netherlands. Renowned for its historic and iconic design, this permanent circuit holds a revered position in the annals of Formula One history.

The Dutch Grand Prix made its debut on 21 June 1936 over a 5-kilometer (3.1-mile) track laid out in Népliget, a park in Budapest¹. However, politics and the ensuing war meant the end of Grand Prix motor racing in the country for fifty years¹.

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
                "/tracks/DutchGp.png",
              ]}
              title="History"
              description="Spanning 4.259 km (2.646 miles), the circuit is renowned for its fast-paced nature, featuring high-speed straights and a challenging sequence of turns that test the skills of drivers to the limit.

Circuit Zandvoort's layout includes iconic sections such as the Tarzanbocht (Tarzan corner), a sharp hairpin at the end of the start-finish straight, which often serves as a prime overtaking opportunity. The circuit also features fast and flowing corners like Scheivlak and Arie Luyendykbocht, demanding precision and commitment from drivers as they navigate these technical sections."/>
           
          </div>
      
      </div>
    ),
  },
]