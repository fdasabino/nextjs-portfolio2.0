import { TimeLineData } from "@/constants/constants";
import { Timeline } from "antd";
import React from "react";
import styles from "./Timeline.module.scss";

const TimelineComponent = () => {
    return (
        <div className={`${styles.timeline} ${styles.base_blurry_background}`}>
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
    );
};

export default TimelineComponent;
