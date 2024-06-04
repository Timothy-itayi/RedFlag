"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const  About = () =>  {
     return(
        <>
        <div className="text-center">
            <h1 className="text-7xl  text-white font-bold"> About Me</h1>
        </div>
         <ParallaxScroll images={images} />
        </>
       
     )
 
  
  
}
export default About
const images = [
  "/alonso.png",
  "/ausGP.avif",
  "/british.jpeg",
  "/cars.avif",
  "/cockpit.png",
  "/f04.jpeg",
];

