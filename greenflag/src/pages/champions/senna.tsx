"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Senna = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Aryton Senna</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Senna;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/senna/sen00.jpeg",
              ]}
              title="Early life"
              description="Senna's karting journey began with a homemade kart powered by a 1-HP lawnmower engine crafted by his father. At just 13 years old, he debuted at Interlagos, starting his first race from pole position against older rivals. Despite leading most of the race, he retired after a collision. Guided by his father and Lucio Pascal Gascon, Senna's talent blossomed, leading him to win the South American Kart Championship in 1977."/>
           
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
                "/drivers_champions/senna/sen01.jpeg",
              ]}
              title="Junior Career"
              description="In 1982, he went on to win both the British and European Formula Ford 2000 championships with sponsorship from Banerj and Pool. Moving up to British Formula Three in 1983 with West Surrey Racing, Senna dominated the season to clinch the championship after a fierce battle with Martin Brundle. He also won the prestigious Macau Formula 3 Grand Prix later that year with Teddy Yip's Theodore Racing Team."/>
           
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
                "/drivers_champions/senna/sen02.jpg",
              ]}
              title="Debut"
              description="Senna's Formula One debut at the 1984 Brazilian Grand Prix in Rio de Janeiro saw him qualify 17th, but his race ended prematurely on lap 8 due to a turbocharger failure in his Toleman Hart 415T. In his second race at the South African Grand Prix, despite severe cramps in his neck and shoulders, Senna secured his first World Championship point with a hard-fought 6th place. He repeated this result two weeks later at the Belgian Grand Prix."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Team Lotus",
    value: "team lotus",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/senna/sen03.jpeg",
              ]}
              title="First Win"
              description="In his debut year at Lotus-Renault in 1985, Ayrton Senna partnered with Elio de Angelis. Despite showing dominant testing pace in Rio, he faced electrical issues during the race weekend. Senna, still learning, made some errors. However, at the Portuguese Grand Prix, he secured his maiden pole position and went on to claim his first Formula 1 victory in wet conditions, lapping up to third place in a commanding performance termed the first Grand Slam of his career."/>
           
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
                "/drivers_champions/senna/sen04.jpeg",
              ]}
              title="Rivalry"
              description="In 1988, Ayrton Senna made a pivotal move to McLaren, driven by his strong rapport with Honda developed during the previous season at Lotus and with the blessing of McLaren's reigning champion, Alain Prost. This set the stage for an intense rivalry between Senna and Prost, punctuated by several dramatic race incidents over the next five years. Despite Prost scoring more points throughout the season, Senna clinched the championship with eight wins to Prost's seven. This inaugural championship marked the beginning of a fiercely competitive era between Senna and Prost at McLaren."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Historic",
    value: "historic",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/senna/sen5.avif",
              ]}
              title="Double World Champion"
              description=" Senna displayed his unmatched speed and determination, achieving his second world championship and solidifying his reputation as one of the greatest drivers in Formula One history. His partnership with McLaren-Honda continued to be formidable, aided by his demanding nature and insistence on technical improvements from Honda to keep ahead of their rivals. His success in 1990 marked another milestone in his illustrious career, setting the stage for further achievements in the seasons to come."/>
           
          </div>
      
      </div>
    ),
  },
]