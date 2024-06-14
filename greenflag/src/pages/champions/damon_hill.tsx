"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Damon_Hill = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center "> Damon Hill</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Damon_Hill;

const items  = [
  {
    title: "Motorcycle",
    value: "motorcycle",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/d_hill/d-hill00.avif",
              ]}
              title="Early life"
              description="Hill began his motorsport journey in motorcycle racing in 1981, adopting his father's distinctive helmet design featuring eight white oar blades on a dark blue background, symbolizing the London Rowing Club. Despite financial constraints, he won a 350cc clubman's championship at Brands Hatch while supporting his racing career through jobs as a building labourer and later as a dispatch rider in London. Concerns from his mother about motorcycle racing's risks prompted him to attend the Winfield Racing School in France in 1983 to learn racing cars"/>
           
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
                "/drivers_champions/d_hill/d-hill01.jpeg",
              ]}
              title="Junior Career "
              description="In 1986, Hill aimed to join British Formula Three with West Surrey Racing but faced setbacks including the loss of sponsorship and the tragic death of his teammate Bertrand Fabi in a testing accident. Despite these challenges, Hill remained committed to racing, borrowing £100,000 to continue his career. By 1988, he finished third in the championship. Hindered by sponsorship issues in the 1990s, Hill couldn't progress to Formula 3000 directly, taking diverse racing opportunities including a brief stint in British F3000 and competing in the British Touring Car Championship.  "/>
           
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
                "/drivers_champions/d_hill/d-hill02.jpeg",
              ]}
              title="Debut "
              description="Hill's Grand Prix career began in 1991 as a test driver with Williams while competing in F3000. By mid-1992, he transitioned to racing with the financially troubled Brabham team, replacing Giovanna Amati after three races. Despite the team's difficulties, Hill qualified for two races alongside teammate Eric van de Poele. He continued testing for Williams that year, with Nigel Mansell winning the British Grand Prix while Hill finished last for Brabham. Unfortunately, Brabham collapsed after the Hungarian Grand Prix, ending their season prematurely. "/>
           
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
                "/drivers_champions/d_hill/d-hill03.avif",
              ]}
              title="First Win "
              description="In 1993, Mansell's departure from Williams led to Hill unexpectedly joining the team as Alain Prost's teammate, ahead of more experienced contenders. He continued to impress, securing podiums in subsequent races and claiming his maiden pole position in France. Despite engine failures and team orders in other races, Hill clinched his first career win at the Hungarian Grand Prix. This victory, followed by wins in Spa and Italy, helped secure the Constructors' Championship for Williams. Hill finished the season strong with podiums in Japan and Australia, ending third in the Drivers' Championship. "/>
           
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
                "/drivers_champions/d_hill/d-hill04.avif",
              ]}
              title="Dominant Season"
              description="In 1996, driving the dominant Williams car in Formula One, Hill secured the championship ahead of teammate Jacques Villeneuve, becoming the first son of a Formula One champion to win the title himself. With eight victories and flawless front-row qualifications throughout the season, Hill enjoyed his most successful year. Despite an engine failure at Monaco, he clinched crucial wins and matched Ayrton Senna's and Alain Prost's record of starting all 16 races from the front row in a single season. Nonetheless, Hill left Williams as their second-most successful driver in terms of race victories, with 21 wins, second only to Nigel Mansell. "/>
           
          </div>
      
      </div>
    ),
  },
]