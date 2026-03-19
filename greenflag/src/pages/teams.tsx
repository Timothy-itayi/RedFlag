"use client";

import Navbar from "@/components/ui/navbar";
  import { HoverEffect } from "../components/ui/card-hover-effect";

const  Teams = () =>  {
  return (
    <>
  
     <div className="text-center p-5">
     <Navbar />
      <h1 className="text-6xl  card-font text-white ">Teams</h1>
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
      "Eight-time Constructors' Champions, Mercedes enter 2026 with George Russell and rookie Kimi Antonelli as they adapt to the new power unit regulations",
    link: "https://www.mercedesamgf1.com/",
    image: '/teams/mercedes.webp'
  },
  {
    title: "Ferrari",
    description:
      "Ferrari welcome seven-time World Champion Lewis Hamilton alongside Charles Leclerc for 2026, forming one of the strongest driver pairings on the grid",
    link: "https://www.ferrari.com/en-EN/formula1",
    image: '/teams/ferrari.webp'
  },
  {
    title: "Red Bull Racing",
    description:
      "Red Bull Racing field Max Verstappen and promoted junior driver Isack Hadjar for 2026, debuting their own Red Bull Ford Powertrains power unit",
    link: "https://www.redbullracing.com/int-en",
    image: '/teams/redbull.jpeg'
  },
  {
    title: "McLaren",
    description:
      "Reigning Constructors' Champions McLaren retain their winning partnership of Lando Norris and Oscar Piastri for the 2026 season",
    link: "https://www.mclaren.com/racing/formula-1/",
    image: '/teams/mclaren.png'
  },
  {
    title: "Alpine",
    description:
      "Alpine field Pierre Gasly and Franco Colapinto for 2026 as the team continues its transition under new technical regulations",
    link: "https://www.alpine-cars.co.uk/formula-1/f1-team.html",
    image: '/teams/alpine.avif'
  },
  {
    title: "Racing Bulls",
    description:
      "The Red Bull junior team, rebranded as Racing Bulls, fields Liam Lawson and rookie Arvid Lindblad for the 2026 season",
    link: "https://www.racingbulls.com/",
    image: '/teams/racing-bulls.avif'
  },
  {
    title: "Aston Martin",
    description:
      "Aston Martin continue with Fernando Alonso and Lance Stroll for 2026, now powered by Honda as they push for the front of the grid",
    link: "https://www.astonmartinf1.com/en-GB/",
    image: '/teams/aston_martin.png'
  },
  {
    title: "Audi",
    description:
      "Audi make their full works entry into F1 in 2026 with Nico Hulkenberg and Gabriel Bortoleto, running their own power unit through the former Sauber operation",
    link: "https://www.audi-formularacing.com/",
    image: '/teams/audi-team.jpg'
  },
  {
    title: "Haas",
    description:
      "Haas field Oliver Bearman and Esteban Ocon for 2026, bringing a blend of young talent and experienced racecraft to the American team",
    link: "https://www.haasf1team.com/",
    image: '/teams/haas.avif'
  },
  {
    title: "Williams",
    description:
      "Williams pair Alex Albon with Carlos Sainz for 2026 as the historic team aims to return to competitiveness under the new regulations",
    link: "https://www.williamsf1.com/",
    image: '/teams/williams.webp'
  },
  {
    title: "Cadillac",
    description:
      "The 11th team on the grid, Cadillac make their F1 debut in 2026 with Sergio Perez and Valtteri Bottas as General Motors enters the sport as a works constructor",
    link: "https://www.cadillacf1.com/",
    image: '/teams/cadillac.jpeg'
  },
];
