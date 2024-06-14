"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Keke_Rosberg = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Keke Rosberg</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Keke_Rosberg;

const items = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/keke_rosberg/ros00.jpg",
              ]}
              title="The Beginning"
              description="Rosberg was born on 6 December 1948 in Solna, Sweden, where his father Lars Rosberg was studying veterinary science. His mother Lea Lautala was also from Hamina, Finland. The Rosberg family moved back to Finland in the spring of 1950, initially settling in Lapinjärvi and later residing in various places including Hamina, Oulu, and Iisalmi."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1 Debut",
    value: "formula 1 debut",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/keke_rosberg/ros01.jpg",
              ]}
              title="Late Bloomer"
              description="Rosberg's Formula One career began relatively late at the age of 29, following his participation in several feeder series including Formula Vee, Formula Super Vee, Can-Am, Formula Atlantic, Formula Pacific, and Formula Two. He initially raced for Fred Opert, his American patron, and made his debut with the Theodore team during the 1978 season."/>
           
          </div>
      
      </div>
    ),
  },  {
    title: "First Race Win",
    value: "first race win",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/keke_rosberg/ros02.png",
              ]}
              title="Unreliability Issues"
              description="In just his second race with Theodore, Rosberg impressed the Formula One paddock by winning the non-Championship BRDC International Trophy at Silverstone. This victory came under challenging conditions with a significant downpour, which caught out many experienced drivers. Despite this success, Rosberg struggled to qualify for subsequent races, and Theodore eventually abandoned their unreliable car design."/>
           
          </div>
      
      </div>
    ),
  },  {
    title: "Williams",
    value: "williams",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/keke_rosberg/ros03.jpg",
              ]}
              title="The Sharp End"
              description="Despite the challenges posed by driving a car with an outdated engine against turbocharged competitors, Rosberg had a remarkably successful year in 1982 after joining Williams to fill the seat left vacant by 1980 World Champion Alan Jones's retirement. Despite only winning one race — the Swiss Grand Prix at Dijon-Prenois (held in France due to Switzerland's racing ban)."/>
           
          </div>
      
      </div>
    ),
  },  {
    title: "World Champion",
    value: "World Champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/keke_rosberg/ros04.jpg",
              ]}
              title="Super Charged Season"
              description="The 1982 season was characterized by unpredictability, with no driver winning more than two races. Ferrari faced setbacks with the tragic death of Gilles Villeneuve and Didier Pironi's career-ending injuries. The turbocharged Brabham-BMW and Renault cars, although fast, suffered from reliability issues exacerbated by frequent engine changes. Rosberg's Williams FW07C, powered by the normally-aspirated Ford DFY V8 engine, was considered less powerful than its turbocharged counterparts. Despite these odds, Rosberg clinched the championship with a five-point lead over Pironi, who missed the final four races due to injuries sustained at the German Grand Prix."/>
           
          </div>
      
      </div>
    ),
  },
]