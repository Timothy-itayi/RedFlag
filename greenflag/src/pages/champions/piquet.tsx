"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Piquet = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Nelson Piquet</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Piquet;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/piquet/nel00.webp",
              ]}
              title="Early life"
              description="Nelson Piquet was born on August 17, 1952, in Rio de Janeiro, Brazil, where his father Estácio Gonçalves Souto Maior was a prominent physician and government minister. The family later moved to Brasília in 1960. Piquet, the youngest of his siblings, initially pursued tennis under his father's wishes but shifted to kart racing at 14, using his mother's maiden name Piquet to conceal his identity due to family disapproval of racing. He briefly attended university for engineering but left after two years to work in a garage, funding his burgeoning motorsport career independently."/>
           
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
                "/drivers_champions/piquet/nel.jpeg",
              ]}
              title="Debut"
              description="Nelson Piquet began his Formula One career with Ensign in 1978, retiring on his debut at Germany due to an engine failure.
In 1979, Piquet competed his first full season with Brabham alongside Niki Lauda. Despite a challenging season with multiple retirements, including a notable crash at Monza's Curva Grande, Piquet showed strong qualifying performances and earned his first points with a fourth-place finish at the Dutch Grand Prix. After Lauda's sudden departure, Piquet became Brabham's lead driver, showcasing the potential of the new BT49 with a front-row start and fastest lap at the United States Grand Prix."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Brabham",
    value: "brabham",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/piquet/nel02.webp",
              ]}
              title="World Champion"
              description="In 1981, Nelson Piquet had a remarkable season driving for Brabham, starting with a non-championship win in South Africa and a third place in the United States Grand Prix West. He secured pole position in his home race, the Brazilian Grand Prix, but struggled due to a wet track. Piquet faced setbacks with crashes in Monaco and Spain but bounced back with a dominant performance in France until rain disrupted his lead. He clinched the championship by winning the German Grand Prix and securing crucial points while his rival, Carlos Reutemann, faltered. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Turbo Charged ",
    value: "Turbo charged",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/piquet/nel03.jpg",
              ]}
              title="Double World Champion"
              description="In 1983, Nelson Piquet started the season with a win in Brazil driving the arrow-shaped BT52, but retired in the following race at the United States West Grand Prix. He secured second places in France and Monaco, where he also set the fastest lap. Piquet trailed Alain Prost by 14 points with three races remaining, but consecutive victories at Monza and Brands Hatch narrowed the gap to just two points. In the season-ending South African Grand Prix, Prost retired early, allowing Piquet to finish third and clinch his second world title. This victory marked the first championship for a turbocharged car and also BMW's first and only championship in Formula 1. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Triple World Champion ",
    value: "Triple world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/piquet/nel04.jpeg",
              ]}
              title="Percentage Driving "
              description="In 1987, Nelson Piquet redeemed himself after using both political maneuvering and technical prowess to gain an advantage over his teammate, Nigel Mansell. Despite a qualifying crash at Imola that left him with lingering effects, Piquet demonstrated his skill as a development driver by enhancing the competitiveness of the Williams FW11 throughout the season. Despite winning fewer races than Mansell, Piquet claimed the world championship. His consistent podium finishes from Detroit to Portugal underscored his strategy of driving for points, which he dubbed his percentage driving policy "/>
           
          </div>
      
      </div>
    ),
  },
]