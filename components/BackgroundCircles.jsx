import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20", "20%", "50%", "80", "20%"],
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#4d4c4c33] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#4d4c4c33] rounded-full h-[400px] w-[400px] mt-52" />
      <div className="absolute border border-[#14a08442] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#1772605d] rounded-full h-[180px] w-[180px] mt-52 animate-ping" />
      <div className="absolute border border-[#14a0843d] rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
    </motion.div>
  );
}
