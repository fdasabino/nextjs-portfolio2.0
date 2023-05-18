import React from "react";
import { motion } from "framer-motion";
import { AboutData, TimeLineData } from "../../constants/constants";
import { Timeline } from "antd";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-scroll";
import Atropos from "atropos/react";

const About = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">About</h3>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          rotateX: 180,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
        }}
        transition={{
          duration: 1,
        }}
        className=""
      >
        <Atropos
          activeOffset={50}
          alwaysActive={true}
          duration={300}
          rotate={true}
          rotateTouch={false}
          scale={1.1}
          shadow={false}
          highlight={true}
          className="atropos"
        >
          <div className="mySwiper__container">
            <div className="mySwiper__wrapper ">
              <div className="flex flex-col items-center overflow-hidden text-center justify-evenly">
                {AboutData.map((item) => (
                  <div
                    className="z-20 flex flex-col items-center justify-center max-w-5xl gap-5 mx-auto text-center md:text-left lg:flex-row"
                    key={item.id}
                  >
                    <motion.img
                      className="object-cover border-2 border-teal-500 border-solid rounded-full w-36 h-36 md:w-56 md:h-56 lg:w-65 lg:h-65 lg:rounded-lg"
                      src={item.image}
                    />
                    <div className="p-3 shadow-2xl">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Atropos>
      </motion.div>
      <motion.div className="mt-4 arrowDown">
        <Link to="projects">
          <BsChevronDoubleDown />
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
