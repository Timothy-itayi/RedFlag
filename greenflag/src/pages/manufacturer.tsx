"use client";

import { LayoutGrid } from "../components/ui/layout-grid";

const  Manufacturers = () =>  {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

export default Manufacturers


const Renualt = () => {
  return (
    <div>
       <p className="font-bold text-4xl text-white">Renualt</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Renault, a French automaker, has been in Formula One since 1977 as both a team owner and engine supplier. It introduced the turbo engine and won multiple titles with Williams and Benetton. After rebranding Benetton as Renault in 2000, it won championships in 2005 and 2006. Renault powered Red Bull's victories from 2010 to 2013 and rebranded its team as Alpine in 2021. Renault boasts two constructors' and drivers' titles as a team and 12 constructors' and 11 drivers' titles as an engine supplier.
  </p>
    </div>
  );
};

const Mercedes = () => {
  return (
    <div>
   <p className="font-bold text-4xl text-white">Mercedes</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
      Mercedes-Benz, a German luxury automotive brand, active in Formula One since 1954, owns the Mercedes-AMG Petronas F1 Team. Known as the "Silver Arrows," they won titles in 1954 and 1955. Returning as an engine supplier in 1994, Mercedes found success with McLaren. Rebranding Brawn GP in 2010, Mercedes dominated from 2014 to 2021, winning seven Drivers' and eight Constructors' titles. Mercedes engines have over 200 wins, ranking second in F1 history with ten Constructors' and thirteen Drivers' Championships.


      </p>
    </div>
  );
};
const Honda = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Honda</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
      Honda, a Japanese automaker, has been involved in Formula One since 1964 as both an engine manufacturer and team owner. After winning its first race in 1965, Honda withdrew in 1968. Returning in 1983 as an engine supplier, Honda achieved significant success with Williams and McLaren, winning multiple titles until 1992. After a hiatus, Honda partnered with Red Bull Racing, winning the 2022 title with Max Verstappen. From 2023, Honda supplied power units as Honda RBPT. Plans for a full return in 2026 with Aston Martin have been announced.
      </p>
    </div>
  );
};
const Ferrari = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Ferrari</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
      Scuderia Ferrari, the racing arm of the luxury Italian automaker, is the oldest and most successful Formula One team, competing since 1950. Founded by Enzo Ferrari, it initially raced Alfa Romeo cars before building its own in 1947. Ferrari holds 16 Constructors' Championships and a record 15 Drivers' Championships. Michael Schumacher's five consecutive titles and 72 Grands Prix victories mark the team's most successful era. Their passionate fan base, known as the tifosi, and the Italian Grand Prix at Monza are iconic aspects of the team's heritage.
      </p>
    </div>
  );
};
const Audi = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Audi</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
        German car manufacturer Audi is contracted to compete as a Formula One team and constructor beginning with the 2026 season. Audi F1 Team will be formed through the acquisition of the Sauber Group, with engines developed by Audi Formula Racing GmbH.</p>
      </div>
    );
  };

const cards = [
  {
    id: 1,
    content: <Renualt />,
    className: "md:col-span-1",
    thumbnail:
      "/manufacturer/renault.jpg",
  },
  {
    id: 2,
    content: <Mercedes />,
    className: "col-span-1",
    thumbnail:
       "/manufacturer/mercedes.jpeg",
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
