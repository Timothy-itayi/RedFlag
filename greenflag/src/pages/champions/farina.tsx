"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Farina = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Giuseppe Farina</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Farina;

const items  = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/farina/farina00.jpg",
              ]}
              title="The Beginning"
              description="Born in Turin, Giuseppe Farina was the son of Giovanni Carlo Farina, the founder of Stabilimenti Farina, a prominent coachbuilder. His early interest in motorsport was evident from a young age when he started driving a two-cylinder Temperino at just nine years old. Despite his initial pursuits in education and sports like skiing, football, and athletics, Farina eventually abandoned a career as a cavalry officer in the Italian army to pursue his passion for motor racing. While still a university student, Farina purchased his first car, a used Alfa Romeo, and entered it in the 1925 Aosta-Gran San Bernardo Hillclimb. In an attempt to outperform his father in the race, Farina crashed, sustaining injuries that included a broken shoulder and facial cuts. This incident marked the beginning of a pattern of crashes throughout his racing career, though it did not deter his dedication to the sport."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Early Racing Career ",
    value: "Early Racing Career ",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/farina/farina01.jpg",
              ]}
              title="1933-1938"
              description="During the 1933 and 1934 racing seasons, Giuseppe Farina made a return to motorsport, driving for teams such as Gino Rovere and Scuderia Subalpina, where he began to form a friendship with the legendary Italian racer Tazio Nuvolari. Nuvolari played a significant role in guiding Farina's early career, offering him advice and support. By 1935, Farina's talent had caught the attention of Enzo Ferrari, who recruited him to drive for Scuderia Ferrari, the team responsible for running Alfa Romeo's works-supported cars. Farina secured his first Grand Prix victory in 1937 at the Grand Prix of Naples, marking a significant milestone in his career. Despite his success on the track, Farina's aggressive driving style and sometimes contentious behavior earned him a reputation. In 1938, Farina joined the official Alfa Romeo team, Alfa Corse, driving the powerful Alfa Romeo 158 Voiturette."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Post War Racing",
    value: "Post War Racing",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/farina/farina02.jpg",
              ]}
              title="1946-1949"
              description="After World War II, Giuseppe Farina returned to racing with Alfa Corse, driving their famed Alfa Romeo 158. He immediately showcased his talent by winning the 1946 Grand Prix des Nations. However, a disagreement over team leadership prompted him to leave Alfa Corse, and he opted to sit out the entire 1947 season. Farina made a comeback to motorsport in 1948, racing with a privately entered Maserati and also driving for the works Ferrari team. During this period, he married Elsa Giaretto, who held a dim view of motorsport due to its perceived risks. Despite her concerns, Farina continued racing. Shortly after their wedding, he flew to Argentina and won the Gran Premio Internacional del General San Martín in his Maserati 8CL. Switching to Ferrari's first-ever Grand Prix car, the Ferrari 125, Farina won the Circuito di Garda before returning to South America for the Temporada races in 1949."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Inaugural World Championship",
    value: "inaugural world championship",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/farina/farina03.webp",
              ]}
              title="Drivers Championship Debut"
              description="n 1950, Giuseppe Farina returned to Alfa Romeo for the inaugural FIA World Championship of Drivers. The season opener took place at Silverstone Circuit, drawing a crowd of 150,000 spectators. Farina achieved a historic victory, leading an Alfa Romeo 1–2–3 finish alongside teammates Luigi Fagioli and Reg Parnell. Eight days later, at the Monaco Grand Prix, Farina's race was cut short by a multiple-car pile-up on the first lap, allowing Juan Manuel Fangio to secure the win. Moving on to the Swiss Grand Prix, Farina bounced back to beat his teammate Fagioli to take first place. However, at the Spa-Francorchamps circuit in Belgium, Fangio emerged victorious with Fagioli in second, while Farina finished fourth due to transmission issues. Despite these setbacks, Farina maintained the championship lead with 22 points, ahead of Fagioli's 18 and Fangio's 17."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "The First Drivers Champion",
    value: "the first drivers champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/farina/farina04.jpg",
              ]}
              title="Number One Driver"
              description="The momentum shifted when Fangio won the 1950 French Grand Prix, leaving Farina outside the points in seventh place. Heading into the season finale, the Italian Grand Prix at Monza on September 3, Farina found himself trailing Fangio by two points. Alfa Romeo, on their home turf, fielded an additional car for Piero Taruffi and Consalvo Sanesi. The race saw Alberto Ascari's Ferrari initially pressuring the Alfa Romeos from second place, as Ferrari's strategy required only one fuel stop compared to Alfa's two. However, Ascari retired due to engine problems. Mid-race, Fangio encountered gearbox issues, forcing Taruffi to hand over his car, which also eventually retired. These incidents cleared the path for Farina to clinch the first position and thereby secure the championship title. This victory at Monza crowned Giuseppe Farina as the inaugural Formula One World Champion in 1950."/>
           
          </div>
      
      </div>
    ),
  },
]