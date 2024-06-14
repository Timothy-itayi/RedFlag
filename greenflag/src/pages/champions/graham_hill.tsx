"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const Graham_Hill = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Graham Hill</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Graham_Hill;

const items  = [
  {
    title: "Beginnings ",
    value: "beginnings",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/graham_hill/hill00.webp",
              ]}
              title="Early life"
              description="Graham Hill was born in Hampstead, London, to stockbroker Norman Herbert Devereux Hill and Constance Mary (née Philp). He attended Hendon Technical College and began working as an apprentice engineer at Smiths Instruments. Conscription led him to the Royal Navy, where he served as an Engine Room Artificer on the light cruiser HMS Swiftsure, eventually reaching the rank of petty officer. After his naval service, he returned to Smiths Instruments.

Hill didn't pass his driving test until the age of 24. Initially interested in motorcycles, his focus shifted to car racing in 1954 after seeing an advertisement for the Universal Motor Racing Club at Brands Hatch, offering laps for five shillings."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Junior Career ",
    value: "junior career",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/graham_hill/hill03.webp",
              ]}
              title="Formula 3"
              description="In 1954, Graham Hill made his debut in a Cooper 500 Formula 3 car, a popular choice among aspiring racers in the 1950s due to its affordability. His impressive performance in the Cooper 500 earned him a spot in Team Lotus. Starting as a mechanic in 1956, Hill's mechanical skills and driving talent quickly led to a promotion to a driver's role. He first served as a reserve driver for Lotus at the 1957 Le Mans, where he gained valuable experience that set the stage for his future success in Formula One." />   
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1",
    value: "formula 1",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/graham_hill/hill02.jpg",
              ]}
              title="Debut "
              description="Graham Hill made his Formula 1 debut in the 1958 season, starting with the Monaco Grand Prix. Racing for Team Lotus at the time, he faced challenges due to the team's slow and unreliable cars. Despite this, Hill's debut season was crucial for learning the intricacies of Formula 1 racing.

In 1960, Hill made a pivotal career move by joining British Racing Motors (BRM), despite the team's history of underperformance. His leadership and determination revitalized BRM, setting the stage for his future successes. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "2x World Champion",
    value: "2x world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/graham_hill/hill04.jpg",
              ]}
              title="Meticulous Preparation"
              description="Graham Hill's 1962 championship season was a pivotal period in his career and in Formula One history. Driving for BRM, Hill secured his first Drivers' Championship after his main rival, Jim Clark, retired from the final race. Hill achieved victories in Holland, Germany, Italy, and South Africa, which were instrumental in his championship win. His success was attributed to his meticulous preparation and detailed record-keeping. This season set the stage for his future successes, including another World Championship win in 1968."/>
           
          </div>
      
      </div>
    ),
  },

]