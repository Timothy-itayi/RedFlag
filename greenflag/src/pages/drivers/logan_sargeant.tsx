import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { teamColors } from "@/components/Tabs";
import Image from 'next/image';
import Detail from "../../components/driver-components/driver-detail";

// Define the driver number for Logan Sargeant
const driverNumber = '2'; // Assuming Logan Sargeant has driver number 2

const Logan_Sargeant = () => {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="text-7xl text-white name-font">Logan Sargeant</h1>
      </div>
      <div className="flex flex-wrap justify-center  gap-6">
        <div className="w-full max-w-7xl">
          <CardContainer className="inter-var" teamColor={teamColors["Williams"]}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl card-font text-neutral-600 dark:text-white">
                Logan Seargent
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Williams
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/current_drivers/logsar01.avif" // Make sure to provide the imageUrl
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="logan_seargent"
                />
              </CardItem>
              <div className="card-font ">
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

export default Logan_Sargeant;
