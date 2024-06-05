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
    { src: "/champions/alonso.jpeg", text: "Fernando Alonso", link: "/drivers/alonso" },
    { src: "/champions/ascari.webp", text: "Alberto Ascari", link: "/drivers/ascari" },
    { src: "/champions/Brabham.jpeg", text: "Jack Brabham", link: "/drivers/brabham" },
    { src: "/champions/fangio.jpeg", text: "Juan Manuel Fangio", link: "/drivers/fangio" },
    { src: "/champions/farina.avif", text: "Giuseppe Farina", link: "/drivers/farina" },
    { src: "/champions/fittipaldi.webp", text: "Emerson Fittipaldi", link: "/drivers/fittipaldi" },
    { src: "/champions/graham_hill.jpeg", text: "Graham Hill", link: "/drivers/graham_hill" },
    { src: "/champions/hakkinen.webp", text: "Mika Häkkinen", link: "/drivers/hakkinen" },
    { src: "/champions/hamilton.jpeg", text: "Lewis Hamilton", link: "/drivers/hamilton" },
    { src: "/champions/hawthorn.jpeg", text: "Mike Hawthorn", link: "/drivers/hawthorn" },
    { src: "/champions/hunt.jpeg", text: "James Hunt", link: "/drivers/hunt" },
    { src: "/champions/kimi.jpeg", text: "Kimi Räikkönen", link: "/drivers/kimi" },
    { src: "/champions/lauda.webp", text: "Niki Lauda", link: "/drivers/lauda" },
    { src: "/champions/phil_hill.avif", text: "Phil Hill", link: "/drivers/phil_hill" },
    { src: "/champions/piquet.jpg", text: "Nelson Piquet", link: "/drivers/piquet" },
    { src: "/champions/prost.webp", text: "Alain Prost", link: "/drivers/prost" },
    { src: "/champions/senna.jpg", text: "Ayrton Senna", link: "/drivers/senna" },
    { src: "/champions/shumacher.avif", text: "Michael Schumacher", link: "/drivers/shumacher" },
    { src: "/champions/stewart.jpeg", text: "Jackie Stewart", link: "/drivers/stewart" },
    { src: "/champions/vettel.jpeg", text: "Sebastian Vettel", link: "/drivers/vettel" },
    { src: "/champions/villi.webp", text: "Gilles Villeneuve", link: "/drivers/villi" },
    { src: "/champions/max.jpeg", text: "Max Verstappen", link: "/drivers/max" },
  ];