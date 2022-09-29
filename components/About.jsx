import React from "react";
import { motion } from "framer-motion";
import { AboutData, TimeLineData } from "../constants/constants";
import { Timeline } from "antd";

const About = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <h3 className="mt-20 uppercase tracking-[10px] text-gray-400 text-lg md:text-2xl lg:text-3xl">
        About
      </h3>
      <div className="flex flex-col items-center justify-evenly text-center overflow-hidden">
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
            className="text-center flex flex-col md:text-left lg:flex-row max-w-5xl justify-center gap-5 mx-auto items-center z-20"
            key={item.id}
          >
            <motion.img
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="p-1 w-36 h-36 rounded-full object-cover border-solid border-2 border-teal-500 md:w-56 md:h-56 lg:w-65 lg:h-65 lg:rounded-lg"
              src={item.image}
            />
            <motion.div
              className="shadow-2xl p-3"
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <p className="flex flex-wrap text-justify leading-7 text-sm md:text-md md:mb-3">
                {item.text}
              </p>
              <br />
              <div>
                <Timeline>
                  {TimeLineData?.map((item, index) => (
                    <Timeline.Item key={index} className="text-left text-lg font-bold">
                      <span>{item.year}</span> {item.text}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;