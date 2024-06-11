"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Miami = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-3xl  text-white card-font flex flex-wrap justify-center ">Miami Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Miami;

const items  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/MiamiGP/americanflag.jpeg",
              ]}
              title="History"
              description="The Miami International Autodrome, home to the Formula 1 Miami Grand Prix, stands as a beacon of motorsport excellence in Miami Gardens, Florida, USA. Constructed with a modern design, this purpose-built circuit emerged as a testament to Miami's commitment to Formula One racing. With its inception in 2003, the circuit's development represented a monumental endeavor, transforming swampland into a state-of-the-art racing facility over 18 months of dedicated effort involving thousands of workers."/>
           
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
                "/tracks/MiamiGP.png",
              ]}
              title="History"
              description="The Miami International Autodrome, boasting a prestigious FIA Grade 1 license, offers a thrilling spectacle for drivers and fans alike. Spanning 5.412 km, its high-speed straights and challenging turns demand precision and skill from competitors. Like its counterpart in Shanghai, China, the Miami circuit fosters exhilarating races with ample opportunities for overtaking, ensuring each Miami Grand Prix is a captivating affair. Situated within the vibrant cityscape of Miami, the circuit's allure lies not only in its technical brilliance but also in the dynamic backdrop it provides, making the Miami Grand Prix a highlight of the Formula One calendar"/>
           
          </div>
      
      </div>
    ),
  },
]