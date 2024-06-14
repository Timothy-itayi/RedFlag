import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";


const Home = () => {
  const products = [
    {
      title: "Drivers Standings",
      link: "/drivers-standings",
      thumbnail: "/homeImages/driver.jpeg",
    },
    {
      title: "Manufacturers",
      link: "/manufacturers",
      thumbnail: "/homeImages/manufactur.jpeg",
    },
    {
      title: "Iconic Cars",
      link: "/iconic-cars",
      thumbnail: "/homeImages/iconic-cars.jpeg",
    },
  
    {
      title: "Teams",
      link: "/teams",
      thumbnail: "/homeImages/teams.png",
    },
    {
      title: " Wall of Champions",
      link: "/champions",
      thumbnail: "/homeImages/f1_drivers_trophy.png",
    },
    {
      title: "Circuits",
      link: "/circuits",
      thumbnail: "/homeImages/tracks.jpeg",
    },
    {
      title: "Grandprix History ",
      link: "https://grand-prix-history.vercel.app/",
      thumbnail: "/homeImages/gp-history-logo.png",
    },
   
    {
      title: "About Me",
      link: "/about",
      thumbnail: "/homeImages/aboutme.jpeg",
    },
  
  
  ];

  return (
    <>
    <div className="animate-fade-up  ">
    <HeroParallax products={products} />

    

      <footer className="text-center name-font  bg-black">
        <p className="text-white">
          &copy; {new Date().getFullYear()}  Formula 1 Heritage. All rights reserved.
        </p>
      </footer>
    </div>
    
    </>
  );
};

export default Home;
