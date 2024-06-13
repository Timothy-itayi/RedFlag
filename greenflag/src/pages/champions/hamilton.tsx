"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Hamilton = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center "> Lewis Hamilton</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Hamilton;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hamilton/ham00.webp",
              ]}
              title="Early life"
              description="Hamilton began karting in 1993, quickly winning races and cadet class championships. At ten, he became the youngest driver to win the British cadet karting championship. That year, he met McLaren's Ron Dennis and expressed his ambition to race for McLaren, to which Dennis replied, Phone me in nine years, we'll sort something out then."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 3 ",
    value: "formula 3",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hamilton/ham01.jpeg",
              ]}
              title="Junior Career"
              description="Hamilton began his car racing career in the 2001 British Formula Renault Winter Series, finishing fifth. In 2002, he competed in the full Formula Renault UK campaign with Manor Motorsport, again finishing fifth. The next year, he won the championship, and debuted in the British Formula 3 Championship.In 2005, he joined ASM and dominated the Formula 3 Euro Series, winning 15 of 20 rounds and the Marlboro Masters of Formula 3. He also tested for McLaren at Silverstone in late 2004."/>

      
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
                "/drivers_champions/hamilton/ham02.jpeg",
              ]}
              title="Debut"
              description="Hamilton debuted in Formula One with McLaren in 2007, partnering with two-time champion Fernando Alonso. He finished third in his debut race and set records, including most consecutive podium finishes from debut, joint most wins in a debut season, and most points in a debut season. He narrowly missed the World Championship, finishing one point behind Kimi Räikkönen."/>

      
          </div>
      
      </div>
    ),
  },
  {
    title: "Mclaren ",
    value: "mclaren",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hamilton/ham03.jpeg",
              ]}
              title="World Champion"
              description="In 2008, Hamilton won his first World Championship, securing five victories and ten podiums. He clinched the title in dramatic fashion at the Brazilian Grand Prix, overtaking Timo Glock on the final lap to finish fifth and beat Felipe Massa by one point, becoming the youngest champion at that time and the first British champion since 1996."/>

      
          </div>
      
      </div>
    ),
  },
  {
    title: "Misery",
    value: "misery",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hamilton/ham04.jpeg",
              ]}
              title="Milestones"
              description="From 2009 to 2012, Hamilton continued to achieve podiums and victories despite often driving a less competitive car. In 2010, he contended for the title but finished fourth. In 2011, he was outscored by teammate Jenson Button for the first time. In 2012, Hamilton finished fourth with four wins despite reliability issues. He announced his move to Mercedes for the 2013 season, replacing Michael Schumacher."/>

      
          </div>
      
      </div>
    ),
  },
  {
    title: "Mercedes",
    value: "mercedes",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hamilton/ham05.jpeg",
              ]}
              title="2013-2016"
              description="In 2013, Hamilton took a bold leap to Mercedes alongside childhood karting mate Nico Rosberg, despite the team's recent struggles. He notched one win and several podiums, clinching fourth in the championship. His triumph continued winning back to back Drivers Championships in 2014 and 2015 matching Ayrton Senna's three titles. The rivalry with Rosberg peaked during the United States Grand Prix, where Hamilton secured the championship with three races left. Despite a strong 2016 season with more poles and wins, Hamilton lost the championship to Rosberg by five points."/>
      
          </div>
      
      </div>
    ),
  },
  {
    title: "Maestro",
    value: "meaestro",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hamilton/ham06.jpeg",
              ]}
              title="2017-2020"
              description="After Rosberg's retirement, Sebastian Vettel became Hamilton's main rival in 2017, with Hamilton securing his fourth World Drivers' Championship. He dominated with nine wins and set a new record for pole positions.

In 2018, Hamilton and Vettel, both four-time champions, battled for a fifth title. Hamilton's strong second half of the season secured the championship in Mexico, setting a new points record for the season.

Hamilton continued his dominance in 2019, clinching his sixth title with consistent performances against challengers like Bottas, Verstappen, and Leclerc.

In 2020, despite the challenges of the COVID-19 pandemic, Hamilton won his seventh title, matching Michael Schumacher's record. He secured the championship with three races to spare.

"/>
      
          </div>
      
      </div>
    ),
  },
]