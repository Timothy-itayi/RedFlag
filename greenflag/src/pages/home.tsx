import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Home = () => {
  const products = [
    {
      title: "Moonbeam",
      link: "/cars",
      thumbnail: "/cockpit.png",
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
