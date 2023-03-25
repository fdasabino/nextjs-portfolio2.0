import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { ProjectsData } from "../constants/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center ">
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
        className="flex items-center justify-center overflow-hidden text-center"
      >
        <Carousel
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl"
          infiniteLoop={true}
          useKeyboardArrows
          transitionTime={1000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          emulateTouch={true}
          showArrows={true}
          autoPlay={false}
        >
          {ProjectsData?.map((item) => (
            <div key={item.id} className="max-w-[100%] h-[700px] p-3">
              <div className="relative w-48 h-48 mx-auto my-3 bg-black border-2 border-teal-500 border-solid rounded-lg md:w-72 md:h-72 lg:w-80 lg:h-80">
                <Image
                  layout="fill"
                  alt={item.title}
                  src={item.image}
                  className="object-contain rounded-lg"
                />
              </div>

              <div className="p-1">
                <h3 className="pb-3 text-lg tracking-wide text-gray-400 uppercase md:text-1xl">
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

              <div className="flex flex-row items-center justify-center gap-10 mt-2">
                {item.source !== "" && (
                  <a href={item.source} target="_blank" rel="noreferrer">
                    <button className="mainButton">Source Code</button>
                  </a>
                )}

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
