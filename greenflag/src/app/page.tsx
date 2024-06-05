import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

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
      thumbnail: "/homeImages/champ.jpg",
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
