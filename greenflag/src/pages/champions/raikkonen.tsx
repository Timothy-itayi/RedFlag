"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Raikkonen = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center ">Kimi Raikkonen</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Raikkonen;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/kimi/kimi00.jpeg",
              ]}
              title="Early life"
              description="Räikkönen was born in Espoo, Finland. He had a long line of success in karting from the age of 10. His first race outside Finland was in Monaco when he was 15 years old. During the race, the steering wheel broke, but he continued, informing his mechanic by frantically waving the steering wheel in the air on the home straight. Räikkönen's next Monaco race was also memorable; he was thrown on the wrong side of the safety fence in a first lap collision but continued driving until running out of road. Undeterred, he lifted his kart back onto the track and continued to race. His mechanic thought Räikkönen had retired, but he eventually caught up with the other competitors and finished third."/>
           
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
                "/drivers_champions/kimi/kimi01.jpeg",
              ]}
              title="Junior Career "
              description="In 1998 he was first in the Nordic Championship at Varna in Norway. In 1999, Räikkönen placed second in the European Formula Super A championship for the Dutch PDB Racing Team – run by 1980 world champion Peter de Bruijn – utilising a Gillard chassis. He also competed in the Formula Ford Euro Cup. By the age of twenty, he had won the British Formula Renault winter series of 1999, winning the first four races of the year. In 2000, he won seven out of ten events in the Formula Renault UK Championship. Combined, over these two series of Formula Renault, he won 13 out of 23 events – a 57% win rate."/>
           
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
                "/drivers_champions/kimi/kimi02.jpeg",
              ]}
              title="Debut"
              description="Räikkönen’s journey into Formula One began when Peter Sauber offered him a test drive with the Sauber F1 team in September 2000 at the Mugello Circuit. Impressively, Räikkönen was half a second faster than the regular driver Pedro Diniz on just his second day. Räikkönen made his debut at the 2001 Australian Grand Prix saw him scoring a championship point, and he went on to have a solid first year. With four points-scoring finishes and eight top-eight finishes, he concluded the season with 9 points, aiding Sauber in achieving their best result of fourth place in the Constructors' Championship alongside teammate Nick Heidfeld."/>
           
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
                "/drivers_champions/kimi/kimi03.jpeg",
              ]}
              title="Title Contender"
              description="Räikkönen moved to McLaren in 2002, replacing Mika Häkkinen. His debut season was marked by a podium finish in his first race at the Australian Grand Prix and a near victory in France, where he finished second. Despite McLaren's reliability issues, Räikkönen ended the season with 24 points and four podium finishes, contributing to McLaren's third-place finish in the Constructors' Championship. In 2003, Räikkönen secured his first race win in Malaysia and consistently performed well throughout the season. He narrowly missed out on the championship, finishing second to Michael Schumacher by just two points.

"/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Challenging Years",
    value: "challenging years",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/kimi/kimi04.webp",
              ]}
              title="Close to Glory"
              description="The 2005 season saw Räikkönen as a strong title contender, winning seven races, including the inaugural Turkish Grand Prix and the Belgian Grand Prix. However, reliability issues and a crucial tyre failure in the European Grand Prix cost him the championship, which he finished second to Fernando Alonso. Despite this, Räikkönen’s performances earned him the F1 Racing Driver of the Year and Autosport International Racing Driver of the Year awards. Räikkönen’s final year with McLaren in 2006 was marked by strong performances but also marred by mechanical failures and accidents. His departure from McLaren was followed by the announcement that he would join Ferrari for the 2007 season."/>
           
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
                "/drivers_champions/kimi/kimi05.avif",
              ]}
              title="Ferrari"
              description="Räikkönen took the 2007 Formula One Drivers' title with victory in the Brazilian Grand Prix at Interlagos, in an incident-packed race. Massa had taken pole, followed by Hamilton, Räikkönen, and Alonso. At the start of the race, Räikkönen passed Hamilton on the outside and lined up behind Massa. Alonso shortly afterward passed Hamilton, who fell progressively down the order. Räikkönen eventually overtook Massa, who was already eliminated from contention for the Drivers' Championship in the Japanese Grand Prix. Massa's strategy for the second round of pit stops ensured Räikkönen kept the lead. Räikkönen went on to take the chequered flag, which handed him the crown by a single point from Hamilton and Alonso. Championship leader Hamilton eventually finished the race in seventh place, while defending champion Alonso managed third."/>
           
          </div>
      
      </div>
    ),
  },
]