import React from "react";
import { motion } from "framer-motion";
import { AboutData } from "../constants/constants";

const About = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <h3 className="mt-20 uppercase tracking-[10px] text-gray-400 text-lg md:text-2xl lg:text-3xl">
        About
      </h3>
      <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {AboutData.map((item) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center gap-5 mx-auto items-center z-20"
            key={item.id}
          >
            <motion.img
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="mb-1 flex flex-shrink-0 w-56 h-56 rounded-full object-cover border-solid border-2 border-teal-500 p-1"
              src={item.image}
            />
            <div className="space-y-8 px-0 md:px-10">
              <p className="text-base text-justify flex-shrink-0">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
