"use client";
import { ParallaxScroll } from "@/components/parallax-scroll";

const  Champions = () =>  {
     return(
        <>
        <div className="text-center p-10">
            <h1 className="text-7xl  text-white name-font"> Iconic Champions</h1>
        </div>
         <ParallaxScroll imagesWithText={imagesWithText} />
        </>
       
     )
 
  
  
}
export default Champions
const imagesWithText = [
    { src: "/champions/max.jpeg", text: "Max Verstappen", link: "/champions/verstappen" },
    { src: "/champions/hamilton.jpeg", text: "Lewis Hamilton", link: "/champions/hamilton" },
    { src: "/champions/button.jpeg", text: "Jenson Button", link: "/champions/button" },
    { src: "/champions/vettel.jpeg", text: "Sebastian Vettel", link: "/champions/vettel" },
    { src: "/champions/kimi.jpeg", text: "Kimi Räikkönen", link: "/champions/raikkonen" },
    { src: "/champions/alonso.jpeg", text: "Fernando Alonso", link: "/champions/alonso" },
    { src: "/champions/mschumacer.jpeg", text: "Michael Schumacher", link: "/champions/schumacher" },
    { src: "/champions/hakkinen.webp", text: "Mika Häkkinen", link: "/champions/hakkinen" },
    { src: "/champions/damon_hill.jpeg", text: "Damon Hill", link: "/champions/damon_hill" },
    { src: "/champions/senna.jpg", text: "Ayrton Senna", link: "/champions/senna" },
    { src: "/champions/prost.jpeg", text: "Alain Prost", link: "/champions/prost" },
    { src: "/champions/piquet.jpg", text: "Nelson Piquet", link: "/champions/piquet" },
    { src: "/champions/lauda.webp", text: "Niki Lauda", link: "/champions/lauda" },
    { src: "/champions/hunt.jpeg", text: "James Hunt", link: "/champions/hunt" },
    { src: "/champions/fittipaldi.webp", text: "Emerson Fittipaldi", link: "/champions/fittipaldi" },
    { src: "/champions/stewart.jpeg", text: "Jackie Stewart", link: "/champions/stewart" },
    { src: "/champions/rindt.jpeg", text: "Jochen Rindt", link: "/champions/rindt" },
    { src: "/champions/graham_hill.jpeg", text: "Graham Hill", link: "/champions/graham_hill" },
    { src: "/champions/Brabham.jpeg", text: "Jack Brabham", link: "/champions/brabham" },
    { src: "/champions/phil_hill.avif", text: "Phil Hill", link: "/champions/phil_hill" },
    { src: "/champions/Hawrthon.avif", text: "Mike Hawthorn", link: "/champions/hawthorn" },
    { src: "/champions/fangio.jpeg", text: "Juan Manuel Fangio", link: "/champions/fangio" },
    { src: "/champions/ascari.webp", text: "Alberto Ascari", link: "/champions/ascari" },
    { src: "/champions/farina.avif", text: "Giuseppe Farina", link: "/champions/farina" },
  ];