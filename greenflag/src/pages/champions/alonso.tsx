"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Alonso = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center ">Fernando Alonso</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Alonso;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alonso/alo00.jpeg",
              ]}
              title="Early life"
              description="Alonso's father built a go-kart for his sister, but three-year-old Alonso showed interest and received it. Modified for his small size, he began karting at five with a racing license. Despite financial constraints, Alonso adapted to racing on slick tires in wet conditions and practiced timing sectors on his way to school. His mother sewed his racing overalls, while his father managed and maintained the kart.
At seven, Alonso won his first kart race and continued to win regional championships in 1988 and 1989. Alonso won the 1990 Cadet Championship. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 3",
    value: "formula 3",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alonso/alo01.webp",
              ]}
              title="Junior Career"
              description="At 17, Alonso debuted in car racing in the 1999 Euro Open by Nissan with Campos Motorsport, winning the title with six wins and nine pole positions. In 2000, he moved to the International Formula 3000 Championship with Team Astromega, finishing fourth overall with 17 points after securing a win at Spa and a second place at the Hungaroring."/>
           
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
                "/drivers_champions/alonso/alo02.jpeg",
              ]}
              title="Debut"
              description="In December 1999, as part of an agreement with the Euro Open by Nissan, Alonso tested a Formula One car at the Circuito de Jerez. He became Minardi's test and reserve driver in 2000 and joined their race team in 2001. Driving a non-competitive car, his best result was tenth place in the German Grand Prix, finishing 23rd overall with no points."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Renault",
    value: "renautl",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alonso/alo03.jpeg",
              ]}
              title="Youngest F1 Race Winner"
              description="Alonso signed as Renault's test driver for 2002, on the orders of manager Flavio Briatore, to familiarize himself with the team. He collaborated with the engineering department to enhance Giancarlo Fisichella's and Jenson Button's performance, testing in Spain and the UK. In May 2002, he evaluated a Jaguar at Silverstone. Promoted to Renault's race team for 2003, Alonso became the youngest driver to secure a pole position at the Malaysian Grand Prix and the youngest F1 race winner at the Hungarian Grand Prix. He achieved four podium finishes and ranked sixth in the World Drivers' Championship with 55 points."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "World Champion",
    value: "world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alonso/alo04.webp",
              ]}
              title="Youngest World Drivers Champion"
              description="Alonso stayed with Renault for 2004, improving his performance with a third-place finish in the Australian Grand Prix and three more podiums. He secured pole position at the French Grand Prix, finishing fourth in the World Drivers' Championship with 59 points. In 2005, Alonso continued with Renault, dueling with McLaren's Kimi Räikkönen due to new regulations on tire and engine changes. Despite lacking speed, Alonso's car was more reliable, leading him to become the youngest World Drivers' Champion with seven victories, six pole positions, and fourteen podium finishes, amassing 133 points."/>
           
          </div>
      
      </div>
    ),
  },  {
    title: "Back to Back ",
    value: "back to back",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alonso/alo05.jpeg",
              ]}
              title="Youngest Double World Champion"
              description="In April 2005, Alonso signed a contract extension with Renault for the 2006 season. He was favored to retain the Drivers' Championship, with Ferrari's Michael Schumacher as his main rival. Alonso won six of the first nine races, never finishing lower than second, and led the championship with 84 out of 90 possible points. A ban on Renault's tuned mass damper device and increased development in Schumacher's Ferrari made the competition tighter. Tied on points entering the penultimate race, Alonso won the Japanese Grand Prix after Schumacher retired. Needing just one point in the final race, Alonso finished second in Brazil, securing his second consecutive title and becoming the youngest double World Champion."/>
           
          </div>
      
      </div>
    ),
  },
]