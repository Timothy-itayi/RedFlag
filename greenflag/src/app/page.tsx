"use client";

import React from "react";
import { Tabs } from "@/components/Tabs";
import Image from "next/image";


const Home = () => {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p className=" pt-2 pb-2 pl-3">About</p>
          <div className="container ">
          <SteeringWheel />
          </div>
     
    
        </div>
      ),
    },
    {
      title: "Drivers",
      value: "drivers",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p className=" pt-2 pb-2 pl-3">Drivers Tab </p>
          <div className="flex flex-row items-start">
            <DummyContent />
            <p className="ml-4 flex-2 text-white">
            This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.

            </p>
            </div>
         <div className="flex flex-row pr-3 justify-end">
         <button className=" px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn More
              </button>
           
            
         </div>
          
          </div>
     
      ),
    },
  ];

  return (
    <>
      <h1 className="text-center text-8xl font-bold  mb-10 py-5 text-black">Green Flag</h1>
      <p className="text-center text-2xl text-black  ">Explore Formula 1 content</p>
      <div className="container mx-auto mt-[-50px]">
      
        <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 md:my-40">
          <Tabs tabs={tabs} />
        </div>
        <footer className="text-center  bg-gray-800">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Green Flag. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;

const DummyContent: React.FC = () => {
  return (
    <Image
    
      src="/cockpit.png"
      alt="dummy image"
      width="500"
      height="500"
    />
  );
};

const SteeringWheel: React.FC = () => {
  return (
    <Image
    src="/IMG_3154.JPG"
    alt="wheel"
    width={500} 
    height={500} 
    className="max-w-full h-auto"
  />
  );
};
