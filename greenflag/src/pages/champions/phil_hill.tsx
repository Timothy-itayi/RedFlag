"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Phil_Hill = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center ">Phil Hill</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Phil_Hill;

const items = [
  {
    title: "Early Life",
    value: "early life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/phil_hill/hill00.jpg",
              ]}
              title="Trainee"
              description="Born on April 20, 1927, in Miami, Florida, Phil Hill was later raised in Santa Monica, California, where he spent most of his life until his passing. His academic journey began with studying business administration at the University of Southern California from 1945 to 1947. During his time there, Hill was also involved with the Kappa Sigma fraternity. However, his passion for auto racing led him to leave his studies early to pursue a career in motorsport.

Hill's early racing career started when he began racing cars at a young age. In 1949, he traveled to England as a trainee with Jaguar, marking the beginning of his journey into the world of competitive racing."/>
           
          </div>
      
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
                "/drivers_champions/phil_hill/hill01.avif",
              ]}
              title="Debut"
              description="Signing with Enzo Ferrari's team in 1956 marked a significant milestone for Phil Hill. He made his debut with Ferrari at the French Grand Prix in Reims, France, in 1958, driving a Maserati. This was followed by his full-time entry into Formula One with Ferrari in 1959, where he achieved three podium finishes and secured fourth place in the Drivers' Championship.

In 1960, Hill clinched a historic victory at the Italian Grand Prix held at Monza. This win was notable not only for being his first Grand Prix victory but also for being the first win for an American driver in Formula One in nearly forty years, excluding the Indianapolis 500 which was part of the Grand Prix World Championship series. The victory also marked the final win for a front-engined car in Formula 1."/>
           
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
                "/drivers_champions/phil_hill/hill02.jpg",
              ]}
              title="Career Complete"
              description="The 1961 season saw Hill continue his success with Ferrari, winning the Belgian Grand Prix. With just two races remaining, he was in contention for the championship, trailing only his Ferrari teammate Wolfgang von Trips in the standings. Tragically, during the Italian Grand Prix at Monza, von Trips was involved in a fatal crash that also claimed the lives of fifteen spectators. Despite the tragic circumstances, Hill went on to win the race, securing the championship title. However, Ferrari's decision not to participate in the season's final round in the United States meant Hill missed the opportunity to compete in his home race at Watkins Glen as the newly crowned World Champion."/>
           
          </div>
      
      </div>
    ),
  },
  
 
]