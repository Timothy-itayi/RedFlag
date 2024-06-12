import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const teamColors = [
  { team: "Mercedes-AMG PETRONAS Formula One Team", color: "#00D2BE" },
  { team: "Scuderia Ferrari", color: "#DC0000" },
  { team: "Oracle Red Bull Racing", color: "#1E41FF" },
  { team: "McLaren Formula 1 Team", color: "#FF8700" },
  { team: "BWT Alpine F1 Team", color: "#0090FF" },
  { team: "Visa Cash App RB Formula One Team", color: "#4E7C9B" },
  { team: "Aston Martin Aramco Formula One Team", color: "#006F62" },
  { team: "Stake F1 Team Kick Sauber", color: "#00FF00" },
  { team: "MoneyGram Haas F1 Team", color: "#FFFFFF" },
  { team: "Williams Racing", color: "#005AFF" },
];

const getTeamColor = (teamName: string): string => {
  const teamColor = teamColors.find((team) => team.team === teamName);
  return teamColor ? teamColor.color : "black"; // Default to black if no color is found
};

interface DriverInfo {
  title: string;
  link: string;
  image?: string;
  team: string;
  points: number | string;
  position: number | string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: DriverInfo[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl"
                style={{ backgroundColor: getTeamColor(item.team) }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <DriverInfo>
              <InfoItem label="Team" value={item.team} />
              <InfoItem label="Points" value={item.points} />
              <InfoItem label="Position" value={item.position} />
            </DriverInfo>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  image,
}: {
  className?: string;
  children: React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-5 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {image && (
        <div className="relative w-full h-40 overflow-hidden rounded-t-2xl">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
      )}
      <div className="relative z-50 ">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 card-font text-sm flex-1 text-center tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const DriverInfo = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="text-zinc-400 name-font grid grid-3  text-sm mt-2">
      {children}
    </div>
  );
};

export const InfoItem = ({
    label,
    value,
  }: {
    label: string;
    value: number | string;
  }) => {
    return (
      <div className="flex justify-between mt-1">
        <span className="font-bold  text-zinc-300">{label}:</span>
        <span className="text-white  name-font flex-1 text-right">{value}</span>
      </div>
    );
  };
