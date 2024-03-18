import { TimelineProps } from "@/types/types";
import { Timeline } from "antd";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Timeline.module.scss";

const TimelineComponent = ({ timeline }: any) => {
    return (
        <div className={`${styles.timeline} ${styles.base_blurry_background}`}>
            <Timeline>
                {timeline.length ? (
                    [...timeline].reverse().map((item: TimelineProps) => (
                        <Timeline.Item key={item._id}>
                            <div className={styles.timeline__item}>
                                <span>{item.year}</span>
                                <p>{item.description}</p>
                            </div>
                        </Timeline.Item>
                    ))
                ) : (
                    <p>No Timeline Data</p>
                )}
            </Timeline>
        </div>
    );
};

export default TimelineComponent;
