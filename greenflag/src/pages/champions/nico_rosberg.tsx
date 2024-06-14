"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Nico_Rosberg = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Nico Rosberg</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Nico_Rosberg;

const items = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/nico_rosberg/ros00.jpg",
              ]}
              title="Racing Heritage"
              description="Nico Rosberg was born on June 27, 1985, at the Red Cross Hospital in Wiesbaden, West Germany. He is the only child of Finnish racing driver Keke Rosberg, who won the 1982 Formula One World Championship. Rosberg's interest in racing began at an early age; he had his first driving experience at four when his father took him to a go-kart track in Ibiza. He started competitive racing at six and set his sights on a Formula One career after watching his father compete in the Deutsche Tourenwagen Meisterschaft in 1995."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Karting",
    value: "Karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/nico_rosberg/ros01.jpg",
              ]}
              title="Brothers In Arms"
              description="In late 1999, Nico Rosberg's father approached CRG executive Dino Chiesa to establish a dedicated karting team for both Nico and fellow driver Lewis Hamilton, which operated for two to three years. Rosberg competed for TeamMBM.com (Mercedes-Benz McLaren) during the 2000 season. He achieved a runner-up position in the European KF1 Championship and placed ninth in the Formula A World Cup. His karting career concluded with a third-place finish in the Formula Super A series at a race held in Kerpen."/>
           
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
                "/drivers_champions/nico_rosberg/ros02.webp",
              ]}
              title="Promising Star"
              description="At 16, Nico Rosberg transitioned to car racing, competing in the 2001 Formula BMW Junior Cup Iberia and finishing 18th in the championship. His breakout came in 2002 with VIVA Racing in the Formula BMW ADAC Championship, where he won the title with nine victories out of twenty races, totaling 264 points. As a reward, Rosberg tested a Williams FW24 at Circuit de Catalunya in December, becoming the youngest driver to test a Formula One car at the time. "/>
           
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
                "/drivers_champions/nico_rosberg/ros03.avif",
              ]}
              title="Great Start"
              description="In October 2005, following Bernie Ecclestone's recommendation, Nico Rosberg secured a role with Williams for the 2006 season, initially as either a test driver or racer. In November, he signed a five-year contract with the team, chosen for his driving skill and technical acumen. To prepare for the season, he achieved the highest score ever in Williams's Engineering Aptitude Test, focusing intensely on car mechanics and Formula One engineering aspects. Assigned to race engineer Tony Ross, Rosberg made his debut at the Bahrain Grand Prix, where he scored his first career points with a seventh-place finish and set the race's fastest lap, becoming the youngest fastest lap setter in history at the time, aged 20 years, 8 months, and 13 days."/>
           
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
                "/drivers_champions/nico_rosberg/ros04.jpg",
              ]}
              title="Transition from Williams"
              description="In mid-to-late 2009, Mercedes-Benz vice-president of motorsport Norbert Haug discussed with Nico Rosberg the possibility of him driving for the manufacturer in 2010, contingent upon Mercedes acquiring Brawn GP. Rosberg also explored options with McLaren and Williams, though he was uncertain about Williams's engine supplier decision between Renault and Cosworth. On 29 October, Rosberg confirmed his departure from Williams at the season's end, officially released from his contract on 1 January 2010. He began receiving advice from three-time world champion Niki Lauda. At the Chinese Grand Prix, the season's third round, Rosberg secured his first pole position and his maiden career victory. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "The Rivalry Begins",
    value: "the rivalry begins",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/nico_rosberg/ros05.avif",
              ]}
              title="Just Like Old Times"
              description="Before the 2013 season, Nico Rosberg was joined at Mercedes by the 2008 world champion Lewis Hamilton, who replaced the retired Michael Schumacher. Mercedes granted Rosberg equal status alongside Hamilton, without preferential treatment. During the pre-season, Rosberg engaged closely with Mercedes at their Brackley factory, contributing to the development of the F1 W04 car. Continuing with Mercedes in 2014, Rosberg and Hamilton again partnered. Rosberg initially led the World Drivers' Championship (WDC) with a victory in the Australian Grand Prix but faced challenges from Hamilton's subsequent wins."/>
           
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
                "/drivers_champions/nico_rosberg/ros06.jpg",
              ]}
              title="Beat Lewis Hamilton in Equal Machinery"
              description="Having signed a reported €55 million contract with Mercedes until the end of 2016, Nico Rosberg continued with the team into 2015. Despite winning the last three races and securing six consecutive pole positions, he finished runner-up in the championship with 322 points. Before the 2016 season, Rosberg focused on family, improved his racing gear, and intensified mental and physical training. He won the first four races, regained the championship lead from Lewis Hamilton, and maintained his form with strategic lifestyle changes. Rosberg secured his first World Drivers' Championship with a second-place finish in Abu Dhabi, fending off Hamilton's challenges and becoming the second son of a world champion to claim the title."/>
          </div>
      
      </div>
    ),
  },
]