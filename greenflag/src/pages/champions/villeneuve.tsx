"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Villeneuve = () =>  {
  return (
    <>
    <div className="text-center p-7 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Jacques Villeneuve</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Villeneuve;

const items  = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/villenueve/ville00.jpg",
              ]}
              title="Like Father Like Son"
              description="Jacques Villeneuve's early passion for racing began at a young age, influenced by go-karting outings with his uncle in Canada. Tragically, his interest waned after his father  Gilles Villeneuve's  fatal accident in 1982 during qualifying for the Belgian Grand Prix. However, in 1984, Jacques sought his mother's permission to pursue racing like his father, provided he improved his academic performance. Despite her preference for him to study engineering, she supported his racing aspirations."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Junior Career",
    value: "Junior Career",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/villenueve/ville01.jpg",
              ]}
              title="Formula 3"
              description="Jacques Villeneuve embarked on his professional racing career by signing a three-year contract with Prema to compete in the Italian Formula Three Championship driving a Reynard-Alfa Romeo, supported by Camel sponsorship. Initially facing challenges with the Formula 3 car, he honed his skills at the Magione Driving School under Henry Morrogh's guidance. In the 1990 season, Villeneuve improved significantly, qualifying for all races and scoring ten points to finish 14th in the championship."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Open Wheel Racing",
    value: "Open Wheel Racing",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/villenueve/ville02.jpg",
              ]}
              title="INDY CAR RACING"
              description="Jacques Villeneuve made his CART debut in the 1994 season with Forsythe-Green Racing, driving the No. 12 Reynard 94I-Ford XB. Despite a challenging start at the Australian FAI Indycar Grand Prix and a crash at Phoenix, he excelled at the Indianapolis 500, finishing second and earning Rookie of the Year honors. He secured his first CART victory at Road America and finished seventh in the season, earning Rookie of the Year and placing sixth in the Drivers' Championship."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1 Debut",
    value: "Formula 1 Debut",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/villenueve/ville03.avif",
              ]}
              title="Outstanding Rookie"
              description="In early 1995, Jacques Villeneuve attracted interest from the Williams F1 team and Renault to replace David Coulthard. Driving the Williams FW18 with a reliable Renault engine, Villeneuve immediately impressed by claiming pole position and finishing second in his debut at the Australian Grand Prix. Throughout the season, he won four races including the British, Hungarian, and Portuguese Grands Prix, and challenged teammate Hill for the championship, ultimately finishing second in the standings with 78 points, the highest ever for a rookie at the time."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "World Champion",
    value: "World Champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/villenueve/ville04.webp",
              ]}
              title="Swiss Army Knife"
              description="Before the 1997 season, Jacques Villeneuve became the lead driver for Williams following Damon Hill's move to Arrows. Competing against Michael Schumacher for the World Drivers' Championship, Villeneuve trained rigorously and drove the aerodynamically advanced FW19 designed around his preferences. He won seven races and took pole position eight times in the first 14 races of the season. A collision with Schumacher during the race led to Schumacher's disqualification, securing the championship for Villeneuve with 78 points, one point ahead of Schumacher. This victory made Villeneuve only the second driver after Mario Andretti to win the Formula One World Championship, the CART title, and the Indianapolis 500, and he became Canada's first Formula One World Champion."/>
           
          </div>
      
      </div>
    ),
  },
]