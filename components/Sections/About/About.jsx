import { Timeline } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { BsChatText, BsChevronDoubleDown } from "react-icons/bs";
import { AboutData, TimeLineData } from "../../../constants/constants";
import { scrollTo } from "../../../utils/globalFunctions";
import Button from "../../Layout/Button/Button";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 0.1,
        }}
      >
        <div className={styles.about__data}>
          {AboutData.map((item) => (
            <div className={styles.about__data_item} key={item.id}>
              <div className={styles.about__data_img}>
                <motion.img src={item.image} />
              </div>
              <div className={styles.about__data_timeline}>
                <p>{item.text}</p>
                <br />
                <div className={styles.item}>
                  <Timeline>
                    {TimeLineData?.map((item, index) => (
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
      </motion.div>
      <Button onClick={() => scrollTo("projects")}>
        <BsChevronDoubleDown />
      </Button>
    </div>
  );
};

export default About;
