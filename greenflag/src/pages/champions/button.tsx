"use client";
import React from "react";
import {Tabs} from "../../components/Tabs"

import BlogCard from "@/components/BlogCard";


const  Button = () =>  {
  return (
    <>
    <div className="text-center p-10 ">
          <h1 className="text-5xl  text-white card-font flex flex-wrap justify-center "> Jenson Button</h1>
      </div>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] mt-2 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={jenson} />
      </div>
      </>
  );
}

export default Button;

const jenson  = [
  {
    title: "Karting",
    value: "karting",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/jenson_button/jen00.jpeg",
              ]}
              title="Early life"
              description="Button's karting journey began in 1988 at Clay Pigeon Raceway, receiving a Zip go-kart as a Christmas gift in 1987. He won the British Super Prix at nine and dominated the 1991 British Cadet Kart Championship with 34 wins.utton's achievements included winning the European Super A Championship and the Ayrton Senna Memorial Cup in 1997, establishing himself as a promising talent in karting."/>
           
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
                "/drivers_champions/jenson_button/jen01.avif",
              ]}
              title="Junior Career"
              description="At 18, Button began his single-seater racing career under Paul Lemmens and Harald Huysman's guidance. He won the British Formula Ford Championship in 1998 with nine victories and also triumphed at the Formula Ford Festival. Despite initial hurdles securing a Formula Three seat, Button impressed Serge Saulnier during a test at Magny-Cours, earning a drive in the British Formula 3 International Series in 1999. He won three races and finished third overall, establishing himself as a rising talent in single-seater racing."/>
           
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
                "/drivers_champions/jenson_button/jen02.jpeg",
              ]}
              title="Debut"
              description="Button made history as Britain's youngest Formula One driver, debuting without an FIA Super Licence, which required special dispensation. He scored his first point with a sixth-place finish in Brazil and showcased promising pace against teammate Ralf Schumacher early in the season. Despite a mid-season dip in form and the announcement of Juan Pablo Montoya as his replacement, Williams retained Button's contract. He finished his debut season with a best result of fourth in Germany and eighth in the championship standings."/>
           
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
                "/drivers_champions/jenson_button/jen03.jpeg",
              ]}
              title="2001"
              description="Button joined Benetton alongside Giancarlo Fisichella, just after Renault's acquisition of the team. Despite struggling with an uncompetitive car lacking power steering and horsepower, Button managed a fifth-place finish at the German Grand Prix. His inconsistent performance led to speculation about his future in the team, with team principal Flavio Briatore expressing doubts due to Button's struggle in car setup and a perceived lavish lifestyle."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Renault",
    value: "renault",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/jenson_button/jen04.jpeg",
              ]}
              title="2002"
              description="Rebranded as Renault for 2002, the team paired Button with Jarno Trulli. Button made efforts to enhance his public image, altering his social habits and focusing more on training. Despite outscoring his teammate with stronger race performances, Button was informed by Briatore that Fernando Alonso would replace him for 2003. Button subsequently signed with BAR, impressed by their long-term vision under team principal David Richards, and finished his final season with Renault in seventh place overall."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "BAR",
    value: "bar",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/jenson_button/jen05.jpeg",
              ]}
              title="2003-2005"
              description="In 2003, Button's relationship with teammate Jacques Villeneuve started with tension, exacerbated by an incident in Australia. Despite challenges, Button improved, securing two fourth-place finishes and finishing ninth in the Drivers' Championship with 17 points. In 2004, Button focused on consistency and podiums. Button secured ten podiums, finishing third in the Drivers' Championship and contributing to BAR's second place in the Constructors' Championship."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Honda",
    value: "honda",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/jenson_button/jen06.jpeg",
              ]}
              title="2006-2008"
              description="Following Honda's buyout of BAR and rebranding as Honda, Button partnered with Rubens Barrichello under equal status. In 2006, Button achieved his first victory at the Hungarian Grand Prix and finished the season strongly. In 2007, early-season injuries and aerodynamic issues with the Honda RA107 led to poor results, ending the season 15th in the Drivers' Championship. In 2008, despite rigorous preparation, Button and Barrichello struggled with the uncompetitive RA108, earning only three points. Honda's sudden exit from Formula 1 in December 2008 left Button's future uncertain."/>
           
          </div>
      
      </div>
    ),
  },
  {
    title: "Brawn",
    value: "brawn",
    content: (
      <div className="md:mx-auto container  bg-white">
     
      
        
          <div className="md:mx-auto container  border-full border-2 ">
            <BlogCard
              imageUrls={[
                "/drivers_champions/jenson_button/jen07.jpeg",
              ]}
              title="World Champion "
              description="
Brawn GP emerged in 2009 from Honda's former team, acquired inexpensively. Jenson Button joined despite a pay cut, and the Brawn BGP 001 impressed in pre-season testing with efficient aerodynamics, a Mercedes-Benz V8 engine, and tailored slick tyres. Button dominated with six wins in the first seven races and four poles, aided by a controversial double diffuser. Despite a weaker second half, his early points secured the championship before the season's end. At the Brazilian Grand Prix, starting 14th, Button strategically finished fifth to clinch the title with a race to spare, confirmed by a podium in Abu Dhabi."/>
           
          </div>
      
      </div>
    ),
  },
]