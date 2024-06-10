import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Tabs } from "@/components/Tabs";

const Home = () => {
  const products = [
    {
      title: "Manufacturers",
      link: "/manufacturers",
      thumbnail: "/homeImages/manufactur.jpeg",
    },
    {
      title: "Drivers",
      link: "/drivers",
      thumbnail: "/homeImages/driver.jpeg",
    },
  
    {
      title: "Teams",
      link: "/teams",
      thumbnail: "/homeImages/team.webp",
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
      title: "About ",
      link: "/about",
      thumbnail: "/homeImages/IMG_3154.JPG",
    },
  
  
  ];

  return (
    <>
    <div className="animate-fade-up  ">
    <HeroParallax products={products} />

    

      <footer className="text-center name-font bg-gray-800">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Green Flag. All rights reserved.
        </p>
      </footer>
    </div>
    
    </>
  );
};

export default Home;
