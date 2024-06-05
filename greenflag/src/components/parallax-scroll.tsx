"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { cn } from "../../utils/cn";

export const ParallaxScroll = ({
  imagesWithText,
  className,
}: {
  imagesWithText: { src: string; text: string; link: string }[]; // Added link property
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(imagesWithText.length / 3);

  const firstPart = imagesWithText.slice(0, third);
  const secondPart = imagesWithText.slice(third, 2 * third);
  const thirdPart = imagesWithText.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
              className="relative group"
            >
              <Link href={el.link} passHref>
                <div>
                <div>
                  <Image
                    src={el.src}
                    className="h-full w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="1000"
                    width="1000"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center text-white text-lg font-semibold rounded-lg">
                    {el.text}
                  </div>
                </div>
                </div>
               
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-1" + idx}
              className="relative group"
            >
              <Link href={el.link} passHref>
                <div>
                <div>
                  <Image
                    src={el.src}
                    className="h-full w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="1000"
                    width="1000"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center text-white text-lg font-semibold rounded-lg">
                    {el.text}
                  </div>
                  </div>
                </div>
              
                
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-2" + idx}
              className="relative group"
            >
              <Link href={el.link} passHref>
                <div>
                <div>
                  <Image
                    src={el.src}
                    className="h-full w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="1000"
                    width="1000"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center text-white text-lg font-semibold rounded-lg">
                    {el.text}
                  </div>
                </div>
                </div>
        
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
