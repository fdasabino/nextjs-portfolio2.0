import { TestimonialProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.scss";

const TestimonialComponent = ({ testimonials }: any) => {
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
                    {testimonials
                        ? [...testimonials].reverse().map((testimonial: TestimonialProps) => (
                              <SwiperSlide key={testimonial._id}>
                                  <div className={styles.testimonials__swiper_top}>
                                      <div className={styles.testimonials__swiper_top_left}>
                                          <h2>{testimonial.name}</h2>
                                      </div>
                                      <div className={styles.testimonials__swiper_top_right}>
                                          <p>{testimonial.position}</p>
                                          <p>{testimonial.workplace}</p>
                                      </div>
                                  </div>

                                  <div className={styles.testimonials__swiper_bottom}>
                                      <div className={styles.testimonials__swiper_bottom_img}>
                                          <Image
                                              src={testimonial.image}
                                              width={600}
                                              height={600}
                                              alt={testimonial.name}
                                          />
                                      </div>
                                      <div className={styles.testimonials__swiper_bottom_text}>
                                          <p>{testimonial.description}</p>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))
                        : "No Testimonials"}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialComponent;
