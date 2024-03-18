import { AboutProps } from "@/types/types";
import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.scss";

const AboutComponent = ({ abouts }: any) => {
    return (
        <div className={styles.about}>
            <div className={`${styles.about__data} ${styles.base_blurry_background}`}>
                {abouts
                    ? abouts.map((item: AboutProps) => (
                          <div
                              className={styles.about__data_item}
                              key={item._id}>
                              <div className={styles.about__data_img}>
                                  <motion.img src={item.image} />
                              </div>
                              <div className={styles.about__data_about}>
                                  <p>{item.description}</p>
                              </div>
                          </div>
                      ))
                    : "No Abouts"}
            </div>
        </div>
    );
};

export default AboutComponent;
