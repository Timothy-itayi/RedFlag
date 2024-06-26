"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Link from "next/link"
import Navbar from "@/components/ui/navbar";
const Circuits = () => {
  return (
    <>
    <div className="text-center animate-fade-up p-5">
      <Navbar/>
      <h1 className="text-5xl  text-white card-font"> Circuits </h1>
    </div>
      <div className="flex justify-center">
        <ScrollToTop/>
    <div className="flex flex-wrap justify-center animate-fade-up gap-6">

    <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Bahrain International Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Bahrain
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/Bahrain-circuit.png"
             
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Bahrain International Circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/bahrain"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Jeddah Corniche Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Saudi Arabia
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/JeddahCircuit.png"
               
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="jeddah circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/saudi-arabia"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>
  

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Albert Park Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Australia
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/AusGp.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Albert Park circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/australia"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Suzuka Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            Japan
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/JapaneseGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="suzuka circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/japan"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Shanghai International Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              China
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/ChinaGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Shanghai International Circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/china"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Miami International Autodrome
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Miami
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/MiamiGp.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Miami International Autodrome" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/miami"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Autodromo Dino Ferrari 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Italy
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/imola.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Autodromo Dino Ferrarit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/imola"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Circuit de Monaco - Monte Carlo
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Monaco
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/MonacoGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Circuit de Monaco - Monte Carlo" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/monaco"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Circuit Gilles Villeneuve
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Canada
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/CanadianGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Circuit Gilles Villeneuve" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/canada"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Circuit de Barcelona-Catalunya
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            Spain
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/SpanishGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Circuit de Barcelona-Catalunya" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/spain"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
               Red Bull Ring
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Austria
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/AustrianGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Red Bull Ring" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/austria"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Silverstone
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Britain
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/BritishGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Silverstone" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/british"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Hungaroring
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hungary
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/Hungaroring.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Hungaroring" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/hungary"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Circuit de Spa-Francorchamps
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Belgium
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/BelgiumGp.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Circuit de Spa-Francorchamps" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/belgium"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Zandvoort
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            Netherlands
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/DutchGp.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Zandvoort" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/dutch"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Autodromo Nazionale Monza
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            Italy
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/ItalianGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Monza" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/monza"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>







        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Baku City Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Azerbaijan
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/BakuGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="baku city circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/azerbaijan"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
               Marina Bay Street Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            Singapore
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/Singapore-GP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="marina bay street circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/singapore"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>
    



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              The Circuits of the Americas
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             United States
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/COTA.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="The Circuits of the Americas" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/cota"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Autódromo Hermanos Rodríguez
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Mexico
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/MexicoGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Autódromo Hermanos Rodríguez" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/mexico"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>




        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Interlagos
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Brazil
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/brazil.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="interlagos" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/brazil"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>

     


      
      

   


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
               Las Vegas Strip Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Las Vegas
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/Las-Vegas-GP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Las Vegas Strip Circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/las-vegas"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>

      
   


        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Lusail International Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Qatar
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/QatarGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="lusail international circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/qatar"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>

  



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             Yas Marina Circuit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Abu Dhabi
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/tracks/AbuDhabiGP.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Abu Dhabi circuit" />
            </CardItem>
            <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="/circuits/abu-dhabi"
            
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            learn more →
          </CardItem>
       
        </div>
          </CardBody>
        </CardContainer>

      </div>
      </div>
      </>
  );
}

export default Circuits;
