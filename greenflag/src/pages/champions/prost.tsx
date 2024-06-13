"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Prost = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center ">Alain Prost</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Prost;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/prost/pro00.jpeg",
              ]}
              title="Early life"
              description="Alain Prost, born in Lorette near Saint-Chamond, France, grew up in a sports-oriented environment. His parents, André Prost and Marie-Rose Karatchian, fostered his early athletic interests. Prost was particularly active, engaging in a variety of sports including wrestling, roller skating, and football, despite enduring multiple broken noses in the process.

At the age of 14, during a family holiday, Prost discovered kart racing, which immediately captivated him. This marked the beginning of his passion for motorsport and would shape his future career path. Prost quickly excelled in karting, winning several championships during his teenage years."/>
           
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
                "/drivers_champions/prost/por01.jpeg",
              ]}
              title="Junior Career"
              description="Prost's career progression was marked by rapid success in the lower formulae. After winning the 1977 Formula Renault European championship, he moved up to Formula Three (F3) in 1978. The following year, in 1979, Prost clinched both the French and European F3 championships, establishing himself as a highly sought-after talent in motorsport circles. His impressive achievements garnered attention from multiple Formula One teams eager to secure his services.

"/>
           
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
                "/drivers_champions/prost/pro02.avif",
              ]}
              title="Debut"
              description="Prost embarked on his Formula One career with McLaren in 1980 under the leadership of Teddy Mayer, joining Ulsterman John Watson as his teammate. His debut race in Buenos Aires, Argentina, was promising as he secured a sixth-place finish, earning a valuable championship point—a noteworthy achievement for a rookie at the time. Throughout the season, Prost continued to demonstrate his potential by adding four more points to his tally with finishes at Interlagos, Brands Hatch, and Zandvoort."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Renault",
    value: "Renault",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/prost/pro03.webp",
              ]}
              title="First Win"
              description="Prost's debut victory marked a significant turning point in his career, fundamentally altering his mindset. Reflecting on this milestone, he remarked, Before, you thought you could do it. Now you know you can. This confidence boost propelled him to a strong start in the subsequent races of the 1981 season, where he led from the beginning in five races and secured two more victories. Notably, he also achieved his first pole position in Germany and consistently finished on the podium whenever he completed a race distance."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Mclaren",
    value: "mclaren",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/prost/pro04.avif",
              ]}
              title="Double World Champion"
              description="Prost joined Mclaren in 1984 alongside double world champion Niki Lauda.
Despite an outstanding season where he won seven races compared to Lauda's five victories, Prost narrowly lost the world championship title to Lauda in the final race of the season in Portugal by half a point. Notably, Prost emerged victorious at the Portuguese Grand Prix. In 1985, Prost went on to achieve his first Formula One World Championship, becoming the first French driver to do so. He secured five wins out of sixteen Grands Prix during the season. Niki Lauda retired for good at the end of 1985, and was replaced at McLaren by 1982 World Champion Keke Rosberg for 1986. Prost successfully defended his title."/>
          </div>
      
      </div>
    ),
  },
  {
    title: "Rivalry with Senna",
    value: "rivalry with senna",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/prost/pro05.webp",
              ]}
              title="Teammate Turmoil"
              description="In 1989, McLaren's dominance continued, but tensions between Prost and Senna escalated into open hostility. Prost accused Senna of dangerous driving and receiving preferential treatment from McLaren and Honda. Despite these challenges, Prost won the Italian Grand Prix after Senna's engine failure, further straining their relationship. At the Japanese Grand Prix, their rivalry reached a climax when Senna's attempted overtake on Prost led to a collision, ending both their races. Despite Senna's eventual race win, he was controversially disqualified, handing Prost his third world championship title amidst ongoing tensions and disputes."/>
          </div>
      
      </div>
    ),
  },
  {
    title: "Williams",
    value: "williams",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/prost/pro06.jpeg",
              ]}
              title="Legacy"
              description="In 1993, Prost returned from a sabbatical to drive for Williams-Renault, where he won his fourth and final Formula One world championship. His season was marked by strong competition from teammate Damon Hill and the looming presence of Ayrton Senna, who was also in talks to join Williams. Prost announced his retirement before the end of the season, citing his contract clause preventing Senna from joining in 1994. Despite this, he concluded the year with the record for most Grand Prix victories, a milestone later surpassed by Michael Schumacher in 2001. Prost's retirement was marked by a poignant moment on the podium in Adelaide, where he and Senna embraced, a gesture that surprised Prost given their contentious history."/>
          </div>
      
      </div>
    ),
  },
]