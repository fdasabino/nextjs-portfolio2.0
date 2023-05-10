import React from "react";
import { motion } from "framer-motion";
import { AboutData, TimeLineData } from "../constants/constants";
import { Timeline } from "antd";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">About</h3>
      <div className="flex flex-col items-center overflow-hidden text-center justify-evenly">
        {AboutData.map((item) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="z-20 flex flex-col items-center justify-center max-w-5xl gap-5 mx-auto text-center md:text-left lg:flex-row"
            key={item.id}
          >
            <motion.img
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
              }}
              className="object-cover border-2 border-teal-500 border-solid rounded-full w-36 h-36 md:w-56 md:h-56 lg:w-65 lg:h-65 lg:rounded-lg"
              src={item.image}
            />
            <motion.div
              className="p-3 shadow-2xl"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <p className="aboutText">{item.text}</p>
              <br />
              <div>
                <Timeline>
                  {TimeLineData?.map((item, index) => (
                    <Timeline.Item key={index} className="timelineText">
                      <span>{item.year}</span> {item.text}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </div>
            </motion.div>
          </motion.div>
        ))}
        <motion.div className="arrowDown">
          <Link to="projects">
            <BsChevronDoubleDown />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
