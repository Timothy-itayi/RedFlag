"use client";
import { ParallaxScroll } from "@/components/parallax-scroll";

const  Champions = () =>  {
     return(
        <>
        <div className="text-center">
            <h1 className="text-7xl  text-white font-bold"> Iconic Champions</h1>
        </div>
         <ParallaxScroll images={images} />
        </>
       
     )
 
  
  
}
export default Champions
const images = [
"/champions/alonso.jpeg",
"/champions/ascari.webp",
"/champions/Brabham.jpeg",
"/champions/fangio.jpeg",
"/champions/farina.avif",
"/champions/fittipaldi.webp",
"/champions/graham_hill.jpeg",
"/champions/hakkinen.webp",
"/champions/hamilton.jpeg",
"/champions/hawthorn.jpeg",
"/champions/hunt.jpeg",
"/champions/kimi.jpeg",
"/champions/lauda.webp",
"/champions/phil_hill.avif",
"/champions/piquet.jpg",
"/champions/prost.webp",
"/champions/senna.jpg",
"/champions/shumacher.avif",
"/champions/stewart.jpeg",
"/champions/vettel.jpeg",
"/champions/villi.webp",

];

