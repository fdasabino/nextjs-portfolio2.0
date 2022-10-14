import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 4,
      }}
      animate={{
        scale: [3, 2, 1],
        opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 1],
        borderRadius: ["20", "20%", "50%", "80", "20%"],
      }}
      transition={{
        duration: 1.2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#48837780] rounded-full h-[190px] w-[190px] mt-52 animate-ping" />
      <div className="absolute border border-[#48837780] rounded-full md:h-[210px] md:w-[210px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48837780] rounded-full md:h-[240px] md:w-[240px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48837780] rounded-full md:h-[270px] md:w-[270px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48837744] rounded-full md:h-[300px] md:w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48837744] rounded-full md:h-[330px] md:w-[330px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48837744] rounded-full md:h-[360px] md:w-[360px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48837744] rounded-full md:h-[390px] md:w-[390px] mt-52 animate-pulse" />
      <div className="absolute border border-[#4883775e] rounded-full md:h-[420px] md:w-[420px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48837744] rounded-full md:h-[450px] md:w-[450px] mt-52 animate-pulse" />
    </motion.div>
  );
}
