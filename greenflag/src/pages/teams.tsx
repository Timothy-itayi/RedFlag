"use client";


import Image from "next/image";
import { Tabs } from "../components/Tabs";


const Teams = () => {
  const tabs = [
    {
      title: "RedBull",
      value: "redbull",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
      <p>Redbull</p>
         <div className="flex flex-row items-start">
        
          <Redbull />
          <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
          </div>
         
        </div>
      ),
    },
    {
      title: "Ferrari",
      value: "ferrari",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>Ferrari </p>
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
      title: "Mclaren",
      value: "mclaren",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>Mclaren </p>
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
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>Mercedes </p>
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
        title: "Kick Sauber",
        value: "kick_sauber",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>Kick Sauber </p>
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
        title: "Willimas",
        value: "williams",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>Williams </p>
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
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>RB </p>
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
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>Haas </p>
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
        title: "Aston Martin",
        value: "aston martin",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>Aston Martin </p>
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
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>Alpine</p>
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
    <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 md:my-40">
      <Tabs tabs={tabs} />
    </div>
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