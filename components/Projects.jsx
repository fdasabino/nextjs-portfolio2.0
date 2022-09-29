import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { Card } from "antd";
import { ProjectsData } from "../constants/constants";

const Projects = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <h3 className="mt-20 uppercase tracking-[10px] text-gray-400 text-lg md:text-2xl lg:text-3xl">
        Projects
      </h3>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex items-center justify-center text-center overflow-hidden"
      >
        <Carousel
          className="max-w-xs md:max-w-md lg:max-w-2xl"
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          emulateTouch={true}
          showArrows={true}
          autoPlay={false}
        >
          {ProjectsData?.map((item) => (
            <div key={item.id} className="max-w-[100%] h-[700px] p-3">
              <img
                className="max-w-[70%] object-scale-down p-6"
                alt={item.title}
                src={item.image}
              />

              <div className="p-1">
                <h3 className="uppercase tracking-wide text-gray-400 text-lg md:text-1xl pb-3">
                  {item.title}
                </h3>
              </div>

              <div className="px-5">
                <article className="tracking-wide text-sm pb-3 leading-6">
                  {item.description}
                </article>
              </div>

              <div className="my-7">
                <ul className="flex items-center justify-center gap-6 p-3">
                  {item.tags.map((tag, i) => (
                    <li key={i} className="list-disc border-b-2 border-teal-600">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center items-center flex-row gap-10 mt-2">
                <a href={item.source} target="_blank">
                  <button className="mainButton">Source Code</button>
                </a>
                <a href={item.visit} target="_blank">
                  <button className="mainButton">Live Project</button>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Projects;