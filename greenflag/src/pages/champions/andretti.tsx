"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Andretti = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Mario Andretti</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Andretti;

const items  = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/andretti/and00.jpg",
              ]}
              title="Born to Race"
              description="Mario Andretti and his twin brother Aldo were born with a passion for racing. According to their mother Rina, when they were two years old, they would take pot lids out of the cupboards and run around the kitchen, mimicking the sound of cars with Vroom, vroom, despite never having seen a car at that age . By the age of five in 1945, the twins were racing their hand-crafted wooden cars down the steep streets of their hometown . They eventually began working at a garage, parking cars, which ignited Mario's lifelong love for driving. In his autobiography, What's It Like Out There, published in 1970, Mario recounted his first experience behind the wheel: The first time I fired up a car, felt the engine shudder and the wheel come to life in my hands, I was hooked. It was a feeling I can't describe. I still get it every time I get into a race car"/>
          </div>
      
      </div>
    ),
  },
  {
    title: "Junior Career",
    value: "Junior Career",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/andretti/and01.jpg",
              ]}
              title="Secret Racer"
              description="Mario Andretti's journey to the United States began with his father's persistent contact with his brother-in-law, who had lived in the U.S. for many years. It took three years for the family to obtain a visa. he Andretti family emigrated to the U.S., settling in Nazareth, in the Lehigh Valley region of eastern Pennsylvania, with just $125 to their name . Mario and Aldo kept their racing activities secret from their parents. After their first four races, each twin had two wins. However, Aldo was seriously injured near the end of the season, which led to their parents discovering their racing pursuits and expressing their displeasure . Despite this setback, Mario continued to race, achieving 21 modified stock car wins in 46 races between 1960 and 1961 ."/>       
          </div>
      
      </div>
    ),
  },
  {
    title: "Professional ",
    value: "professional",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/andretti/and02.jpg",
              ]}
              title="Early Career"
              description="Mario Andretti became a naturalized U.S. citizen in 1964. The following year, he competed in United States Auto Club (USAC) stock car events, finishing twelfth in the season points standings. Andretti continued his success in USAC, winning three stock car races on road courses in 1974 and four more in 1975. One of Andretti's most notable achievements in NASCAR was winning the 1967 Daytona 500 for Holman Moody, a significant milestone in his racing career. Andretti was invited to compete in six International Race of Champions (IROC) series throughout his career. His best performances were in his first three seasons. He finished second in the final points standings in both IROC III (1975–1976) and IROC V (1977–1978). His standout performance came in IROC VI (1978–1979), where he won the points championship with finishes of third, first, and second across the events."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Open Wheel Racer",
    value: "open wheel racer",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/andretti/and03.jpeg",
              ]}
              title="Rookie of the Year"
              description="Mario Andretti's ultimate goal was to race in single-seater open-wheel cars. The next step in Andretti's racing career on the East Coast of the United States was to race sprint cars in the United Racing Club (URC). He managed to secure rides for individual races in the URC sprint car racing series but couldn't land a full-time ride. Andretti made his IndyCar debut on April 19, 1964, at the New Jersey State Fairgrounds in Trenton, New Jersey, starting sixteenth and finishing eleventh. In 1965, Andretti won his first championship car race at the Hoosier Grand Prix on a road course at Indianapolis Raceway Park. He earned the Rookie of the Year award at the Indianapolis 500, finishing third, and went on to win the series championship, becoming the youngest national champion in series history at age 25."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1 Debut",
    value: "Formula 1 Debut",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/andretti/and04.webp",
              ]}
              title="Part-Time Formula 1 Status"
              description="Mario Andretti's initial foray into Formula One began in 1968, fulfilling a long-held ambition after meeting Colin Chapman, owner of the Lotus Formula One team, at his first Indianapolis 500 in 1965. Chapman had promised Andretti a car when he felt ready to compete in Formula One, and Andretti took the pole position on his debut at the 1968 United States Grand Prix at Watkins Glen in a Lotus 49.

Over the next few years, Andretti drove sporadically in Formula One for Lotus, March, and Ferrari, while continuing to focus on his racing career in America. His debut for Ferrari at the 1971 South African Grand Prix resulted in his first Grand Prix win. He also won the non-championship Questor Grand Prix in the U.S. shortly after. Despite Ferrari offering Andretti a full-time position, he declined due to more lucrative commitments in the United States, ensuring his family's financial security."/>
           
          </div>
      
      </div>
    ),
  },
  
  {
    title: "Full F1 Season",
    value: "full f1 season",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/andretti/and05.webp",
              ]}
              title="Full-Time Formula 1 Status"
              description="n 1975, Andretti competed in a full Formula One season for the first time with the American Parnelli team, which had been successful in Formula 5000 and IndyCar racing in America with Andretti driving. Despite some promising results, including leading the 1975 Spanish Grand Prix for nine laps before a suspension failure, the team struggled, and Andretti scored only five championship points.

After Parnelli withdrew from Formula One in early 1976, Andretti rejoined Chapman's Lotus team. Lotus was struggling at the time but benefited greatly from Andretti's car development skills. His efforts helped Lotus return to competitiveness, culminating in a victory at the season-ending race at the Mount Fuji circuit in Japan in 1976"/>
           
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
                "/drivers_champions/andretti/and06.jpg",
              ]}
              title="Championship Victory"
              description="At the end of 1977, Mario Andretti was approached by Ferrari to replace Niki Lauda. Andretti had a handshake agreement with Colin Chapman of Lotus, who had agreed to match Ronnie Peterson's salary, the highest in Formula One at the time. When asked about his salary expectations by Enzo Ferrari, Andretti, guided by his wife Dee Ann, doubled his request. Ferrari agreed, but after a confrontation between Chapman and Ferrari, the offer was rescinded, and Andretti remained with Lotus under a new agreement that included a $10,000-per-point incentive. In 1978, Lotus introduced the Lotus 79, which further exploited ground effect aerodynamics. Andretti dominated the season, securing six wins and clinching the championship at the Italian Grand Prix."/>
           
          </div>
      
      </div>
    ),
  },
  

]