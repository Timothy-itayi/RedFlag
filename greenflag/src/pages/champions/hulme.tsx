"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Hulme = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Denis Clive Hulme</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Hulme;

const items = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hulme/hul00.webp",
              ]}
              title="The Beginning"
              description="Denny Hulme was born on a tobacco farm in Motueka, located on the South Island of New Zealand. His father, Clive Hulme, was a distinguished sniper awarded the Victoria Cross for his bravery during the Battle of Crete in 1941 .

Growing up on the family's farm in Pongakawa, near Te Puke, Hulme learned to drive a truck while sitting on his father's lap and was driving solo by the age of six. He left school early to work in a garage, where he saved enough money to buy an MG TF, which he entered in hillclimbing events. His impressive performance led his father to purchase an MGA for him. Demonstrating significant talent and progress, Hulme eventually acquired an F2 Cooper-Climax. His skills earned him a spot in the New Zealand Driver to Europe program, alongside fellow New Zealander George Lawton."/>
           
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
                "/drivers_champions/hulme/hul01.jpg",
              ]}
              title="Instant Winner"
              description="As the New Zealand press were ignoring Denny Hulme, he took matters into his own hands by hiring a 2½ litre Cooper from Reg Parnell and entering it in the 1961 New Zealand Gold Star Championship, which he won immediately. Settling in London, Hulme worked as a mechanic in Jack Brabham's garage in Chessington, which proved pivotal for his career. Brabham, recognizing Hulme's talent, gave him opportunities to drive in Brabham sports cars and single-seaters. Hulme's breakthrough came in the 1963 season when he won seven International Formula Junior races. His impressive performances led Brabham to include him in his Formula Two team."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Brabham",
    value: "brabham",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hulme/hul02.webp",
              ]}
              title="Formula 1 Debut"
              description="After numerous appearances in non-championship events for Brabham during the 1964 season, Denny Hulme finally received the call he had been waiting for. With Dan Gurney signed to race alongside team owner Jack Brabham, Hulme made his World Championship debut in 1965 at the prestigious Monaco Grand Prix. In 1966, Hulme embarked on his first full season of Formula One. With Dan Gurney's departure, Hulme was now the outright number two driver at Brabham, behind Jack Brabham himself. That year, Hulme finished a commendable fourth in the Drivers' Championship, contributing significantly to the Brabham team's success. Highlights of the season included a third-place finish at Reims in France, a second-place finish behind Brabham at Brands Hatch, and setting the fastest lap at Zandvoort before ignition problems forced him to retire."/>
           
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
                "/drivers_champions/hulme/hul03.jpg",
              ]}
              title="One and Only"
              description="The 1967 Formula One World Championship was largely an internal contest within the Brabham Racing Organisation team, pitting Denny Hulme against team owner Jack Brabham. Although their Brabham-Repco cars were not the fastest on the grid, they were exceptionally reliable and consistent, traits that both drivers maximized to their advantage. The new Lotus 49, driven by Jim Clark and Graham Hill, did challenge them, but the Brabham team's reliability often proved decisive. Hulme clinched two victories during the 11-race Championship season, showcasing his skill and resilience. His first win came at the prestigious Monaco Grand Prix. In addition. This consistency gave him the edge he needed, and he won the World Championship by five points over Jack Brabham and ten points over Jim Clark. Hulme's victory made him the first (and to date, only) Formula One World Champion from New Zealand. "/>
           
          </div>
      
      </div>
    ),
  },

]