import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ProjectsData } from "../../constants/constants";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">Projects</h3>
      <motion.div
        className="w-full max-w-4xl"
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
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {ProjectsData.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className="mySwiper__container">
                <div className="mySwiper__wrapper">
                  <div className="mySwiper__section">
                    <p className="text-lg font-bold text-gray-300 md:text-xl">{project.title}</p>
                    <div className="flex gap-4 my-4">
                      {project.tags?.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mySwiper__section">
                    <div className="flex items-center flex-1 my-auto">
                      <div className="flex flex-col gap-6 mx-10 text-justify md:mr-6 md:mx-0">
                        <p className="text-sm text-gray-300 md:text-base">{project.description}</p>
                        <div className="flex flex-row gap-4 text-sm text-center md:text-base xs:items-center xs:flex-col justify-evenly">
                          {project.source !== "" && (
                            <a
                              className="mainButton"
                              href={project.source}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Source Code
                            </a>
                          )}
                          <a
                            className="mainButton"
                            href={project.visit}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 w-48 h-48 my-4 border border-teal-400 rounded-lg md:w-80 md:h-80">
                      <Image
                        src={project.image}
                        width={1000}
                        height={1000}
                        alt={project.title}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div className="arrowDown">
        <Link to="testimonials">
          <BsChevronDoubleDown />
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
