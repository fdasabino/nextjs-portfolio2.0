import { ProjectProps } from "@/types/types";
import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
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
import styles from "./Card.module.scss";

const Card = ({ project }: { project: ProjectProps }) => {
    return (
        <div className={`${styles.card} ${styles.base_blurry_background}`}>
            <div className={styles.card__header}>
                <h2>{project.name}</h2>
                <div className={styles.card__header__icons}>
                    {project.techTags?.map((icon: string, index: number) => {
                        return <span key={index}>{selectIcon(icon)}</span>;
                    })}
                </div>
            </div>
            <div className={styles.card__body}>
                <div className={styles.card__body__item}>
                    <Image
                        width={500}
                        height={500}
                        src={project.image}
                        alt={project.name}
                    />
                </div>
                <div className={styles.card__body__item}>
                    <Tooltip
                        placement="top"
                        title={project.description}>
                        <p>Hover for description</p>
                    </Tooltip>
                </div>
                <div className={styles.card__body__item}>
                    <Tooltip
                        placement="top"
                        title={project.repository}>
                        <a
                            href={project.repository}
                            target="_blank"
                            rel="noreferrer">
                            Source
                        </a>
                    </Tooltip>

                    <Tooltip
                        placement="top"
                        title={project.live_url}>
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noreferrer">
                            Live Project
                        </a>
                    </Tooltip>
                </div>
            </div>

            <div className={styles.card__ctas}>
                <div className={styles.card__ctas__item}>
                    <Tooltip
                        placement="top"
                        title="Delete item">
                        <span>
                            <FaTrashAlt />
                        </span>
                    </Tooltip>
                </div>

                <div className={styles.card__ctas__item}>
                    <Tooltip
                        placement="top"
                        title="Edit item">
                        <span>
                            <FaRegEdit />
                        </span>
                    </Tooltip>
                </div>
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

export default Card;
