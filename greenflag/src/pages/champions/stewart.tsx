"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Stewart = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Jackie Stewart</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Stewart;

const items  = [
  {
    title: "Early Life",
    value: "early life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/stewart/stew00.jpeg",
              ]}
              title="The Start of Something"
              description="Jackie Stewart was born in Milton, Dunbartonshire, Scotland, a village fifteen miles west of Glasgow. His family were successful car dealers, initially selling Austin cars and later Jaguar vehicles. Stewart's father had been an amateur motorcycle racer, and his brother Jimmy was a racing driver with a local reputation. Jimmy drove for Ecurie Ecosse and competed in the 1953 British Grand Prix at Silverstone. uring his school years, he experienced significant learning difficulties due to undiagnosed dyslexia. At that time, dyslexia was not widely understood or recognized, leading to frequent beratement and humiliation from teachers and peers who labeled him dumb and thick. Due to these challenges, Stewart was unable to continue his secondary education beyond the age of 16 and began working as an apprentice mechanic in his father's garage." />
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
                "/drivers_champions/stewart/stew01.jpeg",
              ]}
              title="Formula 3"
              description="In 1962, Jackie Stewart tested a Jaguar E-type at Oulton Park to assess his readiness for a professional racing career, matching the previous year's times set by Roy Salvadori. He subsequently won his first races in England with the E-type. Later, David Murray of Ecurie Ecosse invited him to drive the Tojeiro EE Mk2 and Cooper T49, with which he triumphed at Goodwood. The following year, Stewart had a stellar season, achieving fourteen wins, one second place, and two thirds, despite six retirements. In 1964, after continuing with Ecurie Ecosse, Ken Tyrrell recruited him for the Cooper Car Company's Formula Junior team at Goodwood, where Stewart impressed with faster lap times than Bruce McLaren, securing a spot on Tyrrell's team."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1 ",
    value: "Formula 1 ",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/stewart/stew02.webp",
              ]}
              title="Debut"
              description="n 1965, Jackie Stewart signed with BRM alongside Graham Hill, securing a contract worth £4,000. His first race in a Formula One car came unexpectedly for Lotus, filling in for an injured Jim Clark at the non-championship Rand Grand Prix in December 1964. Despite the Lotus breaking down in the first heat, Stewart won the second heat and set the fastest lap of the race from pole position.

Stewart's official World Championship Formula One debut came in South Africa, where he finished sixth. He achieved his first major competition victory in the BRDC International Trophy later that spring. By the end of the year, Stewart claimed his first World Championship race win at Monza, engaging in a close battle with teammate Hill's P261. His rookie season concluded with one win, three second-place finishes, a third, a fifth, and a sixth-place finish, securing him third place in the World Drivers' Championship standings. "/>
           
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
                "/drivers_champions/stewart/stew03.webp",
              ]}
              title="Leading Driver"
              description="For the 1968 season, Jackie Stewart joined Tyrrell's Matra International team, driving the Matra MS10-Cosworth. His season began with promise in South Africa, despite missing races at Jarama and Monaco due to an injury sustained in Formula Two at Jarama. Stewart's first win of the season came in challenging conditions at Zandvoort, where heavy rain played a significant role. In 1969, Stewart continued with Matra, now driving the Matra MS80-Cosworth. He dominated several races that season, showcasing his superiority with wins by over two laps at Montjuïc, a minute ahead at Clermont-Ferrand, and more than a lap in front at Silverstone. Moreover, Stewart set a remarkable record by leading at least one lap in every World Championship Grand Prix of that season, a feat unmatched to this day."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Double World Champion",
    value: "double world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/stewart/stew04.jpeg",
              ]}
              title="Determined"
              description="In 1971, Jackie Stewart clinched his second Formula One World Championship driving the Tyrrell 003-Cosworth. He dominated the season with victories in Spain, Monaco, France, Britain, Germany, and Canada. Alongside his F1 commitments, Stewart also contested a full season in the Can-Am series, driving a Lola T260-Chevrolet sponsored by Carl Haas. Despite the rigorous schedule, Stewart was the only driver capable of challenging the McLarens driven by Denny Hulme and Peter Revson in Formula One. In the Can-Am series, he won two races at Mont Tremblant and Mid Ohio, finishing third overall in the championship standings.

The demanding racing calendar across multiple continents took a toll on Stewart's health. Despite battling mononucleosis and enduring numerous transatlantic flights for media commitments in the United States, he managed to secure the 1971 World Championship."/>
           
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
                "/drivers_champions/stewart/stew05.jpeg",
              ]}
              title="Race Home"
              description="Entering the 1973 season, Jackie Stewart had already made the decision to retire from Formula One. Stewart expressed how the demanding pace of his racing career, coupled with the constant travel and the loss of many friends in the sport, had taken its toll on him. He highlighted the challenges of earning a living as a racing driver during that era, where drivers had to compete in multiple series globally to make significant income. Despite these challenges, Stewart continued to excel on track during his final season. He won races in South Africa, Belgium, Monaco, and the Netherlands. Notably, his 27th and final victory came at the Nürburgring. Stewart secured his third and final Drivers' Championship title two races prior at the Italian Grand Prix, where he demonstrated his skill by recovering from 20th place to finish 4th after a pit stop to change a flat tire.

"/>
           
          </div>
      
      </div>
    ),
  },

]