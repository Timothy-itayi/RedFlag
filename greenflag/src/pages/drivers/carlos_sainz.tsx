import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { teamColors } from "@/components/Tabs";
import Image from 'next/image';
import Detail from "../../components/driver-components/driver-detail";

// Define the driver number for Logan Sargeant
const driverNumber = '55'; // Assuming Logan Sargeant has driver number 2

const Carlos_Sainz = () => {
  return (
    <>
    
      <div className="">
        <div className="w-full max-w-7xl">
          <CardContainer className="inter-var" teamColor={teamColors["Ferrari"]}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Carlos Sainz
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
           Ferrari
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/current_drivers/carsai01.avif" // Make sure to provide the imageUrl
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="carlos"
                />
              </CardItem>
              <div className=" ">
                <CardItem translateZ={20}>
                
                  <Detail
                    driverNumber={driverNumber}
                  />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default Carlos_Sainz;
