"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Bahrain = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Brahrain Grand Prix</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={bahrain} />
      </div>
      </>
  );
}

export default Bahrain;

const bahrain  = [
  {
    title: "History",
    value: "history",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BahrainGP/bahrainflag.jpeg",
              ]}
              title="History"
              description="The Bahrain Grand Prix was the first Grand Prix to be held in the Middle East. The construction of the Bahrain circuit was a national objective for Bahrain, initiated by the Crown Prince, Shaikh Salman bin Hamad Al Khalifa. The 2004 Grand Prix was the first held in the Middle East."/>
           
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
                "/tracks/Bahrain-circuit.png",
              ]}
              title="Circuit"
              description="The Bahrain International Circuit is a 5.412 km (3.363 mi) motorsport venue opened in 2004. It's used for drag racing, GP2 Series, and the annual Formula One Bahrain Grand Prix. The circuit has a FIA Grade 1 license. It's known for its blend of high-speed straights and challenging turns that facilitate overtaking."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Debut",
    value: "debut",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BahrainGP/bahrain03.jpeg",
              ]}
              title="Debut"
              description="The 2004 Bahrain Grand Prix, the inaugural race held at the Bahrain International Circuit, marked a significant milestone as the first Formula 1 race in the Middle East. Dominated by Michael Schumacher of Ferrari, the race highlighted Schumacher's exceptional driving skills and Ferrari's technical prowess. Schumacher's victory in this historic event underscored his dominance in the sport, contributing to his successful campaign that year, which saw him clinch his seventh and final World Drivers Championship title. This win further cemented his legacy as one of the greatest drivers in Formula 1 history."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Sophomore",
    value: "sophomore",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BahrainGP/bahrain06.jpeg",
              ]}
              title="Sophomore"
              description="The following year, in 2005, the Bahrain Grand Prix saw a new victor as Fernando Alonso of Renault took the checkered flag. Alonso's triumph at the Bahrain International Circuit was a pivotal moment in his career, showcasing his driving talent and the competitive strength of the Renault team. This victory was a key part of Alonso's successful campaign that season, ultimately leading him to win the 2005 World Championship. Alonso's championship victory marked the beginning of a new era in Formula 1, as he became the youngest World Champion at the time, breaking the dominance of Michael Schumacher and Ferrari."/>
           
          </div>
      
      </div>
    ),
  },
 
  {
    title: "Hot and Heavy",
    value: "hot and heavy",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BahrainGP/bahrain05.jpeg",
              ]}
              title="Hot and Heavy"
              description="Due to the nature of Bahrain racing in Bahrain got so so hot  With temperatures often soaring above 35°C (95°F), managing tire wear and engine cooling became critical for the teams. The intense heat not only tested the drivers' endurance but also pushed the limits of the cars' mechanical reliability and performance."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Anniversary",
    value: "anniversary",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/grandprix/BahrainGP/bahrain01.jpeg",
              ]}
              title="Anniversary"
              description="The Bahrain Grand Prix moved from a daytime to a nighttime race in 2014. The switch to a night race was made to commemorate the 10th anniversary of the event. This change added a new level of excitement and challenge, with cooler temperatures and the striking visuals of the cars racing under floodlights in the desert night."/>
           
          </div>
      
      </div>
    ),
  },
 
]


