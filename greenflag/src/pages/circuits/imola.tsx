"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Imola = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Emilia Romagna Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Imola;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/ImolaGP/italianflag.jpeg",
              ]}
              title="History"
              description="The Autodromo Internazionale Enzo e Dino Ferrari, affectionately known as Imola, holds a revered status as a motorsport haven nestled in Imola, Emilia-Romagna, Italy¹². Renowned for its rich history and iconic layout, this permanent circuit has left an indelible mark on the annals of Formula One racing.Dating back to 1950, the circuit's legacy began with its inauguration in 1953. Since then, it has been a cornerstone of Formula One, hosting memorable events such as the Italian Grand Prix in 1980 and the San Marino Grand Prix from 1981 to 2006. Its role in Formula One history was further solidified in 2020 when it became the venue for the Emilia Romagna Grand Prix."/>
           
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
                "/tracks/imola.png",
              ]}
              title="History"
              description=" Spanning 4.909 km (3.050 miles), its layout features high-speed straights and challenging turns that demand precision from drivers. Much like its counterpart in Miami, the Imola circuit fosters exhilarating races with ample opportunities for overtaking, ensuring each Emilia Romagna Grand Prix is a captivating affair. Situated within the charming surroundings of Imola, the circuit's allure lies not only in its technical brilliance but also in the vibrant ambiance it provides, making the Emilia Romagna Grand Prix a perennial highlight of the Formula One calendar."/>
           
          </div>
      
      </div>
    ),
  },
]