import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { ProjectsData } from "../constants/constants";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">Projects</h3>
      <div className="w-full max-w-4xl">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ProjectsData.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className="mySwiper__container">
                <div className="mySwiper__wrapper">
                  <div className="mySwiper__section">
                    <p className="text-lg font-bold md:text-xl text-navy-700">{project.title}</p>
                    <div className="flex gap-4 my-4">
                      {project.tags?.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mySwiper__section">
                    <div className="flex items-center flex-1 my-auto">
                      <div className="flex flex-col gap-6 mx-10 text-justify md:mr-6 md:mx-0">
                        <p className="text-sm md:text-base">{project.description}</p>
                        <div className="flex justify-center gap-4">
                          {project.source !== "" && (
                            <a href={project.source} target="_blank" rel="noreferrer">
                              Source Code
                            </a>
                          )}
                          <a href={project.visit} target="_blank" rel="noreferrer">
                            Live Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 max-w-sm my-4">
                      <Image
                        src={project.image}
                        width={1000}
                        height={1000}
                        className="object-cover rounded-xl"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
