"use client";

import Navbar from "@/components/ui/navbar";
  import { HoverEffect } from "../components/ui/card-hover-effect";

const  Teams = () =>  {
  return (
    <>
  
     <div className="text-center p-10">
     <Navbar />
      <h1 className="text-6xl  name-font text-white ">Teams</h1>
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
      "With a track record of multiple championships, Mercedes fields Lewis Hamilton and George Russell in 2024",
    link: "https://www.mercedesamgf1.com/",
    image: '/teams/mercedes.webp'
  },
  {
    title: "Ferrari",
    description:
      "With a rich history in F1, Ferrari continues to be a formidable force in 2024. Their team is led by drivers Charles Leclerc and Carlos Sainz",
    link: "https://www.ferrari.com/en-EN/formula1",
    image: '/teams/ferrari.webp'
  },
  
  {
    title: "Red Bull Racing",
    description:
      "Known for their competitive spirit and innovative approach, Red Bull Racing has been a strong contender in the F1 circuit. In 2024, they continue to be led by their star driver, Max Verstappen",
    link: "https://www.redbullracing.com/int-en",
    image: '/teams/redbull.jpeg'
  },
  
  {
    title: "McLaren",
    description:
      "Known for their technological prowess and racing heritage, McLaren fields Lando Norris and Oscar Piastri in 2024.",
    link: "https://www.mclaren.com/racing/formula-1/",
    image: '/teams/mclaren.png'
  },
  
  {
    title: "Alpine",
    description:
      "Formerly known as Renault, Alpine fields an all-French driver line-up with Esteban Ocon and Pierre Gasly in 2024",
    link: "https://www.alpine-cars.co.uk/formula-1/f1-team.html",
    image: '/teams/alpine.avif'
  },
  
  {
    title: "Visa Cash App RB  ",
    description:
      "Previously known as AlphaTauri, RB fields drivers Daniel Ricciardo and Yuki Tsunoda in 2024",
    link: "https://www.visacashapprb.com/en/",
    image: '/teams/rb.avif'
  },
  
  {
    title: "Aston Martin",
    description:
      "After rebranding from Racing Point, Aston Martin continues to compete with drivers Fernando Alonso and Lance Stroll",
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
      "An American team that has shown steady progress since their entry into F1, Haas fields drivers Kevin Magnussen and Nico Hulkenberg in 2024",
    link: "https://www.haasf1team.com/",
    image: '/teams/haas.jpeg'
  },
  
  {
    title: "Williams",
    description:
      "A team with a rich history in F1, Williams fields drivers Alexander Albon and Logan Sargeant in 2024",
    link: "https://www.williamsf1.com/",
    image: '/teams/williams.avif'
  },
  
  
];
