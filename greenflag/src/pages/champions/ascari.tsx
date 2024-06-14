"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Ascari = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Alberto Ascari</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Ascari;

const items  = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/ascari/ascari00.webp",
              ]}
              title="Born Racer"
              description="Born in Milan, Alberto Ascari hailed from a racing lineage, being the son of Antonio Ascari, a prominent Grand Prix motor racing star of the 1920s who raced Alfa Romeos. Tragically, just before Alberto's seventh birthday, his father met with a fatal accident while leading the 1925 French Grand Prix at the Autodrome de Linas-Montlhéry, leaving a lasting impact on the young Ascari's life.

Despite the loss of his father, Ascari developed a keen interest in racing. In 1940, he married a local woman. With the onset of World War II and Italy's entry into the conflict, Ascari found himself managing the family garage, which was conscripted to service and maintain vehicles for the Italian military. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Post War",
    value: "Post War",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/ascari/ascari01.jpg",
              ]}
              title="GrandPrix Racing"
              description="Following the end of World War II, Alberto Ascari ventured into Grand Prix racing with the Maserati 4CLT. His teammate and mentor during this period was Luigi Villoresi, who played a significant role in Ascari's early career development. The landscape of motorsport was evolving with the introduction of Formula One regulations by the FIA in 1946, marking a transition from the pre-war Grand Prix structure. Ascari quickly established himself as a formidable force in these early years, securing numerous victories across Europe. His breakthrough came in 1948 with a win at the San Remo Grand Prix, followed by a notable second-place finish at the 1948 British Grand Prix held at the Silverstone Circuit, which is often regarded as the first British Grand Prix."/>
           
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
                "/drivers_champions/ascari/ascari02.jpg",
              ]}
              title="Debut Championship season"
              description="The first Formula One World Championship season took place in 1950, where Ferrari made its debut at the Monaco Grand Prix. Ascari, alongside Villoresi and Raymond Sommer, marked the team's entry into the championship. Ascari made history at Monaco by becoming the youngest driver at the time to score points and secure a podium position in Formula One, finishing second, albeit one lap behind Juan Manuel Fangio.

Ferrari faced challenges throughout the season as their supercharged Ferrari 125 F1 struggled against the dominant Alfa Romeo team. The team's progress was hampered until the introduction of the unblown 4.5-litre Ferrari 375 F1 at the 1950 Italian Grand Prix, the season's final race. Ascari's performance in the new Ferrari provided Alfa Romeo with its toughest competition of the year, though he retired from the race. Notably, he took over teammate Dorino Serafini's car to secure a second-place finish."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Ferrari 500",
    value: "ferrari 500",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/ascari/ascari03.jpg",
              ]}
              title="Drivers World Champion"
              description="In 1952, the Formula One World Championship adopted the 2-litre Formula Two regulations, prompting Ascari to drive the Ferrari 500. He missed the 1952 Swiss Grand Prix as he chose to qualify for the prestigious Indianapolis 500, then part of the World Championship calendar. Ascari's participation at Indy marked a significant milestone as he was the only European driver to compete there during its inclusion in the World Championship. 
At 34 years old, Ascari became the youngest Formula One World Champion at that time, surpassing the record set by Fangio. This achievement solidified Ascari's reputation as one of the sport's greatest talents, particularly notable for his ability to deliver exceptional results under pressure.
"/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "First To Ever Do It",
    value: "first to ever fo it",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/ascari/ascari04.webp",
              ]}
              title="Back to Back World Champion"
              description="After securing his second consecutive World Championship in 1953, Alberto Ascari's career reached its zenith. He began the 1953 season with an impressive streak of three consecutive victories, extending his total championship wins to nine in a row (excluding his Indianapolis 500 attempt). This streak came to an end when he finished fourth at the highly competitive 1953 French Grand Prix.

Despite this setback, Ascari continued to dominate the season, winning two more races later in the year. This secured him his second consecutive World Championship title, making him Formula One's first-ever two-time champion. At the age of 35, he also held records for being the youngest two-time champion and the youngest back-to-back champion, both of which were later surpassed by Jack Brabham in 1960, reflecting the changing demographics of Formula One drivers."/>
           
          </div>
      
      </div>
    ),
  },
  
]