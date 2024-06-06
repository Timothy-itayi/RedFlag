"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/stick-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Karting",
    description:
"Verstappen's racing career began in karts at four, and by seven, he was competing in championships. He swiftly climbed through the ranks, winning various titles including the Mini Junior championship in Belgium. He joined CRG's factory team in 2010, excelling internationally with wins in the KF3 World Cup and WSK World Series. In 2013, at just 15, he made history by winning multiple European and World Championships in karting, becoming the youngest ever to win the KZ World Championship.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
          src="/drivers/m-verstappen/ver00.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Formula 3",
    description:
     "Verstappen transitioned to racing cars in 2013, starting with Formula Renault and Formula 3 tests. In 2014, he debuted in the Florida Winter Series, winning races at Palm Beach International Raceway and Homestead-Miami Speedway. He then joined the FIA European Formula 3 Championship with Van Amersfoort Racing, achieving a record six consecutive victories and a total of ten wins, finishing third overall at the age of 16.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/drivers/m-verstappen/ver01.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Toro Rosso",
    description:
        "In 2014, Verstappen made his Formula One debut with Toro Rosso, becoming the youngest driver in F1 history at 17 years and 166 days. He scored his first points at the Malaysian Grand Prix, breaking another record. Despite a collision in Monaco and a grid penalty, he consistently finished in the points, achieving his best result of the season with a fourth-place finish in Hungary. Verstappen received multiple awards at the end of the season, including Rookie of the Year and Personality of the Year. In 2016, still with Toro Rosso, he had a mixed start to the season, showing both frustration and success, including Toro Rosso's first points at the Bahrain Grand Prix.",

    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
               <Image
          src="/drivers/m-verstappen/ver02.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Red bull",
    description:
        "Verstappen joined Red Bull Racing in 2016, replacing Daniil Kvyat. He made history by winning the Spanish Grand Prix in his debut race, becoming F1's youngest race winner. Despite criticism for his aggressive driving, he consistently delivered strong performances. Tensions with teammates, including Daniel Ricciardo and Pierre Gasly, occasionally arose. Victories in Malaysia and Mexico in 2017, and Austria and Mexico in 2018, highlighted his competitiveness. In 2019, he secured three wins, nine podiums, and two pole positions, solidifying his status as one of F1's brightest talents.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
          src="/drivers/m-verstappen/ver03.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Riegning Champion",
    description:
        "From 2020 to 2023, Max Verstappen's Formula 1 journey was a rollercoaster of triumphs and challenges. In 2020, he showcased his talent with two wins and podium finishes, overcoming setbacks like retirements and controversies. The following year, he engaged in a fierce battle with Lewis Hamilton, ultimately securing his maiden World Drivers' Championship in a thrilling finale. Verstappen continued his dominance in 2022, securing his second championship title with a series of commanding victories and record-breaking performances, solidifying his status as one of Formula 1's modern greats.",

    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
          src="/champions/max.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const  Verstappen = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white font-bold"> Max Verstappen</h1>
      </div>
      <StickyScroll content={content} />
      </>
  );
}

export default Verstappen;
