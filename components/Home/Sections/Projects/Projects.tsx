import { ProjectsData } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Projects.module.scss";

const Projects = () => {
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
                    {ProjectsData.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className={styles.projects__swiper_top}>
                                <h2>{project.title}</h2>
                                <div className={styles.projects__swiper_top_icons}>
                                    {project.tags?.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.projects__swiper_bottom}>
                                <div className={styles.projects__swiper_bottom_items}>
                                    <div className={styles.projects__swiper_bottom__links}>
                                        {project.source !== "" && (
                                            <a
                                                href={project.source}
                                                target="_blank"
                                                rel="noreferrer">
                                                Source Code
                                            </a>
                                        )}
                                        <a
                                            href={project.visit}
                                            target="_blank"
                                            rel="noreferrer">
                                            Live Project
                                        </a>
                                    </div>
                                    <div className={styles.projects__swiper_bottom__description}>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                                <div className={styles.projects__swiper_bottom_img}>
                                    <Image
                                        src={project.image}
                                        width={600}
                                        height={600}
                                        alt={project.title}
                                    />
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
