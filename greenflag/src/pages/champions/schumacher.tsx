"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Schumacher = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center "> Micheal Schumacher</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Schumacher;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic00.webp",
              ]}
              title="Early life"
              description="Michael Schumacher was born on January 3, 1969, in Hürth, North Rhine-Westphalia, to working-class parents Rolf and Elisabeth Schumacher. His father modified his pedal kart with a motorcycle engine when he was four, leading to Schumacher becoming the youngest member of the local karting club. By age six, he won his first club championship. To support his racing, his father took on extra work, and his mother worked at the kart track's canteen. Despite financial constraints, local businessmen helped him continue racing. Unable to obtain a German kart license until age 14, Schumacher got a license in Luxembourg at 12. He won the German Junior Kart Championship in 1984, obtained his German license in 1983, and by 1987, was the German and European kart champion."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 3",
    value: "formula 3",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic01.jpeg",
              ]}
              title="Junior Career"
              description="In 1989, Michael Schumacher joined Willi Weber's WTS Formula Three team and won the 1990 German Formula Three Championship, funded by Weber. He controversially won the 1990 Macau Grand Prix after colliding with Mika Häkkinen, driving without a rear wing and giving the prize money to settle family debts. Simultaneously, Schumacher joined the Mercedes-Benz junior racing program in the World Sportscar Championship. He secured victories in 1990 and 1991 with Sauber–Mercedes at venues like Autódromo Hermanos Rodríguez and Autopolis, finishing fifth and ninth respectively in the Drivers' Championship. Schumacher also achieved a fifth-place finish at the 1991 24 Hours of Le Mans and a second-place result in the 1991 Japanese Formula 3000 Championship."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1",
    value: "formula 1",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic02.jpeg",
              ]}
              title="Debut"
              description="Schumacher debuted in Formula One with the Jordan-Ford team at the Belgian Grand Prix, replacing the imprisoned Bertrand Gachot with car number 32. Despite being a Mercedes driver, Schumacher was signed by Eddie Jordan after Mercedes paid Jordan $150,000 for the opportunity. Before the race, he impressed team personnel during a test at Silverstone, although he had only seen the Spa-Francorchamps circuit as a spectator. In his debut qualifying, he amazed by securing seventh place in the midfield Jordan 191 car, matching the team's best grid position of the season and outqualifying de Cesaris. Despite the promising start, Schumacher retired on the first lap of the race due to clutch problems."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Benetton",
    value: "benetton",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic03.webp",
              ]}
              title="Rising Star"
              description="Following his Belgian Grand Prix debut, despite an initial agreement between Jordan and Schumacher's Mercedes management for him to race the season with Jordan, Schumacher signed with Benetton-Ford for the subsequent race. Jordan sought a British court injunction to block Schumacher's move, but their case failed due to the absence of a finalized contract. 

From 1991 to 1993, Schumacher began his tenure with Benetton by earning four points in six races during his debut season. He achieved his best result with a fifth-place finish at the Italian Grand Prix, outperforming his teammate and three-time World Champion Nelson Piquet. Throughout the season, Schumacher outqualified Piquet on multiple occasions and narrowly trailed him in points during their time as teammates."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "World Champion",
    value: "world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic04.jpeg",
              ]}
              title="First Championship"
              description="Schumacher clinched his first Drivers' Championship in 1994 with the Benetton B194, considered one of the most challenging cars to drive in Formula One history. Despite the car's difficulties and three different teammates (JJ Lehto, Jos Verstappen, and Johnny Herbert) due to crashes, Schumacher dominated the season with eight wins. He won six of the first seven races, notably lapping the entire field at the Brazilian Grand Prix. At the Spanish Grand Prix, despite a gearbox failure that left him stuck in fifth gear, Schumacher made two pit stops without stalling and finished second, a performance hailed by Benetton boss Flavio Briatore as one of the best he had witnessed."/> 
          </div>
      
      </div>
    ),
  },
  {
    title: "Back to Back",
    value: "back to back ",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic05.jpg",
              ]}
              title="Second Championship"
              description="In 1995, Schumacher defended his title with Benetton, now powered by the Renault engine also used by Williams. Despite Williams having the faster car, Benetton's superior team strategy helped Schumacher accumulate 33 points more than Damon Hill, securing both the Drivers' and Constructors' Championships. Schumacher won 9 out of 17 races, including memorable victories at the European and French Grands Prix. His season was marked by intense battles with Hill, including collisions at the British and Italian Grands Prix. Notably, Schumacher's spectacular charge at the European Grand Prix saw him overcome a half-minute deficit in the final laps to claim victory. "/> 
          </div>
      
      </div>
    ),
  },
  {
    title: "Ferrari",
    value: "ferrari ",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic06.jpeg",
              ]}
              title="Red Devil"
              description="In 1996, Schumacher made a high-profile move to Ferrari, signing a lucrative $60 million contract for two years. He left Benetton a year early, citing their actions in 1994 as his reason for departing. Schumacher's arrival at Ferrari marked a significant turning point for the team, which had last won a Drivers' Championship in 1979 and a Constructors' Championship in 1983. A year later, he successfully recruited key Benetton personnel Rory Byrne and Ross Brawn to join Ferrari. Despite Ferrari's recent struggles and the team's reputation for underperforming with cars labeled as trucks or pigs. Schumacher expressed confidence in the Ferrari F310's potential to compete for championships, although teammate Eddie Irvine criticized the car as almost undriveable. "/> 
          </div>
      
      </div>
    ),
  },
  {
    title: "Michael's Dominance",
    value: "michael's dominance",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/schumacher/mic07.jpeg",
              ]}
              title="Five Years of Ferrari Glory in Formula One"
              description="From 2000 to 2004, Michael Schumacher's era at Ferrari saw unprecedented dominance in Formula One, winning five consecutive World Championships. He secured his third title in 2000 with poignant victories, including equalling Ayrton Senna's win record at the Italian Grand Prix and clinching the championship in Japan. Over the following years, Schumacher continued to assert his supremacy with Ferrari, winning multiple races each season, overcoming challenges and controversies, and culminating in his seventh and final Drivers' Championship in 2004 with a record-breaking 13 wins. His achievements during this period solidified his legacy as one of the sport's greatest drivers. "/> 
          </div>
      
      </div>
    ),
  },
]