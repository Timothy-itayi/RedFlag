"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Scheckter = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Jody Scheckter</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Scheckter;

const items = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/scheckter/sch00.webp",
              ]}
              title="Early life"
              description="Jody David Scheckter, born on January 29, 1950, in East London, Eastern Cape, South Africa, developed a passion for cars and racing from an early age. Growing up in a rural farming community, his upbringing was closely tied to his father’s Renault dealership. Scheckter began learning to drive at a young age while working as an engineering apprentice. His driving style, characterized by a flat-out approach, naturally propelled him towards pursuing a career in racing."/>
           
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
                "/drivers_champions/scheckter/sch01.avif",
              ]}
              title="Rapid Ascent"
              description="Scheckter moved to Britain in 1970 and rapidly ascended to the ranks of Formula One. His Formula 1 debut occurred at the US Grand Prix at Watkins Glen in 1972 with McLaren, where he ran as high as third place before spinning and finishing ninth. After the controversial start to his career, Scheckter moved to Tyrrell in 1974. He won the Swedish Grand Prix in the controversial Tyrrell P34 six-wheeler, and finished third in the championship that year. This included a thrilling race-long battle for the lead in the American Grand Prix between himself and his great friend James Hunt. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Walter Wolf",
    value: "Walter wolf",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/scheckter/sch02.jpg",
              ]}
              title="Lost To A Legend"
              description="Scheckter left Tyrrell for Walter Wolf's new team in 1977, where he immediately made an impact by winning the team's maiden race. Throughout the season, he added two more victories and frequently found himself on the podium. Despite his strong performances, he finished second in the championship behind the dominant Niki Lauda. In 1978, Scheckter continued with the Walter Wolf team but had a less successful season, finishing seventh in the championship standings. "/>
           
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
                "/drivers_champions/scheckter/sch03.jpg",
              ]}
              title="Iconic Championship"
              description="He then made a significant move to Ferrari for the 1979 season, where he partnered with Gilles Villeneuve in the team's ground-effect 312T4 car. Despite concerns from critics about his compatibility with Ferrari's management style, Scheckter exceeded expectations. His consistent performances throughout the season, which included three wins, contributed to Ferrari winning the Constructors' Championship. Scheckter himself clinched the Drivers' Championship in 1979, marking a successful transition to one of Formula One's most iconic teams"/>
           
          </div>
      
      </div>
    ),
  },
  
]