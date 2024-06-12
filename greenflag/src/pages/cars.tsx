"use client";
import React from "react";
import {Tabs} from "../components/Tabs"
import SoundPlayer from '../components/showroom-components/sound-player'
import BlogCard from "../components/showroom-components/blog-card";
import sounds from '../models/sounds'
import Navbar from "@/components/ui/navbar";

const  Cars = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
      <Navbar />
          <h1 className="text-7xl  text-white card-font flex flex-wrap justify-center "> Iconic Cars</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Cars;

const items  = [
  {
    title: "Ferrari",
    value: "ferrari",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/F1cars/Ferrari/f05.jpeg",
                "/F1cars/Ferrari/f06.png",
                "/F1cars/Ferrari/f00.png",
                "/F1cars/Ferrari/f02.jpeg",
                "/champions/mschumacer.jpeg",
                "/F1cars/Ferrari/f03.jpeg",
                "/F1cars/Ferrari/f04.jpeg",
               
                
            
              ]}
              title="F2004"
              />
              <SoundPlayer selectedSound={sounds[0]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Renault",
    value: "renault",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/F1cars/Renault/renault00.jpg",
                "/F1cars/Renault/renault01.jpeg",
                "/F1cars/Renault/renault02.jpeg",
                "/F1cars/Renault/renault03.jpeg",
                "/F1cars/Renault/renault05.png",
                "/F1cars/Renault/renault06.jpeg",
               
                
            
              ]}
              title="R25/R26"
              />
              <SoundPlayer selectedSound={sounds[1]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Mercedes",
    value: "mercedes",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/F1cars/Mercedes/merc06.jpeg",
                "/F1cars/Mercedes/merc00.png",
                "/F1cars/Mercedes/merc01.png",
                "/F1cars/Mercedes/merc02.jpeg",
                "/F1cars/Mercedes/merc03.png",
                "/F1cars/Mercedes/merc05.jpeg",
             
               
                
            
              ]}
              title="W11"
              />
              <SoundPlayer selectedSound={sounds[2]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Red Bull",
    value: "red bull",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/F1cars/RedBull/rb00.jpeg",
                "/F1cars/RedBull/rb01.jpeg",
                "/F1cars/RedBull/rb02.png",
                "/F1cars/RedBull/rb03.png",
                "/F1cars/RedBull/rb05.png",
                "/F1cars/RedBull/rb06.png",
               
                
            
              ]}
              title="RB19"
              />
              <SoundPlayer selectedSound={sounds[3]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Mclaren",
    value: "mclaren",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[

             
                "/F1cars/Mclaren/mac05.jpeg",
                "/F1cars/Mclaren/mac04.jpeg",
                "/F1cars/Mclaren/mac00.jpeg",
                "/F1cars/Mclaren/mac08.jpeg",
                "/F1cars/Mclaren/mac01.jpeg",
                "/F1cars/Mclaren/mac07.jpeg",
   
                
               
                
            
              ]}
              title="MP4/4"
              />
              <SoundPlayer selectedSound={sounds[4]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Williams",
    value: "williams",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[

                "/F1cars/Williams/will05.webp",
                "/F1cars/Williams/will00.webp",
                "/F1cars/Williams/will03.jpeg",
                "/F1cars/Williams/will02.jpeg",
                "/F1cars/Williams/will06.jpeg",
             
            
                
               
                
            
              ]}
              title="FW14B"
              />
              <SoundPlayer selectedSound={sounds[5]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Brawn",
    value: "brawn",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[

                "/F1cars/Brawn/brawn00.jpeg",
                "/F1cars/Brawn/brawn01.jpeg",
                "/F1cars/Brawn/brawn04.avif",   
           
                "/F1cars/Brawn/brawn03.avif",
                "/F1cars/Brawn/brawn06.jpeg",
       
         
          
              
            
                
               
                
            
              ]}
              title="BrawnBGP"
              />
              <SoundPlayer selectedSound={sounds[6]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Lotus",
    value: "lotus",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/F1cars/Lotus/lotus03.jpeg",
                "/F1cars/Lotus/lotus05.jpeg",
                "/F1cars/Lotus/lotus01.jpeg",
                "/F1cars/Lotus/lotus00.jpeg", 
                "/F1cars/Lotus/lotus02.jpeg",
                "/F1cars/Lotus/lotus04.jpeg",
             
            
             
             
         
          
              
            
                
               
                
            
              ]}
              title="Lotus 78"
              />
              <SoundPlayer selectedSound={sounds[7]}/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Benetton",
    value: "benetton",
    content: (
      <div className="md:mx-auto container m-3 bg-black">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/F1cars/Benetton/ben01.jpeg",
                "/F1cars/Benetton/ben00.jpeg", 
                "/F1cars/Benetton/ben05.jpeg",
              
                "/F1cars/Benetton/ben02.jpeg",
                "/F1cars/Benetton/ben03.jpeg",
              
       
            
             
            
             
             
         
          
              
            
                
               
                
            
              ]}
              title="B195"
              />
              <SoundPlayer selectedSound={sounds[8]}/>
           
          </div>
      
      </div>
    ),
  },
]