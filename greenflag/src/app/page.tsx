import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Home = () => {
  const products = [
    {
      title: "Cars",
      link: "/cars",
      thumbnail: "/cars.avif",
    },
    {
      title: "Drivers",
      link: "/drivers",
      thumbnail: "/helmet.png",
    },
  
    {
      title: "Teams",
      link: "/teams",
      thumbnail: "/photo-output.jpg",
    },
    {
      title: " Champions",
      link: "/champions",
      thumbnail: "/champ.jpg",
    },
    {
      title: "Tracks",
      link: "/tracks",
      thumbnail: "/tracks.jpeg",
    },
    {
      title: "About ",
      link: "/about",
      thumbnail: "/IMG_3154.JPG",
    },
    
  
  ];

  return (
    <>
      <HeroParallax products={products} />
      <footer className="text-center bg-gray-800">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Green Flag. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
