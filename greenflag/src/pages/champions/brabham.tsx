"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Brabham = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Jack Babham</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Brabham;

const items  = [
  {
    title: "Beginnings",
    value: "beginnings",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/brabham/brab00.jpg",
              ]}
              title="Early Life"
              description=" John Arthur 'Jack' Brabham was born on 2 April 1926 in Hurstville, New South Wales, then a commuter town outside Sydney. Brabham was involved with cars and mechanics from an early age. At the age of 12, he learned to drive the family car and the trucks of his father's grocery business. Brabham's early career was marked by his strong affinity for mechanical engineering. He left school at the age of 15 and took up a job at a local garage while attending evening classes in mechanical engineering. Soon after, he ventured into his own business of buying and repairing motorbikes for resale. His parents' back veranda served as his workshop during this entrepreneurial endeavor. His uncle had constructed a workshop on a plot of land behind his grandfather's house, where Brabham embarked on building his entrepreneurial skills further."/>
           
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
                "/drivers_champions/brabham/brab01.jpg",
              ]}
              title="Midget Racer"
              description="Brabham's venture into racing began when his American friend, Johnny Schonberg, persuaded him to attend a midget car race. Midget racing involved small, open-wheel cars racing on dirt ovals and was highly popular in Australia, drawing crowds of up to 40,000 spectators. Initially skeptical about driving, Brabham agreed to collaborate with Schonberg in building a car. Brabham's achievements in Midget racing were substantial: he won the 1948 Australian Speedcar Championship, the 1949 Australian and South Australian Speedcar Championships, and the 1950–1951 Australian Championship with the car he had built and refined in his workshop."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Forumla 1",
    value: "formula 1",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/brabham/brab02.webp",
              ]}
              title="Debut"
              description="Upon arriving in Europe in early 1955 on his own initiative, Brabham settled in the UK and purchased another Cooper car to compete in national racing events. Brabham made his Grand Prix debut at the age of 29, driving the Cooper Bobtail at the 1955 British Grand Prix. The car, powered by a 2-litre engine (half a litre less than regulations permitted), suffered from a broken clutch and retired from the race after running slowly. Later that year, Brabham again piloted the Bobtail, engaging in a competitive battle for third place with Stirling Moss in a non-championship Formula One race at Snetterton."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Podium Finish",
    value: "Podium finish",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/brabham/brab03.jpg",
              ]}
              title="Success Season "
              description="In 1959, Cooper equipped their cars with 2.5-litre engines for the first time, which Jack Brabham utilized to his advantage by securing his first world championship race win at the Monaco Grand Prix, the season opener. His victory came after Jean Behra's Ferrari and Stirling Moss's Cooper encountered mechanical failures, clearing the path for Brabham's triumph.

Following this success, Brabham continued to achieve podium finishes and secured another victory at the British Grand Prix held at Aintree. His strategic tire management allowed him to finish ahead of Moss, who had to pit to replace worn tires. These victories gave Brabham a significant 13-point lead in the championship standings with four races remaining."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "First Championship",
    value: "first champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/brabham/brab04.webp",
              ]}
              title="Title Winning Performance"
              description="As the championship approached its final event, the United States Grand Prix at Sebring, Brabham found himself in contention alongside Moss and Ferrari's Tony Brooks, each having secured two wins. The night before the race, Brabham was among the Cooper team members working until 1 am on the cars. In the race itself, Brabham paced himself behind Moss until Moss retired with a gearbox issue. Brabham then led the race until the final lap when he ran out of fuel. Determined to finish, he pushed his car across the finish line to secure fourth place. Ultimately, his efforts were enough to clinch the championship as his main rival, Brooks, finished third.

Despite his title-winning performance, some observers, as noted by Gerald Donaldson, attributed Brabham's success more to his tactical approach and understated presence rather than raw driving skill alone."/>
           
          </div>
      
      </div>
    ),
  },

  {
    title: "Slick Setup",
    value: "slick setup" ,
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/brabham/brab07.webp",
              ]}
              title="Double World Champion"
              description="During the 1960 season-opening Argentine Grand Prix, Brabham had a pivotal conversation with John Cooper during their return flight. Despite Cooper's reluctance to update their car, which had won in Argentina but was slower compared to others before encountering mechanical issues, Brabham provided input that led to the development of the more advanced Cooper T53, with advice from Tauranac. Brabham's debut with the new Cooper T53 at the Monaco Grand Prix ended with a spin-out, but this setback was followed by an impressive streak of five consecutive victories.  Brabham's skill in car setup was pivotal in Cooper clinching both the 1960 drivers' and constructors' titles. "/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "The Brabham BT19",
    value: "The Brabham BT19",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/brabham/brab05.jpg",
              ]}
              title="Triple World Champion"
              description="In 1966, a significant shift occurred in Formula One with the introduction of a new 3-litre engine formula. Many teams struggled with the development of their engines, which tended to be heavy and unreliable, particularly those with 12 cylinders. However, Jack Brabham approached the challenge differently. He convinced the Australian engineering company Repco to develop a new 3-litre V8 engine for him. Brabham's third championship was confirmed at the Italian Grand Prix, making him the only driver to win the Formula One World Championship in a car bearing his own name, the Brabham BT19. This achievement solidified Brabham's legacy not just as a talented driver but also as an innovative constructor and a pioneer in the sport of Formula One racing.."/>
           
          </div>
      
      </div>
    ),
  },
]
