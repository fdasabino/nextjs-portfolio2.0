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
      <div className="absolute border border-cyan-700 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-teal-700 rounded-full h-[140px] w-[140px] mt-52 animate-ping" />
      <div className="absolute border border-cyan-700 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-green-700 rounded-full h-[130px] w-[130px] mt-52 animate-ping" />
      <div className="absolute border border-red-800 rounded-full h-[120px] w-[120px] mt-52 animate-ping" />
      <div className="absolute border border-cyan-700 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-blue-800 rounded-full h-[110px] w-[110px] mt-52 animate-ping" />
      <div className="absolute border border-orange-700 rounded-full h-[100px] w-[100px] mt-52 animate-ping" />
      <div className="absolute border border-pink-700 rounded-full h-[90px] w-[90px] mt-52 animate-ping" />
    </motion.div>
  );
}
