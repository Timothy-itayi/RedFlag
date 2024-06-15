"use client";
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 150]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 0]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const imageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-590, 100]),
    springConfig
  );

  // Create rows dynamically
  const rows = [];
  for (let i = 0; i < products.length; i += 10) {
    rows.push(products.slice(i, i + 10));
  }

  return (
    <div
      ref={ref}
      className="h-[200vh]  py-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
        }}
        className=""
      >
        {rows.map((row, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap mb-20 space-x-2"
            style={{
              opacity: imageOpacity,
            }}
          >
            {row.map((product) => (
              <ProductCard
                product={product}
                translate={index % 2 === 0 ? translateX : translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-40 px-4 w-full left-0 top-0">
    <h1 className="text-2xl md:text-5xl card-font dark:text-white">
    Formula 1 Heritage
    </h1>
    <h2 className="text-2xl md:text-4xl header-font dark:text-white mt-4">
      Relive the Glory, Embrace the Legends
    </h2>
    <p className="max-w-2xl header-font text-base md:text-xl mt-8 dark:text-white">
      Dive into the exhilarating world of Formula 1 with Formula 1 Heritage, your
      ultimate hub for all things F1. Explore the latest Standings, Champions and Iconic Cars all in one place.
      Whether you are a die-hard fan or new to the sport, Formula 1 Heritage brings you
      closer to the thrill of Formula 1 racing.
    </p>
  </div>
  
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[20rem] name-font relative flex-shrink-0"
    >
      <Link href={product.link}>
        <div className="block group-hover/product:shadow-2xl">
          <Image
            src={product.thumbnail}
            height="500"
            width="500"
            className="object-fit object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
