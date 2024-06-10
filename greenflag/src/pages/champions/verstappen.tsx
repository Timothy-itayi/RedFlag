"use client";
import React from "react";
import BlogCard from '../../components/BlogCard'
import Image from "next/image";
import { Tabs } from "../../components/Tabs";


const  Verstappen = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-7xl  text-white flex flex-wrap justify-center  card-font"> Max Verstappen</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">

      <Tabs tabs={ max} />
      </div>
      </>
  );
}

export default Verstappen;


const max  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/verstappen/ver00.jpeg",
              ]}
              title="Early life"
              description="Verstappen's racing career began in karts at four, and by seven, he was competing in championships. He swiftly climbed through the ranks, winning various titles including the Mini Junior championship in Belgium. He joined CRG's factory team in 2010, excelling internationally with wins in the KF3 World Cup and WSK World Series. In 2013, at just 15, he made history by winning multiple European and World Championships in karting, becoming the youngest ever to win the KZ World Championship."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formual 3",
    value: "formula 3",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/verstappen/ver01.webp",
              ]}
              title="Junior Career"
              description="Verstappen transitioned to racing cars in 2013, starting with Formula Renault and Formula 3 tests. In 2014, he debuted in the Florida Winter Series, winning races at Palm Beach International Raceway and Homestead-Miami Speedway. He then joined the FIA European Formula 3 Championship with Van Amersfoort Racing, achieving a record six consecutive victories and a total of ten wins, finishing third overall at the age of 16." />
          </div>
      
      </div>
    ),
  },
  {
    title: "Formual 1",
    value: "formula 1",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/verstappen/ver02.avif",
              ]}
              title="Rookie Debut"
              description="In 2014, Max Verstappen made his first appearance in Formula One with Toro Rosso during the free practice for the Japanese Grand Prix, becoming the youngest driver to participate in a Formula One Grand Prix weekend at just 17 years and 3 days. However, his actual race debut was at the Australian Grand Prix in 2015. Despite challenges, he impressed with his first points in the Malaysian Grand Prix and a standout fourth-place finish in the Hungarian Grand Prix, earning him accolades like Rookie of the Year at the FIA Prize Giving Ceremony." />
          </div>
      
      </div>
    ),
  },
  {
    title: "Raging bull",
    value: "raging bull",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/verstappen/ver03.jpeg",
              ]}
              title="Torro Rosso Turmoil"
              description="Max Verstappen’s early 2016 stint at Toro Rosso was marked by significant events. Racing alongside teammate Carlos Sainz, both drivers were competitive. Verstappen started the season with a tenth-place finish in Australia. He then achieved a commendable sixth-place finish in Bahrain, contributing to Toro Rosso’s points tally. Mid-season, Verstappen made headlines by moving up to Red Bull Racing, replacing Daniil Kvyat. This marked a pivotal moment in his Formula 1 journey." />
          </div>
      
      </div>
    ),
  },

  {
    title: "Rising Bull  ",
    value: "rising bull",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/cockpit.png",
              ]}
              title="Race Winner"
              description="After leaving the Red Bull junior team midway through the 2016 season, Verstappen immediately made headlines by winning the Spanish Grand Prix in his debut race, setting the record as F1's youngest race winner. Despite facing criticism for his aggressive driving style, Verstappen consistently delivered strong performances, securing victories in Malaysia and Mexico in 2017, showcasing his potential and competitiveness." />
          </div>
      
      </div>
    ),
  },

  {
    title: "Reigning Champion  ",
    value: "reigning champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/champions/max.jpeg",
              ]}
              title="Race Winner"
              description="From 2020 to 2023, Max Verstappen's Formula 1 journey was a rollercoaster of triumphs and challenges. In 2020, he showcased his talent with two wins and podium finishes, overcoming setbacks like retirements and controversies. The following year, he engaged in a fierce battle with Lewis Hamilton, ultimately securing his maiden World Drivers' Championship in a thrilling finale. Verstappen continued his dominance in 2022, securing his second championship title with a series of commanding victories and record-breaking performances, solidifying his status as one of Formula 1's modern greats." />
          </div>
      
      </div>
    ),
  },
]

