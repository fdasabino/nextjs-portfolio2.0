import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../../constants/constants";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <div className={`${styles.testimonials__data} ${styles.base_blurry_background}`}>
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    grabCursor={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.testimonials__swiper}>
                    {TestimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className={styles.testimonials__swiper_top}>
                                <div className={styles.testimonials__swiper_top_left}>
                                    <h2>{testimonial.name}</h2>
                                </div>
                                <div className={styles.testimonials__swiper_top_right}>
                                    <p>{testimonial.position}</p>
                                    <p>{testimonial.company}</p>
                                </div>
                            </div>

                            <div className={styles.testimonials__swiper_bottom}>
                                <div className={styles.testimonials__swiper_bottom_img}>
                                    <Image
                                        src={testimonial.img}
                                        width={600}
                                        height={600}
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div className={styles.testimonials__swiper_bottom_text}>
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
