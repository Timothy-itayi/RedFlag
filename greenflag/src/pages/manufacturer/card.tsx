"use client";


import Image from "next/image";
import { Tabs } from "../../components/Tabs";

const Card = () => {
  const tabs = [
    {
      title: "Lotus",
      value: "lotus",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>Lotus Tab</p>
          <div className="flex flex-row items-start">
          <Lotus />
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
          <p>Ferrari Tab</p>
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
          <p>Mclaren Tab</p>
          <div className="flex flex-row items-start"> 
          <Macleran />
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
            <p>Mercedes Tab</p>
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
        title: "Redbull",
        value: "redbull",
        content: (
          <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
            <p>RedBull Tab</p>
            <div className="flex flex-row items-start">
            <Redbull />
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

export default Card; 
const Redbull = () => {
  return (
    <Image
      src="/manufactureLogos/redbull_logo.png"
      alt="redbull image"
      width="500"
      height="500"
    />
  );
};
const Macleran = () => {
    return (
      <Image
        src="/manufactureLogos/mclaren_logoo.png"
        alt="macleran image"
        width="500"
        height="500"
       
      />
    );
  };
  const Ferrari = () => {
    return (
      <Image
        src="/manufactureLogos/ferrari_logo.png"
        alt="ferrari image"
        width="500"
        height="500"
       
      />
    );
  };
  const Mercedes  = () => {
    return (
      <Image
        src="/manufactureLogos/mercedes_logo.png"
        alt="mercedes image"
        width="500"
        height="500"
        
      />
    );
  };
  const Lotus = () => {
    return (
      <Image
        src="/manufactureLogos/lotus_logo.png"
        alt="lotus image"
        width="500"
        height="500"
       
      />
    );
  };