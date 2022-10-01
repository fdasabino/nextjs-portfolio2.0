import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { ProjectsData } from "../constants/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">Projects</h3>
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
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl"
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
              <div className="relative h-40 w-40 md:w-72 md:h-72 lg:w-80 lg:h-80  mx-auto p-1 my-3">
                <Image
                  layout="fill"
                  alt={item.title}
                  src={item.image}
                  className="object-scale-down p-6"
                />
              </div>

              <div className="p-1">
                <h3 className="uppercase tracking-wide text-gray-400 text-lg md:text-1xl pb-3">
                  {item.title}
                </h3>
              </div>

              <div className="px-5">
                <article className="carouselText">{item.description}</article>
              </div>

              <div className="my-7">
                <ul className="flex items-center justify-center gap-6 p-3">
                  {item.tags.map((tag, i) => (
                    <li key={i} className="carouselText">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center items-center flex-row gap-10 mt-2">
                <a href={item.source} target="_blank" rel="noreferrer">
                  <button className="mainButton">Source Code</button>
                </a>
                <a href={item.visit} target="_blank" rel="noreferrer">
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
