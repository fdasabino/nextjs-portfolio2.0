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
      <div className="absolute border border-slate-800 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-teal-800 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-green-800 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-red-700 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-blue-700 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-orange-700 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-pink-700 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
    </motion.div>
  );
}
