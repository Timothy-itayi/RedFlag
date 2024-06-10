"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Alonso = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center "> Damon Hill</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={fernando} />
      </div>
      </>
  );
}

export default Alonso;

const fernando  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/verstappen/ver00.jpeg",
              ]}
              title="Early life"
              description="Verstappen's racing career began in karts at four, and by seven, he was competing in championships. He swiftly climbed through the ranks, winning various titles including the Mini Junior championship in Belgium. He joined CRG's factory team in 2010, excelling internationally with wins in the KF3 World Cup and WSK World Series. In 2013, at just 15, he made history by winning multiple European and World Championships in karting, becoming the youngest ever to win the KZ World Championship."/>
           
          </div>
      
      </div>
    ),
  },
]