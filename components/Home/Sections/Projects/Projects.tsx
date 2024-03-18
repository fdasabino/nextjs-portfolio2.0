import { ProjectProps } from "@/types/types";
import Image from "next/image";
import React from "react";
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
                    {projects.map((project: ProjectProps) => (
                        <SwiperSlide key={project._id}>
                            <div className={styles.projects__swiper_top}>
                                <h2>{project.name}</h2>
                                <div className={styles.projects__swiper_top_icons}>
                                    {project.techTags?.map((icon, index) => {
                                        return <span key={index}>{icon}</span>;
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
                                    <div className={styles.projects__swiper_bottom__description}>
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
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProjectComponent;
