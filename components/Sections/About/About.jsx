import { Timeline } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-scroll";
import { AboutData, TimeLineData } from "../../../constants/constants";

const About = () => {
  return (
    <div className="">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">About</h3>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 0.1,
        }}
      >
        <div className="">
          <div className="">
            <div className="">
              {AboutData.map((item) => (
                <div className="" key={item.id}>
                  <motion.img className="" src={item.image} />
                  <div className="">
                    <p className="">{item.text}</p>
                    <br />
                    <div>
                      <Timeline>
                        {TimeLineData?.map((item, index) => (
                          <Timeline.Item key={index} className="">
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
      </motion.div>
      <motion.div className="">
        <Link to="projects">
          <BsChevronDoubleDown />
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
