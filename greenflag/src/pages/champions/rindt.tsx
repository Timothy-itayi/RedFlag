"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Rindt = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Jochen Rindt</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Rindt;

const items  = [
  {
    title: "Beginnings",
    value: "beginnings",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/rindt/rin00.avif",
              ]}
              title="Early life"
              description="
              Jochen Rindt was born on April 18, 1942, in Mainz, Germany, to an Austrian mother and a German father. His mother, a former successful tennis player, and his father owned a spice mill in Mainz, which Rindt later inherited. Tragically, his parents were killed in a bombing raid in Hamburg during World War II when Rindt was just 15 months old. He was then raised by his grandparents in Graz, Austria.
Rindt began racing in 1961 at the Flugplatzrennen in his grandmother's Simca Montlhéry, entering late thanks to a friendly motorsport official. Disqualified for dangerous driving, he was unaware of the regulations. His early rally attempts with the Simca were unsuccessful, but he found success after receiving a race-prepared Alfa Romeo GT 1300 from a local dealer, winning eight races."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Junior Career",
    value: "junior career",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/rindt/rin01.jpg",
              ]}
              title="Formula 2"
              description="In 1963, Rindt switched to Formula Junior with the help of Kurt Bardi-Barry, a wealthy travel agency owner and top Austrian driver. Barry gave Rindt his old Cooper T67, and they formed a racing partnership. Rindt was fastest in practice for his first race in Vallelunga, which Barry won, and Rindt won his second race at Cesenatico by exploiting an early accident. Known for his dangerous driving, he once nearly crashed into spectators in Budapest.

Rindt excelled in Formula Two, winning 29 races. Partnering again with Barry, he drove Brabham cars powered by inconsistent Cosworth engines, compensating by braking later. His first F2 race was in April 1964 at Aspern, retiring from both heats. He gained international attention on May 18, 1964, by winning the London Trophy at Crystal Palace in a Brabham BT10, beating Graham Hill."/>
           
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
                "/drivers_champions/rindt/rin02.jpg",
              ]}
              title="Debut"
              description="Rindt debuted in Formula One at the 1964 Austrian Grand Prix with a Brabham BT11 from the Rob Walker Racing Team, retiring on lap 58 due to a broken steering column. In 1965, he joined Cooper, partnered with Bruce McLaren. Cooper was struggling, and Rindt's best result was fourth at the German Grand Prix, ending the season 13th with four points.

In 1966, Cooper introduced the T81 chassis with heavy Maserati V12 engines under the new three-litre formula. With McLaren's departure, Rindt became team leader until John Surtees joined. At the Belgian Grand Prix, Rindt qualified second and led the race in heavy rain before finishing second to Surtees, earning his first podium. He secured three podium finishes that year, ranking third in the championship."/>
           
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
                "/drivers_champions/rindt/rin03.webp",
              ]}
              title="Saftey Concerns"
              description="In 1969, Rindt joined Lotus, the reigning World Constructors' Champion, partnering with defending Drivers' Champion Graham Hill. Despite concerns about Lotus's notorious unreliability—marked by 31 accidents from 1967 to 1969—Rindt moved to the team, hoping the car's speed would help him win the championship. Rindt's fears seemed justified when he and Hill experienced high-speed crashes at Montjuïc due to wing failures on their cars. Despite the challenges, Rindt secured his first Grand Prix win at the penultimate race at Watkins Glen, earning $50,000, the largest prize in Formula One at the time. However, the victory was overshadowed by Hill's serious leg injuries from a crash." />
          </div>
      
      </div>
    ),
  },
  {
    title: "1970 Season",
    value: "1970 Season",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/rindt/rin04.webp",
              ]}
              title="Leading Driver"
              description="In 1970, Jochen Rindt's teammate at Lotus was John Miles, with Graham Hill leaving to drive for Rob Walker's team. Rindt emerged as the clear team leader. The following race in Spain saw the debut of the revolutionary Lotus 72, featuring innovations like side-mounted radiators and torsion bar suspension. Due to issues with the Lotus 72, Rindt used the older Lotus 49 for the Monaco Grand Prix. Despite the instability caused by tires meant for the new car, Rindt delivered what his race engineer called the race of his life. Starting eighth, he steadily worked his way up the field. On the final lap, leader Jack Brabham made an error, allowing Rindt to claim victory. He had a chance to secure the championship at the Austrian Grand Prix, where he took pole position but retired with an engine failure. The title decision was thus postponed to Monza."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Posthumous World Champion",
    value: "posthumous world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/rindt/rin05.jpg",
              ]}
              title="Death and Legacy"
              description="Jochen Rindt headed to the Italian Grand Prix at Monza, a high-speed track where slipstreaming was crucial. Teams, including Lotus, opted to remove rear wings to reduce drag. Despite teammate John Miles' concerns about stability, Rindt found the car significantly faster without the wings. On the second day of practice, Rindt, running with higher gear ratios to maximize speed, crashed heavily approaching the Parabolica corner. Denny Hulme, following Rindt, recounted that Rindt's car veered off course and crashed into the guardrail. At his death, Rindt had a substantial lead in the Drivers' Championship, having won five of ten races. Jacky Ickx, Rindt's closest competitor, failed to overtake his lead, making Rindt Formula One's only posthumous world champion. The championship trophy was presented to his widow, Nina, by Jackie Stewart on November 18, 1970, in Paris."/>
           
          </div>
      
      </div>
    ),
  },
]