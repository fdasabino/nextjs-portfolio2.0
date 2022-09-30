import React from "react";
import { motion } from "framer-motion";
import { Progress, Tooltip } from "antd";
import { TechArray } from "../constants/constants";

const Technologies = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">Technologies</h3>
      <h5 className="sectionSubTitle">
        {" "}
        Here are some languages and frameworks I have used in the past to create some awesome
        projects.
      </h5>
      <small className="sectionDisclaimer">
        The levels represented are not necessarily a skill level, but how confident I am working
        with it.
      </small>
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
        className="mt-40 flex flex-wrap gap-10 items-center justify-center text-center overflow-hidden"
      >
        {TechArray?.map((item) => (
          <div key={item.id} className="relative h-32 w-32">
            <div className="absolute inset-0 top-[32px] left-[32px] translate-2/4 ">
              {item.icon}
            </div>
            <Tooltip title={item.label}>
              <Progress
                type="circle"
                percent={item.skill}
                showInfo={false}
                strokeColor={item.skill < 50 ? "#f57683" : "#14B7A5"}
              />
            </Tooltip>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
