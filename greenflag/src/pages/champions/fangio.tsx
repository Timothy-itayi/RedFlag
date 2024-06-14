"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Fangio = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Juan Manual Fangio</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Fangio;

const items  = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fangio/fan00.webp",
              ]}
              title="The Beginnings"
              description="Fangio was born in Balcarce on 24 June 1911, San Juan's Day, at 12:10 am. His birth certificate was mistakenly dated 23 June in the Register of Balcarce. He was the fourth of six children. In 1932, he was enlisted at the Campo de Mayo cadet school near Buenos Aires. His driving skills caught the attention of his commanding officer, who appointed Fangio as his official driver. Fangio was discharged before his 22nd birthday, after taking his final physical examination. He returned to Balcarce with the intention of furthering his football career. Along with his friend José Duffard, he received offers to play at a club based in Mar del Plata. Their teammates at Balcarce suggested the two work on Fangio's hobby of building his own car, and his parents provided him with space to do so in a rudimentary shed at the family home."/>
           
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
                "/drivers_champions/fangio/fan01.jpg",
              ]}
              title="National Champion"
              description="Fangio opened his own garage and began his racing career in Argentina in 1936, initially driving a 1929 Ford Model A that he rebuilt himself. He debuted in the Tourismo Carretera category between 18 and 30 October 1938 as co-driver to Luis Finocchietti in the Argentine Road Grand Prix, where they finished fifth despite not winning the race. Later that same year, he participated in the 400 km of Tres Arroyos, but the event was suspended due to a fatal accident.

Throughout his racing career in Argentina, Fangio drove Chevrolet cars and achieved the Argentine National Championship titles in 1940 and 1941. One of his notable races during this period was the 1940 Gran Premio del Norte, an arduous rally-style race covering almost 10,000 km 6,250 mi."/>
           
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
                "/drivers_champions/fangio/fan02.jpg",
              ]}
              title="Debut"
              description="Fangio was one of the oldest drivers in many of his Formula One races, starting his Grand Prix career in his late 30s. During his era, the safety standards were drastically different compared to modern Formula One. Races were held on circuits with minimal safety features, and cars lacked today's protective equipment. In the 1950s, Formula One cars were extremely fast but also physically and mentally demanding to drive. Races were much longer than they are today, requiring incredible stamina from the drivers.

During Fangio's time, the cars had narrow cross-ply tires that were less forgiving, often losing treads during races and causing spark plug fouling. Safety equipment was minimal; initially, drivers wore goggles and cloth helmets, but from 1952 onward, helmets became mandatory, though they were rudimentary and made of paper-mache. The cars lacked seatbelts, roll-over protection, and bodywork to shield the driver until 1954. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Alfa Romeo",
    value: "Alfa Romeo",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fangio/fan03.jpg",
              ]}
              title="World Champion"
              description="For the inaugural World Championship of Drivers in 1950, Fangio joined the Alfa Romeo team alongside Nino Farina and Luigi Fagioli. With post-war racing cars still scarce, the pre-war Alfa Romeo Alfettas were dominant. Fangio won three of the races he finished that season at Monaco, Spa, and Reims-Gueux. However, Farina clinched the championship with three wins and a fourth-place finish in races where Fangio encountered mechanical issues. Despite being faster than Farina, Fangio's retirements hindered his title bid. Fangio continued his success with Alfa Romeo in 1951, winning three championship races: the Swiss, French, and Spanish Grands Prix. Despite the competitive 4.5-litre Ferraris challenging his teammates and other rivals, Fangio secured the championship at the final race in Spain, finishing six points ahead of Ascari at the Pedralbes street circuit."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Maserati",
    value: "maserati",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fangio/fan04.jpg",
              ]}
              title="Back To Back Champion"
              description="In 1954, Juan Manuel Fangio began the season racing for Maserati until Mercedes-Benz joined the competition mid-season. He secured victories at his home Grand Prix in Buenos Aires and at Spa-Francorchamps driving the iconic Maserati 250F. He won a demanding race at the Gran Premio de la República Argentina held during extreme heat conditions, where few drivers completed the race due to the intense temperatures. Despite suffering severe burns from the heated chassis of his W196, Fangio persevered, taking three months to recover. Fangio continued to compete and secured his third World Championship 1955 by finishing second in Britain and winning in Italy. Mercedes concluded their racing campaign with the Targa Florio sportscar race, where Fangio, partnered with Karl Kling, finished second behind Moss and Peter Collins, securing the title for Mercedes-Benz over Ferrari by a narrow margin of two points."/>
           
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
                "/drivers_champions/fangio/fan05.webp",
              ]}
              title="4x World Drivers Champion"
              description="In 1956, Juan Manuel Fangio made a move to Ferrari and clinched his fourth Formula One World Championship title. Despite a somewhat strained relationship with Enzo Ferrari and the team manager Eraldo Sculati, Fangio found success with Ferrari's challenging Lancia car. He capitalized on his teammate's mechanical troubles during the Argentine, Monaco, and Italian Grands Prix, sharing points with him in each race. Following a difficult Monaco Grand Prix with the ill-handling Lancia-Ferrari, Fangio requested and was granted a dedicated mechanic for his car, which significantly improved its performance.  The climax of the season came at the Italian Grand Prix, where Fangio's teammate Peter Collins, who was in contention for the championship, selflessly handed over his car to Fangio with 15 laps remaining. This gesture allowed them to share second place and secured the World Championship title for Fangio."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Return to Maserati",
    value: "return to maserati",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fangio/fan06.jpg",
              ]}
              title="5x World Champion"
              description="In 1957, Fangio returned to Maserati, continuing to race the iconic 250F with which he had started his 1954 season. He kicked off the season with a remarkable hat-trick of wins in Argentina, Monaco, and France. Despite retiring due to engine problems in Britain, Fangio demonstrated his versatility by also winning the 12 Hours of Sebring sportscar race in America driving a Maserati 450S with Jean Behra for the second consecutive year.

At the pivotal German Grand Prix held at the challenging Nürburgring circuit, Fangio needed to extend his lead in the championship by six points to secure the title with two races remaining. Despite a setback during a pit stop that dropped him to third place, Fangio showcased his exceptional skill and determination by setting multiple fastest laps and ultimately overtaking both Collins and Mike Hawthorn on the penultimate lap to clinch victory. This remarkable performance secured Fangio his fifth and final World Championship title."/>
           
          </div>
      
      </div>
    ),
  },
]