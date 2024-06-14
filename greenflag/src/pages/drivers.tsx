"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Link from "next/link";
import ScrollToTop from "@/components/ui/scroll-to-top";




const teamColors = {
  "Williams": "#005AFF",
  "Mercedes": "#00D2BE",
  "Ferrari": "#DC0000",
  "Red Bull": "#1E41FF",
  "McLaren": "#FF8700",
  "Alpine": "#0090FF",
  "RB": "#4E7C9B",
  "Aston Martin": "#006F62",
  "Stake F1": "#00FF00",
  "Haas": "#FFFFFF",
};


const Drivers = () => {
  return (
    <>
    
    <div className="text-center animate-fade-up p-5">
      
    <ScrollToTop/>
      <h1 className="text-7xl  text-white name-font">Drivers</h1>
    </div>
    <div className=" animate-fade-up  flex flex-wrap justify-center gap-6">


        <CardContainer
         className="inter-var"
        teamColor={teamColors["Williams"]}
        >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Alex Albon
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Willimas 
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/alealb01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="alex_albon" />
            </CardItem>

      
          </CardBody>
        </CardContainer>


        <CardContainer
         className="inter-var"
         teamColor={teamColors["Ferrari"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Carlos Sainz 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Ferrari
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/carsai01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="alex_albon" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer
         className="inter-var"
         teamColor={teamColors["Ferrari"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Charles Leclerc
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Ferrari
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/chalec01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="alex_albon" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer
         className="inter-var"
         teamColor={teamColors["RB"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Daniel Riccardo 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Visa Cash App RB
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/danric01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="alex_albon" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer
         className="inter-var"
         teamColor={teamColors["Alpine"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Esteban Ocon
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Alpine
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/estoco01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="alex_albon" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer
         className="inter-var"
         teamColor={teamColors["Aston Martin"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Fernando Alonso
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Aston Martin
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/feralo01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="alex_albon" />
            </CardItem>
          </CardBody>
        </CardContainer>


        <CardContainer
         className="inter-var"
         teamColor={teamColors["Mercedes"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            George Russell 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Mercedes
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/georus01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="george_russell" />
            </CardItem>
          </CardBody>
        </CardContainer>
    


        <CardContainer
         className="inter-var"
         teamColor={teamColors["Stake F1"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Guanyu Zhou 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Stake F1
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/guazho01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="guanyu_zhou" />
            </CardItem>
          </CardBody>
        </CardContainer>


        <CardContainer
         className="inter-var"
         teamColor={teamColors["Haas"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Kevin Magnussen 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Haas
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/kevmag01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="kevin_magnussen" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer
         className="inter-var"
         teamColor={teamColors["McLaren"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Lando Norris 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Mclaren
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/lannor01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="lando_norris" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer
         className="inter-var"
         teamColor={teamColors["Aston Martin"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Lance Stroll
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Aston Martin
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/lanstr01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="lance_stroll" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer
         className="inter-var"
         teamColor={teamColors["Mercedes"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Lewis Hamilton 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Mercedes
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/lewham01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="lewis_hamilton" />
            </CardItem>
          </CardBody>
        </CardContainer>



        <CardContainer
         className="inter-var"
         teamColor={teamColors["Williams"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Logan Seargent 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Williams 
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/logsar01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="logan_seargent" />
            </CardItem>
          </CardBody>
        </CardContainer>


        <CardContainer
         className="inter-var"
         teamColor={teamColors["Red Bull"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Max Verstappen 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Red Bull
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/maxver01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="max_verstappen" />
            </CardItem>
          </CardBody>
        </CardContainer>



        <CardContainer
         className="inter-var"
         teamColor={teamColors["Haas"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Nico Hulkenburg
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Haas
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/nichul01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="nico_hulkenburg" />
            </CardItem>
          </CardBody>
        </CardContainer>
    



        <CardContainer
         className="inter-var"
         teamColor={teamColors["McLaren"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Oscar Piastri
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Mclaren
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/oscpia01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="oscar_piastri" />
            </CardItem>
          </CardBody>
        </CardContainer>



        <CardContainer
         className="inter-var"
         teamColor={teamColors["Alpine"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Pierre Gasly
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Alpine
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/piegas01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="pierre_gasly" />
            </CardItem>
          </CardBody>
        </CardContainer>


        <CardContainer
         className="inter-var"
         teamColor={teamColors["Red Bull"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Sergio Perez 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Red Bull
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/serper01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="sergio_perez" />
            </CardItem>
          </CardBody>
        </CardContainer>



        <CardContainer
         className="inter-var"
         teamColor={teamColors["Stake F1"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Valtteri Bottas 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Stake F1
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/valbot01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="valtteri_bottas" />
            </CardItem>
          </CardBody>
        </CardContainer>


        <CardContainer
         className="inter-var"
         teamColor={teamColors["RB"]}
         >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
           Yuki Tsunoda 
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Visa Cash App RB
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/current_drivers/yuktsu01.avif"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="yuki_tsunoda" />
            </CardItem>
          </CardBody>
        </CardContainer>
</div>
</>
 )
};
export default Drivers;


