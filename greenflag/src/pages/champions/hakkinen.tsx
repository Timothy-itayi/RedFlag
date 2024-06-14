"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Hakkinen = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Mika Hakkinen</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Hakkinen;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/mika/mika00.webp",
              ]}
              title="Early life"
              description="When Häkkinen was five years old, his parents rented a go-kart for him near their home. Despite an early crash, he persisted, and his father bought him a kart previously used by Henri Toivonen. Häkkinen won his first karting race in 1975 at Keimola Motor Stadium and competed in regional championships through 1978 and 1979, winning the Keimola Club Championship both years. In 1980, he won the Swedish Lapland Cup and placed fourth in Lapland Karting Championship's 85cc class. Häkkinen also drove a Volkswagen Beetle on frozen lakes with friend Mika Sohlberg."/>
           
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
                "/drivers_champions/mika/mika01.jpeg",
              ]}
              title="Junior Career"
              description="In 1987, Häkkinen transitioned from karting to car racing by purchasing a 1986 Reynard Formula Ford 1600 from JJ Lehto. He won the Finnish, Swedish, and Nordic Formula Ford Championships in his debut year, securing nine victories across these series. Moving into 1989 Häkkinen joined the British Formula 3 Championship with Dragon Racing, finishing seventh overall and winning the Cellnet Formula Three SuperPrix at Brands Hatch as a guest driver for West Surrey Racing. He also competed in a round of the French Formula 3 championship at Le Mans-Bugatti, finishing third."/>
           
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
                "/drivers_champions/mika/mika04.webp",
              ]}
              title="Debut"
              description="Häkkinen made his first test in a Formula One car with the Benetton team driving 90 laps around the Silverstone Circuit and set quicker lap times than regular driver Alessandro Nannini. He found it difficult to fit into the Benetton but liked the steering and throttle response. Häkkinen expected not to be offered a seat at Benetton and he decided to sign with the Lotus team for the 1991 season.[9] Making his debut in the United States Grand Prix alongside teammate Julian Bailey, Häkkinen qualified thirteenth on the grid and suffered an engine failure on the sixtieth lap and was classified thirteenth."/>
           
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
                "/drivers_champions/mika/mika06.jpeg",
              ]}
              title="First Podium"
              description="In 1993, Hakkinen joined Mclaren and claimed his first podium in Japan with a third place finish. Häkkinen concluded the season with 15th in the Drivers' Championship, scoring 4 points. In December, McLaren confirmed that Häkkinen would remain with the team on a three-year contract from the 1994 season onwards. In 1997 Häkkinen ended the season with a fourth position in the penultimate round in Japan and raced to his first Formula One victory at the season closing European Grand Prix. Häkkinen ended the season sixth in the Drivers' Championship, with 27 points"/>
           
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
                "/drivers_champions/mika/mika03.avif",
              ]}
              title="First Championship"
              description="Häkkinen continued with McLaren in 1998 alongside Coulthard, aiming for the World Championship with support from technical director Adrian Newey. The season began controversially in Australia when Coulthard yielded his lead to Häkkinen due to a team agreement. Häkkinen capitalized on this with consecutive wins in Australia and Brazil. Despite setbacks like gearbox failures in San Marino and Canada, Häkkinen rebounded with victories in Spain and Monaco. He secured the championship with wins in the final two races in Luxembourg and Japan, finishing the season with 100 points, ahead of Schumacher."/>
          </div>
      
      </div>
    ),
  },
  {
    title: "Double Champion",
    value: "double champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/mika/mika05.jpeg",
              ]}
              title="Second Championship"
              description="In 1999, Häkkinen continued with McLaren alongside Coulthard despite early setbacks with the McLaren MP4/14 car during testing. Despite these challenges, Häkkinen's confidence grew, buoyed by experience and relaxation from his previous championship win. He started the season with a retirement in Australia but bounced back with wins in Brazil, Spain, and Canada. Despite further retirements and setbacks, including a dramatic tyre failure in Germany and a spin in Italy while leading, Häkkinen clinched the 1999 World Championship with a victory in Japan, securing 76 points ahead of Eddie Irvine."/>
          </div>
      
      </div>
    ),
  },
]