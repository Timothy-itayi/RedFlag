"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Jones = () =>  {
  return (
    <>
    <div className="text-center p-4 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center ">Alan Jones</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Jones;

const items  = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alan_jones/jones00.jpg",
              ]}
              title="Not Meant to Be"
              description="Alan Jones, son of Australian racing driver Stan Jones, was driven from an early age to follow in his father's footsteps. Born and raised in Australia, Jones attended Xavier College and initially embarked on his racing career while working in his father's Holden dealership. His early racing exploits included competing in a Mini and a Cooper.

In 1967, Jones ventured to Europe with aspirations of making a name for himself in motorsport. However, financial constraints prevented him from securing a drive, even in the affordable Formula Ford category. Disheartened, he returned to Australia temporarily.."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Junior Career ",
    value: "Junior Career ",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alan_jones/jones01.jpg",
              ]}
              title="Formula 3"
              description= "In 1971, Alan Jones transitioned to Formula Three racing with a modified Brabham BT28, now in BT35 specification. His season was moderately successful, which earned him a series of tests with March at Silverstone. Despite showing promise during the tests, Jones was not offered a race seat by March. Undeterred, Jones continued racing in Formula Three in 1972, driving a GRD. His performances that year impressed enough to secure him a spot with GRD for the following season, now with a new sponsor."
           
       />  </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1",
    value: "Formula 1",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alan_jones/jones02.jpg",
              ]}
              title="Rough Start"
              description="Alan Jones's entry into Formula One was marked by both tragedy and opportunity. His debut race was at the 1975 Spanish Grand Prix, held at the Montjuïc circuit in Barcelona, driving for the Hesketh team. Unfortunately, this event became one of the darkest in Formula One history due to Rolf Stommelen's crash which resulted in the death of five spectators. Despite the tragic circumstances, Jones continued racing for four races with Hesketh until the team withdrew from Formula One after Stiller relocated abroad.

Following this, Jones joined Graham Hill's team as a replacement for the injured Rolf Stommelen. During his brief stint with Hill's team, his best finish was fifth place at the Nürburgring.

Jones secured his first full-time Formula One drive in 1976 with John Surtees' team. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Williams",
    value: "Williams",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alan_jones/jones03.jpg",
              ]}
              title="Impressive Performance"
              description="By late 1977, Alan Jones had garnered attention from major Formula One teams like Frank Williams Racing Cars and Ferrari. Despite meetings with Enzo Ferrari at Maranello, it was Gilles Villeneuve who ultimately secured the drive with Ferrari. Meanwhile, Frank Williams, aiming to revitalize his struggling team, saw potential in Jones and signed him for the 1978 season. In 1979, Jones continued to excel with Williams in Formula One, driving the iconic Williams FW07 car. He achieved notable success towards the end of the season, winning four out of five races in a remarkable streak."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "World Champion",
    value: "World Champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/alan_jones/jones04.webp",
              ]}
              title="Peak Formula 1"
              description="Jones's success in 1979 indeed marked the beginning of his peak years in Formula One, coinciding with the advent of the ground-effect era. The Williams FW07, engineered by Patrick Head, proved to be an exceptionally competitive car in Jones's hands, paving the way for a stellar 1980 campaign and beyond. The following year, 1980, proved to be Jones's career-defining season. He dominated the championship with seven race wins, although only five counted towards the official championship due to the exclusion of the Spanish Grand Prix and the non-championship status of the Australian Grand Prix. By the end of the season, Jones had amassed enough points to secure the World Championship title, becoming Australia's first Formula One World Champion since Sir Jack Brabham."/>
           
          </div>
      
      </div>
    ),
  },
]