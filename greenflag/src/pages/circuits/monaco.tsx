"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Monaco = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Monaco Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Monaco;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/MonacoGP/monacoflag.jpeg",
              ]}
              title="History"
              description="The Circuit de Monaco, fondly known as Monte Carlo, stands as a prestigious motorsport venue nestled amidst the city streets of Monte Carlo and La Condamine, embracing the picturesque harbor of the Principality of Monaco. Revered for its historic and iconic design, this street circuit holds an esteemed place in Formula One history.
              Unveiled on 14 April 1929, the circuit's legacy spans decades, with the inaugural Formula One race gracing its twists and turns in 1950². Since then, the Formula One Monaco Grand Prix has been an integral part of the circuit's narrative, maintaining an unbroken streak since 1955. Additionally, the venue hosts the Formula E Monaco ePrix and the Historic Grand Prix of Monaco, further enhancing its illustrious reputation."/>
           
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
                "/tracks/MonacoGP.png",
              ]}
              title="History"
              description="  Spanning 3.337 km (2.074 miles), its layout encompasses high-speed straights and challenging turns, ensnaring the attention of drivers and fans alike. The circuit's street configuration presents a smooth yet gripping surface, amplifying the challenge for drivers.he Circuit de Monaco thrives in fostering exhilarating races, characterized by thrilling overtaking maneuvers and unpredictable outcomes. Its urban setting lends a unique allure to the racing experience, rendering the Monaco Grand Prix a perennial highlight on the Formula One calendar. Amidst the backdrop of Monaco's splendor, the Circuit de Monaco continues to captivate drivers and enthusiasts, making each Grand Prix an unforgettable spectacle."/>
           
          </div>
      
      </div>
    ),
  },
]