"use client";


import Image from "next/image";
import { Tabs } from "../components/Tabs";

const Cars = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Service",
      value: "service",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>Service Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>About Tab</p>
          <DummyContent />
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

export default Cars; 
const DummyContent = () => {
  return (
    <Image
      src="/IMG_3154.JPG"
      alt="dummy image"
      width="500"
      height="500"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
