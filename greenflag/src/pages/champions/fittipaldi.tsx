"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Fittipaldi = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Emerson Fittipaldi</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Fittipaldi;

const items  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fittipaldi/fitti00.webp",
              ]}
              title="Early life"
              description="At age 14, Emerson Fittipaldi was already racing motorcycles, and by 16, he was competing in hydroplane races. During one such race, his brother Wilson's boat blew over at 70 mph (110 km/h) and landed upside down. Although Wilson was unharmed, the incident prompted the Fittipaldi brothers to shift their focus exclusively to land vehicle racing .

In 1967, at the age of 20, Fittipaldi won the 6 Hours of Interlagos driving a Volkswagen Karmann Ghia. A year later, he claimed victory at the 12 Hours of Porto Alegre. Transitioning to Formula Vee, the brothers built a company with their parents to support their racing endeavors. In his second season in single-seaters, Emerson won the Brazilian Formula Vee title at age 21."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Junior Career",
    value: "Junior career",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fittipaldi/fitti01.jpeg",
              ]}
              title="Formula 2 and 3"
              description="In 1969, Fittipaldi moved to Europe, determined to prove his talent to team owners within three months. His initial foray into Formula Ford yielded some podium finishes and victories, catching the attention of the Jim Russell Driving School Formula Three team. After training with the team, Fittipaldi secured a position and won nine F3 races in the Jim Russell Lotus 59, clinching the MCD Lombard Championship and becoming the 1969 champion. For 1970, Fittipaldi moved up to F2 by joining the Lotus semi-works Team Bardahl campaigning Lotus 59B. With six finishes in the points and four on the podium, he ended the eight-race season in third place behind Clay Regazzoni and Derek Bell. While this result was very impressive for the newcomer to the series, the spotlight was on Fittipaldi that year because of his activities in Formula One instead." />
          </div>
      
      </div>
    ),
  },
  {
    title: "Team Lotus",
    value: "team lotus",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fittipaldi/fitti02.jpeg",
              ]}
              title="Formula 1 Debut"
              description="Team Lotus enjoyed a strong reputation as one of the top Formula One teams, bolstered by substantial sponsorship money. Colin Chapman, the team's innovative and influential manager, decided to use the third seat in championship races as a testing ground for younger drivers, a departure from the tradition of using non-championship F1 events for this purpose. The third seat was initially given to Alex Soler-Roig. However, starting with the British Grand Prix in July, this seat was awarded to Emerson Fittipaldi, joining regular drivers Jochen Rindt and John Miles. Fittipaldi quickly made an impact, scoring a fourth-place finish as the No. 3 driver at the next German Grand Prix. In that race, Jochen Rindt won as the No. 1 driver, while John Miles, the No. 2 driver, retired. This performance solidified Fittipaldi's position as a promising talent within the Lotus team." />
          </div>
      
      </div>
    ),
  },
  {
    title: " World Champion",
    value: " world champion",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fittipaldi/fitti03.jpeg",
              ]}
              title="Lead Driver"
              description="Team Lotus's plans for the 1970 season were drastically altered following the tragic death of Jochen Rindt at Monza in September. Rindt's fatal accident resulted in him becoming the only driver in Formula One history to win the championship posthumously. John Miles also left the team, which led to Emerson Fittipaldi being promoted to Lotus's No. 1 driver for his fifth F1 race at the United States Grand Prix, with Reine Wisell and Pete Lovely as his teammates. Fittipaldi finished sixth in the Drivers' Championship as the team continued to develop the previous season's Lotus 72. The following year, armed with the Lotus 72D, widely regarded as one of the greatest Formula One designs of all time, Fittipaldi was dominant. He won five of the 11 races in 1972, securing the F1 Drivers' Championship and cementing his status as one of the sport's elite drivers." />
          </div>
      
      </div>
    ),
  },
  {
    title: "Mclaren Magic",
    value: "mclaren magic",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/fittipaldi/fitti04.jpeg",
              ]}
              title="Double World Champion"
              description=" At 25, he was then the youngest champion in F1 history. It appeared he might do it again in 1973. After three wins in four attempts with the 72D, he began to struggle in the new 72E that was unveiled mid-year. It resulted in the reverse of the previous year, with Stewart beating Fittipaldi for the Drivers' Championship. Fittipaldi left Lotus to sign with the promising McLaren team. Driving the highly efficient McLaren M23, he had three victories in 1974, reached the podium four other times, and beat out Clay Regazzoni in a close battle for his second championship. The following season, he notched two more victories and four other podiums, but was second to a dominant Niki Lauda." />
          </div>
      
      </div>
    ),
  },
]