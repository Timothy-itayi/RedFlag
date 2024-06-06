"use client";


import Image from "next/image";
import { Tabs } from "../components/Tabs";
import {teamColors }from '../components/Tabs'
import Link from "next/link";

const Teams = () => {
  const tabs = [
    {
      title: "RedBull",
      value: "redbull",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white">
      <p className="pl-4 p-3 ">Red Bull Racing</p>
         <div className="flex flex-row items-start">
        
          <Redbull />
          <p className="ml-4 grid text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            
          </div>
          <Link href="/">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800  px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["RedBull"]}, black)`}}>
        redbull 
        
      </button>
          </Link>
          
         
        </div>
      ),
    },
    {
      title: "Ferrari",
      value: "ferrari",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["Ferrari"]}, black)`}}>
          <p className="pl-4 p-3 "> Ferrari </p>
          <div className="flex flex-row items-start">

          <Ferrari />
          <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
        </div>
      ),
    },
    {
      title: "McLaren",
      value: "mclaren",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["McLaren"]}, black)`}}>
          <p className="pl-4 p-3 ">McLaren </p>
          <div className="flex flex-row items-start"> 
          <Mclaren />
          <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
        </div>
      ),
    },
    {
        title: "Mercedes",
        value: "mercedes",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["Mercedes"]}, black)`}}>
            <p className="pl-4 p-3 ">Mercedes </p>
            <div className="flex flex-row items-start">
            <Mercedes />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
          </div>
        ),
      },
      {
        title: "Stake",
        value: "stake",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["Stake"]}, black)`}}>
            <p className="pl-4 p-3 ">Kick Sauber </p>
            <div className="flex flex-row items-start">
            <Kick_Sauber />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
          </div>
        ),
      },
      {
        title: "Williams",
        value: "williams",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["Williams"]}, black)`}}>
            <p className="pl-4 p-3 ">Williams Racing </p>
            <div className="flex flex-row items-start">
            <Williams />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
          </div>
        ),
      },
      {
        title: "RB",
        value: "rb",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["RB"]}, black)`}}>
            <p className="pl-4 p-3 ">RB Formula One Team </p>
            <div className="flex flex-row items-start">
            <RB_Cash_App />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
          </div>
        ),
      },
      {
        title: "Haas",
        value: "haas",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["Haas"]}, black)`}}>
            <p className="pl-4 p-3 ">MoneyGram Haas F1 Team </p>
            <div className="flex flex-row items-start">
            <Haas />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
          </div>
        ),
      },
      {
        title: "AstonMartin",
        value: "aston martin",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["AstonMartin"]}, black)`}}>
            <p className="pl-4 p-3 ">Aston Martin </p>
            <div className="flex flex-row items-start">
            <Aston_Martin />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
          </div>
        ),
      },
      {
        title: "Alpine",
        value: "alpine",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white"style={{backgroundImage: `linear-gradient(to bottom right, ${teamColors["Alpine"]}, black)`}}>
            <p className="pl-4 p-3 ">Alpine</p>
            <div className="flex flex-row items-start">
            <Alpine />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
            </div>
          </div>
        ),
      },
  
 
  ];

  return (
    <>
   
   <div className="text-center m-2">
      <h1 className="text-7xl  text-white font-bold"> Formula 1 Teams</h1>
    </div>
     <div className="h-[30rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-2 md:my-10">
      <Tabs tabs={tabs} />
    </div>
    </>
   
  );
}

export default Teams; 
const Redbull = () => {
  return (
    <Image
    src="/teams/redbull.jpeg"
    alt="redbull"
    width="500"
    height="500"
   
  />

  );
};
const Mclaren = () => {
    return (
      <Image
        src="/teams/mclaren.png"
        alt="macleran"
        width="500"
        height="500"
       
      />
    );
  };
  const Ferrari = () => {
    return (
      <Image
        src="/teams/ferrari.webp"
        alt="ferrari"
        width="500"
        height="500"
       
      />
    );
  };
  const Mercedes  = () => {
    return (
      <Image
        src="/teams/mercedes.webp"
        alt="mercedes"
        width="500"
        height="500"
        
      />
    );
  };
  const Alpine = () => {
    return (
      <Image
        src="/teams/alpine.avif"
        alt="alpine"
        width="500"
        height="500"
       
      />
    );
  };
  const Haas = () => {
    return (
      <Image
        src="/teams/haas.jpeg"
        alt="haas"
        width="500"
        height="500"
       
      />
    );
  };
  const Kick_Sauber = () => {
    return (
      <Image
        src="/teams/kick_sauber.avif"
        alt="kick_sauber"
        width="500"
        height="500"
       
      />
    );
  };
  const Williams = () => {
    return (
      <Image
        src="/teams/williams.avif"
        alt="williams"
        width="500"
        height="500"
       
      />
    );
  };
  const RB_Cash_App = () => {
    return (
      <Image
        src="/teams/rb.avif"
        alt="rb"
        width="500"
        height="500"
       
      />
    );
  };
  const Aston_Martin = () => {
    return (
      <Image
        src="/teams/aston_martin.png"
        alt="aston_martin"
        width="500"
        height="500"
       
      />
    );
  };