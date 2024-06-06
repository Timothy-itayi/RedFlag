import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Tabs } from "@/components/Tabs";

const Home = () => {
  const products = [
    {
      title: "Manufacturer",
      link: "/manufacturer",
      thumbnail: "/homeImages/cars.avif",
    },
    {
      title: "Drivers",
      link: "/drivers",
      thumbnail: "/homeImages/helmet.png",
    },
  
    {
      title: "Teams",
      link: "/teams",
      thumbnail: "/homeImages/teams.jpg",
    },
    {
      title: " Champions",
      link: "/champions",
      thumbnail: "/homeImages/f1_drivers_trophy.png",
    },
    {
      title: "Tracks",
      link: "/tracks",
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
    <div className="animate-fade-up mb-10 ">
    <HeroParallax products={products} />

    

      <footer className="text-center bg-gray-800">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Green Flag. All rights reserved.
        </p>
      </footer>
    </div>
    
    </>
  );
};

export default Home;
