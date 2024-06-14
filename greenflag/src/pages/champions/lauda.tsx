"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Lauda = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Nikki Lauda</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Lauda;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/lauda/lauda00.jpeg",
              ]}
              title="Early life"
              description="Niki Lauda was born on 22 February 1949 in Vienna, Austria, into a wealthy paper manufacturing family. Despite his family's objections, Lauda pursued a career in racing. Starting with a Mini, he progressed to Formula Vee and then drove private Porsche and Chevron sports cars. Facing a stalled career, Lauda secured a £30,000 bank loan against a life insurance policy to join the March team as a Formula Two driver in 1971. His racing ambitions strained relations with his family, leading to an ongoing feud and eventual abandonment of further contact."/>
           
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
                "/drivers_champions/lauda/lauda01.jpeg",
              ]}
              title="Debut"
              description="Lauda was quickly promoted to the March Formula One team after impressing with his driving skills in Formula Two in 1972. Despite the latter's success, March had a disastrous 1972 Formula One season. Lauda then secured another bank loan to join the BRM team in 1973. Lauda's profile rose after a strong performance at the Monaco Grand Prix, where he ran third before a gearbox failure ended his race prematurely, catching the attention of Enzo Ferrari. When Lauda's BRM teammate Clay Regazzoni returned to Ferrari in 1974, Regazzoni praised Lauda so highly that Ferrari signed him, paying enough to settle his debts."/>
           
          </div>
      
      </div>
    ),
  },

  {
    title: "Ferrari",
    value: "ferrari",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/lauda/lauda02.jpeg",
              ]}
              title="World Champion"
              description="The 1975 Formula One season began slowly for Lauda, with no better than a fifth-place finish in the first four races. However, he quickly turned things around by winning four of the next five races driving the new Ferrari 312T. His first World Championship title was secured with a third-place finish at the Italian Grand Prix at Monza, where his teammate Regazzoni took the win, clinching Ferrari's first Constructors' Championship in 11 years. Lauda secured his fifth victory of the season at the United States GP at Watkins Glen.

During the season, Lauda also achieved the milestone of becoming the first driver to lap the Nürburgring Nordschleife in under seven minutes. This was particularly notable given the challenging nature of the longer Nordschleife circuit at that time."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Nurburgring Crash",
    value: "nurburgring crash",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/lauda/lauda03.webp",
              ]}
              title="Lauda On Fire"
              description="A week before the 1976 German Grand Prix at the Nürburgring, Niki Lauda, despite being the fastest driver on the circuit at the time, urged fellow drivers to boycott the race due to safety concerns. He highlighted deficiencies in safety resources such as fire marshals, equipment, and vehicles for the extensive 23-kilometre track. Despite his warnings and the dangerous nature of Formula One at the time, including fatal accidents of drivers from that era, most drivers voted against the boycott, and the race proceeded as scheduled.
During the race on August 1, 1976, on the second lap, Lauda's Ferrari crashed at a high-speed left kink before Bergwerk, causing it to burst into flames and collide with Brett Lunger's Surtees-Ford. "/>
          </div>
      
      </div>
    ),
  },
  {
    title: "Return to Racing",
    value: "return to racing",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/lauda/lauda06.jpeg",
              ]}
              title="Friendly Fighting "
              description="Just six weeks after the crash, with his burns still fresh and bandaged, he appeared at a press conference in Monza. Despite his admitted fear and discomfort, Lauda competed in the Italian Grand Prix and finished fourth. During Lauda's absence, James Hunt closed the championship gap with strong performances. Hunt and Lauda, despite their on-track rivalry, maintained a respectful friendship off the track. Heading into the final race of the season, the Japanese Grand Prix, Hunt trailed Lauda by just three points. Hunt, leading for much of the race, faced tire blistering and a pit stop that dropped him down the order. Despite recovering to finish third, Hunt's points were enough to secure the championship by a single point over Lauda." />

              </div>

      
      </div>
    ),
  },
  {
    title: "Bitter Sweet",
    value: "bitter sweet",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/lauda/lauda.jpeg",
              ]}
              title="Ferrari Woes "
              description="Lauda's decision to withdraw from the Japanese Grand Prix strained his relationship with Ferrari, despite winning the championship through consistent performances rather than outright pace in 1977. His rapport with Ferrari soured further due to disagreements, particularly with his new teammate Carlos Reutemann, whom Lauda did not get along with. Feeling let down by Ferrari's handling of the situation, Lauda announced his decision to leave the team at the end of the season.

After clinching the Drivers' Championship at the United States Grand Prix, Lauda departed Ferrari earlier than expected, partly due to Ferrari's decision to run Gilles Villeneuve in a third car at the Canadian Grand Prix, which further complicated his relationship with the team." />

              </div>

      
      </div>
    ),
  },
  {
    title: "3x World Champion",
    value: "3x world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/lauda/lauda07.jpeg",
              ]}
              title="Legend"
              description="The 1984 season was largely dominated by Lauda and Prost, who together won 12 out of 16 races. Lauda secured five wins while Prost took seven victories. Despite Lauda's proficiency in races, he often lagged behind Prost in qualifying, a trend that persisted from his earlier career record of most pole positions in a season set in 1975. Lauda's championship-winning moment came at the Portuguese Grand Prix, where he started from eleventh on the grid while Prost began from the front row. In a strategic race, Prost won his seventh race of the season from second on the grid. However, Lauda's calculated performance, including setting the fastest lap during the race and overtaking multiple cars, secured him second place behind Prost, earning enough points to claim the championship." />

              </div>
      
      </div>
    ),
  },
]