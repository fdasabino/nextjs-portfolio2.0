import { ProjectProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import {
    SiAngular,
    SiBootstrap,
    SiCss3,
    SiDocker,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiSass,
    SiSelenium,
    SiTailwindcss,
} from "react-icons/si";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Projects.module.scss";

const ProjectComponent = ({ projects }: any) => {
    return (
        <div className={styles.projects}>
            <div className={`${styles.projects__data} ${styles.base_blurry_background}`}>
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    grabCursor={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.projects__swiper}>
                    {projects
                        ? projects.map((project: ProjectProps) => (
                              <SwiperSlide key={project._id}>
                                  <div className={styles.projects__swiper_top}>
                                      <h2>{project.name}</h2>
                                      <div className={styles.projects__swiper_top_icons}>
                                          {project.techTags?.map((icon, index) => {
                                              return <span key={index}>{selectIcon(icon)}</span>;
                                          })}
                                      </div>
                                  </div>
                                  <div className={styles.projects__swiper_bottom}>
                                      <div className={styles.projects__swiper_bottom_items}>
                                          <div className={styles.projects__swiper_bottom__links}>
                                              {project.repository !== "" && (
                                                  <a
                                                      href={project.repository}
                                                      target="_blank"
                                                      rel="noreferrer">
                                                      Source Code
                                                  </a>
                                              )}
                                              <a
                                                  href={project.live_url}
                                                  target="_blank"
                                                  rel="noreferrer">
                                                  Live Project
                                              </a>
                                          </div>
                                          <div
                                              className={
                                                  styles.projects__swiper_bottom__description
                                              }>
                                              <p>{project.description}</p>
                                          </div>
                                      </div>
                                      <div className={styles.projects__swiper_bottom_img}>
                                          <Image
                                              src={project.image}
                                              width={600}
                                              height={600}
                                              alt={project.name}
                                          />
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))
                        : "No Projects"}
                </Swiper>
            </div>
        </div>
    );
};

const selectIcon = (icon: string) => {
    switch (icon) {
        case "Angular":
            return (
                <SiAngular
                    size={32}
                    color="#fff"
                />
            );
        case "Bootstrap":
            return (
                <SiBootstrap
                    size={32}
                    color="#fff"
                />
            );
        case "CSS":
            return (
                <SiCss3
                    size={32}
                    color="#fff"
                />
            );
        case "Docker":
            return (
                <SiDocker
                    size={32}
                    color="#fff"
                />
            );
        case "Express":
            return (
                <SiExpress
                    size={32}
                    color="#fff"
                />
            );
        case "HTML":
            return (
                <SiHtml5
                    size={32}
                    color="#fff"
                />
            );
        case "JavaScript":
            return (
                <SiJavascript
                    size={32}
                    color="#fff"
                />
            );
        case "MongoDB":
            return (
                <SiMongodb
                    size={32}
                    color="#fff"
                />
            );
        case "Mysql":
            return (
                <SiMysql
                    size={32}
                    color="#fff"
                />
            );
        case "NextJs":
            return (
                <SiNextdotjs
                    size={32}
                    color="#fff"
                />
            );
        case "React":
            return (
                <SiReact
                    size={32}
                    color="#fff"
                />
            );
        case "NodeJS":
            return (
                <SiNodedotjs
                    size={32}
                    color="#fff"
                />
            );
        case "Redux":
            return (
                <SiRedux
                    size={32}
                    color="#fff"
                />
            );
        case "Redux":
            return (
                <SiRedux
                    size={32}
                    color="#fff"
                />
            );
        case "SASS":
            return (
                <SiSass
                    size={32}
                    color="#fff"
                />
            );
        case "Selenium":
            return (
                <SiSelenium
                    size={32}
                    color="#fff"
                />
            );
        case "TailwindCSS":
            return (
                <SiTailwindcss
                    size={32}
                    color="#fff"
                />
            );
    }
};

export default ProjectComponent;
