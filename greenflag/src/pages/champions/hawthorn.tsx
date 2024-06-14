"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Hawthorn = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center ">Mike Hawthorn</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={items} />
      </div>
      </>
  );
}

export default Hawthorn;

const items = [
  {
    title: "Early Life",
    value: "Early Life",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hawthorn/haw00.jpg",
              ]}
              title="Racing Royalty"
              description="Mike Hawthorn was born in Mexborough, West Riding of Yorkshire, England, to Leslie and Winifred (née Symonds) Hawthorn. He received his education at Ardingly College in West Sussex and later pursued studies at Chelsea Technical College. Hawthorn also completed an apprenticeship with a commercial vehicle manufacturer.

His father, Leslie Hawthorn, owned the Tourist Trophy Garage located in Farnham. The garage was franchised to supply and service several high-performance brands, including Jaguar and Ferrari. Leslie Hawthorn was also involved in motorcycle racing and played a significant role in supporting Mike's early racing career. Tragically, Leslie Hawthorn passed away in a road accident in 1954. Following his father's death, Mike Hawthorn inherited the family business."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Junior Career",
    value: "junior career",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hawthorn/haw01.jpg",
              ]}
              title="Single Seater"
              description="Mike Hawthorn made his competition debut on 2 September 1950 in his 1934 Riley Ulster Imp, KV 9475, winning the 1,100 cc sports car class at the Brighton Speed Trials. In 1951, driving a 1+1⁄2-litre T.T. Riley, he entered the Motor Sport Brooklands Memorial Trophy, a season-long contest run at Goodwood, winning it by one point. He also secured victories in the Ulster Trophy Handicap at Dundrod and the Leinster Trophy at Wicklow that year.

By 1952, Hawthorn had transitioned to single-seaters and during that season won his first race in a Formula Two Cooper-Bristol T20 at Goodwood."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Formula 1",
    value: "Formula 1",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hawthorn/haw02.avif",
              ]}
              title="Debut"
              description="He made his Formula One debut at the 1952 Grote Prijs van Belgie on the legendary Circuit de Spa-Francorchamps, finishing in fourth place. By the end of the season, he had already secured his first podium, with a third place at the RAC British Grand Prix and a brace of fourths driving a Cooper.

In 1953, at Scuderia Ferrari, Hawthorn immediately showed his worth with victory, at his ninth attempt, in the French Grand Prix at Reims, outmaneuvering Juan Manuel Fangio in what became dubbed 'the race of the century' with the top four drivers finishing within five seconds of each other after 60 laps. This, along with two other podium finishes, helped him end the season fourth overall. He also won the BRDC International Trophy and the Ulster Trophy, as well as the 24 Heures de Spa Francorchamps with Ferrari teammate Giuseppe Farina."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "BRM",
    value: "brm",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/hawthorn/haw03.jpg",
              ]}
              title="Tough Times"
              description="A change of team for 1956 – this time to BRM - was a failure, and Hawthorn's only podium came in Argentina where the non-appearance of his BRM allowed him to guest drive a Maserati 250F. However, when it appeared, usually only in British races, the new 2.5 BRM was very fast while it lasted, and Hawthorn held off Fangio, leading the first 25 laps at Silverstone in the British GP. He retired the car before half distance owing to deteriorating handling and brakes. Deeply unhappy with the BRM team's management and car preparation, Hawthorn walked out of the team at this point. Hawthorn had left Ferrari because driving for the British Jaguar sports car team was his first priority."/>
           
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
                "/drivers_champions/hawthorn/haw04.webp",
              ]}
              title="Back to Form"
              description="Hawthorn rejoined the Ferrari factory team in 1957, and soon became friends with Peter Collins, a fellow Englishman and Ferrari team driver. During the 1957 and 1958 racing seasons, the two Englishmen became engaged in a fierce rivalry with Luigi Musso, another Ferrari driver, for prize money. Hawthorn won the 1958 Formula One Championship despite achieving only one win, against four by Moss. Hawthorn's total of just one win in his title winning season means that Hawthorn currently jointly holds the Formula One record for the fewest number of Grand Prix wins by an eventual drivers' champion during a title winning season along with Keke Rosberg (who also scored one win in his subsequent 1982 title winning season).

"/>
           
          </div>
      
      </div>
    ),
  },

]