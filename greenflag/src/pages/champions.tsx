"use client";
import { ParallaxScroll } from "@/components/parallax-scroll";
import Navbar from "@/components/ui/navbar";

const  Champions = () =>  {
     return(
        <>
      
        <div className="text-center animate-fade-up p-10">
        <Navbar />
            <h1 className="text-5xl m-2 text-white card-font"> Wall of  Champions</h1>
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
    { src: "/champions/nico_rosberg.webp", text: "Nico Rosberg", link: "/champions/nico_rosberg" },
    { src: "/champions/kimi.jpeg", text: "Kimi Räikkönen", link: "/champions/raikkonen" },
    { src: "/champions/alonso.jpeg", text: "Fernando Alonso", link: "/champions/alonso" },
    { src: "/champions/mschumacer.jpeg", text: "Michael Schumacher", link: "/champions/schumacher" },
    { src: "/champions/villi.webp", text: "Jacques Villeneuve", link: "/champions/villeneuve" },
    { src: "/champions/hakkinen.webp", text: "Mika Häkkinen", link: "/champions/hakkinen" },
    { src: "/champions/damon_hill.jpeg", text: "Damon Hill", link: "/champions/damon_hill" },
    { src: "/champions/senna.jpg", text: "Ayrton Senna", link: "/champions/senna" },
    { src: "/champions/prost.jpeg", text: "Alain Prost", link: "/champions/prost" },
    { src: "/champions/piquet.jpg", text: "Nelson Piquet", link: "/champions/piquet" },
    { src: "/champions/lauda.webp", text: "Niki Lauda", link: "/champions/lauda" },
    { src: "/champions/hunt.jpeg", text: "James Hunt", link: "/champions/hunt" },
    { src: "/champions/keke.jpeg", text: "Keke Rosberg", link: "/champions/keke_rosberg" },
    { src: "/champions/shcekter.avif", text: "Jody Shcekter", link: "/champions/scheckter" },
    { src: "/champions/andretti.webp", text: "Mario Andretti", link: "/champions/andretti" },
    { src: "/champions/hulme.jpeg", text: "Denise Clive Hulme", link: "/champions/hulme" },
    { src: "/champions/fittipaldi.webp", text: "Emerson Fittipaldi", link: "/champions/fittipaldi" },
    { src: "/champions/stewart.jpeg", text: "Jackie Stewart", link: "/champions/stewart" },
    { src: "/champions/rindt.jpeg", text: "Jochen Rindt", link: "/champions/rindt" },
    { src: "/champions/graham_hill.jpeg", text: "Graham Hill", link: "/champions/graham_hill" },
    { src: "/champions/jones.jpeg", text: "Alan Jones", link: "/champions/jones" },
    { src: "/champions/Brabham.jpeg", text: "Jack Brabham", link: "/champions/brabham" },
    { src: "/champions/phil_hill.avif", text: "Phil Hill", link: "/champions/phil_hill" },
    { src: "/champions/Hawrthon.avif", text: "Mike Hawthorn", link: "/champions/hawthorn" },
    { src: "/champions/fangio.jpeg", text: "Juan Manuel Fangio", link: "/champions/fangio" },
    { src: "/champions/ascari.webp", text: "Alberto Ascari", link: "/champions/ascari" },
    { src: "/champions/farina.avif", text: "Giuseppe Farina", link: "/champions/farina" },
  ];