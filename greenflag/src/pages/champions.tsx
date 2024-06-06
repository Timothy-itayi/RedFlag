"use client";
import { ParallaxScroll } from "@/components/parallax-scroll";

const  Champions = () =>  {
     return(
        <>
        <div className="text-center">
            <h1 className="text-7xl  text-white font-bold"> Iconic Champions</h1>
        </div>
         <ParallaxScroll imagesWithText={imagesWithText} />
        </>
       
     )
 
  
  
}
export default Champions
const imagesWithText = [
    { src: "/champions/max.jpeg", text: "Max Verstappen", link: "/drivers/max" },
    { src: "/champions/hamilton.jpeg", text: "Lewis Hamilton", link: "/drivers/hamilton" },
    { src: "/champions/button.jpeg", text: "Jenson Button", link: "/drivers/button" },
    { src: "/champions/vetel.jpeg", text: "Sebastian Vettel", link: "/drivers/vettel" },
    { src: "/champions/kimi.jpeg", text: "Kimi Räikkönen", link: "/drivers/kimi" },
    { src: "/champions/alonso.jpeg", text: "Fernando Alonso", link: "/drivers/alonso" },
    { src: "/champions/shumacher.avif", text: "Michael Schumacher", link: "/drivers/schumacher" },
    { src: "/champions/hakkinen.webp", text: "Mika Häkkinen", link: "/drivers/hakkinen" },
    { src: "/champions/damon_hill.jpeg", text: "Damon Hill", link: "/drivers/damon_hill" },
    { src: "/champions/senna.jpg", text: "Ayrton Senna", link: "/drivers/senna" },
    { src: "/champions/prost.webp", text: "Alain Prost", link: "/drivers/prost" },
    { src: "/champions/piquet.jpg", text: "Nelson Piquet", link: "/drivers/piquet" },
    { src: "/champions/lauda.webp", text: "Niki Lauda", link: "/drivers/lauda" },
    { src: "/champions/hunt.jpeg", text: "James Hunt", link: "/drivers/hunt" },
    { src: "/champions/fittipaldi.webp", text: "Emerson Fittipaldi", link: "/drivers/fittipaldi" },
    { src: "/champions/stewart.jpeg", text: "Jackie Stewart", link: "/drivers/stewart" },
    { src: "/champions/rindt.jpeg", text: "Jochen Rindt", link: "/drivers/rindt" },
    { src: "/champions/graham_hill.jpeg", text: "Graham Hill", link: "/drivers/graham_hill" },
    { src: "/champions/Brabham.jpeg", text: "Jack Brabham", link: "/drivers/brabham" },
    { src: "/champions/phil_hill.avif", text: "Phil Hill", link: "/drivers/phil_hill" },
    { src: "/champions/Hawrthon.avif", text: "Mike Hawthorn", link: "/drivers/hawthorn" },
    { src: "/champions/fangio.jpeg", text: "Juan Manuel Fangio", link: "/drivers/fangio" },
    { src: "/champions/ascari.webp", text: "Alberto Ascari", link: "/drivers/ascari" },
    { src: "/champions/farina.avif", text: "Giuseppe Farina", link: "/drivers/farina" },
  ];