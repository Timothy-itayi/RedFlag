"use client";
import React from "react";
import { StickyScroll } from "../components/ui/stick-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Williams FW14",
    description:
    "The Williams FW14 is a Formula One car designed by Adrian Newey, used by the Williams team during the 1991 and 1992 Formula One seasons. The car was driven by Nigel Mansell and Riccardo Patrese.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
          src="/carImages/williams.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Ferrari 2004",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/carImages/f04.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "McLaren MP4/4",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
           <Image
          src="/carImages/macleran.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " Lotus 72",
    description:
      "Seventy-five races and 20 wins does not sound that impressive in the present company. But the Lotus 72 has an ace up its sleeve. It won three Constructors’ Championships and two Drivers’ Championships in six seasons of racing and its 20 victories are spread out over five seasons, not just one. The Lotus 72 is a special racing car."

    ,   content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      <Image
          src="/carImages/lotus72.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
  },
  
];
const Cars = () => {
  return (
    <div className="pt-20">
      <div>
        <h1></h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
export default Cars;