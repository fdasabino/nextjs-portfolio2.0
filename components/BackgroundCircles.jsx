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
      <div className="absolute border border-[#48837744] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#4883774d] rounded-full h-[400px] w-[400px] mt-52" />
      <div className="absolute border border-[#4883775e] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#48837780] rounded-full h-[180px] w-[180px] mt-52 animate-ping" />
      <div className="absolute border border-[#48837780] rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
    </motion.div>
  );
}
