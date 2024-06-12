import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { cn } from "../../utils/cn";


const About = () => {
  return (
    <>
  
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 500 }}
        whileInView={{ opacity: 1, y: 200 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="p-4 max-w-7xl mx-auto  relative z-10 w-full pt-20 md:pt-0"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-300 to-slate-500 bg-opacity-50">
          Hi, I'm Timothy Itayi,
          <br /> A Front-end Developer
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        As a motorsport fan, I wanted to challenge myself and create a website for people to explore and learn about Formula 1. After initially creating GrandPrix History, I developed F1 Heritage, a captivating web application that brings the thrilling world of Formula 1 racing to enthusiasts worldwide in more depth. I hope you have enjoyed your stay! If you want to get in touch, feel free to send me an email or to view my portfolio.</p>
     
        <div className="flex flex-row items-center justify-center mt-8 mb-10 w-full">
            <div className="flex justify-between space-x-4">
              <a
                className={cn(
                  "py-2 px-4 rounded-full text-white items-center justify-center",
                  "rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]",
                  "bg-[length:200%_100%] font-medium text-slate-400 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                  "animate-shimmer text-white"
                )}
                href="mailto:timmytam10@gmail.com"
              >
                Get in touch 
              </a>
              <a
                className={cn(
                  "py-2 px-4 rounded-full text-white items-center justify-center",
                  "rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]",
                  "bg-[length:200%_100%] font-medium text-slate-400 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                  "animate-shimmer text-white"
                )}
                href="https://timothyitayi.com/"
              >
                timothyitayi.com
              </a>
            </div>
        </div>

      </motion.div>
    </LampContainer></>
  );
};
export default About;
