import { AboutData, TimeLineData } from "@/constants/constants";
import { Timeline } from "antd";
import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.scss";

const AboutComponent = () => {
    return (
        <div className={styles.about}>
            <div className={`${styles.about__data} ${styles.base_blurry_background}`}>
                {AboutData.map((item) => (
                    <div
                        className={styles.about__data_item}
                        key={item.id}>
                        <div className={styles.about__data_img}>
                            <motion.img src={item.image} />
                        </div>
                        <div className={styles.about__data_timeline}>
                            <p>{item.text}</p>
                            <br />
                            <div className={styles.item}>
                                <Timeline>
                                    {TimeLineData &&
                                        [...TimeLineData].reverse().map((item, index) => (
                                            <Timeline.Item key={index}>
                                                <p>
                                                    <span>{item.year}</span> {item.text}
                                                </p>
                                            </Timeline.Item>
                                        ))}
                                </Timeline>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutComponent;
