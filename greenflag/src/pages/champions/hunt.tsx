"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Hunt = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">James Hunt</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Hunt;

const items  = [
  {
    title: "Tractor",
    value: "tractor",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hunt/hunt00.jpeg",
              ]}
              title="Early life"
              description="Hunt's introduction to driving began on a tractor during a family holiday in Pembrokeshire, Wales. He received instruction from the farm owner but initially struggled with changing gears due to his lack of strength. Despite this, Hunt managed to pass his driving test just one week after his seventeenth birthday, marking a significant milestone in his young life. Shortly before turning eighteen, Hunt visited the home of Chris Ridge, his tennis doubles partner. It was there that he was introduced to the world of motor racing when Ridge's brother Simon, who raced Minis, was preparing for a race at Silverstone that weekend. This experience ignited Hunt's passion for motorsport, setting him on the path to pursue a career in racing."/>
           
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
                "/drivers_champions/hunt/hunt01.webp",
              ]}
              title="Junior Career"
              description="In 1969, James Hunt embarked on his Formula Three racing career with financial backing from Gowrings of Reading, which provided him with a Merlyn Mark 11A. Originally, the car was intended to be used in the final two races of 1968. Hunt demonstrated his racing prowess by winning several races and consistently achieving high placements. His performance earned him recognition from the British Guild of Motoring Writers, who awarded him a Grovewood Award as one of the most promising drivers.

However, Hunt's career was not without controversy. On 3 October 1970, during a battle for second place in the Formula Three Daily Express Trophy race at Crystal Palace, Hunt was involved in a dramatic incident with fellow driver Dave Morgan."/>
           
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
                "/drivers_champions/hunt/hunt02.jpeg",
              ]}
              title="Debut"
              description="In addition to his Formula One exploits, James Hunt also made a brief foray into sports car racing. He participated in the 1973 Kyalami Nine Hours, driving a Mirage M6 alongside Derek Bell. The duo performed admirably, finishing the race in second place, further showcasing Hunt's versatility and skill as a driver.
At the conclusion of the season, Hunt's outstanding performance in Formula One was recognized by the Royal Automobile Club (RAC). He was awarded the prestigious Campbell Trophy, an accolade given to the British driver who delivered the best performance in Formula One that year. This recognition highlighted Hunt's growing reputation and success in the highly competitive world of motorsport.

"/>
          </div>
      
      </div>
    ),
  },
  {
    title: "Mclaren",
    value: "Mclaren",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hunt/hunt03.png",
              ]}
              title="Controversy"
              description="The 1976 Formula One season was one of the most dramatic and controversial on record, with James Hunt at the center of the action. After his impressive performances in the Hesketh, Hunt joined the McLaren team. His transition was scrutinized, but he quickly proved his worth by securing pole position in the final minutes of qualifying at the season opener in Brazil, driving a hastily rebuilt McLaren M23.
              Over the season, Hunt drove the McLaren M23 to six Grand Prix wins. However, reigning world champion and main rival Niki Lauda initially pulled out a substantial points lead, thanks to superior reliability. Hunt's first win of 1976 came at the Spanish Grand Prix, but controversy struck when he was disqualified for driving a car deemed 1.8 cm too wide. The win was later reinstated upon appeal, setting the tone for an extraordinarily volatile season."/>
          </div>
      
      </div>
    ),
  },
  {
    title: "Battle For First",
    value: "battle for first ",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hunt/hunt04.webp",
              ]}
              title="World Champion"
              description="The penultimate round at Watkins Glen saw Hunt starting from pole and winning after a close battle with Jody Scheckter. This victory set up a thrilling finale at the Japanese Grand Prix, with Hunt trailing Lauda by just three points. In torrential rain, Lauda retired early, unable to blink due to his injuries. Hunt, despite suffering a puncture and a delayed pit stop, managed to finish third, securing enough points to win the World Championship by a single point.

James Hunt's victory made him the last British Formula One champion until Nigel Mansell in 1992. His title was achieved on a relatively modest budget, having signed with McLaren at the last minute for $200,000, a scenario similar to 1982 champion Keke Rosberg ."/>
          </div>
      
      </div>
    ),
  },
]