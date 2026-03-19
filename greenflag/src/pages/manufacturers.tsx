"use client";

import Navbar from "@/components/ui/navbar";
import { LayoutGrid } from "../components/ui/layout-grid";

const  Manufacturers = () =>  {
  return (
    <>
        
    <div className="text-center mt-10">
       <Navbar/>

       
      </div>
      <div className="flex justify-center  animate-fade-up">
       <h1 className="text-5xl  text-white card-font">Manufacturers</h1>
       </div>
    <div className="h-screen py-20 mb-10 animate-fade-up  w-full">
      <LayoutGrid cards={cards} />
    </div></>
  );
}

export default Manufacturers

const RedBullFord = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-3xl text-white">Red Bull Ford Powertrains</p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200">
        Ford&apos;s F1 legacy runs deep. Through Cosworth, the Ford DFV engine debuted in 1967 and became the most successful engine in F1 history — 155 wins, 13 Drivers&apos; and 10 Constructors&apos; Championships. After decades away, Ford returns to Formula 1 in 2026 as a partner in Red Bull Ford Powertrains. The new 1.6-litre V6 turbo power unit is built under revolutionary 2026 regulations mandating a 50/50 split between combustion and electric power, with the electrical output tripled to 350 kW. Red Bull built a dedicated engine facility in Milton Keynes with over 700 staff, while Ford contributes advanced manufacturing technology including 3D printing. It is one of the boldest bets in modern F1 — a brand-new constructor challenging manufacturers with decades of continuous engine-building experience.
      </p>
    </div>
  );
};

const Mercedes = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-3xl text-white">Mercedes</p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200">
        Mercedes-Benz, a German luxury automotive brand, active in Formula One since 1954, owns the Mercedes-AMG Petronas F1 Team. Known as the &quot;Silver Arrows,&quot; they won titles in 1954 and 1955. Returning as an engine supplier in 1994, Mercedes found success with McLaren. Rebranding Brawn GP in 2010, Mercedes dominated from 2014 to 2021, winning seven Drivers&apos; and eight Constructors&apos; titles. Mercedes engines have over 200 wins, ranking second in F1 history with ten Constructors&apos; and thirteen Drivers&apos; Championships.
      </p>
    </div>
  );
};

const Honda = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-3xl text-white">Honda</p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200">
        Honda, a Japanese automaker, has been involved in Formula One since 1964 as both an engine manufacturer and team owner. After winning its first race in 1965, Honda withdrew in 1968. Returning in 1983 as an engine supplier, Honda achieved significant success with Williams and McLaren, winning multiple titles until 1992. After a hiatus, Honda partnered with Red Bull Racing, winning the 2022 title with Max Verstappen. From 2023, Honda supplied power units as Honda RBPT. Plans for a full return in 2026 with Aston Martin have been announced.
      </p>
    </div>
  );
};

const Ferrari = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-3xl text-white">Ferrari</p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200">
        Scuderia Ferrari, the racing arm of the luxury Italian automaker, is the oldest and most successful Formula One team, competing since 1950. Founded by Enzo Ferrari, it initially raced Alfa Romeo cars before building its own in 1947. Ferrari holds 16 Constructors&apos; Championships and a record 15 Drivers&apos; Championships. Michael Schumacher&apos;s five consecutive titles and 72 Grands Prix victories mark the team&apos;s most successful era. Their passionate fan base, known as the tifosi, and the Italian Grand Prix at Monza are iconic aspects of the team&apos;s heritage.
      </p>
    </div>
  );
};

const Audi = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-3xl text-white">Audi</p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200">
        German car manufacturer Audi is contracted to compete as a Formula One team and constructor beginning with the 2026 season. Audi F1 Team will be formed through the acquisition of the Sauber Group, with engines developed by Audi Formula Racing GmbH.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <RedBullFord />,
    className: "md:col-span-1",
    thumbnail:
      "/manufacturer/redbull-ford-powertrain.jpg",
    contain: true,
  },
  {
    id: 2,
    content: <Mercedes />,
    className: "col-span-1",
    thumbnail:
       "/manufacturer/mercedes.jpeg",
    contain: true,
  },
  {
    id: 3,
    content: <Honda/>,
    className: "col-span-1",
    thumbnail:
    "/manufacturer/honda.png",
  },
  {
    id: 4,
    content: <Ferrari />,
    className: "md:col-span-1",
    thumbnail:
       "/manufacturer/ferrari.png",
  },
  {
    id: 5,
    content: <Audi />,
    className: "md:col-span-1",
    thumbnail:
       "/manufacturer/audi.png",
  },
];
