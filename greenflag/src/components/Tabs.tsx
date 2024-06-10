"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

// Mapping Formula 1 team colors
export const teamColors: { [key: string]: string } = {
  Mercedes: "#00D2BE",
  Ferrari: "#DC0000",
  RedBull: "#1E41FF",
  McLaren: "#FF8700",
  Alpine: "#0090FF",
  RB: "#4E7C9B",
  AstonMartin: "#006F62",
  Williams: "#005AFF",
  Stake: "#00FF00",
  Haas: "#FFFFFF",
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, tabs.length);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
    
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px]    relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-1 rounded-full", tabClassName)}
            style={{
              transformStyle: "flat",
              
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.5, duration: 0.3 }}
                className={cn(
                  "absolute inset-0 px-8 py-0.5  border-2 border-black dark:border-black uppercase bg-gray-399 text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] rounded",
                  activeTabClassName
                )}
               
              />
            )}
            <span className="relative block text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-10" , contentClassName)}
      />
      
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - (idx / tabs.length) * 0.1,
            top: hovering ? idx * -30 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.6 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
