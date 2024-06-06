"use client";

  import { HoverEffect } from "../components/ui/card-hover-effect";

const  Teams = () =>  {
  return (
    <>
     <div className="text-center p-10">
      <h1 className="text-7xl  text-white font-bold"> Formula 1 Teams</h1>
    </div>
     <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </>
   
  );
}
export default Teams
export const projects = [
  {
    title: "Mercedes",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.mercedesamgf1.com/",
    image: '/teams/mercedes.webp'
  },
  {
    title: "Ferrari",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.ferrari.com/en-EN/formula1",
    image: '/teams/ferrari.webp'
  },
  
  {
    title: "Red Bull Racing",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.redbullracing.com/int-en",
    image: '/teams/redbull.jpeg'
  },
  
  {
    title: "McLaren",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.mclaren.com/racing/formula-1/",
    image: '/teams/mclaren.png'
  },
  
  {
    title: "Alpine",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.alpine-cars.co.uk/formula-1/f1-team.html",
    image: '/teams/alpine.avif'
  },
  
  {
    title: "Visa Cash App RB  ",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.visacashapprb.com/en/",
    image: '/teams/rb.avif'
  },
  
  {
    title: "Aston Martin",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.astonmartinf1.com/en-GB/",
    image: '/teams/aston_martin.png'
  },
  
  {
    title: "Kick Sauber",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.sauber-group.com/team?d=Racing",
    image: '/teams/kick_sauber.avif'
  },
  
  {
    title: "Haas",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.haasf1team.com/",
    image: '/teams/haas.jpeg'
  },
  
  {
    title: "Williams",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.williamsf1.com/",
    image: '/teams/williams.avif'
  },
  
  
];
