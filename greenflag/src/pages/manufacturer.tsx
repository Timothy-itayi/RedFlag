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


const Lotus = () => {
  return (
    <div>
       <p className="font-bold text-4xl text-white">Lotus</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Seventy-five races and 20 wins does not sound that impressive in the present company. But the Lotus 72 has an ace up its sleeve. It won three Constructors’ Championships and two Drivers’ Championships in six seasons of racing and its 20 victories are spread out over five seasons, not just one. The Lotus 72 is a special racing car.
      </p>
    </div>
  );
};

const Mclaren = () => {
  return (
    <div>
   <p className="font-bold text-4xl text-white">Mclaren</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The McLaren MP4/4 is statistically for now at least the best F1 car of all time. In the 1988 F1 season, in the hands of Alain Prost and Ayrton Senna, the MP4/4 won 15 of the 16 races, only missing out on the complete set at the Italian Grand Prix thanks to Senna's famous collision with Jean-Louis Schlesser. Just one month after Enzo Ferrari died, even McLaren had to feel OK with losing that one win to Ferrari.


      </p>
    </div>
  );
};
const Redbull = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Redbull</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const Ferrari = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Ferrari</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <Lotus />,
    className: "md:col-span-2",
    thumbnail:
      "/manufactureLogos/lotus_logo.png",
  },
  {
    id: 2,
    content: <Mclaren />,
    className: "col-span-1",
    thumbnail:
       "/manufactureLogos/macleran_logo.jpeg",
  },
  {
    id: 3,
    content: <Redbull />,
    className: "col-span-1",
    thumbnail:
      "/manufactureLogos/redbull_logo.png",
  },
  {
    id: 4,
    content: <Ferrari />,
    className: "md:col-span-2",
    thumbnail:
       "/manufactureLogos/ferrari_logo.png",
  },
];
