import { AboutData } from "@/constants/constants";
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
                        <div className={styles.about__data_about}>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutComponent;
