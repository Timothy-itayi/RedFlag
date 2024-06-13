"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Vettel = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center ">Sebastion Vettel </h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={sebastion} />
      </div>
      </>
  );
}

export default Vettel;

const sebastion  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/vettel/vet00.avif",
              ]}
              title="Early life"
              description="Sebastian Vettel's motorsport journey began at an incredibly young age, starting karting at just three years old. By the age of eight in 1995, he was already competing in karting series, showcasing his prodigious talent. His skills did not go unnoticed, and in 1998, Vettel was selected to join the prestigious Red Bull Junior Team, marking a significant step towards his professional career in motorsport."/>
           
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
                "/drivers_champions/vettel/vet01.jpeg",
              ]}
              title="Junior Career"
              description="In 2003, Vettel transitioned to open-wheel cars, testing a Reynard Motorsport Champ Car at Homestead–Miami Speedway, which set the stage for his single-seater career. His breakout came in 2007 with his first Formula Renault 3.5 Series win at the Nürburgring. This success led BMW Sauber to promote him mid-season to Formula One, launching his illustrious career in motorsport's top tier." />  
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
                "/drivers_champions/vettel/vet02.jpeg",
              ]}
              title="Debut"
              description="Vettel joined BMW Sauber as their third driver at the 2006 Turkish Grand Prix, filling in for Robert Kubica who replaced Jacques Villeneuve. On his testing debut, Vettel set the fastest time in Friday free practice, becoming the youngest driver at 19 years and 53 days to participate in a Grand Prix weekend. Vettel continued as BMW's test driver and replaced Kubica at the 2007 United States Grand Prix after his crash in Canada. Starting seventh, he finished eighth, becoming the youngest driver to score a Formula One point at the time." />  
          </div>
      
      </div>
    ),
  },
  {
    title: "Torro Rosso",
    value: "torro rosso",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/vettel/vet04.jpeg",
              ]}
              title="Race Winner"
              description="The defining moment of Vettel's early career came at the wet Italian Grand Prix in 2008, where he made history as the youngest driver ever to win a Formula One Grand Prix at the age of 21 years and 74 days. Leading for the majority of the race, Vettel crossed the finish line with a commanding lead of 12.5 seconds over McLaren's Heikki Kovalainen. This victory not only marked Toro Rosso's first and only win but also solidified Vettel's status as a rising star in the sport. Sebastian Vettel's tenure at Toro Rosso from 2007 to 2008 not only showcased his raw talent and racing prowess." />  
          </div>
      
      </div>
    ),
  },
  {
    title: "Red Bull",
    value: "red bull",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/vettel/vet05.avif",
              ]}
              title="Youngest World Champion"
              description="After joining Red Bull in 2009 by replacing David Coulthard. He went on to triumph at the British, Japanese, and Abu Dhabi Grands Prix, demonstrating both speed and consistency throughout the season. He finished second in the World Drivers' Championship behind Jenson Button. The following season in a dramatic finale, Vettel won the Abu Dhabi Grand Prix from pole position, clinching his first World Drivers' Championship at just 23 years and 98 days old. This historic achievement made Vettel the youngest champion in Formula One history at the time, joining a prestigious group of drivers who claimed the title in the season's final race without leading the championship until then." />  
          </div>
      
      </div>
    ),
  },
  {
    title: "Reigning Champion",
    value: "reigning champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/vettel/vet06.jpeg",
              ]}
              title="4x World Champion"
              description="Sebastian Vettel's Formula One career soared from 2011 to 2013 with Red Bull Racing. He began by winning the 2011 championship, dominating with early season victories and overcoming setbacks. Vettel continued to excel throughout the season, clinching his second consecutive championship in Japan with several races to spare, becoming the youngest double and back-to-back champion. He secured his third consecutive title in 2012 after a season marked by comeback wins and resilient performances, culminating in a dramatic victory at the Brazilian Grand Prix. n 2013, despite initial challenges and controversies, he extended his dominance with a record-breaking nine consecutive victories en route to his fourth consecutive championship at the Indian Grand Prix." />  
          </div>
      
      </div>
    ),
  },
]