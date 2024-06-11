"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  China = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Chinese Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default China;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/ChineseGP/chineseflag.jpeg",
              ]}
              title="History"
              description="The Shanghai International Racing Course, host to the Formula 1 Chinese Grand Prix, stands as a testament to China's commitment to motorsport excellence. Constructed in 2003 in the Jiading District of Shanghai, this purpose-built circuit emerged as a symbol of the city's global prominence. Designed by renowned architect Hermann Tilke, the track's development was a monumental endeavor, transforming swampland into a modern racing marvel over 18 months of tireless effort involving thousands of workers. With a sprawling 5.3 sq km site and a construction cost of ¥2.6 billion, the Shanghai International Racing Course epitomizes China's dedication to showcasing its automotive prowess on the world stage."/>
           
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
                "/tracks/ChinaGP.png",
              ]}
              title="History"
              description="Spanning 5.451 km, its high-speed straights and challenging turns demand precision and skill from competitors. Like its counterpart in Suzuka, Japan, the Shanghai circuit fosters exhilarating races with ample opportunities for overtaking, ensuring each Chinese Grand Prix is a captivating affair. Situated within the vibrant cityscape of Shanghai, the circuit's allure lies not only in its technical brilliance but also in the dynamic backdrop it provides, making the Chinese Grand Prix a highlight of the Formula One calendar."/>
           
          </div>
      
      </div>
    ),
  },
]