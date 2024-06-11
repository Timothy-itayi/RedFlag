import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Navbar from "@/components/ui/navbar";


const About = () => {
  return (
    <>
    
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-300 to-slate-500 bg-opacity-50">
          Hi, I'm Timothy Itayi,
          <br /> A Front-end Developer
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          I'm a passionate front-end software developer. I created F1 Museum, a captivating web application that brings the thrilling world of Formula 1 racing to enthusiasts worldwide.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">

        </div>

      </motion.div>
    </LampContainer></>
  );
};
export default About;

